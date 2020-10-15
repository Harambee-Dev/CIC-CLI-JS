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
const EtherToken= require('./libs/EtherToken');
const etherTokenAbi=require('./libs/etherTokenAbi');


const etherToken = new web3.eth.Contract(etherTokenAbi, EtherToken);

// For Bancor Network
var BancorNetwork = require('./libs/BancorNetwork');
var bancorNetworkAbi = require('./libs/bancorNetworkAbi');

const bancorNetwork = new web3.eth.Contract(bancorNetworkAbi, BancorNetwork);





// Step 1 : Fund the RESERVE with ETHER or Convert ETHER to RESERVE TOKENS  - WORKING  ✅

function sendETHER(sendersData, recieverData, amountToSend) {
    return new Promise(async (resolve, reject) => {
        console.log("Convert is open")
        web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
        console.log("NOUNCE :"+txCount);

        // Variables
        // var EtherToken = IMPORTED IN THE LIBS; // To Address
        var amount = '100000';
        var sendAmount = web3.utils.toWei(amount, "ether");
        var nounce =  web3.utils.toHex(txCount);
        // var chainID = 1; // 1 for --mainnet 4 for rinkeby

        // constants
        const gasPrice = "0x07e3b29200";
        const gasLimit = "0xF458F";
      
        
      web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
        console.log("NOUNCE :"+txCount);

        var nonce = txCount;
        web3.eth.getBalance(walletAddress, async (err, result) => {
            if (err) {
                return reject();
            }
            let balance = web3.utils.fromWei(result, "ether");
            console.log("CURRENT ETH BALANCE = "+balance + " ETH");
            if(balance < amountToSend) {
                console.log('insufficient funds');
                return reject();
            }
   
            // let gasPrices = await getCurrentGasPrices(); // FOR LIVE CHIAN
            let details = {
                "to": EtherToken,
                "value": web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether')),
                "gas": gasLimit,
                "gasPrice": gasPrice,
                "nonce": nonce,
                "chainId": 4 // EIP 155 chainId - mainnet: 1, rinkeby: 4
            };
           
            const transaction = new Tx(details, {chain: 'mainnet', hardfork: 'petersburg'});
            let privKey = Buffer.from(walletPrivateKey,'hex');
            transaction.sign(privKey);
           
            const serializedTransaction = transaction.serialize();
           
            web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'), (err, id) => {
                if(err) {
                    console.log(err);
                    return reject();
                }
                console.log("TRANSACTION HASH : "+id);
                // resolve({id: id});
            });
        });
      });
    });
})
}


/*
newConverter(uint16,string,string,uint8,uint32,address[],uint32[])
_type, _name. _symbol, _decimals, _maxConversionFee, _reserveTokens, _reserveWeights
*/

// NewConverter - Token Converter Pair or Smart Token Initiation 🛑❌ - NOT WORKING - Working after correcting GAS PRICE ✅


function NewConverter() {
    return new Promise((resolve, reject) => {
      console.log("Convert is open")
      web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
      console.log("NOUNCE :"+txCount);

      // Variables
      var type = 0;
      var name = 'LOL';
      var symbol = 'LOL';
      var decimals = 0;
      var maxConversionFee = 1;
      var reserveTokens = ["0x35e5C586DfA4b73492708803763F86EE011FB253"];
      var reserveWeights = [50000];

        const encoded = converterRegistry.methods.newConverter(type, name, symbol, decimals, maxConversionFee, reserveTokens, reserveWeights).encodeABI();
        console.log("ENCODED : "+encoded);
        var rawTransaction = {
          "nonce": web3.utils.toHex(txCount),
          "gasPrice": "0x5F5E100",
          "gasLimit": "0x3E7235",
          "to": "0xc5398582D14A1EbaBf2D5f5f53383045767e59cE",
          "value": "0x0",
          "data": encoded
        };
   
        console.log("RAW TRANSACTION"+rawTransaction);
  
        // var privKey = privateKey 
        var privKey = Buffer.from(walletPrivateKey, 'hex');
        console.log("PRIV KEY : "+privKey)
        var tx = new Tx(rawTransaction,  {chain: 'mainnet', hardfork: 'petersburg'});
        console.log("TX :"+tx)
  
        tx.sign(privKey);
        var serializedTx = tx.serialize();
        console.log("Convert before Close");
        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash) => {
          if(err) {
            console.log(err)
            reject(new Error(err.message));
            return reject();
          }
          console.log(hash);
          resolve(hash)
        })
      })
    }).catch(console.log(""));
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


// // Reserve Token Approve Spender - Working ✅

