const User = require ('../models/User')

const userController ={
    create: async(req,res) =>{
        const{name, lastName, mail, password, photo, country} = req.body 
        try{
           await new User({name, lastName, mail, password, photo, country}).save()
           res.status(201).json({
              message: 'user created',
              success: true,
           })
        } catch(error){
            console.log(error);            
            res.status(400).json({
                message: "couldn't create user",
                success: false,
            })
        }
    },
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
    }
}

    module.exports = userController    