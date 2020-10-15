const fs = require("fs");
const path = require("path");
const Web3 = require("web3");
var BigNumber = require('big-number');
var Contract = require('web3-eth-contract');
var time = require('timer');
const Tx = require('ethereumjs-tx').Transaction;
const promptly = require('promptly');

// User Wallet & Private Key for creating smart token
const walletAddress = "0xff577F557D0DbD44df8bf66B4F64CCADA5fB6Ce5";
const walletPrivateKey = "7aa2ee4aacdff303c2192910bce0446277bdd9da4bc6b7de2d42a1645a758ff6";

// Setting up Web3 PROVIDER
var provider = "http://localhost:8545";
var web3 = new Web3(new Web3.providers.HttpProvider(provider));

// For CONVERTER REGISTRY
var conveterRegistryAbi = require('./libs/conveterRegistryAbi');
var ConveterRegistry = require('./libs/ConveterRegistry');


const converterRegistry = new web3.eth.Contract(conveterRegistryAbi, ConveterRegistry);


// For  RESERVE TOKEN
// const EtherToken= require('./libs/EtherToken');
// const etherTokenAbi=require('./libs/etherTokenAbi');


// const etherToken = new web3.eth.Contract(etherTokenAbi, EtherToken);

// For CONTRACT REGISTRY
var contractRegistryAbi = require('./libs/contractRegistryAbi');
var ContractRegistry = require('./libs/ContractRegistry');


const contractRegistry = new web3.eth.Contract(contractRegistryAbi, ContractRegistry);
  





async function mint(){


// For Bancor Network
var BancorNetwork = await getAddress(1);
var bancorNetworkAbi = require('./libs/bancorNetworkAbi');

const bancorNetwork = new web3.eth.Contract(bancorNetworkAbi, BancorNetwork);


async function  getContractNames(value) {
    const val = value;
    return new Promise((resolve, reject) => {
      contractRegistry.methods.contractNames(val).call().then(function (result) {
      return resolve(result);
    })
  });
  }
  

// addressOf(bytes32)
async function getAddress(value){
    var NAME = await getContractNames(value);
    // console.log("NAME : "+NAME);
    const inBytes = web3.utils.fromAscii(NAME);
    return new Promise((resolve, reject) => {
        contractRegistry.methods.addressOf(inBytes).call().then(function(result){
            return resolve(result);
        })
    })
  }



// TOTAL SMART TOKENS MINTED - Working ✅

function  GetSmartTokenCount() {
    return new Promise((resolve, reject) => {
      converterRegistry.methods.getSmartTokenCount().call().then(function (result) {
      console.log("Number of SMART TOKEN's  " + " "  + result)
      return resolve(result);
    })
});
}

// CURRENT SMART TOKEN TO BE MINTED - Working ✅


async function  GetCurrentSmartToken() {
    var num = await GetSmartTokenCount();
    return new Promise((resolve, reject) => {
      var current = --num;
      converterRegistry.methods.getSmartToken(current).call().then(function (result) {
      return resolve(result);
    })
});
}


// payableAmount, _path, _amount, _minReturn

// CONVERT - ALLOWS ISSUING OF SMART TOKEN TO THE USER WALLET - Working ✅


async function Convert() {
  // var SMT = await GetCurrentSmartToken();
  // console.log(SMT);
  const eToken = await getAddress(7);
  const SMT = await promptly.prompt("ENTER YOUR SMART TOKEN ADDRESS : ");
  const amount = await promptly.prompt("ENTER AMOUNT OF TOKENS TO BE MINTED : ");
  
    return new Promise((resolve, reject) => {
      // console.log("Convert is open")
      web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
      // console.log("NOUNCE :"+txCount);

      // For Bancor Network

      // console.log('Bancor Network Address:', BancorNetwork);
      // const bancorNetwork = new web3.eth.Contract(bancorNetworkAbi, BancorNetwork);

      // Variables
      // var pathConverter = [EtherToken,SmartToken,SmartToken]
      var pathConverter = [eToken,SMT,SMT]
      // var amount = 10000;
      var minReturn = 1; // TO BE DECIDED
 
        const encoded = bancorNetwork.methods.convert(pathConverter, amount, minReturn).encodeABI();
        // console.log("ENCODED : "+encoded);
        var rawTransaction = {
          "nonce": web3.utils.toHex(txCount),
          "gasPrice": "0x5F5E100",
          "gasLimit": "0x3E7235",
          "to": BancorNetwork,
          "value": "0x0",
          "data": encoded
        };
   
        // console.log("RAW TRANSACTION"+rawTransaction);
  
        // var privKey = privateKey 
        var privKey = Buffer.from(walletPrivateKey, 'hex');
        // console.log("PRIV KEY : "+privKey)
        var tx = new Tx(rawTransaction,  {chain: 'mainnet', hardfork: 'petersburg'});
        // console.log("TX :"+tx)
  
        tx.sign(privKey);
        var serializedTx = tx.serialize();
        // console.log("Convert before Close");
        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash) => {
          if(err) {
            console.log(err)
            reject(new Error(err.message));
            return reject();
          }
          //console.log(hash);
          resolve(hash)
        })
      })
    }).catch(console.log(""));
  }

  /**
Function/Module Name : getTxStatus
**/
async function getTxStatus(txHash) {
    return new Promise((resolve, reject) => {
      web3.eth.getTransactionReceipt(txHash, function(err, receipt){
        if (!err) {
          if (receipt == null) {
            resolve("PENDING");
          } else {
          var receiptStatus = receipt.status;
          if(receiptStatus == 0x1) {
             resolve("SUCCESS")
          }
          else if (receiptStatus == 0x0) {
             resolve("FAILED")
          }
        }
      } else {
      console.log(err);
        res.send({"error" : "true"});
      }
    })
  })
}



var TX = await Convert();
console.log("MINT TRANSACTION HASH : "+TX);
var TX_STATUS = await getTxStatus(TX);
console.log("MINT TRANSACTION STATUS : "+TX_STATUS);


}


// TO ISSUE/MINT NEW SMART TOKENS TO USER WALLET 

(async() => {
    mint();
})();


// 0x35e5C586DfA4b73492708803763F86EE011FB253
// 0x4C9B8F9CFb9867528E5E1A938254207c824E5460
// 0x9B0b9D627f46B4B488Cf4464Ee50Fc39b814899c
// 0xa869f953a03f4f05cfc3D88aec08F9A232134a3d