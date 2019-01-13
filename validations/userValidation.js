const { check, validationResult } = require('express-validator/check');

module.exports = {
  validateUser: [
    check('username').isLength({ min: 6, max: 30 }).withMessage('Username must have at least 6 characters')
      .isAlphanumeric().withMessage('only alphanumeric characters allowed').trim().escape(),
    check('password').isLength({ min: 8, max: 30 }).withMessage('Password must have at least 8 characters')
      .isAlphanumeric().withMessage('only alphanumeric characters allowed'),
    // .custom((value, {req, local, path}) => {
    //   return value !== req.body.confirmPassword ? false : value;
    // }).withMessage("Passwords don't match")
    check('firstName').isAlpha(),
    check('lastName').isAlpha()
  ]
}
