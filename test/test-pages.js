// const chai = require('chai'),
//       chaiHttp = require('chai-http'),
//       expect = chai.expect,
//       { User } = require('../models/user'),
//       { Tech } = require('../models/tech'),
//       { Challenge } = require('../models/challenge'),
//       { Project } = require('../models/project'),
//       { app, runServer, closeServer} = require('../app'),
//       { TEST_DATABASE_URL } = require('../config');;

// chai.use(chaiHttp);

// describe('Feature endpoints', function() {
//   let testUser = {
//     username: 'testUser',
//     password: 'testuser',
//     firstName: 'Test',
//     lastName: 'User'
//   };
//   let access;

//   before(function() {
//     // User.create({ 
//     //   _id: new mongoose.Types.ObjectId(),
//     //   username: testUser.username,
//     //   password: testUser.password,
//     //   firstName: testUser.firstName,
//     //   lastName: testUser.lastName,
//     //   challengeNum: 1
//     // });
//     return runServer(TEST_DATABASE_URL);
//   });

//   after(function() {
//     // User.remove({});
//     return closeServer();
//   });

//   beforeEach(function() {
//     let agent = chai.request.agent(app)
//     agent
//       // .request(app)
//       .post('/login')
//       .send(testUser)
//       .then(res => {
//         return agent.get('/tech')
//       });
//     return;
//   });

//   afterEach(function() {
//     // Tech.remove({});
//     // Project.remove({});
//     // return User.remove({});
//   });

//   describe('GET endpoints', function() {
//     it('should display techs', function() {
//       return chai
//           .request(app)
//           .get('/tech')
//           .then(res => {
//             expect(res).to.have.status(200);
//             expect(res).to.be.html;
//           })
//     });

    // it('should display challenge', function() {
    //   return access
    //     .then(() => {
    //       chai
    //       .request(app)
    //       .get('/challenge')
    //       .then(res => {
    //         expect(res).to.have.status(200);
    //         expect(res).to.be.html;
    //       })
    //   })
    // });

    // it('should display projects', function() {
    //   return access
    //     .then(() => {
    //       chai
    //       .request(app)
    //       .get('/project')
    //       .then(res => {
    //         expect(res).to.have.status(200);
    //         expect(res).to.be.html;
    //       })
    //   })
    // });
  //});

  // describe('POST endpoints', function() {
  //   it('should add project', function() {
  //     let title = 'express';
  //     let info = 'my main node framework'
  //     return access
  //       .then(() => {
  //         chai
  //         .request(app)
  //         .post(`/tech/add?title=${title}&info=${info}`)
  //         .then(res => {
  //           expect(res).to.have.status(201);
  //           expect(res).to.be.json;
  //         })
  //         .then(() => {
  //           console.log(Tech.find({}));
  //         })
  //     })
  //   });

    // it('should return data', function() {
    //   return access
    //     .then(() => {
    //       chai
    //       .request(app)
    //       .get('/challenge')
    //       .then(res => {
    //         expect(res).to.have.status(200);
    //         expect(res).to.be.html;
    //       })
    //   })
    // });

    // it('should return data', function() {
    //   return access
    //     .then(() => {
    //       chai
    //       .request(app)
    //       .get('/project')
    //       .then(res => {
    //         expect(res).to.have.status(200);
    //         expect(res).to.be.html;
    //       })
    //   })
    // });
  // });
// });



  //techs
  //projects
  //challenge
  
