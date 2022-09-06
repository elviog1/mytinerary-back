const {assert} = require('chai')
const request= require ('supertest')
const app = require ('../app')

describe('POST /city', function() {
    it('Must respond with the id', function(done) {
      request(app)
      .post('/cities')
      .send({name: "santadilla", image: 'hola.png', country: 'argentina papa', population:10000, fundation:'123'})
      .then(response => {
        assert.isString(response.body.id)
        done()
    })
    }) 

    it('Must respond with the 201 status code', function(done) {
      request(app)
        .post('/cities')
        .send({name: "santadilla", image: 'hola.png', country: 'argentina papa', population:10000, fundation:'123'})
        .expect(201, done)
    })

    it('Must respond with 400 status code', function(done) {
      request(app)
        .post('/cities')
        .send({})
        .expect(400)
        .end(function(err, res){
          if (err) return done(err)
          return done()
        })
    });
  });
