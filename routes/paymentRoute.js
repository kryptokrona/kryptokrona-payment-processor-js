const express = require('express')
const router = express.Router()
const { lookForPreliminaryTransaction, addPayment} = require('../utils/walletFunctions')
const globals = require('../globals.js');
const {sleep} = require('../utils/misc')

var paymentStatuses = globals.getPaymentStatuses()

var paymentID = ""

router.get("/", async function(req, res, next) {
    paymentID = req.query['paymentID']
    if (!paymentID) res.status(403) // send an error if paymentID is missing
    paymentStatuses = globals.getPaymentStatuses()
    await lookForPreliminaryTransaction(paymentID)
    console.log(paymentStatuses.statuses)
    paymentStatuses.statuses.forEach(status => {
        if (status.paymentID == paymentID) {
            res.send(status)
        }
    })
})

module.exports = router