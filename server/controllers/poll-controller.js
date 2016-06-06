const Poll = require('../models/poll-model');
const User = require('../models/user-model');
const questionController = require('./question-controller.js')

const pollController = {};

pollController.addPoll = (poll, socket, io) => {
  //find poll through id passed from socket emit 'poll' event
  Poll.findOne({'id': poll.id}, (err, docs) => {
    if (err) throw new Error(err);

    //if no poll found then add one to collection
    if (!docs) {
      Poll.create(poll, (err, doc) => {
        if (err) throw new Error(err);

        pollController.checkPollCount(socket, io);
      });
    } else {
      //if already exists then push user choice into user choices array
      docs.choices.push(poll.choices[0]);
      //helped somewhat with connecting to remote database like mlab
      // * use local machine for mongo database *
      Poll.isNew = false;
      docs.save();
      pollController.checkPollCount(socket, io);
    }
  });
}

pollController.checkPollCount = (socket, io) => {
  //find all polls
  Poll.find({}, (err, docs) => {
    if (err) throw new Error(err);

    //if greater than 2 than remove all because we want only two users
    //participating for now
    if (docs.length > 2) Poll.remove({});

    //if 2 results found
    if (docs.length === 2) {
      console.log('length === 2', docs);
      //check between polls to see if conflict
      //if conflict then engage in quiz
      //otherwise send back place to eat
      if (docs[0].choices[docs[0].choices.length - 1] !== docs[1].choices[docs[1].choices.length - 1]) {
        io.sockets.emit('conflict', questionController.sendQuestions());
      } else {
        io.sockets.emit(`${docs[0].choices[docs[0].choices.length - 1]} tonight!!`);
      }
    } else {
      //send back to socket waiting message while other sockets answer poll
      io.to(socket).emit('waiting on additional polls from different sockets');
    }
  });
}

module.exports = pollController;
