/*
===tinyserver.js===

sole function is to listen for requests and handle responses based on how 
tinyapp.js tell it to.
*/

const express = require('express');
const path = require('./paths');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const port = 8080;

const createServer = function()
{
  app.listen(port, () =>
  {
    console.log(`Listening on port ${port}`);
  });
};

const urlGet = function()
{
  app.get('/[^]*/', (req, res) =>
  {
    console.log(req.path);
    res.render(path.getPath(req.path));
  });
};

module.exports =
{
  start : createServer,
  urlGet : urlGet
};
