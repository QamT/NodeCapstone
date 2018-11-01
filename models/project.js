mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { User } = require('./user');

const projectScema = new Schema({
  _id: { type: mongoose.Schema.ObjectId },
  title: { type: String },
  description: { type: String, default: '' },
  img: {
    url: String,
    id: { type: String }
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