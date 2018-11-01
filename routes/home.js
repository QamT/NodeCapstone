const express = require('express'),
      router = express.Router()
      flash = require('connect-flash');

router.get('/', (req, res) => {
  res.render('index', { title: 'Node App'});
})

router.get('/signup', (req, res) => {
  res.render('signup', { err: req.flash('error') || '', error: req.flash('err') || '' });
})

router.get('/login', (req, res) => {
  res.render('login', { msg: req.flash('success') || '', error: req.flash('error') || '' });
})

router.get('/logout', (req, res) => {
  res.cookie('jwt', '');
  res.redirect('/');
})

module.exports = router;