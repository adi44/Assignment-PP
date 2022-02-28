let chai = require("chai");
let chaiHTTP = require("chai-http");
let should = chai.should();

chai.use(chaiHTTP);

describe('transactions' ,() => {
    describe('/GET transactions',() =>{
        it('should be able to get all the transactions',(done)=>{
            chai.request("http://localhost:3000").get('/transactions')
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.message.should.be.a('array');
                done();
            });
        });
    });

    describe('/POST transactions', () =>{
        it('should be able to post transactions',(done) =>{
            let transaction = {
                from : "0x000",
                to : "0x01",
                amount : 100,
                timestamp :"8:34"
            }
            chai.request("http://localhost:3000").post('/transactions')
            .send(transaction)
            .end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });
});