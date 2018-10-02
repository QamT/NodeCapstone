const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { User } = require('./user');

const noteSchema = new Schema({
  title: { type: String, default: '' },
  log: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

noteSchema.methods.serialize = function() {
  return {
    title: this.title,
    log: this.log,
    date: this.date
  }
}

const Note = mongoose.model('Note', noteSchema);

module.exports = { Note };