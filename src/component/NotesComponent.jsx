import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './NotesComponent.css';

const NotesComponent = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.post('http://localhost:3000/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const createNote = async () => {
    try {
      const response = await axios.post('http://localhost:3000/create-note', newNote);
      console.log('Note created successfully:', response.data);
      setNewNote({ title: '', content: '' });
      fetchNotes();
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const editNote = async (id, updatedNote) => {
    try {
      const response = await axios.post(`http://localhost:3000/edit-note`, { id, ...updatedNote });
      console.log('Note edited successfully:', response.data);
      fetchNotes();
    } catch (error) {
      console.error('Error editing note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3000/delete-note`, { id });
      console.log('Note deleted successfully:', response.data);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <h1>Notes</h1>
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note._id} className="note-card">
            <h2 className="note-title">{note.title}</h2>
            <p className="note-content">{note.content}</p>
            <div>
              <button onClick={() => editNote(note._id, { title: 'Updated Title', content: 'Updated Content' })}>Edit</button>
              <button onClick={() => deleteNote(note._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={newNote.title} onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} placeholder="Title" />
        <textarea value={newNote.content} onChange={(e) => setNewNote({ ...newNote, content: e.target.value })} placeholder="Content"></textarea>
        <button onClick={createNote}>Create Note</button>
      </div>
    </div>
  );
};

export default NotesComponent;
