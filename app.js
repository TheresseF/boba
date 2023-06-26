const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const homeController = require('./controllers/homeController.js');

// Set up template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Fire controllers
homeController(app);

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bobastic'
});
  
//Connect to MYSQL
connection.connect((err) => {
    if(err){
      console.log('Error connecting to database');
    } else{
      console.log('Database is connected successfully');
    }
});

//Define a rout to retrieve and render the data
app.get('/cardquery', (req, res) => {
    const query = 'SELECT * FROM customer_list';

    connection.query(query, (err, rows) => {
        if(err){
            console.error('Error executing query:', err);
            return;
        }

        res.render('cardquery', {customers: rows});
    });
});

// Listen to port
app.listen(3000, () => {
  console.log('app is now listening on port 3000');
});