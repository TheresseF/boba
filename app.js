const express = require('express');
const mysql = require('mysql');

var app = express();
var homeController = require('./controllers/homeController');

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
homeController(app);

//listen to port
app.listen(3000);
console.log('app is now listening to port 3000');
