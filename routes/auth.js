var express = require('express');
var router = express.Router();
const {create, all, signUp,verifyMail} = require('../controller/userController')

/* GET users listing. */
router.get('/', all)
router.post('/signup', signUp)
router.get('/:id',verifyMail)

module.exports = router;