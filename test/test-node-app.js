const chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect,
      { app, runServer, closeServer} = require('../app');

chai.use(chaiHttp);

describe('root endpoint', function() {

  it('should return 200 status code', function() {
    return chai.request(app)
      .get('/')
      .then(res => {
        expect(res).to.have.status(200);
      });
  });

});
