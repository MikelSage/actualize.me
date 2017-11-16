import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  authorizedInstructor() {
    return localStorage.getItem('user_id')
      && localStorage.getItem('role') === 'instructor'
  }

  authorizedStudent() {
    return localStorage.getItem('user_id')
      && localStorage.getItem('role') === 'student'
  }

  render() {
    const link = this.authorizedInstructor() ?
        <Link to='/projects/new'>Add New Project</Link> :
        <Link to='/submissions/new'>Submit a Project</Link>
    return (
      <div>
        <h1 className='ui center aligned header'>
          {`Welcome, ${localStorage.getItem('username')}`}
        </h1>
        {link}
      </div>
    )
  }
}
