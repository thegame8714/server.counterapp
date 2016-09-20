//To Run the tests
//Comment the line start(port); in server js
//and run "mocha" from the shell

var expect = require('chai').expect;
var request = require('superagent');
var app = require('../server')

describe('Simple tracker app', () => {

  var port = 8080;
  var url = "http://localhost:" + port;

  var user = {
    "first_name": "John",
    "last_name": "Doe",
    "address_street_line_1": "The White House",
    "address_street_line_2": "President Avenue",
    "address_street_line_3": "",
    "post_code": "US 001",
    "country": "US",
    "verified": true
  }

  before(done => app.start(port, done));

  after(done => app.stop(done));

  it('should add a user', done => {
    request
      .post(url + '/api/users')
      .type('form')
      .send(user)
      .end((err, res) => {
        expect(res).to.exists;
        expect(res.status).to.equal(200);
        expect(res.body.message).to.be.equal("User created");
        done();
      })
  });
});
