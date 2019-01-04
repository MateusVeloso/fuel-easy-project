
module.exports = (app) => {
  app.get('/user', (req, res) => {
    res.send('ok');
  });

  app.get('/user/insert', (req, res) => {
    var user = req.body;
    console.log(user);

    var connection = app.persistence.connectionFactory();
    console.log(connection)
    var userDAO = new app.persistence.userDAO(connection);

    var user = {
      name: 'Mateus',
      email: 'mateus@gwsistemas.com.br',
      password: '1305'
    }

    userDAO.insert(user, (res, error) => {
      console.log(res);
      console.log('-------');
      console.log(error)
    });

    res.send('ok');
  });
}
