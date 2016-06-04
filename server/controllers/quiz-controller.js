const Quiz = require('./../models/quiz-model');
const Question = require('./../models/question-model');

const quizController = {};

quizController.addQuizAnswer = (quizAnswer, socket, io) => {
  Quiz.findOne({'id': quizAnswer.id}, (err, docs) => {
    if (err) throw new Error(err);

    if (!docs) {
      Quiz.create(quizAnswer, (err, doc) => {
        if (err) throw new Error(err);

        console.log('creating quiz', doc);
        quizController.checkWinner(quizAnswer, socket, io);
      });
    } else {
      docs.choices.push(quizAnswer.answer[0]);
      Quiz.isNew = false;
      docs.save();
      quizController.checkWinner(quizAnswer, socket, io);
    }
  });
}

quizController.checkWinner = (quizAnswer, socket, io) => {
  Quiz.find({}, (err, docs) => {
    if (err) throw new Error(err);

    if (docs.length === 2) {
      const user1 = docs[0];
      const length1 = user1.answers.length - 1;
      const user1Answer = user1.answers[length1];

      const user2 = docs[1];
      const length2 = user2.answers.length - 1;
      const user2Answer = user2.answers[length2];

      Question.find({}, (err, docs) => {
        if (err) throw new Error(err);

        const answerToQuestion = docs[0].answer;

        if (user1Answer === user2Answer && user1Answer === answerToQuestion) {
          io.socket.emit('send another question'/*, newQuestion*/);
        } else if (user1Answer === answerToQuestion && user2Answer !== answerToQuestion) {
          io.socket.emit('user1 wins!', user1Answer);
        } else {
          io.socket.emit('user2 wins!', user2Answer);
        }
      })
    }
  });
}

module.exports = quizController;
