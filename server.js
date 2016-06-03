'use strict'
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser')
const request = require('request');
const io = require('socket.io').listen(app.listen(3000, function() {
  console.log('Listening on port: ', 3000);
}));

app.use(express.static(__dirname + '/client'));

io.sockets.on('connection', function(socket) {
  socket.on('connection name', function(user) {
    io.sockets.emit('new user', user.name + ' has joined.')
  })
});