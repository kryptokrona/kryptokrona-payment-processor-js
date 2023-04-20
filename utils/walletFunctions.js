
// Importing all the livs
const globals = require('../globals.js')
const fs = require('fs')
const Crypto = require("kryptokrona-crypto").Crypto;
const {sleep} = require('../utils/misc')


const crypto = new Crypto();


// Defining arrays
let known_pool_txs = []; 
// let waitingPayments = [];
let foundPayments = []
var paymentStatuses = globals.getPaymentStatuses() 


// Function go get the priv/pub/spend key
async function getKeyset() {
  let wallet = await globals.getWallet()
  const privateViewKey = wallet.getPrivateViewKey();
  const [publicSpendKey, privateSpendKey, err] = await wallet.getSpendKeys(wallet.getPrimaryAddress());
  const keyset = { publicSpendKey, privateSpendKey, privateViewKey };  
  return keyset
}

// Push a function to the waiting payments array
// async function addPayment(paymentID) {
//   waitingPayments.push(paymentID)
// }


// Find new TXs
async function backgroundSyncTransactions(keyset) { 
  let message_was_unknown;
  try {
    const resp = await fetch(`http://techy.ddns.net:11898/get_pool_changes_lite`, {
    method: "POST",
    body: JSON.stringify({ knownTxsIds: known_pool_txs })
  });
  let json = await resp.json();
  json = JSON.stringify(json).replaceAll(".txPrefix", "").replaceAll("transactionPrefixInfo.txHash", "transactionPrefixInfotxHash");
  json = JSON.parse(json);
  let txs = json.addedTxs;
  
  known_pool_txs = known_pool_txs.filter((n) => !json.deletedTxsIds.includes(n))
  
  txs.forEach(async tx => {
    await checkTx(tx, keyset);
  });
  
} catch (err) {
  console.log(err);
  console.log("Sync error");
}
}


// Check if the TX is for us
async function checkTx(tx, keyset) {
  //Removes TX over 200 char in size, since they Hugin messages
  if (tx.transactionPrefixInfo.extra.length >= 200) return
  //push the TX to knownTxs
  known_pool_txs.push(tx.transactionPrefixInfotxHash);
  
  //Read the transactions pub key
  const txPublicKey = tx.transactionPrefixInfo.extra.substring(2, 66);
  
  //Generate the derivation
  const derivation = await 
  crypto.generateKeyDerivation(txPublicKey, keyset.privateViewKey);
  
  //Make a list of outputs
  const transactionOutputs = tx.transactionPrefixInfo.vout.entries();
  
  for (const [outputIndex, output] of tx.transactionPrefixInfo.vout.entries()) {
    
    // Derivate a new key and see if it matches your key
    
    const derivedSpendKey = await crypto.underivePublicKey(derivation, outputIndex, output.target.data.key);
    
    //Match if otherwise continue
    if (keyset.publicSpendKey === derivedSpendKey) {
      console.log("******************** Found transaction *******************", derivedSpendKey);
      var paymentID = tx.transactionPrefixInfo.extra.substring(72, 72 + 64)
      console.log(paymentID)
      foundPayments.push(paymentID)
      
    }
    continue;
  }
}


// Check if the wallet file already exists 
async function checkForWallet(walletName, walletPass, node, port) {
  try {
    if (fs.existsSync('./' + walletName)) {
      //file exists
    } else {
      const daemon = new WB.Daemon(node, port)
      
      const wallet = await WB.WalletBackend.createWallet(daemon);
      
      console.log('Created wallet');
      
      await wallet.start();
      
      console.log('Started wallet');
      
      wallet.saveWalletToFile(walletName, walletPass);
      
      /* Make sure to call stop to let the node process exit */
      wallet.stop();
    }
  } catch(err) {
    console.error(err)
  }
  
}


// Function to wait for the payment before recieved 
async function lookForPreliminaryTransaction(paymentID) {
  console.log("looking for payments...")
  foundPayments.forEach(payment => {
    if(payment == paymentID) {
      console.log("payment", paymentID, "has been found!")
      paymentStatuses.statuses.forEach(async status => {
        if(status.paymentID == paymentID && status.status == 'WAITING') {
          notFound = false
          status.status = 'SPOTTED'
          globals.changePaymentStatus(paymentStatuses)
        }
      })

    }
    
  })
}

//Function to wait for the transaction to get in to the wallet
async function lookForTransaction(transaction) {
  paymentStatuses = globals.getPaymentStatuses()
  paymentStatuses.statuses.forEach(status => {
    if(transaction.paymentID == status.paymentID && status.amount * 100000 <= transaction.totalAmount()) {
      status.status = 'RECIEVED'
      globals.changePaymentStatus(paymentStatuses)
    }
  })

}

module.exports = {checkForWallet, lookForTransaction, lookForPreliminaryTransaction, getKeyset, backgroundSyncTransactions, checkTx}
