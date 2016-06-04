const Poll = require('./../models/poll-model');

const pollController = {
  addChoice: (req, res) => {
    Poll.create(req.body, (err, docs) => {
      if (err) throw new Error(err);

      res.send(docs._id);
    });
  }
}

module.exports = pollController;
