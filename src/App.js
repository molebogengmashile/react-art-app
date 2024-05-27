import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import Home from './pages/Home';
import Design from './pages/Design';
import Theory from './pages/Theory';
import InternetArt from './pages/InternetArt';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/internetart" element={<InternetArt />} />
      </Routes>
    </Router>
  );
};

export default App;