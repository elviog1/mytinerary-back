var express = require('express');
var router = express.Router();
const {create, all, signUp, verifyMail, signIn, signOut} = require('../controller/userController')

/* GET users listing. */
router.get('/', all)
router.post('/signup', signUp)
router.post('/signin',signIn)
router.get('/verify/:code', verifyMail)
router.post('/signout', signOut)

module.exports = router;