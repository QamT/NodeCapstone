const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      { User } = require('../models/user'),
      v = require('../validations/userValidation'),
      { validationResult } = require('express-validator/check');
      flash = require('connect-flash');

router.post('/users', v.validateUser, async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash('error', errors.array());
      return res.redirect('/signup');
    } 

    let { username, password, firstName, lastName } = req.body;

    let user = await User.findOne({ username });
    if (user) {
      req.flash('err', 'User is already registered');
      return res.redirect('/signup');
    }

    try {
      user = await User.create({ 
        _id: new mongoose.Types.ObjectId(),
        username,
        password,
        firstName,
        lastName,
        challengeNum: 1
      });
      await user.save();
      req.flash('success', 'User created');
      res.status(200).redirect('/login');
    } catch (err) {
      res.status(500).json({ error: `${err}` });
    }
});

router.post('/api/users', v.validateUser, async(req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  } 

  let { username, password, firstName, lastName } = req.body;

  let user = await User.findOne({ username });
  if (user) {
    return res.status(400).json('User is already registered');
  }

  try {
    user = await User.create({ 
      _id: new mongoose.Types.ObjectId(),
      username,
      password,
      firstName,
      lastName,
      challengeNum: 1
    });
    await user.save();
    res.status(201).json(user.serialize());
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
