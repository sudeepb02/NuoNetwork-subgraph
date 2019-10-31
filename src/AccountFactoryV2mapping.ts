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
  LogNote,
  User
} from "../generated/schema"

import {BigInt} from '@graphprotocol/graph-ts'

export function handleLogAccountCreated(event: LogAccountCreatedEvent): void {
  let entity = new LogAccountCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.account = event.params.account
  entity.by = event.params.by
  entity.save()

  let user = User.load(event.params.user.toHexString())
  if (user == null) {
    user = new User(event.params.user.toHexString())
    user.numberOfAccounts = 0
    user.totalOrdersCreated = 0
    user.totalOrdersSettled = 0
    user.totalOrdersDefaulted = 0
    user.totalOrdersLiquidated = 0
  }
  user.numberOfAccounts = user.numberOfAccounts + 1
  user.save()

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
