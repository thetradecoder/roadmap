import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component.js';


function App() {
  return (
    <Router>
      <Navbar />
    <div>
      <h1 className="text-center">Roadmap</h1>     
    </div>
    </Router>
  );
}

export default App;
