const express = require('express'),
      router = express.Router(),
      nc = require('../controllers/noteController'),
      { check, validationResult } = require('express-validator/check');

router.get('/', nc.getNote);
router.post('/',[
  check('log').isLength({ min: 1 }).withMessage('must have log')
], nc.addNote);
router.delete('/:id', nc.deleteNote);
router.put('/:id',[
  check('log').isLength({ min: 1 }).withMessage('must have log')
], nc.editNote);

module.exports = router;