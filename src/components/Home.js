import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='ui center aligned header'>
          {`Welcome, ${localStorage.getItem('username')}`}
        </h1>
        <Link to='/projects/new'>Add New Project</Link>
      </div>
    )
  }
}
