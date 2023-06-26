var express = require('express');
var database = require('mysql');

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
//var router = express.Router();

// var connection = mysql.createConnection({
//     host:'localhost',
//     port:3306,
//     database: 'bobastic',
//     user:'root',
//     password:''
// });

// var database_connection_status = "";

// connection.connect(function(error){
//     if(error){
//        console.log('MySQL database Connection Error');
//     } else{
//        console.log('Node JS Application Successfully connected to MySQL Database');
//     }
// })

//listen to port
app.listen(3000);
console.log('app is now listening to port 3000');
