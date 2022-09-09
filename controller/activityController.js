const Activity = require('../models/Activity')

const activityController = {
    create: async(req,res)=>{
        const {name,photo,itinerary} = req.body
        try{
            await new Activity({name,photo,itinerary}).save()
                res.status(201).json({
                    message: "Activity created",
                    success: true
                }) 
        }catch(error){
            console.log(error)
            res.qstatus(400).json({
                message: "error",
                success: false
            })
        }

    },
    all: async(req,res) =>{
        let activity
        let query = req.body
        try{
            activity = await Activity.find(query)

            res.status(201).json({
                message: "all activity found",
                response: activity,
                success: true
            })
        }catch(error){
            console.log(error)
            res.status(404).json({
                message: "error",
                success: false
            })
        }
    },
    getActivityFromItinerary: async(req,res) =>{
        let activity
        let query = {}
        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }
        try{
            activity = await Activity.find(query)
            .populate('itinerary', {name:1})
            res.status(201).json({
                message: "all activity found",
                response: activity,
                success: true
            })
        }catch(error){
            console.log(error)
            res.status(404).json({
                message: "error",
                success: false
            })
        }
    }
}

module.exports = activityController