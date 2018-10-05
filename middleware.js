const express = require('express'),
      logger = require('morgan'),
      compression = require('compression'),
      helmet = require('helmet')
      passport = require('passport');

module.exports = app => {
  app.use(compression());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false })); 
  app.use(passport.initialize());
  app.use(logger('dev'));
};