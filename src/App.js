import React from 'react';
import { 
  BrowserRouter as Router,
   Route, 
   Switch,
  } from 'react-router-dom';
import ScrollTop from 'react-scrolltop-button';
import HomePage from './pages/HomePage';
import PlantpediaProject from './pages/PlantpediaProject';
import IVYProject from './pages/IVYProject';
import './App.css';
import NotFound from './pages/NotFound';
import ScrollToTop from './ScrollToTop';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <ScrollToTop/>      
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
        <ScrollTop
          text="Top"
          distance={100}
          breakpoint={768}
          style={{ backgroundColor: "rgba(138, 138, 138, 0.55)" }}
          speed={500}
          target={75}
        />
      </div>
    </Router>
  );
}

export default App;
