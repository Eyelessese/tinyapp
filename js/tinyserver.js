/*
===tinyserver.js===

sole function is to listen for requests and handle responses based on how 
tinyapp.js tell it to.
*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port = 8080;

const server = function()
{
  app.listen(port, () =>
  {
    console.log(`Listening on port ${port}`);
  });
};


module.exports =
{
server : server
};
