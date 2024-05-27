import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    
      <section className="container">
      <section className="landing">
        <h1>Welcome to my Internet Art Project</h1>
        <p>Discover amazing designs and the theories behind them.</p>
        <button className="cta-button"><Link className="nav-link" to="/">Exlpore</Link></button>
      </section>
    </section>
  
  );
};

export default Home;