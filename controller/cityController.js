const City = require('../models/City')
const Joi = require('joi')

const validator = Joi.object({
    "name": Joi.string().min(1),
    "image": Joi.string().uri().message("invalid URL"),
    "country": Joi.string().min(4),
    "population": Joi.number(),
    "fundation": Joi.number()
})

const cityController ={
    create: async(req,res) =>{
        let result = await validator.validateAsync(req.body)
        const{name, image, country, population, fundation} = req.body 
        try{
           let city = await new City({name, image, country, population, fundation}).save()
           res.status(201).json({
              message: 'city created',
              success: true,
              id: city._id
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
           if (city) {
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
    },
    destroy: async(req, res) => {
        const {id} = req.params
        try{
            let city = await City.findOneAndDelete({_id:id})
           if (city) {
            res.status(200).json({
                message: "city deleted successfully",
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
    },
    update: async(req,res) =>{
        let result = await validator.validateAsync(req.body)
        const {id} = req.params
        const modifyC = req.body
        let city
        try{
            city = await City.findOneAndUpdate({_id:id} , modifyC,{new: true})
           if (city) {
            res.status(200).json({
                message: "city updated successfully",
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
    },
    updateByName: async(req,res) =>{
        let result = await validator.validateAsync(req.body)
        const {cityname} = req.params
        const modifyC = req.body
        let city
        try{
            city = await City.findOneAndUpdate({name:cityname} , modifyC,{new: true})
           if (city) {
            res.status(200).json({
                message: "city updated successfully",
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
    },
    all: async(req,res) =>{
        let cities
        let query = {}

        if (req.query.name){
            // query.name = req.query.name
            let regexp = new RegExp(`^${req.query.name}`,"i")
            query.name = regexp
        }
  
        try{
           cities = await City.find(query)
           res.status(201).json({
              message: 'all cities found',
              response: cities,
              success: true,
           })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "couldn't find cities",
                success: false,
            })
        }
    },

}

module.exports = cityController