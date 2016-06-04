const User = require('../models/user-model');

function signup(req, res) {
  User.create(req.body, (err, docs) => {
    if (err) throw new Error(err);

    res.send(docs._id);
  });
}

module.exports = { signup };
