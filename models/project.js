mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { User } = require('./user');

const projectScema = new Schema({
  _id: { type: mongoose.Schema.ObjectId },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  img: {
    url: String,
    id: String
  },
  progress: {
    type: String,
    enum: ['still working', 'done'],
    required: true
  },
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

projectScema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    description: this.description,
    img: this.img,
    progress: this.progress
  }
}

const Project = mongoose.model('Project', projectScema);

module.exports = { Project };