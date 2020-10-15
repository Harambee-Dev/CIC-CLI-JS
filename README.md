# CIC-JS

### Index.js helps you set up your smart token

```
$ node index.JS
ENTER YOUR WALLET ADDRESS : 0x1F9141D15a23326BB5ec83DC19748C4C2fFa37f6
Wallet Address: 0x1F9141D15a23326BB5ec83DC19748C4C2fFa37f6
ENTER YOUR WALLET PRIVATE KEY (Accepted Format - 0x12fad.....9e) : ****************************************************************

____________________________________________________________________________________________

ENTER YOUR TOKEN NAME : TOLL
TOKEN NAME :  TOLL
ENTER YOUR TOKEN SYMBOL : TOL
TOKEN SYMBOL:  TOL
ENTER YOUR TOKEN DECIMALS : 0
TOKEN DECIMALS: 0
ENTER YOUR RESERVE WEIGHTS : 25000
RESERVE WEIGHTS: 25000
____________________________________________________________________________________________

AVAIL RESERVE : 0x7d256fd6b227ec8a43e2d2f566c52fd9ce70f54951fe1b9bbce28b4ed2c214e5
TRANSACTION STATUS  : SUCCESS
____________________________________________________________________________________________


CONVERTER INTERACTION : 0xebaf85b9ebe9a6dfd2596c5091f5973cd720eff5cf09fada975377d95503374b
TRANSACTION STATUS  : SUCCESS
____________________________________________________________________________________________

ENTER THE AMOUNT OF SMART TOKENS TO BE APPROVED/MINTED : 100000000
APPROVED AMOUNT OF SMART TOKENS : 100000000
____________________________________________________________________________________________

AMMOUNT APPROEVED :  0
RESET APPROVE : 0xd89093b220e5f47650a4282cfde432d301e92b1cd8ad64a2a1b02814e7e5df56
TRANSACTION STATUS  : SUCCESS
____________________________________________________________________________________________

AMMOUNT APPROEVED :  100000000
AMOUNT OF TOKENS APPROVED : 0xa5647e3943e80bc29eed738fb2d61c21b85471be7bc0e8bc69a20315f5031417
TRANSACTION STATUS  : SUCCESS
____________________________________________________________________________________________

**********************************************************************************
******** YOUR SMART TOKEN IS : 0xc07BEfdB478A8463458cB789230Ee3477eC7a78c ********
**********************************************************************************
```

### Mint.js helps you to MINT your smart TOKENS
```
$ node mint.js
ENTER YOUR SMART TOKEN ADDRESS : 0xc07BEfdB478A8463458cB789230Ee3477eC7a78c
ENTER AMOUNT OF TOKENS TO BE MINTED : 100000

MINT TRANSACTION HASH : 0x89c8e897a4aac48c9eca76ad4a8c2d3bb94ef5f561955cc8ec339f7495bbb0c2
MINT TRANSACTION STATUS : SUCCESS
```

### fetch.js helps you to List all the contract addresses
```
$ node fetch.js
NAME : ContractRegistry
CONTRACT ADDESS : 0x910E4A6e17746EA5687EF3E11Ca4a305522abEc1
NAME : BancorNetwork
CONTRACT ADDESS : 0xd34294a4B98Cf7CECcbd561109A89a6D42170DcB
NAME : BancorConverterRegistry
CONTRACT ADDESS : 0xc5398582D14A1EbaBf2D5f5f53383045767e59cE
NAME : ConverterFactory
CONTRACT ADDESS : 0x1aB96ef2D3466162537fE724aC36317453080659
NAME : BancorConverterRegistryData
CONTRACT ADDESS : 0x022e3f3D667afDc304Ba87a12480bB4C1Fc3fA3b
NAME : ConversionPathFinder
CONTRACT ADDESS : 0x499Ba7CbF7ae6DE51dc632b1713314BD376046F8
NAME : BancorFormula
CONTRACT ADDESS : 0x694C13923FE193bAB825421cF2Cd5C4cc80AD815
NAME : BNTToken
CONTRACT ADDESS : 0x35e5C586DfA4b73492708803763F86EE011FB253
```

### script.js helps you to execute every single function indepndenty
```
// you need to uncomment the functions calls and execute the script

$ node script.js
```

