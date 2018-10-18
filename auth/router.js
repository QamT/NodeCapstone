const express = require('express'),
      router = express.Router(),
      { authLocal, authJwt } = require('./strategies'),
      { User } = require('../models/user');

router.post('/login', authLocal, (req, res, next) => {
  const token = req.user.createAuthToken();
  res.cookie('jwt', token);
  next();
});

router.get('/hello', authJwt, (req, res) => {
  res.send('This is a private route');
})

//refresh route

module.exports = router;