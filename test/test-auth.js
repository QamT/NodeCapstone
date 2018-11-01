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

  describe('Sign up with valid input', function() {
    it('should redirect user to login page', function() {
      return chai
        .request(app)
        .post('/users')
        .send(testUser)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.redirect;
          expect(res.redirects[0]).to.include('/login');
        })
    })
  });
  
  describe('Sign up with invalid input', function() {
    it('should redirect user to signup page', function() {
      testUser.username = 'short';

      return chai
        .request(app)
        .post('/users')
        .send(testUser)
        .then(res => {
          expect(res).to.redirect;
          expect(res.redirects[0]).to.include('/signup');
        })
    })
  });

  describe('Login in with valid credentials', function() {
    it('should redirect user to tech page', function() {
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
          .post('/login')
          .send({ username: testUser.username, password: testUser.password })
          .then(res => {
            expect(res).to.redirect;
            expect(res.redirects[0]).to.include('/tech');
            expect(res).to.have.cookie('jwt');
            expect(res).to.have.status(200);
        })
      })
   });

   describe('Login in with invalid credentials', function() {
    it('should redirect user to login page', function() {

      return chai
        .request(app)
        .post('/login')
        .send({ username: 'false', password: testUser.password })
        .then(res => {
          expect(res).to.redirect;
          expect(res.redirects[0]).to.include('/login');
        })
      })
   });
  
});

