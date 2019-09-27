import {
  LogTrade as LogTradeEvent,
  LogSetAuthority as LogSetAuthorityEvent,
  LogSetOwner as LogSetOwnerEvent,
  LogNote as LogNoteEvent
} from "../generated/KyberConnectorContract/KyberConnectorContract"
import {
  LogTrade,
  LogSetAuthority,
  LogSetOwner,
  LogNote,
  TradeSummary
} from "../generated/schema"

export function handleLogTrade(event: LogTradeEvent): void {
  let entity = new LogTrade(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._srcToken = event.params._srcToken
  entity._destToken = event.params._destToken
  entity._srcTokenValue = event.params._srcTokenValue
  entity._maxDestTokenValue = event.params._maxDestTokenValue
  entity._destTokenValue = event.params._destTokenValue
  entity._srcTokenValueLeft = event.params._srcTokenValueLeft
  entity._exchangeRate = event.params._exchangeRate
  entity.save()

  let tradeSummary = TradeSummary.load("1")
  if (tradeSummary == null) {
    tradeSummary = new TradeSummary("1")
    tradeSummary.kyberTrades = 0
    tradeSummary.uniswapTrades = 0
  }
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
