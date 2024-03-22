// NoteGroupsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notesgroup.css';
import { Link } from 'react-router-dom';

function NoteGroupsPage() {
  const [noteGroups, setNoteGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');

  useEffect(() => {
    fetchNoteGroups();
  }, []);

  const fetchNoteGroups = () => {
    axios.post('http://localhost:3000/notegroups')
      .then(response => {
        setNoteGroups(response.data);
      })
      .catch(error => {
        console.error('Error fetching note groups:', error);
      });
  };

  const handleNewGroupSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/create-note-group', { name: newGroupName })
      .then(() => {
        fetchNoteGroups();
        setNewGroupName('');
      })
      .catch(error => {
        console.error('Error creating note group:', error);
      });
  };

  const handleNewGroupNameChange = (event) => {
    setNewGroupName(event.target.value);
  };

  const deleteNoteGroup = (id) => {
    axios.post('http://localhost:3000/delete-note-group', { noteGroupId: id }) // Adjusted to send noteGroupId
      .then(() => {
        fetchNoteGroups();
      })
      .catch(error => {
        console.error('Error deleting note group:', error);
      });
  };

  return (
    <div className="container">
    <h2>Note Groups</h2>
    <ul className="note-groups-list">
      {noteGroups.map((group) => (
        <li key={group._id} className="note-group">
          <span className="note-group-name">
            <Link to={`/notes/${group._id}`}>{group.name}</Link>
          </span>
          <button className="delete-button" onClick={() => deleteNoteGroup(group._id)}>Delete</button>
        </li>
      ))}
    </ul>
    <form onSubmit={handleNewGroupSubmit} className="add-group-form">
      <input
        type="text"
        placeholder="New Group Name"
        value={newGroupName}
        onChange={handleNewGroupNameChange}
        className="new-group-input"
      />
      <button type="submit" className="create-group-button">Create Group</button>
    </form>
  </div>
  );
}

export default NoteGroupsPage;
