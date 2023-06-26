import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bobastic',
}).promise()

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

pool.query('SELECT * FROM bobastic.customer_list', (error, results, fields) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(results);
});
  
module.exports = connection;