const { Project } = require('../models/project'),
      { validationResult } = require('express-validator/check'),
      cloudinary = require('cloudinary'),
      { storage } = require('../imgMiddleware');

module.exports = {

  getProjects: async(req, res) => {
    try {
      let projects = await Project.find({ user: req.user.id });
      projects = projects.map(project => project.serialize());
      res.render('projects', { data: projects});
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  addProject: async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    const { title, description = '', progress } = req.body;
    const img = {
      url: req.file ? req.file.url : '',
      id: req.file ? req.file.public_id.split('/')[1] : ''
    }
    

    try {
      let project = await Project.create({
        _id: new mongoose.Types.ObjectId(),
        title,
        description,
        img,
        progress,
        user: req.user.id
      });
      res.redirect('/project');
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
      res.redirect('/project');
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  deleteProject: async(req, res) => {
    try {
      const project = await Project.findById(req.params.id);
    
      if (project.img.url) {
        const imageId = `nodeapp/${project.img.id}`;
        await storage.cloudinary.uploader.destroy(imageId);
        // let result = await cloudinary.v2.api.resources({ type: 'upload', prefix: 'nodeapp/' });
      }

      await project.remove();
      res.json(`${project.title} was removed`);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}