const Quiz = require('./../models/quiz-model');

const quizController = {};

quizController.addQuizAnswer = (quizAnswer, socket, io) => {
  Quiz.findOne(quizAnswer.id, (err, docs) => {
    if (err) throw new Error(err);

    console.log('docs quiz', docs);
    console.log(!docs);

    if (!docs) {
      Quiz.create(quizAnswer, (err, doc) => {
        if (err) throw new Error(err);
        console.log('creating quiz', doc);
        // res.send('choice added correctly');
        quizController.checkQuizCount(socket, io);
      });
    } else {
      docs.choices.push(req.body.choices[0]);
      docs.save();
      quizController.checkQuizCount(socket, io);
    }
  });
}

quizController.checkQuizCount = (socket, io) => {
  Quiz.find({}, (err, docs) => {
    if (err) throw new Error(err);
    // console.log('docs', docs);
    if (docs.length === 2) {
      console.log('length === 2', docs);
      //check between polls to see if conflict
      //if conflict then engage in quiz
      //otherwise send back place to eat
      if (docs[0].choices[docs[0].choices.length - 1] !== docs[1].choices[docs[1].choices.length - 1]) {
        io.sockets.emit('conflict');
      } else {
        io.sockets.emit(`${docs[0].choices[docs[0].choices.length - 1]} tonight!!`);
      }
    } else {
      io.to(socket).emit('');
    }
  });
}

module.exports = quizController;
