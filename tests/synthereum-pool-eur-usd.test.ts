import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { ActivatedLP } from "../generated/schema"
import { ActivatedLP as ActivatedLPEvent } from "../generated/SynthereumPoolEurUsd/SynthereumPoolEurUsd"
import { handleActivatedLP } from "../src/synthereum-pool-eur-usd"
import { createActivatedLPEvent } from "./synthereum-pool-eur-usd-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let lp = Address.fromString("0x0000000000000000000000000000000000000001")
    let newActivatedLPEvent = createActivatedLPEvent(lp)
    handleActivatedLP(newActivatedLPEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ActivatedLP created and stored", () => {
    assert.entityCount("ActivatedLP", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ActivatedLP",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "lp",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
