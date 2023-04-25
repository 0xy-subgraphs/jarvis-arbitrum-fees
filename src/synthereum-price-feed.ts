import {
    ethereum,
    JSONValue,
    TypedMap,
    Entity,
    Bytes,
    Address,
    BigInt
} from "@graphprotocol/graph-ts";

export class SynthereumPriceFeed extends ethereum.SmartContract {
    static bind(address: Address): SynthereumPriceFeed {
        return new SynthereumPriceFeed("SynthereumPriceFeed", address);
    }

    DEFAULT_ADMIN_ROLE(): Bytes {
        let result = super.call(
            "DEFAULT_ADMIN_ROLE",
            "DEFAULT_ADMIN_ROLE():(bytes32)",
            []
        );

        return result[0].toBytes();
    }

    try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
        let result = super.tryCall(
            "DEFAULT_ADMIN_ROLE",
            "DEFAULT_ADMIN_ROLE():(bytes32)",
            []
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBytes());
    }

    MAINTAINER_ROLE(): Bytes {
        let result = super.call(
            "MAINTAINER_ROLE",
            "MAINTAINER_ROLE():(bytes32)",
            []
        );

        return result[0].toBytes();
    }

    try_MAINTAINER_ROLE(): ethereum.CallResult<Bytes> {
        let result = super.tryCall(
            "MAINTAINER_ROLE",
            "MAINTAINER_ROLE():(bytes32)",
            []
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBytes());
    }

    getAggregator(_priceIdentifier: Bytes): Address {
        let result = super.call(
            "getAggregator",
            "getAggregator(bytes32):(address)",
            [ethereum.Value.fromFixedBytes(_priceIdentifier)]
        );

        return result[0].toAddress();
    }

    try_getAggregator(_priceIdentifier: Bytes): ethereum.CallResult<Address> {
        let result = super.tryCall(
            "getAggregator",
            "getAggregator(bytes32):(address)",
            [ethereum.Value.fromFixedBytes(_priceIdentifier)]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toAddress());
    }

    getLatestPrice(_priceIdentifier: Bytes): BigInt {
        let result = super.call(
            "getLatestPrice",
            "getLatestPrice(bytes32):(uint256)",
            [ethereum.Value.fromFixedBytes(_priceIdentifier)]
        );

        return result[0].toBigInt();
    }

    try_getLatestPrice(_priceIdentifier: Bytes): ethereum.CallResult<BigInt> {
        let result = super.tryCall(
            "getLatestPrice",
            "getLatestPrice(bytes32):(uint256)",
            [ethereum.Value.fromFixedBytes(_priceIdentifier)]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBigInt());
    }

    getLatestPrices(_priceIdentifiers: Array<Bytes>): Array<BigInt> {
        let result = super.call(
            "getLatestPrices",
            "getLatestPrices(bytes32[]):(uint256[])",
            [ethereum.Value.fromFixedBytesArray(_priceIdentifiers)]
        );

        return result[0].toBigIntArray();
    }

    try_getLatestPrices(
        _priceIdentifiers: Array<Bytes>
    ): ethereum.CallResult<Array<BigInt>> {
        let result = super.tryCall(
            "getLatestPrices",
            "getLatestPrices(bytes32[]):(uint256[])",
            [ethereum.Value.fromFixedBytesArray(_priceIdentifiers)]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBigIntArray());
    }

    getRoleAdmin(role: Bytes): Bytes {
        let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
            ethereum.Value.fromFixedBytes(role)
        ]);

        return result[0].toBytes();
    }

    try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
        let result = super.tryCall(
            "getRoleAdmin",
            "getRoleAdmin(bytes32):(bytes32)",
            [ethereum.Value.fromFixedBytes(role)]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBytes());
    }

    getRoleMember(role: Bytes, index: BigInt): Address {
        let result = super.call(
            "getRoleMember",
            "getRoleMember(bytes32,uint256):(address)",
            [
                ethereum.Value.fromFixedBytes(role),
                ethereum.Value.fromUnsignedBigInt(index)
            ]
        );

        return result[0].toAddress();
    }

    try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
        let result = super.tryCall(
            "getRoleMember",
            "getRoleMember(bytes32,uint256):(address)",
            [
                ethereum.Value.fromFixedBytes(role),
                ethereum.Value.fromUnsignedBigInt(index)
            ]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toAddress());
    }

    getRoleMemberCount(role: Bytes): BigInt {
        let result = super.call(
            "getRoleMemberCount",
            "getRoleMemberCount(bytes32):(uint256)",
            [ethereum.Value.fromFixedBytes(role)]
        );

        return result[0].toBigInt();
    }

    try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
        let result = super.tryCall(
            "getRoleMemberCount",
            "getRoleMemberCount(bytes32):(uint256)",
            [ethereum.Value.fromFixedBytes(role)]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBigInt());
    }

    getRoundPrice(_priceIdentifier: Bytes, _roundId: BigInt): BigInt {
        let result = super.call(
            "getRoundPrice",
            "getRoundPrice(bytes32,uint80):(uint256)",
            [
                ethereum.Value.fromFixedBytes(_priceIdentifier),
                ethereum.Value.fromUnsignedBigInt(_roundId)
            ]
        );

        return result[0].toBigInt();
    }

    try_getRoundPrice(
        _priceIdentifier: Bytes,
        _roundId: BigInt
    ): ethereum.CallResult<BigInt> {
        let result = super.tryCall(
            "getRoundPrice",
            "getRoundPrice(bytes32,uint80):(uint256)",
            [
                ethereum.Value.fromFixedBytes(_priceIdentifier),
                ethereum.Value.fromUnsignedBigInt(_roundId)
            ]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBigInt());
    }

    hasRole(role: Bytes, account: Address): boolean {
        let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
            ethereum.Value.fromFixedBytes(role),
            ethereum.Value.fromAddress(account)
        ]);

        return result[0].toBoolean();
    }

    try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
        let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
            ethereum.Value.fromFixedBytes(role),
            ethereum.Value.fromAddress(account)
        ]);
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBoolean());
    }

    isPriceSupported(_priceIdentifier: Bytes): boolean {
        let result = super.call(
            "isPriceSupported",
            "isPriceSupported(bytes32):(bool)",
            [ethereum.Value.fromFixedBytes(_priceIdentifier)]
        );

        return result[0].toBoolean();
    }

    try_isPriceSupported(_priceIdentifier: Bytes): ethereum.CallResult<boolean> {
        let result = super.tryCall(
            "isPriceSupported",
            "isPriceSupported(bytes32):(bool)",
            [ethereum.Value.fromFixedBytes(_priceIdentifier)]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBoolean());
    }

    pairs(param0: Bytes): SynthereumPriceFeed__pairsResult {
        let result = super.call("pairs", "pairs(bytes32):(bool,uint8,address)", [
            ethereum.Value.fromFixedBytes(param0)
        ]);

        return new SynthereumPriceFeed__pairsResult(
            result[0].toBoolean(),
            result[1].toI32(),
            result[2].toAddress()
        );
    }

    try_pairs(
        param0: Bytes
    ): ethereum.CallResult<SynthereumPriceFeed__pairsResult> {
        let result = super.tryCall("pairs", "pairs(bytes32):(bool,uint8,address)", [
            ethereum.Value.fromFixedBytes(param0)
        ]);
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(
            new SynthereumPriceFeed__pairsResult(
                value[0].toBoolean(),
                value[1].toI32(),
                value[2].toAddress()
            )
        );
    }

    supportsInterface(interfaceId: Bytes): boolean {
        let result = super.call(
            "supportsInterface",
            "supportsInterface(bytes4):(bool)",
            [ethereum.Value.fromFixedBytes(interfaceId)]
        );

        return result[0].toBoolean();
    }

    try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
        let result = super.tryCall(
            "supportsInterface",
            "supportsInterface(bytes4):(bool)",
            [ethereum.Value.fromFixedBytes(interfaceId)]
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toBoolean());
    }

    synthereumFinder(): Address {
        let result = super.call(
            "synthereumFinder",
            "synthereumFinder():(address)",
            []
        );

        return result[0].toAddress();
    }

    try_synthereumFinder(): ethereum.CallResult<Address> {
        let result = super.tryCall(
            "synthereumFinder",
            "synthereumFinder():(address)",
            []
        );
        if (result.reverted) {
            return new ethereum.CallResult();
        }
        let value = result.value;
        return ethereum.CallResult.fromValue(value[0].toAddress());
    }
}