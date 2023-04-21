let server = require('../index')
let chai = require('chai')
let chaiHttp = require('chai-http')
let request = require('supertest')

const { expect } = chai

chai.should()
chai.use(chaiHttp)

const examplePayment = {
    paymentID: "2e19a8c085dc250bb74e4e286e373165252245cabc0bb323e699ba3757eead22",
    amount: 1,
}

beforeEach(function (done) {
    setTimeout(function(){
      done();
    }, 1000);
  });

describe('FUNCTION ENDPOINTS', () => {

    describe('GET WALLET ADDRESS', () => {
        it('It should give a 200 and include SEKR', () => {
            return request(server)
            .get(`/getAddress`)
            .expect(200)
            .then(res => {

                expect(res.body.walletAddress).to.include('SEKR')
            })
        })
    })
    describe('GET GENERATED PAYMENT ID', () => {
        it('It should give a 200 and a hex value', () => {
            return request(server)
            .get(`/generatePaymentID`)
            .expect(200)
            .then(res => {
                expect(res.body.paymentID).matches(/[0-9a-fA-F]+/)
            })
        })
})
})