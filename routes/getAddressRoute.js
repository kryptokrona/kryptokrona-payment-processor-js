const express = require('express')
const router = express.Router()
const globals = require('../globals')

router.get("/", async function(req, res, next) {
 const wallet = await globals.getWallet()

 res.send({'walletAddress': await wallet.getPrimaryAddress()})
    
})

module.exports = router