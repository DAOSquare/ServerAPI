/**
 * 描述: 自定义常量
 * 作者: Benjamin
 * 日期: 2021-08-30
*/


module.exports = {
    CODE_ERROR: -1, // 请求响应失败code码
    CODE_SUCCESS: 0, // 请求响应成功code码
    CODE_TOKEN_EXPIRED: 401, // 授权失败
    PRIVATE_KEY: 'jackchen', // 自定义jwt加密的私钥
    JWT_EXPIRED: 60 * 60 * 24 * 3, // 过期时间24*3小时

    DKPOOL_CONTRACT_ABI: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "previousAdmin",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                }
            ],
            "name": "AdminChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "beacon",
                    "type": "address"
                }
            ],
            "name": "BeaconUpgraded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "cardId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "DKP",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "mintFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "feeToken",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "releaseTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "closeTime",
                    "type": "uint256"
                }
            ],
            "name": "CardCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                }
            ],
            "name": "CardExpandAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "cardId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "DKP",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "mintFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "releaseTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "closeTime",
                    "type": "uint256"
                }
            ],
            "name": "CardUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "checkContract",
                    "type": "address"
                }
            ],
            "name": "CheckContractAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "DonateWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "rewardDKP",
                    "type": "uint256"
                }
            ],
            "name": "Donated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "poolMaster",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "periodStart",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "rewardRate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "exchangeRate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maxStake",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "supportToken",
                    "type": "address"
                }
            ],
            "name": "PoolAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "poolMaster",
                    "type": "address"
                }
            ],
            "name": "PoolMasterUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maxStake",
                    "type": "uint256"
                }
            ],
            "name": "PoolMaxStake",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                }
            ],
            "name": "PoolPaused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                }
            ],
            "name": "PoolRedeemPaused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                }
            ],
            "name": "PoolUnpaused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "cardId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Redeemed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "saferAddress",
                    "type": "address"
                }
            ],
            "name": "SaferUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Staked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                }
            ],
            "name": "SupportTokenUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fromPoolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "toPoolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Transferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                }
            ],
            "name": "Upgraded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "cardId",
                    "type": "uint256"
                }
            ],
            "name": "WinsRequireNFTAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "poolId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Withdrawn",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "_poolIds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "checkContract",
                    "type": "address"
                }
            ],
            "name": "addCheckContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "recipients",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "DKPs",
                    "type": "uint256[]"
                }
            ],
            "name": "addDKP",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[]",
                    "name": "expandPools",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "expandSpendingDKP",
                    "type": "uint256[]"
                }
            ],
            "name": "addExpandPools",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "requireNFTContracts",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "requireNFTIds",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "requireNFTAmounts",
                    "type": "uint256[]"
                }
            ],
            "name": "addRequireNFTs",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "balanceOfPool",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                }
            ],
            "name": "cardRedeemCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "supply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "DKP",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "mintFee",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "feeToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "releaseTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "closeTime",
                    "type": "uint256"
                }
            ],
            "name": "createCard",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "periodStart",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxStake",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "exchangeRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "decimals",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "poolMaster",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "supportTokenAddress",
                    "type": "address"
                }
            ],
            "name": "createPool",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dkpDecimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "donate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                }
            ],
            "name": "earned",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                }
            ],
            "name": "exit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                }
            ],
            "name": "getCard",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "DKP",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "releaseTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "closeTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "mintFee",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "feeToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "checkContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "expandPools",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "expandSpendingDKP",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                }
            ],
            "name": "getCardRequiredNFTS",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "requireNFTContracts",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "requireNFTIds",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "requireNFTAmounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                }
            ],
            "name": "getPool",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "periodStart",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxStake",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "feesCollected",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "exchangeRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "donateCollected",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "decimals",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "poolMaster",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "supportToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "cardList",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC1155",
                    "name": "_nftFactoryAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_safer",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isOwner",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "isPoolMaster",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isSafer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "nftContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "nftId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "locker",
                    "type": "address"
                }
            ],
            "name": "lockedNFTBalanceInCard",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nftFactory",
            "outputs": [
                {
                    "internalType": "contract IERC1155",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "name": "onERC1155Received",
            "outputs": [
                {
                    "internalType": "bytes4",
                    "name": "",
                    "type": "bytes4"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "pausePool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "pausePoolRedeem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "pausePools",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "pauseRedeemPools",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                }
            ],
            "name": "playerTotalDonate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "poolPaused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "poolRedeemPaused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "poolSupportToken",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "pools",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "periodStart",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxStake",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "feesCollected",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "exchangeRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "donateCollected",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "decimals",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "poolMaster",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "supportToken",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                }
            ],
            "name": "redeem",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "safer",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "recipients",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "DKPs",
                    "type": "uint256[]"
                }
            ],
            "name": "subtractDKP",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "fromPool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "toPool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "unpausePool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "unpausePoolRedeem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "DKP",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "mintFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "releaseTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "closeTime",
                    "type": "uint256"
                }
            ],
            "name": "updateCard",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "poolMaster",
                    "type": "address"
                }
            ],
            "name": "updatePoolMaster",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxStake",
                    "type": "uint256"
                }
            ],
            "name": "updatePoolMaxStake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_safer",
                    "type": "address"
                }
            ],
            "name": "updateSafer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newImplementation",
                    "type": "address"
                }
            ],
            "name": "upgradeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newImplementation",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "upgradeToAndCall",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "version",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "withdrawDonate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "card",
                    "type": "uint256"
                }
            ],
            "name": "withdrawFee",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    DKPOOL_CONTRACT_ADDRESS_MAINNET: "",
    DKPOOL_CONTRACT_ADDRESS_RINKEBY: "",
}


