var express = require('express');

var homeController = require('./controllers/homeController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//listen to port
app.listen(3000);
console.log('app is now listening to port 3000')
