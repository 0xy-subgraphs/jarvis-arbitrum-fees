import {
  ActivatedLP as ActivatedLPEvent,
  DepositedLiquidity as DepositedLiquidityEvent,
  Liquidated as LiquidatedEvent,
  Minted as MintedEvent,
  NewLendingModule as NewLendingModuleEvent,
  Redeemed as RedeemedEvent,
  RegisteredLp as RegisteredLpEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SetFeePercentage as SetFeePercentageEvent,
  SetLiquidationReward as SetLiquidationRewardEvent,
  SetOvercollateralization as SetOvercollateralizationEvent,
  WithdrawnLiquidity as WithdrawnLiquidityEvent
} from "../generated/SynthereumPoolEurUsd/SynthereumPoolEurUsd"
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
} from "../generated/schema"

export function handleActivatedLP(event: ActivatedLPEvent): void {
  let entity = new ActivatedLP(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lp = event.params.lp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositedLiquidity(event: DepositedLiquidityEvent): void {
  let entity = new DepositedLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lp = event.params.lp
  entity.collateralSent = event.params.collateralSent
  entity.collateralDeposited = event.params.collateralDeposited

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidated(event: LiquidatedEvent): void {
  let entity = new Liquidated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.lp = event.params.lp
  entity.synthTokensInLiquidation = event.params.synthTokensInLiquidation
  entity.collateralAmount = event.params.collateralAmount
  entity.bonusAmount = event.params.bonusAmount
  entity.collateralReceived = event.params.collateralReceived

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinted(event: MintedEvent): void {
  let entity = new Minted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.mintvalues_totalCollateral = event.params.mintvalues.totalCollateral
  entity.mintvalues_exchangeAmount = event.params.mintvalues.exchangeAmount
  entity.mintvalues_feeAmount = event.params.mintvalues.feeAmount
  entity.mintvalues_numTokens = event.params.mintvalues.numTokens
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewLendingModule(event: NewLendingModuleEvent): void {
  let entity = new NewLendingModule(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingModuleId = event.params.lendingModuleId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeemed(event: RedeemedEvent): void {
  let entity = new Redeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.redeemvalues_numTokens = event.params.redeemvalues.numTokens
  entity.redeemvalues_exchangeAmount = event.params.redeemvalues.exchangeAmount
  entity.redeemvalues_feeAmount = event.params.redeemvalues.feeAmount
  entity.redeemvalues_collateralAmount =
    event.params.redeemvalues.collateralAmount
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegisteredLp(event: RegisteredLpEvent): void {
  let entity = new RegisteredLp(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lp = event.params.lp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFeePercentage(event: SetFeePercentageEvent): void {
  let entity = new SetFeePercentage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFee = event.params.newFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetLiquidationReward(
  event: SetLiquidationRewardEvent
): void {
  let entity = new SetLiquidationReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newLiquidationReward = event.params.newLiquidationReward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetOvercollateralization(
  event: SetOvercollateralizationEvent
): void {
  let entity = new SetOvercollateralization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lp = event.params.lp
  entity.overCollateralization = event.params.overCollateralization

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawnLiquidity(event: WithdrawnLiquidityEvent): void {
  let entity = new WithdrawnLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lp = event.params.lp
  entity.collateralWithdrawn = event.params.collateralWithdrawn
  entity.collateralReceived = event.params.collateralReceived

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
