import {
  LogAdminAdded as LogAdminAddedEvent,
  LogAdminRemoved as LogAdminRemovedEvent,
  LogSetAuthority as LogSetAuthorityEvent,
  LogSetOwner as LogSetOwnerEvent,
  LogNote as LogNoteEvent
} from "../generated/ConfigContract/ConfigContract"
import {
  LogAdminAdded,
  LogAdminRemoved,
  LogSetAuthority,
  LogSetOwner,
  LogNote
} from "../generated/schema"

export function handleLogAdminAdded(event: LogAdminAddedEvent): void {
  let entity = new LogAdminAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._admin = event.params._admin
  entity._by = event.params._by
  entity.save()
}

export function handleLogAdminRemoved(event: LogAdminRemovedEvent): void {
  let entity = new LogAdminRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._admin = event.params._admin
  entity._by = event.params._by
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
