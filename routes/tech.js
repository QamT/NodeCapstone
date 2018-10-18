const express = require('express'),
      router = express.Router(),
      tc = require('../controllers/techController'),
      { authJwt } = require('../auth/strategies'),
      { check, validationResult } = require('express-validator/check');

router.get('/', authJwt, tc.getTech);

router.post('/add', [
  check('title').isLength({ min: 1 }).withMessage('Title is required'),
  check('check').isIn(['red', 'yellow', 'green'])
], authJwt, tc.addTech)

router.delete('/delete/:id', authJwt, tc.deleteTech);

router.post('/update/:id',[
  check('title').isLength({ min: 1 }).withMessage('Title is required')
], authJwt, tc.updateTech);

router.post('/:id', authJwt, tc.updateProgress);

module.exports = router;