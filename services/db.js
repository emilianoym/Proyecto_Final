const mysql = require('mysql2');

// Consider moving credentials to environment variables for security.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'horadeaventura07',
  database: 'GroveRoom_bd'
});

connection.connect((err) => {
  if (err) {
    // Print the actual error to help diagnosis (port, auth, server down, etc.)
    console.error('Error conectando a la base de datos:', err.message || err);
    return;
  }
  console.log('Conexión MySQL establecida.');
});




module.exports = connection;
