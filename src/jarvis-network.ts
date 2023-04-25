import {
  Minted as MintedEvent,
  Redeemed as RedeemedEvent,
} from "../generated/SynthereumPoolEurUsd/SynthereumPool"
import {
  PoolAccumulatedFees,
  GlobalFees,
  CreditLineAccumulatedFees,
  LatestPrice
} from "../generated/schema"
import {
  PositionCreated as PositionCreatedEvent
} from "../generated/CreditLineEurUsd/CreditLine"
import { SynthereumPriceFeed } from "./synthereum-price-feed"
import { BigInt, Bytes, typeConversion, Address } from "@graphprotocol/graph-ts";


const usdcDecimalConverter = BigInt.fromI64(1000000000000);
const weiScaling = BigInt.fromI64(1000000000000000000);
const globalFeesId = 'JarvisGlobalFees';
const synthereumPriceFeedAddress = Address.fromString("0x1505319B24538d05EC26794A602E316fA314876A")

const usdcCollateralContracts = [typeConversion.stringToH160("0xDb97f7a816E91a94eF936145E1b9faee14b8c25c"),
typeConversion.stringToH160("0x5e74fD5bb430c67Fb3b6c318416B3Eb025109bf4")
]
const wethCollateralContracts = [typeConversion.stringToH160("0xF2fC44feACDe3D4F098d86580063a73BD5F25EA7")]
const wbtcCollateralContracts = [typeConversion.stringToH160("0x8Fb089E07F0802569DAD80AE93963EA0F4b13450")]
const wstethCollateralContracts = [typeConversion.stringToH160("0x78DCc3160de771aE43F100e985779EA6F560b266")]


export function handleMinted(event: MintedEvent): void {
  let globalFeesEntity = GlobalFees.load(globalFeesId)
  let finalAmount = computeValue(event.address, event.params.mintvalues.feeAmount)
  poolFees(event.address, event.params.mintvalues.feeAmount, finalAmount)
  if (globalFeesEntity == null) {
    let globalFeesEntity = new GlobalFees(globalFeesId)
    globalFeesEntity.totalCreditLineFeesUsd = new BigInt(0)
    globalFeesEntity.totalPoolFeesUsd = finalAmount
    globalFeesEntity.totalJarvisFeesUsd = finalAmount
    globalFeesEntity.save()
  }
  else {
    globalFeesEntity.totalPoolFeesUsd = globalFeesEntity.totalPoolFeesUsd.plus(finalAmount)
    globalFeesEntity.totalJarvisFeesUsd = globalFeesEntity.totalJarvisFeesUsd.plus(finalAmount)
    globalFeesEntity.save()
  }
}


export function handleRedeemed(event: RedeemedEvent): void {
  let globalFeesEntity = GlobalFees.load(globalFeesId)
  let finalAmount = computeValue(event.address, event.params.redeemvalues.feeAmount)
  poolFees(event.address, event.params.redeemvalues.feeAmount, finalAmount)
  if (globalFeesEntity == null) {
    let globalFeesEntity = new GlobalFees(globalFeesId)
    globalFeesEntity.totalCreditLineFeesUsd = new BigInt(0)
    globalFeesEntity.totalPoolFeesUsd = finalAmount
    globalFeesEntity.totalJarvisFeesUsd = finalAmount
    globalFeesEntity.save()
  } else {
    globalFeesEntity.totalPoolFeesUsd = globalFeesEntity.totalPoolFeesUsd.plus(finalAmount)
    globalFeesEntity.totalJarvisFeesUsd = globalFeesEntity.totalJarvisFeesUsd.plus(finalAmount)
    globalFeesEntity.save()
  }
}

