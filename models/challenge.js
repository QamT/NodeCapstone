const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { User } = require('./user');

const challengeSchema = new Schema({
  title: String,
  num: Number,
  requirements: [ String ],
  progress: { type: String, Default: ''},
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

challengeSchema.methods.serialize = function() {
  return {
    title: this.title,
    num: this.num,
    requirements: this.requirements,
    progress: this.progress
  }
};

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = { Challenge };