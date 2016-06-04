const Poll = require('../models/poll-model');
const User = require('../models/user-model');

const pollController = {};

pollController.addPoll = (poll, socket, io) => {
  Poll.findOne({'id': poll.id}, (err, docs) => {
    if (err) throw new Error(err);

    if (!docs) {
      Poll.create(poll, (err, doc) => {
        if (err) throw new Error(err);

        pollController.checkPollCount(socket, io);
      });
    } else {
      docs.choices.push(poll.choices[0]);
      Poll.isNew = false;
      docs.save();
      pollController.checkPollCount(socket, io);
    }
  });
}

pollController.checkPollCount = (socket, io) => {
  Poll.find({}, (err, docs) => {
    if (err) throw new Error(err);

    if (docs.length > 2) Poll.remove({});
    
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
      io.to(socket).emit('waiting on additional polls from different sockets');
    }
  });
}

module.exports = pollController;
