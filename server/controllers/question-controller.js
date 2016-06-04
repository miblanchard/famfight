const Question = require('./../models/question-model');

const questionController = {};

questionController.sendQuestions = () => {
  const question = {
    'question': '\'Say my name.\'',
    'choices': ['Heisenberg', 'White'],
    'answer': 'Heisenberg'
  };

  Question.create(question, (err, docs) => {
    if (err) throw new Error(err);

    return docs;
  });
}

module.exports = questionController;
