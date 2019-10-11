const notesCtrl = {};

const Note = require('../models/Note.js');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author,author2 } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author,author2
    });
    await newNote.save();
    res.json('New Note added');
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
}

notesCtrl.updateNote = async (req, res) => {
    const { title, content, duration, date, author,author2 } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        date,
        author,
        author2
    });
    res.json('Note Updated');
}

module.exports = notesCtrl;