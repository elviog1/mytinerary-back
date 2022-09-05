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
    }

}

module.exports = commentController