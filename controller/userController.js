const User = require ('../models/User')
const crypto = require('crypto')
const bcryptjs = require ('bcryptjs')
const { triggerAsyncId } = require('async_hooks')
const SendmailTransport = require('nodemailer/lib/sendmail-transport')
const sendMail = require('./sendMail')
const Joi = require('joi')
const jwt = require ('jsonwebtoken')
const { token } = require('morgan')

const validator = Joi.object({
    "name": Joi.string().min(4).message("name to short").max(15).message("name to long"),
    "country": Joi.string().min(1).message("invalid country"),
    "photo": Joi.string().uri().message("invalid URL"),
    "mail": Joi.string().min(8).message("mail to short"),
    "role":Joi.string(),
    "password":Joi.string().min(6).message("password to short"),
    "from": Joi.string()
})

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
    update: async(req,res) =>{
        let {id} = req.params
        let modifyU = req.body
        try{
            // let result = await validator.validateAsync(req.body)
            let user = await User.findOneAndUpdate({_id:id},modifyU)
            if(user){
                res.status(200).json({
                    message: "user update successfully ",
                    response: user,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "user not found ",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },
    signUp: async (req, res) => {
        let {name, photo, mail, password, country, from, role/*viene del front para usar este metodo para ambos casos*/ } = req.body
        try{
            let result = await validator.validateAsync(req.body)
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
                message:error.message,
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

    signIn: async (req,res) => {
        let result = await validator.validateAsync(req.body)
        const {mail,password,from} = req.body
        try{
            const user = await User.findOne({mail})
            if(!user){ // si user no existe
                res.status(404).json({
                    message: "User doesn't exist, please sign up",
                    success: false
                })
            }else if(user.verified){ // si user existe y esta verificado
                const checkPass = user.password.filter(passwordElement => bcryptjs.compareSync(password,passwordElement))
                if(from === "form"){ // si el user intenta ingresar por form
                    if(checkPass.length >0){ // si contraseña coincide

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            photo:user.photo,
                            country:user.country
                           // from: user.from
                        } // esto podrua servir para el prox sprint

                        user.logged = true
                        await user.save()
                        const token = jwt.sign({id: user._id}, process.env.KEY_JWT, {expiresIn: 60*60*24})
                        res.status(200).json({
                            success: true,
                            response: {user:loginUser,
                                token:token},                           
                            message: "Welcome " + user.name
                        })
                    }else{ // si contraseña NO coincide
                        res.status(400).json({
                            success: false,
                            message: "Username or password incorrect"
                        })
                    }
                }else{ // si el user intenta ingresar por red social
                    if(checkPass.length >0){ // si contraseña coincide

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            photo:user.photo,
                            country:user.country
                           // from: user.from
                        } // esto podrua servir para el prox sprint

                        user.logged = true
                        await user.save()
                        const token = jwt.sign({id: user._id}, process.env.KEY_JWT, {expiresIn: 60*60*24})
                        res.status(200).json({
                            success: true,
                            response: {user:loginUser,
                                token:token},
                            message: "Welcome " + user.name
                        })
                    }else{ // si contraseña NO coincide
                        res.status(400).json({
                            success: false,
                            message: "Invalid credentials"
                        })
                    }
                }

            }else{ // si user existe pero NO esta verificado
                res.status(401).json({
                    success: false,
                    message: "Please, verify your email account and try again"
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                success: false,
                message: "Sign in ERROR, try again later"
            })
        }
    },

    signOut: async (req,res) => {
        const {id} = req.params
        try{
            const user = await User.findOne({_id:id})
            if(user.logged){
                user.logged = false
                await user.save()
                res.status(201).json({
                    message: "User disconnect",
                    success: true
                })
                
            }
        }catch(error){
            console.log(error)
            res.status(404).json({
                message: "ERROR",
                success: false
            })
        }
    }, 
    verifyToken: async(req, res) =>{
        if (!req.err) {
            const token = jwt.sign({id: req.user.id}, process.env.KEY_JWT, {expiresIn: 60*60*24})
            res.status(200).json({
                success:true,
                response:{
                    user: req.user,
                    token: token
                }
            })
        } else {
            res.json({
                success:false,
                message:'sign in please'
            })
        }
    }
}

    module.exports = userController    