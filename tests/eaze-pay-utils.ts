import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  CurrencyWithdrawal,
  Joined,
  RechargedToken,
  Transfer
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

export function createCurrencyWithdrawalEvent(
  user: Address,
  currencySymbol: string,
  amount: BigInt
): CurrencyWithdrawal {
  let currencyWithdrawalEvent = changetype<CurrencyWithdrawal>(newMockEvent())

  currencyWithdrawalEvent.parameters = new Array()

  currencyWithdrawalEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  currencyWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "currencySymbol",
      ethereum.Value.fromString(currencySymbol)
    )
  )
  currencyWithdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return currencyWithdrawalEvent
}

export function createJoinedEvent(user: Address, userId: BigInt): Joined {
  let joinedEvent = changetype<Joined>(newMockEvent())

  joinedEvent.parameters = new Array()

  joinedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  joinedEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromUnsignedBigInt(userId))
  )

  return joinedEvent
}

export function createRechargedTokenEvent(
  user: Address,
  currencySymbol: string,
  amount: BigInt
): RechargedToken {
  let rechargedTokenEvent = changetype<RechargedToken>(newMockEvent())

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
