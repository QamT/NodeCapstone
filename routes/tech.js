const express = require('express'),
      router = express.Router(),
      tc = require('../controllers/techController'),
      { check, validationResult } = require('express-validator/check');

router.get('/', tc.getTech);

router.post('/add', [
  check('title').isLength({ min: 1 }).withMessage('Title is required'),
  check('check').isIn(['red', 'yellow', 'green'])
], tc.addTech)

router.delete('/:id', tc.deleteTech);

router.put('/:id',[
  check('title').isLength({ min: 1 }).withMessage('Title is required')
], tc.updateTech);

module.exports = router;