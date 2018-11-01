const express = require('express'),
      router = express.Router(),
      { authLocal, authJwt } = require('./strategies'),
      { User } = require('../models/user');

router.post('/login', authLocal, (req, res, next) => {
  const token = req.user.createAuthToken();
  res.cookie('jwt', token);
  res.status(200).redirect('/tech');
  next();
});

router.post('api/login', authLocal, (req, res, next) => {
  const token = req.user.createAuthToken();
  res.status(200).json({ token });
  next();
});

//refresh route

module.exports = router;