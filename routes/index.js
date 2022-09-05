var express = require('express');
var router = express.Router();
const cityRouter = require('./cities');
const userRouter = require('./user')
const itineraryRouter = require('./itineraries');
const commentRouter = require('./comments');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyTinerary' });
});

router.use('/cities',cityRouter)
router.use('/auth',userRouter)
router.use('/itineraries',itineraryRouter )
router.use('/comments',commentRouter)
module.exports = router;
