const express = require('express');
const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'root', // Your MySQL username
  
  database: 'data'
});

connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

  const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Start the Express server
const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server started on port ${4000}`);
});

app.get('/products', (req, res) => {
    connection.query('SELECT revenue,gp FROM products WHERE ticker="AAP"', (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500);
        res.send('Error fetching users');
        return;
      }
      res.json(results);
    });
  });