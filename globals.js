const WB = require('kryptokrona-wallet-backend-js');
const {sleep} = require('./utils/misc')

// Set global variables
let globals = {
  wallet: "NULL",
  walletName: "test.wallet",
  walletPass: "1234",
  node: "techy.ddns.net",
  port:  11898,
  keyset: {},
  paymentStatuses: {'statuses': []}
}

exports.wallet = function(value) {
  globals.wallet = value
};
exports.getWallet = function() {
  return globals.wallet
}
exports.keyset = function(value) {
  globals.keyset = value
}
exports.addPaymentStatus = function(value) {
  globals.paymentStatuses.statuses.push(value)
}
exports.changePaymentStatus = function(value) {
  globals.paymentStatuses = value
}
exports.getPaymentStatuses = function() {
  return globals.paymentStatuses
}
exports.start = async function() {
  const daemon = new WB.Daemon(globals.node, globals.port);
  
  let [wallet, error] = await WB.WalletBackend.openWalletFromFile(daemon, globals.walletName, globals.walletPass);
  if(error) {
    console.error(error)
  }
  //console.log(wallet)
  wallet.start()
  console.log(wallet.getPrimaryAddress())
  const {lookForTransaction} = require('./utils/walletFunctions')
  globals.wallet = wallet
  wallet.on('incomingtx', async (transaction) => {
    sleep(1000)
    console.log(`Incoming transaction of paymentID: ${transaction.paymentID} and sum of ${transaction.totalAmount()} received!`);
    lookForTransaction(transaction)
  });

};

