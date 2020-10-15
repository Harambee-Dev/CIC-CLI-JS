const fs = require("fs");
const path = require("path");
const Web3 = require("web3");
var BigNumber = require('big-number');
var Contract = require('web3-eth-contract');
var time = require('timer');
const Tx = require('ethereumjs-tx').Transaction;
const promptly = require('promptly');
var ethers = require("ethereumjs-util")


// User Wallet & Private Key for creating smart token
// const walletAddress = "0xff577F557D0DbD44df8bf66B4F64CCADA5fB6Ce5";
// const walletPrivateKey = "7aa2ee4aacdff303c2192910bce0446277bdd9da4bc6b7de2d42a1645a758ff6";
    

// Setting up Web3 PROVIDER
var provider = "http://localhost:8545";
var web3 = new Web3(new Web3.providers.HttpProvider(provider));

// For CONTRACT REGISTRY
var contractRegistryAbi = require('./libs/contractRegistryAbi');
var ContractRegistry = require('./libs/ContractRegistry');


const contractRegistry = new web3.eth.Contract(contractRegistryAbi, ContractRegistry);
  


// For CONVERTER REGISTRY
var conveterRegistryAbi = require('./libs/conveterRegistryAbi');
// var ConveterRegistry = require('./libs/ConveterRegistry');
// const converterRegistry = new web3.eth.Contract(conveterRegistryAbi, ConveterRegistry);

// For  RESERVE TOKEN
//const EtherToken= require('./libs/EtherToken');
const etherTokenAbi=require('./libs/etherTokenAbi');
// const etherToken = new web3.eth.Contract(etherTokenAbi, EtherToken);

// For Bancor Network
// var BancorNetwork = require('./libs/BancorNetwork');
var bancorNetworkAbi = require('./libs/bancorNetworkAbi');
// const bancorNetwork = new web3.eth.Contract(bancorNetworkAbi, BancorNetwork);


// contractNames(uint256)




