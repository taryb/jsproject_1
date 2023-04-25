const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database'
});

// define a route that fetches data from the database
router.get('/data', (req, res) => {
  const sql = 'SELECT * FROM my_table';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