async function Approve(spender,value) {
    var addressToApprove = await GetCurrentSmartToken();
    console.log("CURRENT ST : "+ addressToApprove);
    return new Promise((resolve, reject) => {
      const contractAddr = EtherToken;
      console.log("CONTRACT ADDRESS :"+contractAddr)
      console.log("Approve is open")
      web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
        console.log("TX COUNT :"+txCount);

  
        const encoded = etherToken.methods.approve(spender,value).encodeABI();
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
        var privKey = Buffer.from(walletPrivateKey, 'hex');
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


// payableAmount, _path, _amount, _minReturn

// CONVERT - ALLOWS ISSUING OF SMART TOKEN TO THE USER WALLET - Working ✅


async function Convert() {
  var SMT = await GetCurrentSmartToken();
    return new Promise((resolve, reject) => {
      console.log("Convert is open")
      web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
      console.log("NOUNCE :"+txCount);

      // For Bancor Network

      // console.log('Bancor Network Address:', BancorNetwork);
      // const bancorNetwork = new web3.eth.Contract(bancorNetworkAbi, BancorNetwork);

      // Variables
      // var pathConverter = [EtherToken,SmartToken,SmartToken]
      var pathConverter = [EtherToken,SMT,SMT]
      var amount = 10000;
      var minReturn = 1; // TO BE DECIDED
 
        const encoded = bancorNetwork.methods.convert(pathConverter, amount, minReturn).encodeABI();
        console.log("ENCODED : "+encoded);
        var rawTransaction = {
          "nonce": web3.utils.toHex(txCount),
          "gasPrice": "0x5F5E100",
          "gasLimit": "0x3E7235",
          "to": BancorNetwork,
          "value": "0x0",
          "data": encoded
        };
   
        console.log("RAW TRANSACTION"+rawTransaction);
  
        // var privKey = privateKey 
        var privKey = Buffer.from(walletPrivateKey, 'hex');
        console.log("PRIV KEY : "+privKey)
        var tx = new Tx(rawTransaction,  {chain: 'mainnet', hardfork: 'petersburg'});
        console.log("TX :"+tx)
  
        tx.sign(privKey);
        var serializedTx = tx.serialize();
        console.log("Convert before Close");
        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash) => {
          if(err) {
            console.log(err)
            reject(new Error(err.message));
            return reject();
          }
          console.log(hash);
          resolve(hash)
        })
      })
    }).catch(console.log("error"));
  }

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



// TO FUND RESERVE TOKEN WITH ETHER AND AVAIL RESERVE TOKENS

//    (async() => {
//      console.log("FUNDING RESERVE TOKEN WITH ETH");
//      var output = await sendETHER();
//      console.log("FUND RESERVE TOKEN TRANSACTION : "+output);
//      console.log('FINISHED SUCCESSFULLY');
//    })();



  
// TO SET UP A NEW TOKEN CONVERTER PAIR or TO LIST A NEW CIC / SMART TOKEN / LIQUID TOKEN

//    (async() => {
//      await time(1000);
//      console.log("CONVERTER - NEW SMART TOKEN INITIATED");
//      var convertion = await NewConverter();
//      console.log("TOKEN CONVERTER PAIR SETUP : "+convertion);
//      console.log('FINISHED SUCCESSFULLY');
//    })();


// TO FIND NUMBER OF AVAILABLE SMART TOKENS 

//    (async() => {
//      await time(1000);
//      console.log("SMART TOKEN COUNTER STARTED");
//      var cont = await GetSmartTokenCount();
//      console.log("COUNT : "+cont);
//      console.log('FINISHED SUCCESSFULLY');
//   })();

// TO FIND CURRENT SMART TOKEN TO MINT
// TO FIND CURRENT SMART TOKEN CREATED BY THE USER


  //   (async() => {
  //     //await time(1000);
  //     console.log("GET CURRENT SMART TOKEN STARTED");
  //     var ST = await GetCurrentSmartToken();
  //     console.log("CURRENT SMART TOKEN TO BE A CONVERTER : "+ST);
  //     console.log('GET CURRENT SMART TOKEN EXECUTED');
  //  })();



// TO EXECUTE APPROVE OF SMART TOKENS 
  
//   (async() => {
//     console.log('1')
//      var Zero = await Approve("0x96cD347754B0671D0E2b36418c07CAF4179ABF65",0)
//      var output = await Approve("0x96cD347754B0671D0E2b36418c07CAF4179ABF65",10000)
//      console.log("Zero : "+Zero)
//      console.log("output : "+output)
//      console.log('2')
// })()


// TO ISSUE/MINT NEW SMART TOKENS TO USER WALLET 

  //   (async() => {
  //     //await time(1000);
  //     console.log("BANCOR NETWORK CONVERT STARTED");
  //     var THas = await Convert();
  //     console.log("Transaction Hash : "+THas);
  //     console.log('FINISHED SUCCESSFULLY');
  //  })();


// TO CHECK TX STATUS

// GetTxStatus

// (async() => {
//   //await time(1000);
//   var TXS = await getTxStatus("0x3c6a0409dd877e38fc36687cf9b79b36812264e8a02b372b8dc37123adc0331a");
//   console.log("Transaction STATUS : "+TXS);
// })();
