
function userDAO(connection){
  this._connection = connection;
}

userDAO.prototype.insert = (user, callback) => {
  const insert = 'INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *';

  var values = [
    user.name, user.email, user.password,
  ]
  this._connection.query(insert, values, callback);
}

userDAO.prototype.search = (user, callback) => {
  this._connection.query('SELECT * FROM usuarios', callback);
}

module.exports = function() {
  return userDAO;
}
