const users = require('./user'),
      techs = require('./tech'),
      notes = require('./note'),
      projects= require('./project'),
      challenges = require('./challenge'),
      auth = require('../auth/router');

module.exports = app => {
  app.use('/api', users);
  app.use('/api', auth);
  app.use('/tech', techs);
  app.use('/challenge', challenges);
  app.use('/note', notes);
  app.use('/project', projects);
};