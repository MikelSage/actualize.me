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
import LoginForm from './components/LoginForm'
import axios from 'axios'

class App extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    axios.post('http://localhost:5000/api/v1/sessions', {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      localStorage.setItem('user_id', response.data.id)
      localStorage.setItem('role', response.data.role)
    })
    .catch((error) => {
      console.log('we hit an error');
      console.error(error);
    })
  }

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
          <Route exact path='/' render={props => <LoginForm handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} {...props} />}
           />
          <Route path='/projects' render={() => (
            <Redirect to='/' />
          )}/>
          </div>
        </Router>
      )
  }
}

export default App;
