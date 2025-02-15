import './App.css';
import HomePage from './HomePage'; // Import HomePage component
import AboutPage from './AboutPage'; // Import AboutPage component
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; // Import routing components

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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
