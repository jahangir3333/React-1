import './App.css';
import HomePage from './HomePage'; // Import HomePage component
import AboutPage from './AboutPage'; // Import AboutPage component
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import routing components

function App() {
   let style={
    backgroundColor: 'grey',
    padding: '10px',
    textDecoration: 'none',
  }
  
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" style={style}>Home</Link>
          <Link to="/about" style={style}>About</Link>
        </nav>
      <Routes>

      <Route exact path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />

      </Routes>
        
      </div>
    </Router>
  );
}

export default App;
