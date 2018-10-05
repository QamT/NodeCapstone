const passport = require('passport'),
      { Strategy: LocalStrategy} = require('passport-local'),
      { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt'),
      { User } = require('../models/user');
      

const localStrategy = new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false);
      } else if (!user.authenticateUser(password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch(e) {
      return done(e, false);
    }
});

const jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    secretOrKey: process.env.JWT_SECRET
  },
  async(payload, done) => {
    try {
      const user = await User.findById(payload.user);
      if (!user) {
        return done(null, false);
      } 

      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  }
);

passport.use(localStrategy);
passport.use(jwtStrategy);

const authLocal = passport.authenticate('local', {
  session: false
  // failureRedirect: '/login'
});

const authJwt = passport.authenticate('jwt', {
  session: false
})

module.exports = { authLocal, authJwt };