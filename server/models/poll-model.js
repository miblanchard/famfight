const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  id: {type: String, required: true},
  choice: {type: String, required: true}
});

const Poll = mongoose.model('User', pollSchema);

module.exports = Poll;
