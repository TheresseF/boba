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

//Database Setup
GRANT ALL PRIVILEGES ON bobastic.* TO 'root'@'127.0.0.1' IDENTIFIED BY ' ';

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

//Define a route to retrieve and render the data
app.get('/cardquery', (req, res) => {
    const query = 'SELECT * FROM customer_list ORDER BY `Customer_Suki_ID`';

    connection.query(query, (err, rows) => {
        if(err){
            console.error('Error executing query:', err);
            return;
        }

        res.render('cardquery', {customers: rows});
    });
});

//Database Management

// CARD QUERY
// Edit Page
app.get('/edit/:customerId', (req, res) => {
    const customerId = req.params.customerId;
  
    // Retrieve customer data from the database using the customerId
    connection.query('SELECT * FROM customer_list WHERE Customer_Suki_ID = ?', [customerId], (err, rows) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }
  
      // Render the edit page and pass the customer data
      res.render('activatecard', { customer: rows[0] });
    });
  });

//Delete Page
app.delete('/data/:Customer_Suki_ID', (req, res) => {
    const Customer_Suki_ID = req.params.Customer_Suki_ID;

    connection.query('DELETE FROM customer_list WHERE Customer_Suki_ID = ?', [Customer_Suki_ID], (error, result) => {
        if (error) {
            console.error('Failed to delete data: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json({ message: 'Data deleted successfully' });
    });
});

// Listen to port
app.listen(3000, () => {
  console.log('app is now listening on port 3000');
});