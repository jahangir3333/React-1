import './App.css';
import HomePage from './HomePage'; // Import HomePage component
import AboutPage from './AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
   let style={
    backgroundColor: 'grey',
    padding: '10px',
    textDecoration: 'none',
  }
  
  return (

    <Router>
      <div className="App">
      <nav style={{display: 'flex', justifyContent: 'center'}}>
          <Link style={style} to="/">Home</Link>
          <br />
          <Link style={style} to="/about">About</Link>
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
