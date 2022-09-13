var express= require('express');
var router = express.Router();
const {create,all,getCommentFromItinerary,update} = require('../controller/commentController')

router.post('/', create)
router.get('/',all)
router.get('/query',getCommentFromItinerary)
router.put('/:id',update)

module.exports = router