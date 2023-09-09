import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  CurrencyWithdraw,
  Transfer,
  joined,
  rechargedToken
} from "../generated/EazePay/EazePay"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createCurrencyWithdrawEvent(
  user: Address,
  currencySymbol: string,
  amount: BigInt,
  tokens: BigInt
): CurrencyWithdraw {
  let currencyWithdrawEvent = changetype<CurrencyWithdraw>(newMockEvent())

  currencyWithdrawEvent.parameters = new Array()

  currencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  currencyWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "currencySymbol",
      ethereum.Value.fromString(currencySymbol)
    )
  )
  currencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  currencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )

  return currencyWithdrawEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createjoinedEvent(user: Address, id: BigInt): joined {
  let joinedEvent = changetype<joined>(newMockEvent())

  joinedEvent.parameters = new Array()

  joinedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  joinedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return joinedEvent
}

export function createrechargedTokenEvent(
  user: Address,
  currencySymbol: string,
  amount: BigInt
): rechargedToken {
  let rechargedTokenEvent = changetype<rechargedToken>(newMockEvent())

  rechargedTokenEvent.parameters = new Array()

  rechargedTokenEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rechargedTokenEvent.parameters.push(
    new ethereum.EventParam(
      "currencySymbol",
      ethereum.Value.fromString(currencySymbol)
    )
  )
  rechargedTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rechargedTokenEvent
}
