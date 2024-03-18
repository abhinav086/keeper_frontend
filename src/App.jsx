import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import NotesGroup from './component/NotesGroup'; // Import NotesGroupDetail component
import NotesComponent from './component/NotesComponent';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<NotesGroup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notesgroup/:groupId" element={<NotesComponent/>} /> // Route for individual NotesGroup pages
        </Routes>
      </Router>
    </div>
  );
}

export default App;
