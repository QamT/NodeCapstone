const { Project } = require('../models/project'),
      { validationResult } = require('express-validator/check');

module.exports = {

  getProjects: async(req, res) => {
    try {
      let projects = await Project.find();
      projects = projects.map(project => project.serialize());
      res.json(projects);
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  addProject: async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    const { title, description, progress } = req.body;

    try {
      let project= await Project.create({
        title,
        description,
        progress
      });
      res.json(project.serialize());
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  editProject: async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    try {
      let project = await Project.findById(req.params.id);

      Object.keys(req.body).forEach(key => {
        project[key] = req.body[key];
      });
      let updatedNote = await project.save().then(note => note.serialize());
      res.json(updatedNote);
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  deleteProject: async(req, res) => {
    try {
      let project = await Project.findByIdAndRemove(req.params.id);
      res.json(`${project.title} was removed`);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}