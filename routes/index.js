var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyTinerary' });
});

router.use('/cities',cityRouter)

module.exports = router;
