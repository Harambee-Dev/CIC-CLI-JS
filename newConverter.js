const fromExponential = require("from-exponential");
const fs = require("fs");
const path = require("path");
const Web3 = require("web3");
const {argv} = require('yargs')
const ERC20Contract = require("erc20-contract-js");

var BigNumber = require('big-number');
const Tx = require('ethereumjs-tx').Transaction;


const provider= require('./libs/provider');
const EtherToken= require('./libs/EtherToken'); // RESERVE TOKEN
const converterRegistryAbi = require('./libs/converterRegistryAbi');
const ConverterRegistry = require('./libs/ConverterRegistry');


// const contractAbi=require('./libs/etherTokenAbi');

const privateKey= require('./libs/kings'); // WALLET KEY COMMON

var web3 = new Web3(new Web3.providers.HttpProvider(provider));

var RegistryAdmin = "0x72040B2D62f2287841FeBfA43F8Bb48409480ba8"; // LOCAL ADMIN WALLET FOR CONVERTER REGISTRY

var AccountToInteract = "0x1DB10655fF9bAc59548672b5e192A07de0debEAF"; // account which is used to make contract call


var Contract = require('web3-eth-contract');

var converterRegistry = new Contract(converterRegistryAbi, ConverterRegistry);


// // Reserve Token Approve Spender



function NewConverter(name,symbol,decimals) {
    return new Promise((resolve, reject) => {
      // const contractAddr = reserveToken;
      const typ = '0';
      const maxConversionFee = '1';
//      const reserveTokens = `["${EtherToken}"]`;
      var reserveTokens = new Array();
      reserveTokens.push(EtherToken);
      var reserveWeights = new Array();
      reserveWeights.push(25000);
      console.log("reserveTokens")
//      const reserveWeights = `["25000"]`;

      console.log("RESERVE TOKENS : "+typeof reserveTokens);
      console.log("RESERVE WEIGHTS : "+typeof reserveWeights);
      console.log("NewConverter is open")
      web3.eth.getTransactionCount(AccountToInteract, function(error, txCount) {
      console.log("TX COUNT :"+txCount);

      

        const encoded = converterRegistry.methods.newConverter(typ, name, symbol, decimals, maxConversionFee, reserveTokens, reserveWeights).encodeABI();
        console.log("ENCODED : "+encoded);
        var rawTransaction = {
          "nonce": web3.utils.toHex(txCount),
          "gasPrice": "0x07e3b29200",
          "gasLimit": "0xF458F",
          "to": ConverterRegistry,
          "value": "0x0",
          "data": encoded
        };
   
        console.log("RAW TRANSACTION"+rawTransaction);
  
        var privKey = Buffer.from(privateKey, 'hex');
        console.log("PRIV KEY : "+privKey)
        var tx = new Tx(rawTransaction,  {chain: 'mainnet', hardfork: 'petersburg'});
        console.log("TX :"+tx)
  
        tx.sign(privKey);
        var serializedTx = tx.serialize();
        console.log("Approve before Close");
        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash) => {
          if(err) {
            console.log(err)
            reject(new Error(err.message))
          }
          console.log(hash);
          resolve(hash)
        })
      })
    })
  }

  

  // 0xc5398582D14A1EbaBf2D5f5f53383045767e59cE - ConverterRegistery
  
  
  
  
  // TO EXECUTE IN LINE ARGS 
  
(async() => {
      console.log('1')
       var conv = await NewConverter("NEW","NEW",0);
       console.log("CONVERTER TOKEN TRANSACTION : "+conv);
       console.log('2')
})()
  