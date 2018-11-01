const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { User } = require('./user');

const challengeSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  num: Number,
  examples: [ String ]
});

challengeSchema.methods.serialize = function() {
  return {
    title: this.title,
    description: this.description,
    imageUrl: this.imageUrl,
    num: this.num,
    examples: this.examples
  }
};

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = { Challenge };