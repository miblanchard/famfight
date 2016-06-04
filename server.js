'use strict'
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser')
const request = require('request');
const io = require('socket.io').listen(app.listen(3000, function() {
  console.log('Listening on port: ', 3000);
}));

let count = 0;

app.use(express.static(__dirname + '/client'));

//listens for a socket connection
io.sockets.on('connection', (socket) => {
  //when 'connection name' is heard we pass in the user in an emit event to all sockets
  socket.on('connection name', (user) => {
    io.sockets.emit('new user', user.name + ' has joined.')
  })
  //when a 'message' event is heard send the message to all sockets
  socket.on('message', (msg) => {
    io.sockets.emit('message', msg);
  });
  //when a 'startGame' event is heard broadcast an object to all sockets
  //excluding the socket that sent the event originally
  socket.on('startGame', () => {
    socket.broadcast.emit('polling');
  });
  
  socket.on('count', () => {
    count++;
    if (count === 2) {
      io.sockets.emit('countCheck', count);
    }
  });
});
