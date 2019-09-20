import {
  LogTransferBySystem as LogTransferBySystemEvent,
  LogTransferByUser as LogTransferByUserEvent,
  LogUserAdded as LogUserAddedEvent,
  LogUserRemoved as LogUserRemovedEvent,
  LogImplChanged as LogImplChangedEvent,
  LogError as LogErrorEvent,
  LogErrorWithHintBytes32 as LogErrorWithHintBytes32Event,
  LogErrorWithHintAddress as LogErrorWithHintAddressEvent,
  LogNote as LogNoteEvent
} from "../generated/Contract/Contract"
import {
  LogTransferBySystem,
  LogTransferByUser,
  LogUserAdded,
  LogUserRemoved,
  LogImplChanged,
  LogError,
  LogErrorWithHintBytes32,
  LogErrorWithHintAddress,
  LogNote
} from "../generated/schema"

export function handleLogTransferBySystem(
  event: LogTransferBySystemEvent
): void {
  let entity = new LogTransferBySystem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.to = event.params.to
  entity.value = event.params.value
  entity.by = event.params.by
  entity.save()
}

export function handleLogTransferByUser(event: LogTransferByUserEvent): void {
  let entity = new LogTransferByUser(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.to = event.params.to
  entity.value = event.params.value
  entity.by = event.params.by
  entity.save()
}

export function handleLogUserAdded(event: LogUserAddedEvent): void {
  let entity = new LogUserAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.by = event.params.by
  entity.save()
}

export function handleLogUserRemoved(event: LogUserRemovedEvent): void {
  let entity = new LogUserRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.by = event.params.by
  entity.save()
}

export function handleLogImplChanged(event: LogImplChangedEvent): void {
  let entity = new LogImplChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newImpl = event.params.newImpl
  entity.oldImpl = event.params.oldImpl
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
