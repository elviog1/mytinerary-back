var express = require('express');
var router = express.Router();
const {create, all, signUp} = require('../controller/userController')

/* GET users listing. */
router.get('/', all)
router.post('/signup', signUp)

module.exports = router;