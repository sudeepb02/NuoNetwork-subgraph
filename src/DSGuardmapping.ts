import {
  LogPermit as LogPermitEvent,
  LogForbid as LogForbidEvent,
  LogSetAuthority as LogSetAuthorityEvent,
  LogSetOwner as LogSetOwnerEvent
} from "../generated/DSGuardContract/DSGuardContract"
import {
  LogPermit,
  LogForbid,
  LogSetAuthority,
  LogSetOwner
} from "../generated/schema"

export function handleLogPermit(event: LogPermitEvent): void {
  let entity = new LogPermit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.src = event.params.src
  entity.dst = event.params.dst
  entity.sig = event.params.sig
  entity.save()
}

export function handleLogForbid(event: LogForbidEvent): void {
  let entity = new LogForbid(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.src = event.params.src
  entity.dst = event.params.dst
  entity.sig = event.params.sig
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
