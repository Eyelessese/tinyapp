/*
===tinyapp.js==

central hub for internal program logic that every other module exports to for behaviour
*/

const server = require('./tinyserver')

server.start();
server.urlGet();
