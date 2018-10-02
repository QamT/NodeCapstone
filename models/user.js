const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Tech } = require('./tech'),
      { Project } = require('./project'),
      { Challenge } = require('./challenge'),
      { challengeNum } = require('./challengeNum'),
      { Note } = require('./note');

const userSchema = new Schema({
  _id: { type: mongoose.Schema.ObjectId },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    firstName: { type: String, required: true, trim: true},
    lastName: { type: String, required: true, trim: true }
  },
  techs: { type: mongoose.Schema.ObjectId, ref: 'Tech'},
  projects: { type: mongoose.Schema.ObjectId, ref: 'Project'},
  challenges: { type: mongoose.Schema.ObjectId, ref: 'Challenge'},
  challengeNum: { type: mongoose.Schema.ObjectId, ref: 'ChallengeNum'},
  notes: { type: mongoose.Schema.ObjectId, ref: 'Note'}
});

userSchema.methods.serialize = function() {
  return {
    id: this._id,
    username: this.username,
    name: `${this.name.firstName} ${this.name.lastName}`
  }
};

const User = mongoose.model('User', userSchema);

module.exports = { User };