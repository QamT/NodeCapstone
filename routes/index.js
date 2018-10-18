const users = require('./user'),
      techs = require('./tech'),
      projects= require('./project'),
      challenges = require('./challenge'),
      auth = require('../auth/router'),
      home = require('./home');

module.exports = app => {
  app.use('/', home);
  app.use('/api', users);
  app.use('/api', auth);
  app.use('/tech', techs);
  app.use('/challenge', challenges);
  app.use('/project', projects);
};