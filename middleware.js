const express = require('express'),
      logger = require('morgan'),
      compression = require('compression'),
      helmet = require('helmet');

module.exports = app => {
  app.use(compression());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false })); 
  app.use(logger('dev'));
};