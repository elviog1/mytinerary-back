var express= require('express');
var router = express.Router();
const {create,all} = require('../controller/commentController')

router.post('/', create)
router.get('/',all)

module.exports = router