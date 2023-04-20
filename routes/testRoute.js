const express = require('express')
const router = express.Router()
const { waitforPreliminaryTransaction, waitforTransaction, addPayment} = require('../utils/walletFunctions')
const hashing = require('crypto')
const globals = require('../globals.js');
const path = require('path');

const amount = 1
/* 
OBS!! THIS ROUTE IS ONLY FOR DEVELOPMENT PURPOSE, DO NOT USE FOR ANYTHING ELSE
*/

router.get("/", async function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../www/" + 'index.html'))
})

module.exports = router