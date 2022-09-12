const User = require ('../models/User')
const crypto = require('crypto')
const bcryptjs = require ('bcryptjs')
const { triggerAsyncId } = require('async_hooks')
const SendmailTransport = require('nodemailer/lib/sendmail-transport')
const sendMail = require('./sendMail')

const userController ={
    // create: async(req,res) =>{
    //     const{name, lastName, mail, password, photo, country} = req.body 
    //     try{
    //        await new User({name, lastName, mail, password, photo, country}).save()
    //        res.status(201).json({
    //           message: 'user created',
    //           success: true,
    //        })
    //     } catch(error){
    //         console.log(error);            
    //         res.status(400).json({
    //             message: "couldn't create user",
    //             success: false,
    //         })
    //     }
    // },
    all: async(req,res) =>{
        let users
        let query = {}
  
        try{
           users = await User.find(query)
           res.status(201).json({
              message: 'all users found',
              response: users,
              success: true,
           })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "couldn't find users",
                success: false,
            })
        }
    },
    signUp: async (req, res) => {
        let {name, photo, mail, password, country, from, role/*viene del front para usar este metodo para ambos casos*/ } = req.body
        try{
           let user = await User.findOne({mail})
           if (!user) {
              let logged = false
              let verified = false
              let code = crypto.randomBytes(15)//va a tener 15 digitos
              .toString('hex')//va a ser hexagecimal
              if (from === 'form'){
                password = bcryptjs.hashSync(password,10)//metodo que requiere la contraseña y el nivel de seguridad de hasheo 
                user = await new User({name, photo, mail, password:[password], country, role, from:[from], logged, verified, code}).save()
                sendMail(mail, code)
                res.status(200).json({
                   message: 'user signed up from form',
                   success: true
                })
              } else {
                password = bcryptjs.hashSync(password,10)
                verified = true
                user =  await new User({name, photo, mail, password:[password], country, role, from:[from], logged, verified, code}).save()
                res.status(200).json({
                    message: 'user signed up from '+from,
                    success: true
                 })
            } 

              
           } else {
               if (user.from.includes(from)) {
                  res.status(200).json({ //200 a confirmar/estudiar
                     message:'user already exist',
                     success: false //porque no tiene exito la creacion de usuario
                  })
               } else {
                 user.from.push(from), //vinculo la nueva forma de registro al usuario encontrado
                 user.verified = true //
                 user.password.push(bcryptjs.hashSync(password,10))
                 await user.save()
                 res.status(201).json({
                    message: 'user signed up from '+from,
                    success: true
                 })
               }
           }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message:"couldn't sign up",
                success:false
            })
        }
    },

    //el codigo generado pra verificar en sign up se pasa por params a este otro metodo
    verifyMail: async (req, res) => {
        const{code} = req.params
        try{
        let user = await User.findOne({code})
        if(user){
            user.verified = true
            await user.save()
            res.status(200).redirect(301, 'http://localhost:3000')
        } else {
            res.status(404).json({
                message: "this email doesn't have an account",
                success:false
            })
        }
    }catch(error){
        console.log(error)
        res.status(400).json({
            message:"couldn't sign up",
            success:false
        })
    }
    },

    signIn: async () => {},

    signOut: async () => {}, //findOneAndUpdate y cambiar logged de true a false
}

    module.exports = userController    