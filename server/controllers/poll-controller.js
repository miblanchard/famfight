const Poll = require('../models/poll-model');
const User = require('../models/user-model');

const pollController = {};

pollController.addChoice = (req, res) => {
  Poll.create(req.body, (err, docs) => {
    if (err) throw new Error(err);
  });
}

module.exports = pollController;
