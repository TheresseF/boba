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

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bobastic',
    port: 3306
});

pool.query('SELECT * FROM bobastic.customer_list', (error, results, fields) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(results);
});

//listen to port
app.listen(3000);
console.log('app is now listening to port 3000');
