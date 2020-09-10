import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
   Route, 
   Switch,
  } from 'react-router-dom';
import ScrollTop from 'react-scrolltop-button';
import HomePage from './pages/HomePage';
import PlantpediaProject from './pages/PlantpediaProject';
import IVYProject from './pages/IVYProject';
import ComingSoon from './pages/ComingSoon';
import './App.css';
import NotFound from './pages/NotFound';
import ScrollToTop from './ScrollToTop';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <script src="/__/firebase/7.17.1/firebase-app.js"></script>
      <script src="/__/firebase/7.17.1/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
      
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/plantpedia" component={PlantpediaProject} />
            <Route path="/ivy" component={IVYProject} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer/>
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
