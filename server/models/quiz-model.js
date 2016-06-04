const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  id: {type: String, required: true},
  answers: {type: Array, required: true}
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
