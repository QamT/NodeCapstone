const express = require('express'),
      router = express.Router(),
      tc = require('../controllers/techController'),
      { authJwt } = require('../auth/strategies');

router.get('/', authJwt, tc.getTech);
router.post('/add', authJwt, tc.addTech)
router.delete('/delete/:id', authJwt, tc.deleteTech);
router.post('/update/:id', authJwt, tc.updateTech);

// Api
router.get('/api', authJwt, tc.getTechApi);
router.post('/api', authJwt, tc.addTech)
router.delete('/api/:id', authJwt, tc.deleteTech);
router.post('/api/:id', authJwt, tc.updateTech);

module.exports = router;