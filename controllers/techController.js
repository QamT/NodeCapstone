const { Tech } = require('../models/tech');

module.exports = {

  getTech: async(req, res) => {
    try {
      let techs = await Tech.find({ user: req.user.id });
      res.status(200).render('tech', { data: techs });
    } catch (err) {
      res.status(500).json({ error: `${err}`});
    }
  },

  addTech: async(req, res) => {
    const { title = '', info = '', check = 'red'} = req.query;

    try {
      let tech = await Tech.create({
        title,
        info,
        check,
        user: req.user.id
      });
      res.status(201).json(tech);
    } catch (err) {
      res.status(500).json({ error: `${err}`});
    }
  },

  deleteTech: async(req, res) => {
    try {
      let tech = await Tech.findByIdAndRemove(req.params.id);
      res.status(200).json(`${tech.title} was removed`);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  updateTech: async(req, res) => {
    try {
      let tech = await Tech.findById(req.params.id);

      Object.keys(req.query).forEach(key => {
        tech[key] = req.query[key];
      });

      let data = await tech.save();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getTechApi: async(req, res) => {
    try {
      let techs = await Tech.find({ user: req.user.id });
      res.status(200).json({ data: techs });
    } catch (err) {
      res.status(500).json({ error: `${err}`});
    }
  },
}

