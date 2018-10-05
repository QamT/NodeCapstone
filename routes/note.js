const express = require('express'),
      router = express.Router(),
      nc = require('../controllers/noteController'),
      { authJwt } = require('../auth/strategies'),
      { check, validationResult } = require('express-validator/check');

router.get('/', authJwt, nc.getNote);
router.post('/',[
  check('log').isLength({ min: 1 }).withMessage('must have log')
], authJwt, nc.addNote);
router.delete('/:id', authJwt, nc.deleteNote);
router.put('/:id',[
  check('log').isLength({ min: 1 }).withMessage('must have log')
], authJwt, nc.editNote);

module.exports = router;