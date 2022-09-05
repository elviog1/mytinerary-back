var express = require('express')
var router = express.Router()

const {create,update,destroy,all, readFromCity, readFromUser} = require('../controller/itineraryController')

router.get('/',all)
router.post('/', create)
router.get('/query',readFromCity)
router.get('/query',readFromUser)
router.patch('/:id',update)
router.delete('/:id',destroy)

module.exports = router