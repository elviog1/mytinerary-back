var express= require('express');
var router = express.Router();
const {create,all,getCommentFromItinerary} = require('../controller/commentController')

router.post('/', create)
router.get('/',all)
router.get('/query',getCommentFromItinerary)

module.exports = router