var express = require('express')
var router = express.Router()

const {create,update,destroy,all} = require('../controller/itineraryController')

router.get('/',all)
router.post('/', create)
router.patch('/:id',update)
router.delete('/:id',destroy)

module.exports = router