import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'

class App extends Component {
  render() {
      return localStorage.getItem('user_id') ?
      (<Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects}/>
        </div>
      </Router>) : (
        <Router>
          <div className='container'>
          <Nav />
          <Route exact path='/' render={ () =>(
            <div>Log In</div>
          )}/>
          <Route path='/projects' render={() => (
            <Redirect to='/' />
          )}/>
          </div>
        </Router>
      )
  }
}

export default App;
