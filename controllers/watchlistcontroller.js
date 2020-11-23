const router = require('express').Router();
const Watchlist = require('../db').import('../models/watchlist');

router.get('/', function(req, res){
  res.send('hihi')
})

module.exports = router;