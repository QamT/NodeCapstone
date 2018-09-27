const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/node-app'
      TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-node-app',
      PORT = process.env.PORT || 8080;

module.exports = { DATABASE_URL, TEST_DATABASE_URL, PORT };