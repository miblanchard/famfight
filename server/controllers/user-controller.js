const User = require('./../models/user-model');

const userController = {};

userController.signup = (req, res) => {
  console.log('req', req.body);
  User.create(req.body, (err, docs) => {
    if (err) throw new Error(err);
    console.log('created new user', docs);

    res.send(docs._id)
  });
}

module.exports = userController;
