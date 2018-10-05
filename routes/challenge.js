const express = require('express'),
      router = express.Router(),
      { authJwt } = require('../auth/strategies'),
      cc = require('../controllers/challengeController');

router.get('/', authJwt, cc.getChallenge);
// router.post('/:id', cc.addChallenge);
router.put('/', authJwt, cc.updateChallenge);

module.exports = router;