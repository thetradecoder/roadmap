import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component.js';
import ShortPlanList from './components/shortplanlist.component.js';
import LongPlanList from './components/longplanlist.component.js';

function App() {
  return (
    <Router>
      <Navbar />
    <div>
      <h1 className="text-center">Roadmap</h1>     
    </div>
    <Route path="/shortplan" component={ShortPlanList}></Route>
    <Route path="/longplan" component={LongPlanList}></Route>

    </Router>
  );
}

export default App;
