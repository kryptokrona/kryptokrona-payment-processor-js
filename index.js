

// Importing libs
const WB = require('kryptokrona-wallet-backend-js');

const express = require('express');
const app = express()

var cors = require('cors')



// Importing functions
const {getKeyset, backgroundSyncTransactions} = require('./utils/walletFunctions');
const {sleep} = require('./utils/misc')


// Loading in the global values
const globals = require('./globals.js');


// Importing all the routes
const testRoute = require('./routes/testRoute')
const paymentRoute = require('./routes/paymentRoute')
const addPaymentsRoute = require('./routes/addPaymentsRoute')
const getAddressRoute = require('./routes/getAddressRoute')
const generatePaymentIDRoute = require('./routes/generatePaymentIDRoute')

// Express.js settings
app.use(cors())


// Adding all the routes
app.use('/test', testRoute)
app.use('/payment', paymentRoute)
app.use('/addPayment', addPaymentsRoute)
app.use('/getAddress', getAddressRoute)
app.use('/generatePaymentID', generatePaymentIDRoute)


// Start the web server
app.listen(3000, function(err){
    if (err) console.log(err);
    console.log("Server listening on port", 3000);
});

// Main function
async function main() {
    await globals.start()
    const wallet = globals.getWallet()
    const keyset = await getKeyset()
    globals.keyset(keyset)
    console.log(keyset)

    while (true) {
        try {
            await sleep(10 * 1000)
            console.log('Checking for tx....')
            backgroundSyncTransactions(keyset)
        } catch(error) {
            console.error(error)
        }
    }
}
main(); // Start the program

process.on( 'SIGINT', async function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    const wallet = globals.getWallet()
    await wallet.stop()
    // some other closing procedures go here
    process.exit();
  })






