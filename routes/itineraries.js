var express = require('express')
var router = express.Router()

const {create} = require('../controller/itineraryController')

router.post('/', create)

module.exports = router