async function script(){

// console.log("BNT TOKENS : "+web3.eth.toBytes('BNTToken'));
// console.log("BNT TOKENS : "+web3.eth.toBytes('BancorNetwork'));

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

 var add = await getAddress(1);
 // console.log("CONTRACT ADDESS : "+add);

// For CONVERTER REGISTRY
const ConveterRegistry = await getAddress(2);
// console.log('Converter Registry Address:', ConveterRegistry);
const converterRegistry = new web3.eth.Contract(conveterRegistryAbi, ConveterRegistry);

// For  RESERVE TOKEN
const EtherToken = await getAddress(7);
// console.log('Reserve Token Address:', EtherToken);
const etherToken = new web3.eth.Contract(etherTokenAbi, EtherToken);

// For Bancor Network
var BancorNetwork = await getAddress(1);
// console.log('Bancor Network Address:', BancorNetwork);
const bancorNetwork = new web3.eth.Contract(bancorNetworkAbi, BancorNetwork);





// User Wallet & Private Key for creating smart token
const walletAddress = await promptly.prompt('ENTER YOUR WALLET ADDRESS : ');
try {
     const inputAddress = web3.utils.toChecksumAddress(walletAddress)
   } catch(e) { 
     console.error('⚠ INVALID ADDRESS..!', e.message) 
     return false;
   }
console.log('Wallet Address:', walletAddress);

const walletPrivateKey = await promptly.password('ENTER YOUR WALLET PRIVATE KEY (Accepted Format - 0x12fad.....9e) :  ', { replace: '*' });
if(walletPrivateKey != ""){ }else{
    console.log('⚠ Invalid private key..!', e.message);
    return false;
}


console.log("____________________________________________________________________________________________");
console.log("");





// For  LIQUID TOKEN NAME TOKEN
const nameW = await promptly.prompt("ENTER YOUR TOKEN NAME : ");
console.log('TOKEN NAME : ', nameW);
// For  LIQUID TOKEN SYMBOL
const symbolW = await promptly.prompt("ENTER YOUR TOKEN SYMBOL : ");
console.log('TOKEN SYMBOL: ', symbolW);
// For  RESERVE TOKEN
const decimalsW = await promptly.prompt("ENTER YOUR TOKEN DECIMALS : ");
console.log('TOKEN DECIMALS:', decimalsW);
// For  RESERVE WEIGHTS
const reserveW = await promptly.prompt("ENTER YOUR RESERVE WEIGHTS : ");
console.log('RESERVE WEIGHTS:', reserveW);


console.log("____________________________________________________________________________________________");
console.log("");

(async () => {
    var output = await sendETHER();
    console.log("AVAIL RESERVE : "+output);
    var TX_STATUS = await getTxStatus(output);
    console.log("TRANSACTION STATUS  : "+TX_STATUS);
    if(TX_STATUS == "SUCCESS"){ }else{
      console.log('⚠ FUNDING RESERVE FAILED..!', e.message);
      return false;
    }
    await time(10000);
})();

await time(3000);

console.log("____________________________________________________________________________________________");
console.log("");

(async () => {
    var txConvert = await NewConverter(nameW, symbolW, decimalsW, reserveW);
    console.log("CONVERTER INTERACTION : "+txConvert);
    var TX_STATUS = await getTxStatus(txConvert);
    console.log("TRANSACTION STATUS  : "+TX_STATUS);
    if(TX_STATUS == "SUCCESS"){ }else{
      console.log('⚠ CONVERTER INTERACTION FAILED..!', e.message);
      return false;
    }
    console.log("____________________________________________________________________________________________");
    console.log("");
    await time(20000);
})();

await time(3000);


var spender = await GetCurrentSmartToken();
// AMONT OF SMART TOKENS TO BE APPROVED
const amountA = await promptly.prompt("ENTER THE AMOUNT OF SMART TOKENS TO BE APPROVED/MINTED : ");
await time(3000);
console.log('APPROVED AMOUNT OF SMART TOKENS :', amountA);
// var pathConverterC = [EtherToken, spender, spender];
// var amountC = amountA;

console.log("____________________________________________________________________________________________");
console.log("");

var amountn = 0;
(async () => {
    var TX0 = await Approve(spender,amountn);
    console.log("RESET APPROVE : "+TX0);
    var TX_STATUS = await getTxStatus(TX0);
    console.log("TRANSACTION STATUS  : "+TX_STATUS);
    if(TX_STATUS == "SUCCESS"){ }else{
      console.log('⚠ RESET APPROVE FAILED..!', e.message);
      return false;
    }
    await time(1000);
})();
await time(13000);

console.log("____________________________________________________________________________________________");
console.log("");
(async () => {
    var TXA = await Approve(spender,amountA);
    console.log("AMOUNT OF TOKENS APPROVED : "+TXA);
    var TX_STATUS = await getTxStatus(TXA);
    console.log("TRANSACTION STATUS  : "+TX_STATUS);
    if(TX_STATUS == "SUCCESS"){ }else{
      console.log('⚠ APPROVE FAILED..!', e.message);
      return false;
    }
    await time(20000);
})();


await time(23000);
// console.log("PATH CONVERTERC : "+pathConverterC);
// console.log("AMOUNT TO CONVERT : "+ amountA);
console.log("____________________________________________________________________________________________");

(async () => {
    console.log("");
    console.log("**********************************************************************************");
    console.log("******** YOUR SMART TOKEN IS : "+spender+" ********");
    console.log("**********************************************************************************");
})();





// Step 1 : Fund the RESERVE with ETHER or Convert ETHER to RESERVE TOKENS  - WORKING  ✅

function sendETHER() {
    return new Promise(async (resolve, reject) => {
        // console.log("Convert is open")
        web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
        // console.log("NOUNCE :"+txCount);

        // Variables
        // var EtherToken = IMPORTED IN THE LIBS; // To Address
        var amount = '10';
        var sendAmount = web3.utils.toWei(amount, "ether");
        var nounce =  web3.utils.toHex(txCount);
        // var chainID = 1; // 1 for --mainnet 4 for rinkeby

        // constants
        const gasPrice = "0x07e3b29200";
        const gasLimit = "0xF458F";
      
        
      web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
        // console.log("NOUNCE :"+txCount);

        var nonce = txCount;
        web3.eth.getBalance(walletAddress, async (err, result) => {
            if (err) {
                return reject();
            }
            let balance = web3.utils.fromWei(result, "ether");
            // console.log("CURRENT ETH BALANCE = "+balance + " ETH");
            if(balance < sendAmount) {
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
                // console.log("TRANSACTION HASH : "+id);
                // resolve({id: id});
                resolve(id);
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


function NewConverter(nameW, symbolW, decimalsW, reserveW) {
    return new Promise((resolve, reject) => {
      //console.log("Convert is open")
      web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
      // console.log("NOUNCE :"+txCount);

      // Variables
      var type = 0;
      var name = nameW;
      var symbol = symbolW;
      var decimals = decimalsW;
      var maxConversionFee = 1;
      var reserveTokens = ["0x35e5C586DfA4b73492708803763F86EE011FB253"];
      var reserveWeights = [reserveW];

        const encoded = converterRegistry.methods.newConverter(type, name, symbol, decimals, maxConversionFee, reserveTokens, reserveWeights).encodeABI();
        //console.log("ENCODED : "+encoded);
        var rawTransaction = {
          "nonce": web3.utils.toHex(txCount),
          "gasPrice": "0x5F5E100",
          "gasLimit": "0x3E7235",
          "to": "0xc5398582D14A1EbaBf2D5f5f53383045767e59cE",
          "value": "0x0",
          "data": encoded
        };
   
        //console.log("RAW TRANSACTION"+rawTransaction);
  
        // var privKey = privateKey 
        var privKey = Buffer.from(walletPrivateKey, 'hex');
        //console.log("PRIV KEY : "+privKey)
        var tx = new Tx(rawTransaction,  {chain: 'mainnet', hardfork: 'petersburg'});
        //console.log("TX :"+tx)
  
        tx.sign(privKey);
        var serializedTx = tx.serialize();
        //console.log("Convert before Close");
        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash) => {
          if(err) {
            console.log(err)
            reject(new Error(err.message));
            return reject();
          }
          // console.log(hash);
          resolve(hash)
        })
      })
    }).catch(console.log(""));
  }
  

// TOTAL SMART TOKENS MINTED - Working ✅

function  GetSmartTokenCount() {
    return new Promise((resolve, reject) => {
      converterRegistry.methods.getSmartTokenCount().call().then(function (result) {
      //console.log("Number of SMART TOKEN's  " + " "  + result)
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
    //console.log("CURRENT ST : "+ addressToApprove);
    return new Promise((resolve, reject) => {
      const contractAddr = EtherToken;
      //console.log("CONTRACT ADDRESS :"+contractAddr)
      //console.log("Approve is open")
      web3.eth.getTransactionCount(walletAddress, function(error, txCount) {
        //console.log("TX COUNT :"+txCount);

  
        const encoded = etherToken.methods.approve(spender,value).encodeABI();
        //console.log("ENCODED : "+encoded);
        var rawTransaction = {
          "nonce": web3.utils.toHex(txCount),
          "gasPrice": "0x07e3b29200",
          "gasLimit": "0xF458F",
          "to": EtherToken,
          "value": "0x0",
          "data": encoded
        };
  
        //console.log("RAW TRANSACTION"+rawTransaction);
        
        console.log("AMMOUNT APPROEVED :  "+value);
  
        // var privKey = privateKey
        var privKey = Buffer.from(walletPrivateKey, 'hex');
        //console.log("PRIV KEY : "+privKey)
        var tx = new Tx(rawTransaction,  {chain: 'mainnet', hardfork: 'petersburg'});
        // console.log("TX :"+tx)
  
        tx.sign(privKey);
        var serializedTx = tx.serialize();
        // console.log("Approve before Close");
        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash) => {
          if(err) {
            console.log(err)
            reject(new Error(err.message))
          }
          // console.log(hash);
          resolve(hash)
        })
      })
    })
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



}


(async () => {
     script();
})();



// CONVERTERREGISTRY - 0xc5398582D14A1EbaBf2D5f5f53383045767e59cE 💚 [GET EVERYTHING]
// ETHERTOKEN / RESERVE - 0x35e5C586DfA4b73492708803763F86EE011FB253 
// BANCOR NETWORK - 0xd34294a4B98Cf7CECcbd561109A89a6D42170DcB
// WA - 0x1F9141D15a23326BB5ec83DC19748C4C2fFa37f6 💚
// PKEY - 72d9d99e7a14e9a59fca35fd70eaf4e41418cb80ff91bd09fc87b51bc35e113c 💚
// SMT EXAMPLE - 0xD3E5fc5FDf5C523A680dEaa7f7439f23DD7a387D
// 400954
// NOUNCE FROM MEM POOL 
// CHECK TX STATUS IN BETWEEN THE TX's
// CONTRACT REGISTRY HAS ALL THE CONTRACT DETAILS - CALL THIS TO GET THE DATA 
// 0xb1bcf3ad02beeb791d91f41d6ab0ab90bf6d5ff3a1a46516ab9805dd499eed70

// NAME : ContractRegistry - 
// CONTRACT ADDESS : 0x910E4A6e17746EA5687EF3E11Ca4a305522abEc1
// NAME : BancorNetwork - 1
// CONTRACT ADDESS : 0xd34294a4B98Cf7CECcbd561109A89a6D42170DcB
// NAME : BancorConverterRegistry - 2
// CONTRACT ADDESS : 0xc5398582D14A1EbaBf2D5f5f53383045767e59cE
// NAME : ConverterFactory
// CONTRACT ADDESS : 0x1aB96ef2D3466162537fE724aC36317453080659
// NAME : BancorConverterRegistryData
// CONTRACT ADDESS : 0x022e3f3D667afDc304Ba87a12480bB4C1Fc3fA3b
// NAME : ConversionPathFinder
// CONTRACT ADDESS : 0x499Ba7CbF7ae6DE51dc632b1713314BD376046F8
// NAME : BancorFormula
// CONTRACT ADDESS : 0x694C13923FE193bAB825421cF2Cd5C4cc80AD815
// NAME : BNTToken - 7
// CONTRACT ADDESS : 0x35e5C586DfA4b73492708803763F86EE011FB253