var express = require('express');
var trainRouter = express.Router();
var trainInfo = require('../models/train_info.js');
var bodyParser = require('body-parser');

trainRouter.use(bodyParser.urlencoded({ extended: false }));

trainRouter.get('/', function(req, res){
  res.render('trains/index', {trainInfo: trainInfo});
});

module.exports = trainRouter;