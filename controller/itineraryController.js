const Itinerary = require("../models/Itinerary")
const Joi = require('joi')

const validator = Joi.object({
    "name": Joi.string().min(4).message("name to short").max(30).message("name to long"),
    "user": Joi.string(),
    "city": Joi.string(),
    "price": Joi.number().min(0).message("invalid price"),
    "likes":Joi.array().min(0).message("invalid likes"),
    "tags":Joi.string().min(0).message("invalid tags"),
    "duration": Joi.number().min(0).message("invalid duration")
})
const itineraryController = {
    create : async(req,res) =>{
        const {name,user,city,price,likes,tags,duration} = req.body
        try{
            let result = await validator.validateAsync(req.body)
            await new Itinerary({name,user,city,price,likes,tags,duration}).save()
            res.status(201).json({
                message: "itineray created",
                success: true
            })
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },
    update: async(req,res) =>{
        let {id} = req.params
        let modifyI = req.body
        try{
            let result = await validator.validateAsync(req.body)
            let itinerary = await Itinerary.findOneAndUpdate({_id:id},modifyI)
            if(itinerary){
                res.status(200).json({
                    message: "Itinerary update successfully ",
                    response: itinerary,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "Itinerary not found ",
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
    destroy: async(req,res)=>{
        let {id} = req.params
        try{
            let itinerary = await Itinerary.findOneAndDelete({_id:id})
            if(itinerary){
                res.status(200).json({
                    message: "itinerary deleted",
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "itinerary not found",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(404).json({
                message: "error",
                success: false
            })
        }
    },
    all: async(req,res) =>{
        let itinerary
        let query = {}

        if (req.query.city){
            query.city = req.query.city
            let regexp = new RegExp(`^${query.city}`,"i")
            query.city = regexp
        }
  
        try{
            itinerary = await Itinerary.find(query)
           res.status(201).json({
              message: 'all itinerary found',
              response: itinerary,
              success: true,
           })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "couldn't find itinerary",
                success: false,
            })
        }
    },
    readFromCity: async(req,res) => {
        let query = {}

        if (req.query.city){
            query.city = req.query.city

        }
        try{
           let itineraries = await Itinerary.find(query)
           .populate('city',{name:1, image:1})
           .populate('user',{name:1, photo:1})
   
           if (itineraries) {
            res.status(200).json({
                message: "you get itineraries from city"+req.query.city.name,
                response: itineraries,
                success: true
              }) 
           } else {
            res.status(404).json({
                message: "couldn't find itineraries",
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
    readFromUser: async(req,res) => {
        let query = {}

        if (req.query.user){
            query.user = req.query.user

        }
        try{
           let itinerary = await Itinerary.find(query)
           .populate('city',{name:1, image:1})
           .populate('user',{name:1, photo:1})
   
           if (itinerary) {
            res.status(200).json({
                message: "you get itineraries from user "+ req.query.user.name,
                response: itinerary,
                success: true
              }) 
           } else {
            res.status(404).json({
                message: "couldn't find itineraries",
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
}

module.exports = itineraryController