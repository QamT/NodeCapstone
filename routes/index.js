const users = require('./user'),
      techs = require('./tech'),
      notes = require('./note'),
      projects= require('./project'),
      challenges = require('./challenge');

module.exports = app => {
  app.use('/api', users);
  app.use('/tech', techs);
  app.use('/challenge', challenges);
  app.use('/note', notes);
  app.use('/project', projects);
};