export function handlePositionCreated(event: PositionCreatedEvent): void {
  let globalFeesEntity = GlobalFees.load(globalFeesId)
  let finalAmount = computeValue(event.address, event.params.feeAmount)
  creditLineFees(event.address, event.params.feeAmount, finalAmount)
  if (globalFeesEntity == null) {
    let globalFeesEntity = new GlobalFees(globalFeesId)
    globalFeesEntity.totalPoolFeesUsd = new BigInt(0)
    globalFeesEntity.totalCreditLineFeesUsd = finalAmount
    globalFeesEntity.totalJarvisFeesUsd = finalAmount
    globalFeesEntity.save()
  } else {
    globalFeesEntity.totalCreditLineFeesUsd = globalFeesEntity.totalCreditLineFeesUsd.plus(finalAmount)
    globalFeesEntity.totalJarvisFeesUsd = globalFeesEntity.totalJarvisFeesUsd.plus(finalAmount)
    globalFeesEntity.save()
  }
}

export function poolFees(poolAddress: Bytes, feeAmountNative: BigInt, feeAmountUsd: BigInt): void {
  let poolFeesEntity = PoolAccumulatedFees.load(poolAddress)
  if (poolFeesEntity == null) {
    let poolFeesEntity = new PoolAccumulatedFees(poolAddress)
    poolFeesEntity.totalPoolFeesNative = feeAmountNative
    poolFeesEntity.totalPoolFeesUsd = feeAmountUsd
    poolFeesEntity.save()
  }
  else {
    poolFeesEntity.totalPoolFeesNative = poolFeesEntity.totalPoolFeesNative.plus(feeAmountNative)
    poolFeesEntity.totalPoolFeesUsd = poolFeesEntity.totalPoolFeesUsd.plus(feeAmountUsd)
    poolFeesEntity.save()
  }
}

export function creditLineFees(creditLineAddress: Bytes, feeAmountNative: BigInt, feeAmountUsd: BigInt): void {
  let creditLineFeesEntity = CreditLineAccumulatedFees.load(creditLineAddress)
  if (creditLineFeesEntity == null) {
    let creditLineFeesEntity = new CreditLineAccumulatedFees(creditLineAddress)
    creditLineFeesEntity.totalCreditLineFeesNative = feeAmountNative
    creditLineFeesEntity.totalCreditLineFeesUsd = feeAmountUsd
    creditLineFeesEntity.save()
  }
  else {
    creditLineFeesEntity.totalCreditLineFeesNative = creditLineFeesEntity.totalCreditLineFeesNative.plus(feeAmountNative)
    creditLineFeesEntity.totalCreditLineFeesUsd = creditLineFeesEntity.totalCreditLineFeesUsd.plus(feeAmountUsd)

    creditLineFeesEntity.save()
  }
}

export function computeValue(contractAddress: Bytes, value: BigInt): BigInt {
  if (usdcCollateralContracts.includes(contractAddress)) {
    let tempValue = value.times(usdcDecimalConverter)
    return tempValue
  } else if (wethCollateralContracts.includes(contractAddress)) {
    let priceFeed = SynthereumPriceFeed.bind(synthereumPriceFeedAddress)
    let identifier = Bytes.fromHexString("0x555344455448")
    let currentPrice = weiScaling.times(weiScaling).div(priceFeed.getLatestPrice(identifier))
    let tempValue = value.times(currentPrice).div(weiScaling)
    return tempValue
  } else if (wbtcCollateralContracts.includes(contractAddress)) {
    let priceFeed = SynthereumPriceFeed.bind(synthereumPriceFeedAddress)
    let identifier = Bytes.fromHexString("0x555344425443")
    let currentPrice = weiScaling.times(weiScaling).div(priceFeed.getLatestPrice(identifier))
    let tempValue = value.times(currentPrice).div(weiScaling)
    return tempValue
  } else if (wstethCollateralContracts.includes(contractAddress)) {
    let priceFeed = SynthereumPriceFeed.bind(synthereumPriceFeedAddress)
    let identifier = Bytes.fromHexString("0x575354455448555344")
    let currentPrice = priceFeed.getLatestPrice(identifier)
    let tempValue = value.times(currentPrice).div(weiScaling)
    return tempValue
  } else {
    return value
  }
}
