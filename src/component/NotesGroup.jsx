import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Notesgroup.css';

const NotesGroup = () => {
  const [noteGroups, setNoteGroups] = useState([]);

  useEffect(() => {
    fetchNoteGroups();
  }, []);

  const fetchNoteGroups = async () => {
    try {
      const response = await axios.post('http://localhost:3000/notegroups', {});

      if (Array.isArray(response.data)) {
        setNoteGroups(response.data);
      } else {
        console.error('Note groups array not found in API response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching note groups:', error);
    }
  };

  return (
    <div>
      <h1>Note Groups</h1>
      <div className="note-groups-container">
        {noteGroups.map(group => (
          <Link to={`/notesgroup/${group._id}`} key={group._id} className="note-group-link">
            <div className="note-group-card">
              <h2 className="note-group-name">{group.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotesGroup;
