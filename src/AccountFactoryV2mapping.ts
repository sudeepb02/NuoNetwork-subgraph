import {
  LogAccountCreated as LogAccountCreatedEvent,
  LogSetAuthority as LogSetAuthorityEvent,
  LogSetOwner as LogSetOwnerEvent,
  LogNote as LogNoteEvent
} from "../generated/AccountFactoryV2Contract/AccountFactoryV2Contract"
import {
  LogAccountCreated,
  LogSetAuthority,
  LogSetOwner,
  LogNote
} from "../generated/schema"

export function handleLogAccountCreated(event: LogAccountCreatedEvent): void {
  let entity = new LogAccountCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.account = event.params.account
  entity.by = event.params.by
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
