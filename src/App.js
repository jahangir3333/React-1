import './App.css';
import bg from './IMAGES/pngtree-soft-pink-watercolor-background-for-website-banners-textures-and-design-elements-png-image_10587256.png';
import logo from './IMAGES/maxresdefault_cr.jpg'
import HomePage from './HomePage'; // Import HomePage component
import AboutPage from './AboutPage'; // Import AboutPage component
import BusinessHomePage from './BusinessHomePage'; // Import BusinessHomePage component
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import routing components

function App() {
   let style={
    backgroundColor: 'white',
    padding: '10px',
    textDecoration: 'none',
  }
let style_main={
  backgroundImage:`url(${bg})`,
  padding: '60px',}

let style_nav=
{width:'100%',padding:'10px', backgroundColor:'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

}

  return (
    <div className="App" style={style_main}> 
      <Router>

<div className="content" style={{backgroundColor:'white', padding:'20px', borderRadius:'10px'}}>
<div style={style_nav}> {/* Add style to center the navigation */}
          <img src={logo} alt=""/>
          <div className="menu">
          <Link to="/" style={style}>Home</Link>
          <Link to="/about" style={style}>About</Link>
          <Link to="/business" style={style}>Business</Link> {/* Add link to BusinessHomePage */}

          </div>
          </div>
          <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/business" element={<BusinessHomePage/>} /> {/* Add route for BusinessHomePage */}
        </Routes>

</div>
        
        
      </Router>
        
    </div>
  );
}

export default App;
