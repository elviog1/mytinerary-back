const request = require('supertest')
const app = require('../app')

describe('GET / user',function (){

    // it('Must respond with the 200 status code', function (done){
    //     request(app)
    //     .get('/auth')
    //     .expect(201,done)
    // })

    it('Must respond with 404 status code', function(done){
        request(app)
        .get('/authNOANDA')
        .expect(404)
        .end(function(err,res){
            if(err) return done(err)
            return done()
        })
    })
})

// describe('POST / user',function(){

//     it('Must respond with 400 status code', function (done){
//         request(app)
//         .post('/auth')
//         .send({})
//         .expect(404)
//         .end(function(err,res){
//             if(err) return done(err)
//             return done()
//         })
//     })
// })