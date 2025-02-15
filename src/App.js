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

    //   <div className="App">
    //     <nav>
    //       <Link to="/" style={style}>Home</Link>
    //       <Link to="/about" style={style}>About</Link>
    //     </nav>

    //   <Router>
    //   <Routes>
    //   <Route exact path="/" element={<HomePage/>} />
    //   <Route path="/about" element={<AboutPage/>} />
    //   </Routes>
    // </Router>
    // </div>

    <div className='App'>
    <Link to="/" style={style} element={<HomePage/>}>Home</Link>
    <Link to="/about" style={style} element={<AboutPage/>}>Home</Link>

    </div>

  );
}

export default App;
