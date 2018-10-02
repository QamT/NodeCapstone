mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { User } = require('./user');

const projectScema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  img: {
    type: String,
    data: Buffer
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
    title: this.title,
    description: this.description,
    img: this.img,
    progress: this.progress
  }
}

const Project = mongoose.model('Project', projectScema);

module.exports = { Project };