const express = require('express'),
      router = express.Router(),
      pc = require('../controllers/projectController'),
      { parser } = require('../imgMiddleware'),
      { authJwt } = require('../auth/strategies');

router.get('/', authJwt, pc.getProjects);
router.post('/', parser.single('img'), authJwt, pc.addProject);
router.delete('/:id', authJwt, pc.deleteProject);
router.post('/:id', parser.single('img'), authJwt, pc.editProject);

// Api
router.get('/api/', authJwt, pc.getProjectsApi);
router.post('/api/', parser.single('img'), authJwt, pc.addProjectApi);
router.delete('/api/:id', authJwt, pc.deleteProject);
router.post('/api/:id', parser.single('img'), authJwt, pc.editProjectApi);

module.exports = router;