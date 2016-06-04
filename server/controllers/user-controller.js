const User = require('./../models/user-model');

const userController = {};

userController.signup = (req, res) => {
  console.log('req body of user signup', req.body);
  User.create(req.body, (err, docs) => {
    if (err) throw new Error(err);

    res.send(docs._id)
  });
}

module.exports = userController;
