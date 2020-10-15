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

function Approve(spender,value) {
    return new Promise((resolve, reject) => {
      const contractAddr = reserveToken;
      console.log("CONTRACT ADDRESS :"+contractAddr)
      console.log("Approve is open")
      web3.eth.getTransactionCount(myAdminAddress, function(error, txCount) {
        console.log("TX COUNT :"+txCount);

  
        const encoded = reserveToken.methods.approve(spender,value).encodeABI();
        console.log("ENCODED : "+encoded);
        var rawTransaction = {
          "nonce": web3.utils.toHex(txCount),
          "gasPrice": "0x07e3b29200",
          "gasLimit": "0xF458F",
          "to": EtherToken,
          "value": "0x0",
          "data": encoded
        };
  
        console.log("RAW TRANSACTION"+rawTransaction);
  
        // var privKey = privateKey
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

  
  
  
  
  
  // TO EXECUTE IN LINE ARGS 
  
  (async() => {
      console.log('1')
       var Zero = await Approve("0x44B564C182a7975C956B81f996a16DD50FFdc973",0)
       var output = await Approve("0x44B564C182a7975C956B81f996a16DD50FFdc973",10000)
       console.log("Zero : "+Zero)
       console.log("output : "+output)
       console.log('2')
  })()
  
  // TO EXECUTE IN CLI YARGS
  
  // (async() => {
  //   console.log('1')
  //   var output = await Approve(argv.spend,argv.val);
  //   console.log("output : "+output)
  //   console.log('2')
  // })()
  
  
  
  // var output = await Approve(argv.spend,argv.val);
  // call node approve.js --spend='0x72040B2D62f2287841FeBfA43F8Bb48409480ba8' --val=1000000
  // console.log("output : "+output)
  





// // Reserve Token Approve Spender





function Allowance(wallet,spender){
    var result = EtherToken.methods.allowance(wallet,spender).call();
    console.log("User's Token balance is" + " "  + result)
    return result;
}


// Call the Allowance



// (async() => {
//   console.log('1')
//   var output = await Allowance("0x1DB10655fF9bAc59548672b5e192A07de0debEAF","0xd34294a4B98Cf7CECcbd561109A89a6D42170DcB");
//   console.log("output : "+output);
//   console.log('2')
// })()



var reserveToken = new Contract(contractAbi, EtherToken);

function Name(){
  return new Promise((resolve, reject) => {
    reserveToken.methods.totalSupply().call().then(function (result) {
    console.log("Contracts's NAME detail is" + " "  + result)
    return resolve(result);
  }).catch(alert);
});
}


// (async() => {
//    console.log('1')
//    var output = await Name();
//    console.log("output : "+output);
//    console.log('2')
//  })()











// Call the Allowance







