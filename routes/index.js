var express = require('express');
var router = express.Router();
const cityRouter = require('./cities');
const userRouter = require('./user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyTinerary' });
});

router.use('/cities',cityRouter)
router.use('/auth',userRouter)

module.exports = router;
