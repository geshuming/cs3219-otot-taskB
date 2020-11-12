let mysql = require('mysql');

let pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.dbURL || 'localhost',
  user            : process.env.dbUser || 'root',
  password        : process.env.dbPass || 'root',
  database        : process.env.dbName || 'cs3219taskb'
});

pool.query(`CREATE TABLE IF NOT EXISTS contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200),
  email VARCHAR(200),
  phone INT
)`);

module.exports = pool;