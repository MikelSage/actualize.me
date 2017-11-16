import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import LoginForm from './components/LoginForm'
import ProjectPage from './components/ProjectPage'
import NewProjectForm from './components/NewProjectForm'
import axios from 'axios'
import BASE_URL from './requests'

class App extends Component {
  state = {}

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    axios.post(`${BASE_URL}/api/v1/sessions`, {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      localStorage.setItem('user_id', response.data.id)
      localStorage.setItem('role', response.data.role)
      localStorage.setItem('username', this.state.username)
      this.setState({
        username: this.state.username,
        password: this.state.password
      })
    })
    .catch((error) => {
      this.setState({
        error: 'Incorrect Credentials'
      })
    })
  }

  logoutHandler = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    this.setState({
      error: ''
    })
  }

  authorizedInstructor() {
    return localStorage.getItem('user_id')
      && localStorage.getItem('role') === 'instructor'
  }

  authorizedStudent() {
    return localStorage.getItem('user_id')
      && localStorage.getItem('role') === 'student'
  }

  render() {
      if (this.authorizedInstructor()) {
        return (<Router>
          <div>
            <Nav logoutHandler={this.logoutHandler}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/projects' component={Projects}/>
            <Route path='/projects/:id/ungraded' component={ProjectPage}/>
            <Route path='/projects/new' component={NewProjectForm}/>
          </div>
        </Router>)
      } else if (this.authorizedStudent()) {
        return (<Router>
          <div>
            <Nav logoutHandler={this.logoutHandler}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/projects' component={Projects}/>
          </div>
        </Router>)
      } else {
        return (
          <div className='container'>
            <LoginForm handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
             />
          </div>
      )
    }
  }
}

export default App;
