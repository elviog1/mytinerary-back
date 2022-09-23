var express= require('express');
var router = express.Router();
const {create,all,getCommentFromItinerary,update, oneComment,destroy} = require('../controller/commentController')

router.post('/', create)
router.get('/',all)
router.get('/query',getCommentFromItinerary)
router.put('/:id',update)
router.get('/:id',oneComment)
router.delete('/:id',destroy)
module.exports = router