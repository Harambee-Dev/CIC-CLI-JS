var bancorNetworkAbi = [
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
        "name": "_smartToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "contract IERC20Token",
        "name": "_fromToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "contract IERC20Token",
        "name": "_toToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_fromAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_toAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_trader",
        "type": "address"
      }
    ],
    "name": "Conversion",
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
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      }
    ],
    "name": "claimAndConvert",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_affiliateAccount",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_affiliateFee",
        "type": "uint256"
      }
    ],
    "name": "claimAndConvert2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_beneficiary",
        "type": "address"
      }
    ],
    "name": "claimAndConvertFor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_beneficiary",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_affiliateAccount",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_affiliateFee",
        "type": "uint256"
      }
    ],
    "name": "claimAndConvertFor2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "contract IBancorX",
        "name": "_bancorX",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_conversionId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_beneficiary",
        "type": "address"
      }
    ],
    "name": "completeXConversion",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "_sourceToken",
        "type": "address"
      },
      {
        "internalType": "contract IERC20Token",
        "name": "_targetToken",
        "type": "address"
      }
    ],
    "name": "conversionPath",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      }
    ],
    "name": "convert",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_affiliateAccount",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_affiliateFee",
        "type": "uint256"
      }
    ],
    "name": "convert2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_beneficiary",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_affiliateAccount",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_affiliateFee",
        "type": "uint256"
      }
    ],
    "name": "convertByPath",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_beneficiary",
        "type": "address"
      }
    ],
    "name": "convertFor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_beneficiary",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_affiliateAccount",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_affiliateFee",
        "type": "uint256"
      }
    ],
    "name": "convertFor2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Token",
        "name": "",
        "type": "address"
      }
    ],
    "name": "etherTokens",
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
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "getReturnByPath",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
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
    "name": "maxAffiliateFee",
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
    "name": "newOwner",
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
    "name": "onlyOwnerCanUpdateRegistry",
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
    "name": "prevRegistry",
    "outputs": [
      {
        "internalType": "contract IContractRegistry",
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
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "rateByPath",
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
        "internalType": "contract IEtherToken",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_register",
        "type": "bool"
      }
    ],
    "name": "registerEtherToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
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
    "type": "function"
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
        "internalType": "uint256",
        "name": "_maxAffiliateFee",
        "type": "uint256"
      }
    ],
    "name": "setMaxAffiliateFee",
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
        "internalType": "contract IERC20Token",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "_targetBlockchain",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_targetAccount",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_conversionId",
        "type": "uint256"
      }
    ],
    "name": "xConvert",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minReturn",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "_targetBlockchain",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_targetAccount",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_conversionId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_affiliateAccount",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_affiliateFee",
        "type": "uint256"
      }
    ],
    "name": "xConvert2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  }
];


module.exports = bancorNetworkAbi;
