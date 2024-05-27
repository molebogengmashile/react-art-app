import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <Link className="nav-link" to="/" id='logo'>Internet Art Project</Link>
      <section className="hamburger" onClick={toggleMenu}>
        <section className="bar"></section>
        <section className="bar"></section>
        <section className="bar"></section>
      </section>
      <section className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/design">Design</Link>
        <Link className="nav-link" to="/theory">Theory</Link>
        <Link className="nav-link" to="/internetart">Art</Link>
      </section>
    </nav>
  );
};

export default Navbar;