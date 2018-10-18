const express = require('express'),
      router = express.Router(),
      { authJwt } = require('../auth/strategies'),
      cc = require('../controllers/challengeController');

router.get('/', authJwt, cc.getChallenge);
// router.post('/', cc.addChallenge);
router.post('/', authJwt, cc.updateChallenge);

module.exports = router;