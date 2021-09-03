const express = require('express');
const app = express();
const port = 1000;
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    // port: 3306,
    user: 'root',
    password: 'newpassword',
    database: 'test'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
app.listen(port, () => {
    console.log('listing to port....',port);
});
/* var sql='SELECT * FROM users';
connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    // res.render('user-list', { title: 'User List', userData: data});
    console.log(data);
  }); */