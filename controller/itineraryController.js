const Itinerary = require("../models/User");

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
    }
}

module.exports = itineraryController