const express = require('express'),
      router = express.Router(),
      cc = require('../controllers/challengeController');

router.get('/', cc.getChallenge);
// router.post('/:id', cc.addChallenge);
router.put('/', cc.updateChallenge);

module.exports = router;