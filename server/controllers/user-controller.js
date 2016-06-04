const User = require('../models/user-model');

const userController = {};

userController.signup = (req, res) => {
  User.create(req.body, (err, docs) => {
    if (err) throw new Error(err);
    console.log('created new user', docs);
  });
}

module.exports = userController;
