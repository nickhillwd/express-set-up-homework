var express = require('express');
var app = express();
var trainInfo = require('./models/train_info.js');
var trainRouter = require('./controllers/train_router.js');
var expressLayouts = require('express-ejs-layouts');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use("/trains", trainRouter);
app.use(express.static(__dirname = "/public"));

app.get('/', function(req, res){
  res.render('index', {welcome: "Welcome to the train info app"});
});

app.listen('3000', function(){
  console.log('listening on port: 3000');
});