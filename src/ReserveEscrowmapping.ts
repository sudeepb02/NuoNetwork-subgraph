import {
  LogTransfer as LogTransferEvent,
  LogTransferFromAccount as LogTransferFromAccountEvent,
  LogSetAuthority as LogSetAuthorityEvent,
  LogSetOwner as LogSetOwnerEvent,
  LogNote as LogNoteEvent
} from "../generated/ReserveEscrowContract/ReserveEscrowContract"
import {
  LogTransfer,
  LogTransferFromAccount,
  LogSetAuthority,
  LogSetOwner,
  LogNote
} from "../generated/schema"

export function handleLogTransfer(event: LogTransferEvent): void {
  let entity = new LogTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleLogTransferFromAccount(
  event: LogTransferFromAccountEvent
): void {
  let entity = new LogTransferFromAccount(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.token = event.params.token
  entity.to = event.params.to
  entity.value = event.params.value
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
