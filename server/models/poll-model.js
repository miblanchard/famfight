const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  username: {type: String, required: true, unique: true},
  choices: {type: Array, required: true}
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
