const express = require('express'),
      router = express.Router(),
      { authLocal, authJwt } = require('./strategies'),
      { User } = require('../models/user');

router.post('/login', authLocal, (req, res, next) => {
  res.status(200).json(req.user.serializeAuth());
  next();
});

router.get('/hello', authJwt, (req, res) => {
  res.send('This is a private route');
})

module.exports = router;