var express = require('express');
let passport = require('../config/passport');
var router = express.Router();
const {all, signUp, verifyMail, signIn, signOut,update, verifyToken} = require('../controller/userController')

/* GET users listing. */
router.get('/', all)
router.post('/signup', signUp)
router.post('/signin',signIn)
router.get('/verify/:code', verifyMail)
router.get('/token', passport.authenticate('jwt', {session:false}), verifyToken)//session:false sirve para autentificar al usuario
router.post('/signout', signOut)
router.put('/:id',update)

module.exports = router;