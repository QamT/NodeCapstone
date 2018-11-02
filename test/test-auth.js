const chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect,
      { User } = require('../models/user'),
      { app, runServer, closeServer} = require('../app'),
      { TEST_DATABASE_URL } = require('../config');;

chai.use(chaiHttp);

describe('User endpoints', function() {
  let testUser = {
    username: 'testUser',
    password: 'testuser',
    firstName: 'Test',
    lastName: 'User'
  };

  before(function() {
    return runServer(TEST_DATABASE_URL)
  });

  after(function() {
    return closeServer()
  });

  afterEach(function() {
    return User.remove({})
  });

  describe('Sign up with valid input', async function() {
    await User.remove({});
    it('should return user profile', function() {
      return chai
        .request(app)
        .post('/api/users')
        .send(testUser)
        .then(res => {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
        })
    })
  });
  
  describe('Sign up with invalid input', function() {
    it('should return errors', function() {
      testUser.username = 'short';

      return chai
        .request(app)
        .post('/api/users')
        .send(testUser)
        .then(res => {
          expect(res).to.have.status(400);
          expect(res).to.be.json;
        })
    })
  });

  describe('Login in with valid credentials', function() {
    it('should return an access token', function() {
      testUser.username = 'testUser';

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
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        })
      })
   });
});

