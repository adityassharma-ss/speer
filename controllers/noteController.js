const Note = require('../models/Note');

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ owner: req.user._id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getNoteById = async (req, res) => {
  const noteId = req.params.id;

  try {
    const note = await Note.findOne({ _id: noteId, owner: req.user._id });
    
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createNote = async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const newNote = new Note({
        title,
        content,
        owner: req.user._id,
      });
  
      const savedNote = await newNote.save();
      res.status(201).json(savedNote);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

exports.updateNote = async (req, res) => {
    const noteId = req.params.id;
    const { title, content } = req.body;
  
    try {
      const updatedNote = await Note.findOneAndUpdate(
        { _id: noteId, owner: req.user._id },
        { title, content },
        { new: true }
      );
  
      if (!updatedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      res.json(updatedNote);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

exports.deleteNote = async (req, res) => {
    const noteId = req.params.id;
  
    try {
      const deletedNote = await Note.findOneAndDelete({ _id: noteId, owner: req.user._id });
  
      if (!deletedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      res.json(deletedNote);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.shareNote = async (req, res) => {
    const noteId = req.params.id;
    const { userIdToShareWith } = req.body;
  
    try {
      const note = await Note.findOne({ _id: noteId, owner: req.user._id });
  
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      if (!note.sharedWith.includes(userIdToShareWith)) {
        note.sharedWith.push(userIdToShareWith);
        await note.save();
      }
  
      res.json(note);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.searchNotes = async (req, res) => {
    const query = req.query.q;
  
    try {
      const notes = await Note.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
        ],
        owner: req.user._id,
      });
  
      res.json(notes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
