const Comment = require('../models/Comment')

const commentController = {
    create: async(req,res)=>{
        const {comment,user,itinerary} = req.body
        try{
            await new Comment({comment,user,itinerary}).save()
            res.status(201).json({
                message: "comment created",
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
        let modifyC = req.body
        try{
            // let result = await validator.validateAsync(req.body)
            let comment = await Comment.findOneAndUpdate({_id:id},modifyC)
            if(comment){
                res.status(200).json({
                    message: "comment update successfully ",
                    response: comment,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "comment not found ",
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
    all: async(req,res) =>{
        let comment
        let query = req.body
        try{
            comment = await Comment.find(query)
            .populate('user',{name:1,photo:1})
            .populate('itinerary')
            res.status(200).json({
                message: "all comments found",
                response: comment,
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
    getCommentFromItinerary: async(req,res)=>{
        let query = {}
        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }
        try{
            let itineraries = await Comment.find(query)
            .populate('itinerary', {name:1})

            if(itineraries){
                res.status(201).json({
                    message: "perfect !",
                    response: itineraries,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "couldn't find itineraries !",
                    success: true
                })
            }

        }catch(error){
            console.log(error)
            res.status(404).json({
                message: "error!",
                success: true
            })
        }
    }

}

module.exports = commentController