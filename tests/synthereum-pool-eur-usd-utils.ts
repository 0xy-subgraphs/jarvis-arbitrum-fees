import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ActivatedLP,
  DepositedLiquidity,
  Liquidated,
  Minted,
  NewLendingModule,
  Redeemed,
  RegisteredLp,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetFeePercentage,
  SetLiquidationReward,
  SetOvercollateralization,
  WithdrawnLiquidity
} from "../generated/SynthereumPoolEurUsd/SynthereumPoolEurUsd"

export function createActivatedLPEvent(lp: Address): ActivatedLP {
  let activatedLpEvent = changetype<ActivatedLP>(newMockEvent())

  activatedLpEvent.parameters = new Array()

  activatedLpEvent.parameters.push(
    new ethereum.EventParam("lp", ethereum.Value.fromAddress(lp))
  )

  return activatedLpEvent
}

export function createDepositedLiquidityEvent(
  lp: Address,
  collateralSent: BigInt,
  collateralDeposited: BigInt
): DepositedLiquidity {
  let depositedLiquidityEvent = changetype<DepositedLiquidity>(newMockEvent())

  depositedLiquidityEvent.parameters = new Array()

  depositedLiquidityEvent.parameters.push(
    new ethereum.EventParam("lp", ethereum.Value.fromAddress(lp))
  )
  depositedLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "collateralSent",
      ethereum.Value.fromUnsignedBigInt(collateralSent)
    )
  )
  depositedLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "collateralDeposited",
      ethereum.Value.fromUnsignedBigInt(collateralDeposited)
    )
  )

  return depositedLiquidityEvent
}

export function createLiquidatedEvent(
  user: Address,
  lp: Address,
  synthTokensInLiquidation: BigInt,
  collateralAmount: BigInt,
  bonusAmount: BigInt,
  collateralReceived: BigInt
): Liquidated {
  let liquidatedEvent = changetype<Liquidated>(newMockEvent())

  liquidatedEvent.parameters = new Array()

  liquidatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  liquidatedEvent.parameters.push(
    new ethereum.EventParam("lp", ethereum.Value.fromAddress(lp))
  )
  liquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "synthTokensInLiquidation",
      ethereum.Value.fromUnsignedBigInt(synthTokensInLiquidation)
    )
  )
  liquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralAmount",
      ethereum.Value.fromUnsignedBigInt(collateralAmount)
    )
  )
  liquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "bonusAmount",
      ethereum.Value.fromUnsignedBigInt(bonusAmount)
    )
  )
  liquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralReceived",
      ethereum.Value.fromUnsignedBigInt(collateralReceived)
    )
  )

  return liquidatedEvent
}

export function createMintedEvent(
  user: Address,
  mintvalues: ethereum.Tuple,
  recipient: Address
): Minted {
  let mintedEvent = changetype<Minted>(newMockEvent())

  mintedEvent.parameters = new Array()

  mintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("mintvalues", ethereum.Value.fromTuple(mintvalues))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return mintedEvent
}

export function createNewLendingModuleEvent(
  lendingModuleId: string
): NewLendingModule {
  let newLendingModuleEvent = changetype<NewLendingModule>(newMockEvent())

  newLendingModuleEvent.parameters = new Array()

  newLendingModuleEvent.parameters.push(
    new ethereum.EventParam(
      "lendingModuleId",
      ethereum.Value.fromString(lendingModuleId)
    )
  )

  return newLendingModuleEvent
}

export function createRedeemedEvent(
  user: Address,
  redeemvalues: ethereum.Tuple,
  recipient: Address
): Redeemed {
  let redeemedEvent = changetype<Redeemed>(newMockEvent())

  redeemedEvent.parameters = new Array()

  redeemedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam(
      "redeemvalues",
      ethereum.Value.fromTuple(redeemvalues)
    )
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return redeemedEvent
}

export function createRegisteredLpEvent(lp: Address): RegisteredLp {
  let registeredLpEvent = changetype<RegisteredLp>(newMockEvent())

  registeredLpEvent.parameters = new Array()

  registeredLpEvent.parameters.push(
    new ethereum.EventParam("lp", ethereum.Value.fromAddress(lp))
  )

  return registeredLpEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSetFeePercentageEvent(newFee: BigInt): SetFeePercentage {
  let setFeePercentageEvent = changetype<SetFeePercentage>(newMockEvent())

  setFeePercentageEvent.parameters = new Array()

  setFeePercentageEvent.parameters.push(
    new ethereum.EventParam("newFee", ethereum.Value.fromUnsignedBigInt(newFee))
  )

  return setFeePercentageEvent
}

export function createSetLiquidationRewardEvent(
  newLiquidationReward: BigInt
): SetLiquidationReward {
  let setLiquidationRewardEvent = changetype<SetLiquidationReward>(
    newMockEvent()
  )

  setLiquidationRewardEvent.parameters = new Array()

  setLiquidationRewardEvent.parameters.push(
    new ethereum.EventParam(
      "newLiquidationReward",
      ethereum.Value.fromUnsignedBigInt(newLiquidationReward)
    )
  )

  return setLiquidationRewardEvent
}

export function createSetOvercollateralizationEvent(
  lp: Address,
  overCollateralization: BigInt
): SetOvercollateralization {
  let setOvercollateralizationEvent = changetype<SetOvercollateralization>(
    newMockEvent()
  )

  setOvercollateralizationEvent.parameters = new Array()

  setOvercollateralizationEvent.parameters.push(
    new ethereum.EventParam("lp", ethereum.Value.fromAddress(lp))
  )
  setOvercollateralizationEvent.parameters.push(
    new ethereum.EventParam(
      "overCollateralization",
      ethereum.Value.fromUnsignedBigInt(overCollateralization)
    )
  )

  return setOvercollateralizationEvent
}

export function createWithdrawnLiquidityEvent(
  lp: Address,
  collateralWithdrawn: BigInt,
  collateralReceived: BigInt
): WithdrawnLiquidity {
  let withdrawnLiquidityEvent = changetype<WithdrawnLiquidity>(newMockEvent())

  withdrawnLiquidityEvent.parameters = new Array()

  withdrawnLiquidityEvent.parameters.push(
    new ethereum.EventParam("lp", ethereum.Value.fromAddress(lp))
  )
  withdrawnLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "collateralWithdrawn",
      ethereum.Value.fromUnsignedBigInt(collateralWithdrawn)
    )
  )
  withdrawnLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "collateralReceived",
      ethereum.Value.fromUnsignedBigInt(collateralReceived)
    )
  )

  return withdrawnLiquidityEvent
}
