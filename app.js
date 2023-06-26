var express = require('express');

var homeController = require('./controllers/homeController');
//var cardQueryController = require('./controllers/cardQueryController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
homeController(app);
//cardQueryController(app);

//database stuff
// var router = express.Router();

// var database 

//listen to port
app.listen(3000);
console.log('app is now listening to port 3000');
