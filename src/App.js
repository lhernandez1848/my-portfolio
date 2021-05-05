import React from 'react';
import { 
  BrowserRouter as Router,
   Route, 
   Switch,
  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlantpediaProject from './pages/PlantpediaProject';
import IVYProject from './pages/IVYProject';
import './App.css';
import NotFound from './pages/NotFound';
import NavBar from './NavBar';

function App() {
  return (
    <Router>    
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/plantpedia" component={PlantpediaProject} />
            <Route path="/ivy" component={IVYProject} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
