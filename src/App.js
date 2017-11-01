import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects}/>
        </div>
      </Router>
    );
  }
}

export default App;
