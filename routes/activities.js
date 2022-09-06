var express = require('express')
var router = express.Router()
const {create,all,getActivityFromItinerary} = require('../controller/activityController')


router.post('/',create)
router.get('/', all)
router.get('/query',getActivityFromItinerary)

module.exports = router