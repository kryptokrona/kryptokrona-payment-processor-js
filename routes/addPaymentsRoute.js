const express = require('express')
const router = express.Router()

const globals = require('../globals.js');

router.get("/", async function(req, res, next) {
    const paymentID = req.query['paymentID']
    const amount = req.query['amount']

    if(!paymentID | !amount) {
        res.status(403), res.end()
    } else {
    const payment = {'paymentID': paymentID, 'status': 'WAITING', 'amount': amount}
    globals.addPaymentStatus(payment)
    res.send({status: 'ok'})
    }
})

module.exports = router