const City = require('../models/City')

const cityController ={
    create: async(req,res) =>{
        const{name, image, country, population, fundation} = req.body 
        try{
           await new City({name, image, country, population, fundation}).save()
           res.status(201).json({
              message: 'city created',
              success: true,
           })
        } catch(error){
            console.log(error);            
            res.status(400).json({
                message: "couldn't create city",
                success: false,
            })
        }
    },
    read: async(req,res) => {
        const {id} = req.params
        try{
           let city = await City.findOne({_id:id})
           if (event) {
            res.status(200).json({
                message: "you get one city",
                response: city,
                success: true
              }) 
           } else {
            res.status(404).json({
                message: "couldn't find city",
                success: false,
                   })
                } 
            } catch(error) {
                console.log(error);
                res.status(400).json({
                    message: "error",
                    success: false,
            })
        }
    }
}

module.exports = cityController