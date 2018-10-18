const { Tech } = require('../models/tech');
const { validationResult } = require('express-validator/check');

module.exports = {

  getTech: async(req, res) => {
    try {
      let techs = await Tech.find({ user: req.user.id });
      // let data = techs.map(tech => tech.serialize());
      // res.json(data);
      res.render('tech', { data: techs });
    } catch (err) {
      res.status(500).json({ error: `${err}`});
    }
  },

  addTech: async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ error: errors.array()});

    const { title, info, check } = req.body;

    try {
      let tech = await Tech.create({
        title,
        info,
        check,
        user: req.user.id
      });
      res.redirect('/tech');
    } catch (err) {
      res.status(500).json({ error: `${err}`});
    }
  },

  deleteTech: async(req, res) => {
    try {
      let tech = await Tech.findByIdAndRemove(req.params.id);
      res.json(`${tech.title} was removed`);
    } catch (err) {
      res.status(500).json({ error: `${err}` });
    }
  },

  updateTech: async(req, res) => {
    try {
      let tech = await Tech.findById(req.params.id);

      Object.keys(req.body).forEach(key => {
        tech[key] = req.body[key];
      });
      await tech.save();
      res.redirect('/tech');
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  updateProgress: async(req, res) => {
    try {
      let tech = await Tech.findById(req.params.id);
      tech.check = req.body.check;

      await tech.save();

      res.redirect('/tech');
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}

