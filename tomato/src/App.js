import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Tomato from './pages/Tomato';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <h1> Here is App.js Handling our routing. </h1>
        <nav>
           <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/tomato/"> Tomato </Link>
            </li>
            </ul>
        </nav>
          <Switch>
             <Route path="/about/" component={ AboutUs } />
             <Route path="/tomato/" component={ Tomato } />
             <Route path="/" exact component={ Home } />
             <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
              
  );
}

export default App;
