import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div id="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of the application.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default HomePage;
