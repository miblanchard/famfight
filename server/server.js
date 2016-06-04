'use strict'
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const request = require('request');
const userCtrl = require('./controllers/user-controller');
const pollCtrl = require('./controllers/poll-controller');
const io = require('socket.io').listen(app.listen(3000, function() {
  console.log('Listening on port: ', 3000);
}));

mongoose.connect('mongodb://mlaythe:lynch245@ds019698.mlab.com:19698/users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.post('/signup', userCtrl.signup);
app.post('/poll', pollCtrl.addChoice);

let count = 0;

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
