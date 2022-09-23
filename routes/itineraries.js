var express = require('express')
const passport = require('passport')
var router = express.Router()

const {create,update,destroy,all, readFromCity, readFromUser, like,read, updateByName} = require('../controller/itineraryController')

router.get('/',all)
router.post('/', passport.authenticate('jwt', {session:false}), create)
router.get('/query',readFromCity)
router.get('/queryu',readFromUser)
router.patch('/:id',update)
router.delete('/:id',destroy)
router.get('/:id', read)
router.patch('/like/:itineraryId', passport.authenticate('jwt', {session:false}), like)
router.put('/:itineraryname', updateByName)


module.exports = router