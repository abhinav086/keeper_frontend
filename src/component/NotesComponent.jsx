import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NotesComponent.css';

const NotesComponent = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.post('http://localhost:3000/notes', {});

      if (Array.isArray(response.data.notes)) {
        setNotes(response.data.notes);
      } else {
        console.error('Notes array not found in API response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <div>
      <h1>Notes</h1>
      <div className="notes-container">
        {notes.map(note => (
          
            <div className="note-card">
              <h2 className="note-title">{note.title}</h2>
              <p className="note-content">{note.content}</p>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default NotesComponent;
