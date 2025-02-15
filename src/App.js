import './App.css';
import HomePage from './HomePage'; // Import HomePage component

function App() {
   let style={
    backgroundColor: 'grey',
    padding: '10px',
    textDecoration: 'none',
  }
  
  return (
    <div className="App">
      <HomePage /> 
    </div>
  );
}

export default App;
