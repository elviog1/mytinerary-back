const request = require('supertest')
const app = require('../app')

describe('POST /comment',function(){

    it('Must respond with 401 status code (unauthorized)', function (done){
        request(app)
        .post('/comments')
        .send({"comment": "upalalaaaaaaaa",
        "itinerary": "63222b187aa3a21ba2a5fdb1"})
        .expect(401)
        .end(function(err,res){
            if(err) return done(err)
            return done()
        })
    })
})
describe('DELETE /comment',function(){

    it('Must respond with 200 status code', function (done){
        request(app)
        .delete('/comments/632d33569f48baaacd9754df')//esta id ya no existe
        .expect(200)
        .end(function(err,res){
            if(err) return done(err)
            return done()
        })
    })
})

