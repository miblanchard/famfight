const Poll = require('../models/poll-model');

function addChoice(req, res) {
  Poll.create(req.body, (err, docs) => {
    if (err) throw new Error(err);

    res.send(docs._id);
  });
}

module.exports = { addChoice };
