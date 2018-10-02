const express = require('express'),
      router = express.Router(),
      pc = require('../controllers/projectController'),
      { check, validationResult } = require('express-validator/check');

router.get('/', pc.getProjects);
router.post('/',[
  check('title').isLength({ min: 1 }).withMessage('Must have title'),
  check('progress').isIn(['still working', 'done'])
], pc.addProject);
router.delete('/:id', pc.deleteProject);
router.put('/:id',[
  check('title').isLength({ min: 1 }).withMessage('Must have title')
], pc.editProject);

module.exports = router;