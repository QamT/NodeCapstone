const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { User } = require('./user');

const techSchema = new Schema({
  title: { type: String },
  info: { type: String, default: '' },
  check: {
    type: String,
    enum: ['red', 'yellow', 'green'],
    default: 'red'
  },
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

techSchema.methods.serialize = function() {
  return {
    title: this.title,
    info: this.info,
    check: this.check
  }
}

const Tech = mongoose.model('Tech', techSchema);

module.exports = { Tech };

