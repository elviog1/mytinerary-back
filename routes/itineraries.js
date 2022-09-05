var express = require('express')
var router = express.Router()

const {create,update,destroy,all, readFromCity, readFromUser} = require('../controller/itineraryController')

router.get('/',all)
router.post('/', create)
router.get('/cityQuery',readFromCity)
router.get('/userQuery',readFromUser)
router.patch('/:id',update)
router.delete('/:id',destroy)

module.exports = router