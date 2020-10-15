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



// 0x910E4A6e17746EA5687EF3E11Ca4a305522abEc1

// For CONTRACT REGISTRY
var contractRegistryAbi = require('./libs/contractRegistryAbi');
var ContractRegistry = require('./libs/ContractRegistry');


const contractRegistry = new web3.eth.Contract(contractRegistryAbi, ContractRegistry);

// contractNames(uint256)

async function fetch(){
    
    async function  getContractNames(value) {
    //        const val = await promptly.prompt("ENTER INDEX : ");
        const val = value;
        return new Promise((resolve, reject) => {
          contractRegistry.methods.contractNames(val).call().then(function (result) {
          return resolve(result);
        })
    });
    }

    // var NAME = await getContractNames();
    // console.log("CONTRACT AT INDEX : "+NAME);



    // const inBytes = utils.formatBytes32String(NAME);
    // const inBytes = web3.utils.fromAscii(NAME);
    // console.log("IN BYTES: "+inBytes);

    // addressOf(bytes32)
    async function getAddress(value){
        var NAME = await getContractNames(value);
        console.log("NAME : "+NAME);
        const inBytes = web3.utils.fromAscii(NAME);
        // const inbytes = await promptly.prompt("ENTER BYTES32 DATA OF THE CONTRACT NAME : ");
        // const inbytes = await getContractNames();
        return new Promise((resolve, reject) => {
            contractRegistry.methods.addressOf(inBytes).call().then(function(result){
                return resolve(result);
            })
        })
    }
    for(i=0;i<8;i++){
        var add = await getAddress(i);
        console.log("CONTRACT ADDESS : "+add);
    }

}

(async() => {
    fetch();
})();

//getContractNames



