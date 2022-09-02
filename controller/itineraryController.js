const Itinerary = require("../models/Itinerary")

const itineraryController = {
    create : async(req,res) =>{
        const {name,user,city,price,likes,tags,duration} = req.body
        try{
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

        if (req.query.name){
            query.name = req.query.name
            let regexp = new RegExp(`^${query.name}`,"i")
            query.name = regexp
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
    }
}

module.exports = itineraryController