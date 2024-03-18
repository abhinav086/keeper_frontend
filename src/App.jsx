import './App.css';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import NotesGroup from './component/NotesGroup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/"  element={<NotesGroup/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
