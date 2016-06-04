const Poll = require('../models/poll-model');
const User = require('../models/user-model');

const pollController = {};

pollController.addChoice = (req, res, next) => {
  Poll.findOne(req.body.username, (err, docs) => {
    if (err) throw new Error(err);

    console.log('docs poll', docs);
    console.log(!docs);

    if (!docs) {
      Poll.create(req.body, (err, doc) => {
        if (err) throw new Error(err);
        console.log('creating poll', doc);
        // res.send('choice added correctly');
        next();
      });
    } else {
      console.log('else');
      console.log('asdfsaijbasief', docs);
      console.log('wdbwiufwf', req.body);
      docs.choices.push(req.body.choices[0]);
      docs.save();
      console.log('doc after else', docs);
      next();
    }
  });
}

pollController.checkPoll = (req, res) => {
  Poll.find({}, (err, docs) => {
    if (err) throw new Error(err);
    // console.log('docs', docs);
    if (docs.length === 2) {
      console.log('length === 2', docs);
      //check between polls to see if conflict
      //if conflict then engage in quiz
      //otherwise send back place to eat
      if (docs[0].choices[docs[0].choices.length - 1] !== docs[1].choices[docs[1].choices.length - 1]) {
        res.send('conflict');
      } else {
        res.send(`${docs[0].choices[docs[0].choices.length - 1]} tonight!!`);
      }
    } else {
      res.send('waiting on additional polls from different sockets');
    }
  });
}

module.exports = pollController;
