var express = require('express')
const passport = require('passport')
var router = express.Router()

const {create,update,destroy,all, readFromCity, readFromUser, like} = require('../controller/itineraryController')

router.get('/',all)
router.post('/', passport.authenticate('jwt', {session:false}), create)
router.get('/query',readFromCity)
router.get('/queryu',readFromUser)
router.patch('/:id',update)
router.delete('/:id',destroy)
router.patch('/like', passport.authenticate('jwt', {session:false}), like)

module.exports = router