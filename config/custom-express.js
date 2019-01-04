var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = () => {
  var app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  consign()
    .include('./src/controllers')
    .then('persistence')
    .into(app);

  return app;
}
