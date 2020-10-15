const fromExponential = require("from-exponential");
const fs = require("fs");
const path = require("path");
const Web3 = require("web3");

var BigNumber = require('big-number');
const Tx = require('ethereumjs-tx').Transaction;

var abi = require("./libs/converterRegistryAbi");

var contractAddress = "0xc5398582D14A1EbaBf2D5f5f53383045767e59cE";


const provider = "http://localhost:8545";
const ReserveToken = "0x35e5c586dfa4b73492708803763f86ee011fb253";
var AccountToInteract = "0x72040B2D62f2287841FeBfA43F8Bb48409480ba8"; 
var privateKey = "febd529b78c09f6c8eb552fa3eff637f93f63bab4da7c88282719ed121e8fabf";
var web3 = new Web3(new Web3.providers.HttpProvider(provider));


var Contract = require('web3-eth-contract');

var converterRegistry = new Contract(abi, contractAddress);


function Conv(name,symbol,decimals) {
    return new Promise((resolve, reject) => {
      // const contractAddr = reserveToken;
      const typ = 0;
      const maxConversionFee = 1;
      //const reserveTokens = `["${ReserveToken}"]`;
      const reserveTokens = ["0x35e5C586DfA4b73492708803763F86EE011FB253"];
      const reserveWeights = [25000];
      // var reserveTokens = new Array();
      // reserveTokens.push(ReserveToken);
      // var reserveWeights = new Array();
      // reserveWeights.push(25000);
      console.log("reserveTokens")
      //const reserveWeights = `["25000"]`;

      console.log("*********************************************************************************");
      console.log("TYPE  : "+typeof typ+" type : "+typ);
      console.log("NAME  : "+typeof name+" NAME : "+name);
      console.log("SYMBOL  : "+typeof symbol+" SYMBOL : "+symbol);
      console.log("DECIMALS  : "+typeof decimals+" DECIMALS : "+decimals);
      console.log("maxConversionFee  : "+typeof maxConversionFee+" maxConversionFee : "+maxConversionFee);
      console.log("RESERVE TOKENS : "+typeof reserveTokens+" RESERVE TOKENS : "+reserveTokens);
      console.log("RESERVE WEIGHTS : "+typeof reserveWeights+" RESERVE WEIGHTS : "+reserveWeights);
      console.log("NewConverter is open")

      console.log("*********************************************************************************");

        web3.eth.getTransactionCount(AccountToInteract, function(error, txCount) {
        console.log("TX COUNT :"+txCount);      
        console.log("ANCHORS : "+converterRegistry.methods.getAnchorCount());
        const encoded = converterRegistry.methods.newConverter(typ, name, symbol, decimals, maxConversionFee, reserveTokens, reserveWeights).encodeABI();
        console.log("ENCODED : "+encoded);
        var rawTransaction = {
          "nonce": web3.utils.toHex(txCount),
          "gasPrice": "0x07e3b29200",
          "gasLimit": "0xF458F",
          "to": contractAddress,
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

  (async() => {
    console.log('1')
     var conv = await Conv('Newton','NEW',0);
     console.log("CONVERTER TOKEN TRANSACTION : "+conv);
     console.log('2')
})()
