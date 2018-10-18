const express = require('express'),
      router = express.Router(),
      pc = require('../controllers/projectController'),
      { parser } = require('../imgMiddleware'),
      { authJwt } = require('../auth/strategies'),
      { check, validationResult } = require('express-validator/check');

router.get('/', authJwt, pc.getProjects);

router.post('/', parser.single('img'), [
  check('title').isLength({ min: 1 }).withMessage('Must have title')
  ], authJwt, pc.addProject);

router.delete('/:id', authJwt, pc.deleteProject);
router.post('/:id',[
  check('title').isLength({ min: 1 }).withMessage('Must have title')
], authJwt, pc.editProject);

module.exports = router;