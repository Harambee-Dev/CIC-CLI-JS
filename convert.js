const fromExponential = require("from-exponential");
const fs = require("fs");
const path = require("path");
const Web3 = require("web3");
const {argv} = require('yargs')
const ERC20Contract = require("erc20-contract-js");

var BigNumber = require('big-number');
const Tx = require('ethereumjs-tx').Transaction;
const contractAbi=require('./libs/etherTokenAbi');
const provider= require('./libs/provider');
const EtherToken= require('./libs/EtherToken');
const privateKey= require('./libs/kings');

const privKey1= require('./libs/keys');
const BancorNetwork= require('./libs/BancorNetwork');
const bancorNetworkAbi=require('./libs/bancorNetworkAbi');

var web3 = new Web3(new Web3.providers.HttpProvider(provider));

var myAdminAddress = "0x1db10655ff9bac59548672b5e192a07de0debeaf"; // For Reserve Token

var networkAdmin = "0x72040B2D62f2287841FeBfA43F8Bb48409480ba8"

// const contractAddr = " **Your Contaract Address Goes here** ";

var Contract = require('web3-eth-contract');

var reserveToken = new Contract(contractAbi, EtherToken);


// // Reserve Token Approve Spender


  

var bancorNetworkInterface = new Contract(bancorNetworkAbi, BancorNetwork);

// // Convert Token Spender

function Convert(_path, _amount, _minReturn) {
  return new Promise((resolve, reject) => {
    console.log("Convert is open")
    web3.eth.getTransactionCount(networkAdmin, function(error, txCount) {
    console.log("TX COUNT :"+txCount);

      const encoded = bancorNetworkInterface.methods.convert(_path, _amount, _minReturn).encodeABI();
      console.log("ENCODED : "+encoded);
      var rawTransaction = {
        "nonce": web3.utils.toHex(txCount),
        "gasPrice": "0x07e3b29200",
        "gasLimit": "0xF458F",
        "to": BancorNetwork,
        "value": "0x0",
        "data": encoded
      };

      console.log("RAW TRANSACTION"+rawTransaction);

      // var privKey = privateKey
      var privKey2 = Buffer.from(privKey1, 'hex');
      console.log("PRIV KEY : "+privKey2)
      var tx = new Tx(rawTransaction,  {chain: 'mainnet', hardfork: 'petersburg'});
      console.log("TX :"+tx)

      tx.sign(privKey2);
      var serializedTx = tx.serialize();
      console.log("Convert before Close");
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


  // TO EXECUTE IN LINE ARGS 
   
    (async() => {
      console.log('1')
      var patho = `["0x35e5C586DfA4b73492708803763F86EE011FB253","0xbc95DEdd7d4fED0550b7C3D4d421d126743681B6","0x6D25f56f2e5D309e739f9A5ad499F28E541C74bD"]`;
      console.log("PATH : "+patho)
      var output = await Convert(patho,10000,1)
      console.log("output : "+output)
      console.log('2')
    })()
  
  // TO EXECUTE IN CLI YARGS
  
//   (async() => {
//     console.log('1')
//     var output = await Approve(argv.spend,argv.val);
//     console.log("output : "+output)
//     console.log('2')
//   })()
  
  
  
  // var output = await Approve(argv.spend,argv.val);
  // call node approve.js --spend='0x72040B2D62f2287841FeBfA43F8Bb48409480ba8' --val=1000000
  // console.log("output : "+output)
  
  

