const request= require ('supertest')
const app = require ('../app')

describe('GET /itinerary', function() {

    it('Must respond with the 200 status code', function(done) {
      request(app)
        .get('/itineraries')
        .expect(201, done)
    })

    it('Must respond with 404 status code', function(done) {
      request(app)
        .get('/itinerarynpx')
        .expect(404)
        .end(function(err, res){
          if (err) return done(err)
          return done()
        })
    });
  });

  describe('UPDATE /itinerary', function() {

    it('Must respond with the 201 status code', function(done) {
      request(app)
        .patch('/itineraries/63166032d5fc4c0bc157c398')
        .send({    user: [
            "63125913116eb5ae120cb622"
        ]})
        .expect(200, done)
    })

    it('Must respond with 404 status code', function(done) {
      request(app)
      .patch('/itineraries/63166032d5fc4c0bc157c')
      .send({    user: [
          "63125913116eb5ae120cb622"
      ]})
      .expect(400)
        .end(function(err, res){
          if (err) return done(err)
          return done()
        })
    });
  });

  describe('GET BY CITY /itinerary', function() {

    it('Must respond with the 200 status code', function(done) {
      request(app)
        .get('/itineraries/query?city=630e518bbe28a5faae2423c0')
        .expect(201, done)
    })
  
    it('Must respond with 404 status code', function(done) {
      request(app)
        .get('/itinerar/query?city=630e518bbe28a5faae2423')
        .expect(404)
        .end(function(err, res){
          if (err) return done(err)
          return done()
        })
    });
  });