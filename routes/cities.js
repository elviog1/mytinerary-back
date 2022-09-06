var express = require('express');
var router = express.Router();
const {create,read,destroy,update,all} = require('../controller/cityController')

/* GET users listing. */
router.post('/',create)
router.get('/',all)
router.get('/:id',read)
router.delete('/:id',destroy)
router.put('/:id',update)

module.exports = router; 