import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Project from './components/pages/Project';
import About from './components/pages/About';
import cercertificate from './components/pages/certificate';


function App() {
  return (
    <>
      <Router basename="/React">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Project' component={Project} />
          <Route path='/About' component={About} />
          <Route path='/cercertificate' component={cercertificate}/>
        </Switch>
      </Router>
    
    </>
  );
}

export default App;
