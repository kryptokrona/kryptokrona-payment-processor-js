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

describe('PAYMENT ENDPOINTS', () => {

    describe('CREATE A NEW PAYMENT', () => {
        it('It should give a 200 and ok', () => {
            return request(server)
            .get(`/addPayment?paymentID=${examplePayment.paymentID}&amount=${examplePayment.amount}`)
            .expect(200)
            .then(res => {
                expect(res.body.status).to.be.equal('ok')
            })
        })
    })
    describe('GET PAYMENT STATUS', () => {
        it('It should give a 200 and WAITING', () => {
            return request(server)
            .get(`/payment?paymentID=${examplePayment.paymentID}`)
            .expect(200)
            .then(res => {
                expect(res.body.status).to.be.equal('WAITING')
            })
        })
})
})
