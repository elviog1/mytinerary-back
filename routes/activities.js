var express = require('express')
var router = express.Router()
const {create,all} = require('../controller/activityController')


router.post('/',create)
router.get('/', all)

module.exports = router