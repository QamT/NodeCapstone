const { Challenge } = require('../models/challenge');
const { User } = require('../models/user');

module.exports = {
  
  getChallenge: async(req, res) => {
    try {
      let user = await User.findById(req.user.id);
      let challenge = await Challenge.findOne({ num: user.challengeNum });
      if(!challenge) return res.render('challenge', { data: `You've completed all your challenges, more will be added soon.` });

      res.render('challenge', { data: challenge.serialize() });
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  // addChallenge: async(req, res) => {
  //   try {
  //     const { title, description, num, examples, progress = '' } = req.body;
  //     let newChallenge = await Challenge.create({
  //       title, 
  //       description,
  //       num,
  //       examples,
  //       progress
  //     });
  //     res.json(newChallenge.serialize());
  //   } catch (err) {
  //     res.status(500).json({ err });
  //   }
  // },

  updateChallenge: async(req, res) => {
    try {
      let user = await User.findById(req.user.id);
      let userNum = user.challengeNum;
      user.challengeNum = user.challengeNum + 1;
      if(userNum > 3) return res.redirect('/challenge');
      await user.save();
      
      res.redirect('/challenge');
    } catch (err) {
      res.status(500).json({ err });
    }
  }
};