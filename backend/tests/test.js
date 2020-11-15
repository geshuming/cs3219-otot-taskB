let chai = require('chai');
let chaiHttp = require('chai-http');

let pool = require('../database');
let { app } = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Contacts', function() {
  let testContactId = 0;
  const testContact = {
    name: 'Ge Shuming',
    email: 'geshuming@fakemail.com',
    phone: 81234567
  };
  
  beforeEach(function(done) {
    pool.query('DELETE FROM contacts;',
      function(error, results, fields) {
        if (error) {
          done(error);
        } else {
          pool.query('INSERT INTO contacts SET ?',
          testContact,
          function(error, results, fields) {
            if (error) {
              done(error);
            } else {
              testContactId = results.insertId;
              done();
            }
          });
        }
      }
    );
  });

  describe('/GET', () => {
    it('it should GET all the contacts', function(done) {
      chai.request(app)
        .get('/api/contacts')
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.should.be.a('array');
            res.body.data.length.should.be.eql(1);
            res.body.data[0].should.be.eql({ ...testContact, id: testContactId});
            done();
          }          
        });
    });
  });

  // TODO: Fix post request to return inserted row
  describe('/POST', () => {
    it('it should POST a contact ', (done) => {
      chai.request(app)
        .post('/api/contacts')
        .send(testContact)
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          }
        });
    });
  });

  // TODO: Fix put request to return changed row
  describe('/PUT', () => {
    it('it should PUT a contact ', (done) => {
      chai.request(app)
        .put('/api/contacts/' + testContactId)
        .send({...testContact, email: 'different@fakemail.com'})
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          }
        });
    });
  });

  describe('/DELETE', () => {
    it('it should DELETE a contact ', (done) => {
      chai.request(app)
        .delete('/api/contacts/' + testContactId)
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          }
        });
    });
  });
});