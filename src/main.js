import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import CreateNewCompany from './components.js';
import App from './App.js';


const Main = () => (
    <Router>
      <div>
            <Link to="/"><button className = "btn btn-link btn-lg">Home</button></Link>
            <Link to="/details"><button className = "btn btn-link btn-lg">Details</button></Link>
            
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </div>
    </Router>
  );
  
  const Home = () => (
    <div>
        <App state='home'/>
      {/* <h2>Home</h2> */}
    </div>
  );
  
  const Details = () => (
    <div>
        <App state='details'/>
        
      {/* <h2>About</h2> */}
    </div>
  );  
  export default Main;
  