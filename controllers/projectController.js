const { Project } = require('../models/project'),
      cloudinary = require('cloudinary'),
      { storage } = require('../imgMiddleware');

module.exports = {

  getProjects: async(req, res) => {
    try {
      let projects = await Project.find({ user: req.user.id });
      projects = projects.map(project => project.serialize());
      res.status(200).render('projects', { data: projects});
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  addProject: async(req, res) => {
    const { title, description = '' } = req.body;
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
        user: req.user.id
      });
      res.redirect('/project');
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  editProject: async(req, res) => {
    try {
      let project = await Project.findById(req.params.id);
      const { title, description = '' } = req.body;

      project['title'] = title;
      project['description'] = description;

      if (req.file) {
        project['img'] = {
          url: req.file.url,
          id: req.file.public_id.split('/')[1] 
        }
      }

      await project.save().then(note => note.serialize());
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
      res.status(200).json(`${project.title} was removed`);
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  getProjectsApi: async(req, res) => {
    try {
      let projects = await Project.find({ user: req.user.id });
      projects = projects.map(project => project.serialize());
      res.status(200).json({ data: projects });
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  addProjectApi: async(req, res) => {
    const { title = 'Project', description = '' } = req.body;
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
        user: req.user.id
      });
      res.status(200).json({ data: project });
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  editProjectApi: async(req, res) => {
    try {
      let project = await Project.findById(req.params.id);
      Object.keys(req.body).forEach(key => {
        project[key] = req.body[key];
      })
    
      if (req.file) {
        project['img'] = {
          url: req.file.url,
          id: req.file.public_id.split('/')[1] 
        }
      }

      res.status(200).json({ data: await project.save() });
    } catch (err) {
      res.status(500).json({ err });
    }
  },
}