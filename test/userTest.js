const request = require('supertest')
const app = require('../app')

// describe('POST /user',function(){

//     it('Must respond with 200 status code', function (done){
//         request(app)
//         .post('/auth/signup')
//         .send({"name":"juanjuan",
//                      "photo":"https://hola.com",
//                      "mail":"asdasdasdasd",
//                      "password":"contraseña",
//                      "country":"pais",
//                      "from":"form",
//                       "role":"user"})
//         .expect(200)
//         .end(function(err,res){
//             if(err) return done(err)
//             return done()
//         })
//     })
//     it('Must respond with name to short', function (done){
//         request(app)
//         .post('/auth/signup')
//         .send({"name":"ju",
//                      "photo":"https://hola.com",
//                      "mail":"asdasdasdasd",
//                      "password":"contraseña",
//                      "country":"pais",
//                      "from":"form",
//                       "role":"user"})
//         .expect(400)
//         .end(function(err,res){
//             if(err) return done(err)
//             return done()
//         })
//     })
//     it('Must respond with invalid URL', function (done){
//         request(app)
//         .post('/auth/signup')
//         .send({"name":"juanjuan",
//                      "photo":"foto",
//                      "mail":"asdasdasdasd",
//                      "password":"contraseña",
//                      "country":"pais",
//                      "from":"form",
//                       "role":"user"})
//         .expect(400)
//         .end(function(err,res){
//             if(err) return done(err)
//             return done()
//         })
//     })
// })

describe ('POST /user',async function(){
    // it('Must respond with 200 status code', function (done){
    //     request(app)
    //     .post('/auth/signin')
    //     .send({      "mail":"jeryflr@gmail.com",
    //                  "password":"contraseña",
    //                  "from":"form",})
    //     .expect(200)
    //     .end(function(err,res){
    //         if(err) return done(err)
    //         return done()
    //     })
    // })
    it('Must respond with mail to short', async function (done){
        await request(app)
        .post('/auth/signin')
        .send({ /*     "mail":"asd",
                     "password":"contraseña",
    "from":"form",*/})
        .expect(400)
        .then(function(err,res){
            if(err) return done(err)
            return done(res)
        })
    })
    it('Must respond with password to short', async function (done){
         await request(app)
        .post('/auth/signin')
        .send({      "mail":"asdasdasdasd",
                     "password":"cont",
                     "from":"form",})
        .expect(400)
        .then(function(err,res){
            if(err) return done(err)
            return done(res)
        })
    })
})
