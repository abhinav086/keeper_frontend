import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notesgroup.css';

const NotesGroup = () => {
  const [noteGroups, setNoteGroups] = useState([]);

  useEffect(() => {
    fetchNoteGroups();
  }, []);

  const fetchNoteGroups = async () => {
    try {
      const response = await axios.post('http://localhost:3000/notegroups', {
        // You can pass any required parameters for your API call here
      });

      // Assuming your API response is an array of note groups
      setNoteGroups(response.data);
    } catch (error) {
      console.error('Error fetching note groups:', error);
    }
  };

  return (
    <div>
      <h1>Note Groups</h1>
      <div className="note-groups-container">
        {noteGroups.map(group => (
          <div className="note-group-card" key={group._id}>
            <h2 className="note-group-name">{group.name}</h2>
            {/* You can include additional information about the note group if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesGroup;
