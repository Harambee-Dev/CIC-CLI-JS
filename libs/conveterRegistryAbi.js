var conveterRegistryAbi = [
  {
    "inputs": [
      {
        "internalType": "contract IContractRegistry",
        "name": "_registry",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IConverterAnchor",
        "name": "_anchor",
        "type": "address"
      }
    ],
    "name": "ConverterAnchorAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IConverterAnchor",
        "name": "_anchor",
        "type": "address"
      }
    ],
    "name": "ConverterAnchorRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "contract IConverterAnchor",
        "name": "_smartToken",
        "type": "address"
      }
    ],
    "name": "ConvertibleTokenAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "contract IConverterAnchor",
        "name": "_smartToken",
        "type": "address"
      }
    ],
    "name": "ConvertibleTokenRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IConverterAnchor",
        "name": "_liquidityPool",
        "type": "address"
      }
    ],
    "name": "LiquidityPoolAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IConverterAnchor",
        "name": "_liquidityPool",
        "type": "address"
      }
    ],
    "name": "LiquidityPoolRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_prevOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "OwnerUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IConverterAnchor",
        "name": "_smartToken",
        "type": "address"
      }
    ],
    "name": "SmartTokenAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IConverterAnchor",
        "name": "_smartToken",
        "type": "address"
      }
    ],
    "name": "SmartTokenRemoved",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "newOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "onlyOwnerCanUpdateRegistry",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "prevRegistry",
    "outputs": [
      {
        "internalType": "contract IContractRegistry",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "registry",
    "outputs": [
      {
        "internalType": "contract IContractRegistry",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "restoreRegistry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_onlyOwnerCanUpdateRegistry",
        "type": "bool"
      }
    ],
    "name": "restrictRegistryUpdate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOwner",
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
    "name": "updateRegistry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_type",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_decimals",
        "type": "uint8"
      },
      {
        "internalType": "uint32",
        "name": "_maxConversionFee",
        "type": "uint32"
      },
      {
        "internalType": "contract IERC20Token[]",
        "name": "_reserveTokens",
        "type": "address[]"
      },
      {
        "internalType": "uint32[]",
        "name": "_reserveWeights",
        "type": "uint32[]"
      }
    ],
    "name": "newConverter",
    "outputs": [
      {
        "internalType": "contract IConverter",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IConverter",
        "name": "_converter",
        "type": "address"
      }
    ],
    "name": "addConverter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IConverter",
        "name": "_converter",
        "type": "address"
      }
    ],
    "name": "removeConverter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAnchorCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAnchors",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getAnchor",
    "outputs": [
      {
        "internalType": "contract IConverterAnchor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_value",
        "type": "address"
      }
    ],
    "name": "isAnchor",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getLiquidityPoolCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getLiquidityPools",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getLiquidityPool",
    "outputs": [
      {
        "internalType": "contract IConverterAnchor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_value",
        "type": "address"
      }
    ],
    "name": "isLiquidityPool",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getConvertibleTokenCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getConvertibleTokens",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getConvertibleToken",
    "outputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_value",
        "type": "address"
      }
    ],
    "name": "isConvertibleToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      }
    ],
    "name": "getConvertibleTokenAnchorCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      }
    ],
    "name": "getConvertibleTokenAnchors",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getConvertibleTokenAnchor",
    "outputs": [
      {
        "internalType": "contract IConverterAnchor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_value",
        "type": "address"
      }
    ],
    "name": "isConvertibleTokenAnchor",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_anchors",
        "type": "address[]"
      }
    ],
    "name": "getConvertersByAnchors",
    "outputs": [
      {
        "internalType": "contract IConverter[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IConverter",
        "name": "_converter",
        "type": "address"
      }
    ],
    "name": "isConverterValid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IConverter",
        "name": "_converter",
        "type": "address"
      }
    ],
    "name": "isSimilarLiquidityPoolRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_type",
        "type": "uint16"
      },
      {
        "internalType": "contract IERC20Token[]",
        "name": "_reserveTokens",
        "type": "address[]"
      },
      {
        "internalType": "uint32[]",
        "name": "_reserveWeights",
        "type": "uint32[]"
      }
    ],
    "name": "getLiquidityPoolByConfig",
    "outputs": [
      {
        "internalType": "contract IConverterAnchor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getSmartTokenCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getSmartTokens",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getSmartToken",
    "outputs": [
      {
        "internalType": "contract IConverterAnchor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_value",
        "type": "address"
      }
    ],
    "name": "isSmartToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      }
    ],
    "name": "getConvertibleTokenSmartTokenCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      }
    ],
    "name": "getConvertibleTokenSmartTokens",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getConvertibleTokenSmartToken",
    "outputs": [
      {
        "internalType": "contract IConverterAnchor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_convertibleToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_value",
        "type": "address"
      }
    ],
    "name": "isConvertibleTokenSmartToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_smartTokens",
        "type": "address[]"
      }
    ],
    "name": "getConvertersBySmartTokens",
    "outputs": [
      {
        "internalType": "contract IConverter[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token[]",
        "name": "_reserveTokens",
        "type": "address[]"
      },
      {
        "internalType": "uint32[]",
        "name": "_reserveWeights",
        "type": "uint32[]"
      }
    ],
    "name": "getLiquidityPoolByReserveConfig",
    "outputs": [
      {
        "internalType": "contract IConverterAnchor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];

  module.exports = conveterRegistryAbi;