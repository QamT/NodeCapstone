const { Challenge } = require('../models/challenge');
const { ChallengeNum } = require('../models/challengeNum');

module.exports = {
  
  getChallenge: async(req, res) => {
    try {
      let num = await ChallengeNum.findOne()
                .then(num => num.serialize());
      let challenge = await Challenge.find({ num });
      res.json(challenge);
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  // addChallenge: async(req, res) => {
  //   try {
  //     const { title, num, requirements, progress = '' } = req.body;
  //     let newChallenge = await Challenge.create({
  //       title, 
  //       num,
  //       requirements,
  //       progress
  //     });
  //     res.json(newChallenge.serialize());
  //   } catch (err) {
  //     res.status(500).json({ err });
  //   }
  // }

  updateChallenge: async(req, res) => {
    try {
      let number = await ChallengeNum.findOne();
      number.num = number.num + 1;
      if(number.num > 10) return res.status(300).json('challenges finished, will add more');

      await number.save();
      let challenge = await Challenge.find({ num: number.num });
      res.json(challenge);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
};