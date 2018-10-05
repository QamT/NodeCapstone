const express = require('express'),
      router = express.Router(),
      pc = require('../controllers/projectController'),
      { authJwt } = require('../auth/strategies'),
      { check, validationResult } = require('express-validator/check');

router.get('/', authJwt, pc.getProjects);
router.post('/',[
  check('title').isLength({ min: 1 }).withMessage('Must have title'),
  check('progress').isIn(['still working', 'done'])
], authJwt, pc.addProject);
router.delete('/:id', authJwt, pc.deleteProject);
router.put('/:id',[
  check('title').isLength({ min: 1 }).withMessage('Must have title')
], authJwt, pc.editProject);

module.exports = router;