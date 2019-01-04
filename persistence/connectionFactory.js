var { Pool ,Client } = require('pg');

function getConnection(){
  const connection = new Client({
    host: 'localhost',
    port: 5432,
    database: 'fuel-easy',
    user: 'postgres',
    password: 'postgres'
  });
  connection.connect();
  return connection;
}

module.exports = function() {
  return getConnection;
}