const DKPOOL_CONTRACT_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "previousAdmin",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "AdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "beacon",
                "type": "address"
            }
        ],
        "name": "BeaconUpgraded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "cardId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "DKP",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "mintFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "feeToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "releaseTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "closeTime",
                "type": "uint256"
            }
        ],
        "name": "CardCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            }
        ],
        "name": "CardExpandAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "cardId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "DKP",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "mintFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "releaseTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "closeTime",
                "type": "uint256"
            }
        ],
        "name": "CardUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "checkContract",
                "type": "address"
            }
        ],
        "name": "CheckContractAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "DonateWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "rewardDKP",
                "type": "uint256"
            }
        ],
        "name": "Donated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "poolMaster",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "periodStart",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "rewardRate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "exchangeRate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maxStake",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "supportToken",
                "type": "address"
            }
        ],
        "name": "PoolAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "poolMaster",
                "type": "address"
            }
        ],
        "name": "PoolMasterUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maxStake",
                "type": "uint256"
            }
        ],
        "name": "PoolMaxStake",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            }
        ],
        "name": "PoolPaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            }
        ],
        "name": "PoolRedeemPaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            }
        ],
        "name": "PoolUnpaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "cardId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Redeemed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "saferAddress",
                "type": "address"
            }
        ],
        "name": "SaferUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Staked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "SupportTokenUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fromPoolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "toPoolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Transferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "Upgraded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "cardId",
                "type": "uint256"
            }
        ],
        "name": "WinsRequireNFTAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdrawn",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "_poolIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "checkContract",
                "type": "address"
            }
        ],
        "name": "addCheckContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "recipients",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "DKPs",
                "type": "uint256[]"
            }
        ],
        "name": "addDKP",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "expandPools",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "expandSpendingDKP",
                "type": "uint256[]"
            }
        ],
        "name": "addExpandPools",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "requireNFTContracts",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "requireNFTIds",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "requireNFTAmounts",
                "type": "uint256[]"
            }
        ],
        "name": "addRequireNFTs",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "balanceOfPool",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            }
        ],
        "name": "cardRedeemCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "supply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "DKP",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "mintFee",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "feeToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "releaseTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "closeTime",
                "type": "uint256"
            }
        ],
        "name": "createCard",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "periodStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxStake",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "rewardRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exchangeRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "decimals",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "poolMaster",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "supportTokenAddress",
                "type": "address"
            }
        ],
        "name": "createPool",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dkpDecimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "donate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            }
        ],
        "name": "earned",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            }
        ],
        "name": "exit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            }
        ],
        "name": "getCard",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "DKP",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "releaseTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "closeTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "mintFee",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "feeToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "checkContract",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "expandPools",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "expandSpendingDKP",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            }
        ],
        "name": "getCardRequiredNFTS",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "requireNFTContracts",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "requireNFTIds",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "requireNFTAmounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            }
        ],
        "name": "getPool",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "periodStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxStake",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "rewardRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "feesCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exchangeRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "donateCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "decimals",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "poolMaster",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "supportToken",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "cardList",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC1155",
                "name": "_nftFactoryAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_safer",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isOwner",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "isPoolMaster",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isSafer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "nftContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "locker",
                "type": "address"
            }
        ],
        "name": "lockedNFTBalanceInCard",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nftFactory",
        "outputs": [
            {
                "internalType": "contract IERC1155",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "pausePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "pausePoolRedeem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "pausePools",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "pauseRedeemPools",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            }
        ],
        "name": "playerTotalDonate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "poolPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "poolRedeemPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "poolSupportToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "pools",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "periodStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxStake",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "rewardRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "feesCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exchangeRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "donateCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "decimals",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "poolMaster",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "supportToken",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            }
        ],
        "name": "redeem",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "safer",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "stake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "recipients",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "DKPs",
                "type": "uint256[]"
            }
        ],
        "name": "subtractDKP",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "fromPool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "toPool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "unpausePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "unpausePoolRedeem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "DKP",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "mintFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "releaseTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "closeTime",
                "type": "uint256"
            }
        ],
        "name": "updateCard",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "poolMaster",
                "type": "address"
            }
        ],
        "name": "updatePoolMaster",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxStake",
                "type": "uint256"
            }
        ],
        "name": "updatePoolMaxStake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_safer",
                "type": "address"
            }
        ],
        "name": "updateSafer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "version",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "withdrawDonate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "card",
                "type": "uint256"
            }
        ],
        "name": "withdrawFee",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];
exports.DKPOOL_CONTRACT_ABI = DKPOOL_CONTRACT_ABI;

