import {
  LogOrderCreated as LogOrderCreatedEvent,
  LogOrderCancelled as LogOrderCancelledEvent,
  LogReserveValuesUpdated as LogReserveValuesUpdatedEvent,
  LogOrderCumulativeUpdated as LogOrderCumulativeUpdatedEvent,
  LogRelease as LogReleaseEvent,
  LogLock as LogLockEvent,
  LogLockSurplus as LogLockSurplusEvent,
  LogTransferSurplus as LogTransferSurplusEvent,
  LogError as LogErrorEvent,
  LogErrorWithHintBytes32 as LogErrorWithHintBytes32Event,
  LogErrorWithHintAddress as LogErrorWithHintAddressEvent,
  LogSetAuthority as LogSetAuthorityEvent,
  LogSetOwner as LogSetOwnerEvent,
  LogNote as LogNoteEvent
} from "../generated/ReserveContract/ReserveContract"
import {
  LogOrderCreated,
  LogOrderCancelled,
  LogReserveValuesUpdated,
  LogOrderCumulativeUpdated,
  LogRelease,
  LogLock,
  LogLockSurplus,
  LogTransferSurplus,
  LogError,
  LogErrorWithHintBytes32,
  LogErrorWithHintAddress,
  LogSetAuthority,
  LogSetOwner,
  LogNote
} from "../generated/schema"

export function handleLogOrderCreated(event: LogOrderCreatedEvent): void {
  let entity = new LogOrderCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderHash = event.params.orderHash
  entity.account = event.params.account
  entity.token = event.params.token
  entity.byUser = event.params.byUser
  entity.value = event.params.value
  entity.expirationTimestamp = event.params.expirationTimestamp
  entity.save()
}

export function handleLogOrderCancelled(event: LogOrderCancelledEvent): void {
  let entity = new LogOrderCancelled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderHash = event.params.orderHash
  entity.by = event.params.by
  entity.save()
}

export function handleLogReserveValuesUpdated(
  event: LogReserveValuesUpdatedEvent
): void {
  let entity = new LogReserveValuesUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.updatedTill = event.params.updatedTill
  entity.reserve = event.params.reserve
  entity.profit = event.params.profit
  entity.loss = event.params.loss
  entity.save()
}

export function handleLogOrderCumulativeUpdated(
  event: LogOrderCumulativeUpdatedEvent
): void {
  let entity = new LogOrderCumulativeUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderHash = event.params.orderHash
  entity.updatedTill = event.params.updatedTill
  entity.value = event.params.value
  entity.save()
}

export function handleLogRelease(event: LogReleaseEvent): void {
  let entity = new LogRelease(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.to = event.params.to
  entity.value = event.params.value
  entity.by = event.params.by
  entity.save()
}

export function handleLogLock(event: LogLockEvent): void {
  let entity = new LogLock(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.from = event.params.from
  entity.value = event.params.value
  entity.profit = event.params.profit
  entity.loss = event.params.loss
  entity.by = event.params.by
  entity.save()
}

export function handleLogLockSurplus(event: LogLockSurplusEvent): void {
  let entity = new LogLockSurplus(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.forToken = event.params.forToken
  entity.token = event.params.token
  entity.from = event.params.from
  entity.value = event.params.value
  entity.save()
}

export function handleLogTransferSurplus(event: LogTransferSurplusEvent): void {
  let entity = new LogTransferSurplus(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.forToken = event.params.forToken
  entity.token = event.params.token
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
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
