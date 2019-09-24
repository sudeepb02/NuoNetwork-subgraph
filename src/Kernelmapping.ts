import {
  LogOrderCreated as LogOrderCreatedEvent,
  LogOrderRepaid as LogOrderRepaidEvent,
  LogOrderDefaulted as LogOrderDefaultedEvent,
  LogError as LogErrorEvent,
  LogErrorWithHintBytes32 as LogErrorWithHintBytes32Event,
  LogErrorWithHintAddress as LogErrorWithHintAddressEvent,
  LogSetAuthority as LogSetAuthorityEvent,
  LogSetOwner as LogSetOwnerEvent,
  LogNote as LogNoteEvent
} from "../generated/KernelContract/KernelContract"
import {
  LogOrderCreated,
  LogOrderRepaid,
  LogOrderDefaulted,
  LogError,
  LogErrorWithHintBytes32,
  LogErrorWithHintAddress,
  LogSetAuthority,
  LogSetOwner,
  LogNote,
  OrderSummary
} from "../generated/schema"

export function handleLogOrderCreated(event: LogOrderCreatedEvent): void {
  let entity = new LogOrderCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderHash = event.params.orderHash
  entity.account = event.params.account
  entity.principalToken = event.params.principalToken
  entity.collateralToken = event.params.collateralToken
  entity.byUser = event.params.byUser
  entity.principalAmount = event.params.principalAmount
  entity.collateralAmount = event.params.collateralAmount
  entity.premium = event.params.premium
  entity.expirationTimestamp = event.params.expirationTimestamp
  entity.fee = event.params.fee
  entity.save()

  let orderSummary = OrderSummary.load("1")
  if (orderSummary == null) {
    orderSummary = new OrderSummary("1")
    orderSummary.totalOrdersCreated = 0
    orderSummary.totalOrdersRepaid = 0
    orderSummary.totalOrdersDefaulted = 0
  }
  orderSummary.totalOrdersCreated = orderSummary.totalOrdersCreated + 1
  orderSummary.save()
}

export function handleLogOrderRepaid(event: LogOrderRepaidEvent): void {
  let entity = new LogOrderRepaid(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderHash = event.params.orderHash
  entity.valueRepaid = event.params.valueRepaid
  entity.save()

  let orderSummary = OrderSummary.load("1")
  if (orderSummary == null) {
    orderSummary = new OrderSummary("1")
    orderSummary.totalOrdersCreated = 0
    orderSummary.totalOrdersRepaid = 0
    orderSummary.totalOrdersDefaulted = 0
  }
  orderSummary.totalOrdersRepaid = orderSummary.totalOrdersRepaid + 1
  orderSummary.save()

}

export function handleLogOrderDefaulted(event: LogOrderDefaultedEvent): void {
  let entity = new LogOrderDefaulted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderHash = event.params.orderHash
  entity.reason = event.params.reason
  entity.save()

  let orderSummary = OrderSummary.load("1")
  if (orderSummary == null) {
    orderSummary = new OrderSummary("1")
    orderSummary.totalOrdersCreated = 0
    orderSummary.totalOrdersRepaid = 0
    orderSummary.totalOrdersDefaulted = 0
  }
  orderSummary.totalOrdersDefaulted = orderSummary.totalOrdersDefaulted + 1
  orderSummary.save()
}

export function handleLogError(event: LogErrorEvent): void {
  let entity = new LogError(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.methodSig = event.params.methodSig
  entity.errMsg = event.params.errMsg
  entity.save()
}

export function handleLogErrorWithHintBytes32(
  event: LogErrorWithHintBytes32Event
): void {
  let entity = new LogErrorWithHintBytes32(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bytes32Value = event.params.bytes32Value
  entity.methodSig = event.params.methodSig
  entity.errMsg = event.params.errMsg
  entity.save()
}

export function handleLogErrorWithHintAddress(
  event: LogErrorWithHintAddressEvent
): void {
  let entity = new LogErrorWithHintAddress(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.addressValue = event.params.addressValue
  entity.methodSig = event.params.methodSig
  entity.errMsg = event.params.errMsg
  entity.save()
}

export function handleLogSetAuthority(event: LogSetAuthorityEvent): void {
  let entity = new LogSetAuthority(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.authority = event.params.authority
  entity.save()
}

export function handleLogSetOwner(event: LogSetOwnerEvent): void {
  let entity = new LogSetOwner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.save()
}

export function handleLogNote(event: LogNoteEvent): void {
  let entity = new LogNote(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sig = event.params.sig
  entity.guy = event.params.guy
  entity.foo = event.params.foo
  entity.bar = event.params.bar
  entity.wad = event.params.wad
  entity.fax = event.params.fax
  entity.save()
}
