const express = require('express')
const router = express.Router()
const crypto = require('crypto')

router.get("/", async function(req, res, next) {
 const paymentID = crypto.randomBytes(32).toString('hex')

 res.send({'PaymentID': paymentID})
    
})

module.exports = router