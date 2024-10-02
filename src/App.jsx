import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Assuming HomePage is in components folder
import About from './components/About'; // Create this component
import Projects from './components/Projects'; // Create this component
import Navbar from './components/Navbar'; // Import your Navbar
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar at the top */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* HomePage is the default page */}
          <Route path="/About" element={<About />} /> {/* About Page */}
          <Route path="/Projects" element={<Projects />} /> {/* Projects Page */}
        </Routes>
        <Footer/>

      </div>
    </Router>
  );
};

export default App;
