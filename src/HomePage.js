import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of the application.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default HomePage;
