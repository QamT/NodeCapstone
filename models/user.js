const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Tech } = require('./tech'),
      { Project } = require('./project'),
      { Challenge } = require('./challenge'),
      { hashSync, compareSync } = require('bcrypt-nodejs'),
      jwt = require('jsonwebtoken');

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
  firstName: { type: String, required: true, trim: true},
  lastName: { type: String, required: true, trim: true },
  techs: { type: mongoose.Schema.ObjectId, ref: 'Tech'},
  projects: { type: mongoose.Schema.ObjectId, ref: 'Project'},
  challengeNum: { type: Number, default: 1 }
});

userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this.hashPassword(this.password);
  }
  next();
});

userSchema.methods = {
  hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createAuthToken() {
    return jwt.sign(
      {
        user: this.serialize()
      },
      process.env.JWT_SECRET,
      {
        subject: this.username,
        expiresIn: process.env.JWT_EXPIRY
      }
    )
  },
  serializeAuth() {
    return {
      id: this._id,
      username: this.username,
      firstName: this.firstName,
      token: this.createAuthToken()
    }
  },
  serialize() {
    return {
      id: this._id,
      username: this.username,
      firstName: this.firstName
    }
  }
};


const User = mongoose.model('User', userSchema);

module.exports = { User };