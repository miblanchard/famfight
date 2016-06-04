const Poll = require('../models/poll-model');
const User = require('../modles/user-model');

function addChoice(req, res) {
  Poll.create(req.body, (err, docs) => {
    if (err) throw new Error(err);
  });
}

module.exports = { addChoice };
