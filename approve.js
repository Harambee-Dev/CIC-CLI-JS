const fromExponential = require("from-exponential");
const fs = require("fs");
const path = require("path");
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require("web3");
const {argv} = require('yargs')
const ERC20Contract = require("erc20-contract-js");
const contractAbi=require('./libs/etherTokenAbi')
const provider= require('./libs/provider');
const EtherToken= require('./libs/EtherToken');
const privateKey= require('./libs/kings');

var web3 = new Web3(new Web3.providers.HttpProvider(provider));

var myAdminAddress = "CONTRACT ADMIN ADDRESSS";

const contractAddr = " **Your Contaract Address Goes here** ";

var Contract = require('web3-eth-contract');

var reserveToken = new Contract(contractAbi, EtherToken);


// // Reserve Token Approve Spender

function Approve(spender,value) {
  return new Promise((resolve, reject) => {
    console.log("Approve is open")
    web3.eth.getTransactionCount(myAdminAddress, function(error, txCount) {
      console.log(txCount);

      const encoded = reserveToken.methods.approve(spender,value).encodeABI();
      var rawTransaction = {
        "nonce": web3.utils.toHex(txCount),
        "gasPrice": "0x07e3b29200",
        "gasLimit": "0xF458F",
        "to": EtherToken,
        "value": "0x0",
        "data": encoded
      };

      // var privKey = privateKey
      var privKey = Buffer.from(privateKey, 'hex');
      var tx = new Tx(rawTransaction,  {'chain':'mainnet'});

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
  var output = await Approve(_spenderAddress,_value) // For INLINE PARAMETER / ARGS PASSING
  //   var output = await Approve(argv.spend,argv.val); // FOR CLI PARAMETER / ARGS PASSING
  console.log("output : "+output)
  console.log('2')
})()


