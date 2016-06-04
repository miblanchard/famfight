'use strict'
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const request = require('request');
const userCtrl = require('./controllers/user-controller');
const pollCtrl = require('./controllers/poll-controller');
const quizCtrl = require('./controllers/quiz-controller');
const io = require('socket.io').listen(app.listen(3000, function() {
  console.log('Listening on port: ', 3000);
}));

mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.post('/signup', userCtrl.signup);

//used for testing purposes
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
  //used for testing socket.broadcast.emit * doesn't work properly *
  socket.on('count', () => {
    count++;
    if (count === 2) {
      io.sockets.emit('countCheck', count);
    }
  });
  //when results come in from a poll from a socket add it to collection
  socket.on('poll', (poll) => {
    pollCtrl.addPoll(poll, socket, io);
  })
  //when results come in from quiz from a socket add it to collection
  socket.on('quiz', (quizAnswer) => {
    quizCtrl.addQuizAnswer(quizAnswer, socket, io);
  });
});
