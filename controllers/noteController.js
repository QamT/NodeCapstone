const { Note } = require('../models/note'),
      { validationResult } = require('express-validator/check');

module.exports = {

  getNote: async(req, res) => {
    try {
      let notes = await Note.find();
      notes = notes.map(note => note.serialize());
      res.json(notes);
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  addNote: async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    const { title = '', log, date = Date.now() } = req.body;

    try {
      let note = await Note.create({
        title,
        log,
        date
      });
      res.json(note.serialize());
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  editNote: async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    try {
      let note = await Note.findById(req.params.id);
   
      Object.keys(req.body).forEach(key => {
        note[key] = req.body[key];
      });
      let updatedNote = await note.save().then(note => note.serialize());
      res.json(updatedNote);
    } catch (err) {
      res.status(500).json({ err });
    }
  },

  deleteNote: async(req, res) => {
    try {
      let note = await Note.findByIdAndRemove(req.params.id);
      res.json(`${note.title} was removed`);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}