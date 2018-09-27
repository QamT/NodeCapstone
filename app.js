const express = require('express'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      helmet = require('mongoose'),
      path = require('path');
      pug = require('pug'),
      app = express();

const { DATABASE_URL, TEST_DATABASE_URL, PORT } = require('./config');

app.use(logger('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(helmet());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.status(200).render('index', { title: 'node app' });
});

app.use(function(req, res,next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

let server;

function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if(err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log("Closing server");
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if(require.main === module) {
  runServer(DATABASE_URL).catch(err => console.log(err));
}

module.exports = { runServer, app, closeServer };