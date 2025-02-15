import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>

    <h1 style={{textAlign:'center'}}>This is my web page </h1>

    <nav>
      <Link to="/">HOme</Link>
    </nav>
    
    
    </>
      
   
  );
}

export default App;
