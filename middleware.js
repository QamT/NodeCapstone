const express = require('express'),
      logger = require('morgan'),
      compression = require('compression')
      session = require('express-session'),
      cookieParser = require('cookie-parser'),
      flash = require('connect-flash'),
      helmet = require('helmet')
      passport = require('passport');
      

module.exports = app => {
  app.use(cookieParser(process.env.SECRET));
  app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }));
  app.use(flash());
  app.use(compression());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false })); 
  app.use(passport.initialize());
  app.use(logger('dev'));
};

