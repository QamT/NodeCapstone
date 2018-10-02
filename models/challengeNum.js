const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { User } = require('./user');

const challengeNumSchema = new Schema({
  num: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

challengeNumSchema.methods.serialize = function() {
  return this.num;
};

const ChallengeNum = mongoose.model('ChallengeNum', challengeNumSchema);

module.exports = { ChallengeNum };