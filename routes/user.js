const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      { User } = require('../models/user'),
      { check, validationResult } = require('express-validator/check');

router.get('/users', async(req, res) => {
  let users = await User.find();
  // let data = users.map(user => user.serialize());
  res.status(200).json({ users });
});

router.post('/users', [
  check('username').isLength({ min: 5, max: 30 }).trim().isAlphanumeric(),
  check('password').isLength({ min: 8, max: 30 }).isAlphanumeric()
  // .custom((value, {req, local, path}) => {
  //   return value !== req.body.confirmPassword ? false : value;
  // }).withMessage("Passwords don't match")
  // check('username').isLength({ min: 5, max: 30 }).trim().isAlphanumeric(),
  // check('password').isLength({ min: 8, max: 30 }).isAlphanumeric(),
], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    } 

    let { username, password } = req.body;
    let { firstName, lastName } = req.body.name;

    let user = await User.findOne({ username });
    if (user) return res.status(400).send('User already registerd');

    try {
      user = await User.create({ 
        _id: new mongoose.Types.ObjectId(),
        username,
        password,
        name: {
          firstName,
          lastName
        }
      });
      res.status(201).json(user.serialize());
    } catch (err) {
      res.status(500).json({ error: `${err}` });
    }
});

module.exports = router;
