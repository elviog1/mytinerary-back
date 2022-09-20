var express= require('express');
const passport = require('passport');
var router = express.Router();
const {create,all,getCommentFromItinerary,update, oneComment,destroy} = require('../controller/commentController')

router.post('/', passport.authenticate('jwt', {session:false}), create)
router.get('/',all)
router.get('/query',getCommentFromItinerary)
router.put('/:id',update)
router.get('/:id',oneComment)
router.delete('/:id',destroy)
module.exports = router