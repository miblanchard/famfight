const Poll = require('../models/poll-model');
const User = require('../models/user-model');

const pollController = {};

pollController.addChoice = (req, res) => {
  Poll.find(req.body.id, (err, docs) => {
    if (err) throw new Error(err);

    if (!docs) {
      Poll.create(req.body, (err, docs) => {
        if (err) throw new Error(err);

        docs.choices.push(req.body.choice[0]);
      });
    }

    docs.choices.push(req.body.choice[0]);
  });
  next();
}

pollController.checkPoll = (req, res) => {
  Poll.find({}, (err, docs) => {
    if (err) throw new Error(err);

    if (docs.length === 2) {
      //check between polls to see if conflict
      //if conflict then engage in quiz
      //otherwise send back place to eat
    }

    next();
  });
}

module.exports = pollController;
