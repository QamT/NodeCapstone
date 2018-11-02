const chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect,
      { User } = require('../models/user'),
      { Tech } = require('../models/tech'),
      { Challenge } = require('../models/challenge'),
      { Project } = require('../models/project'),
      { app, runServer, closeServer} = require('../app'),
      { TEST_DATABASE_URL } = require('../config');;

chai.use(chaiHttp);

describe('Feature endpoints', function() {
  let testUser = {
    username: 'testUser',
    password: 'testuser',
    firstName: 'Test',
    lastName: 'User'
  };
  let access;

  before(function() {
   runServer(TEST_DATABASE_URL);

   User.create({ 
      _id: new mongoose.Types.ObjectId(),
      username: testUser.username,
      password: testUser.password,
      firstName: testUser.firstName,
      lastName: testUser.lastName,
      challengeNum: 1
    });

   return chai
      .request(app)
      .post('/api/login')
      .send({ username: testUser.username, password: testUser.password })
      .then(res => {
        access = res.body.token;
    })
  });

  after(function() {
    User.remove({});
    return closeServer();
  });

  describe('GET endpoints', function() {
    it('should return all user techs', function() {
      return chai
          .request(app)
          .get('/tech/api')
          .set('Cookie', `jwt=${access}`)
          .then(res => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
          })
    });

    it('should return user challenge', function() {
      return chai
          .request(app)
          .get('/challenge/api')
          .set('Cookie', `jwt=${access}`)
          .then(res => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
          })
    });

    it('should return all user projects', function() {
      return chai
          .request(app)
          .get('/project/api')
          .set('Cookie', `jwt=${access}`)
          .then(res => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
          })
    });
  });
});


