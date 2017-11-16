import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import ScoreChart from './ScoreChart'

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
        <Button as={Link} to='/projects/new'>Add New Project</Button> :
        <Button as={Link} to='/submissions/new'>Submit a Project</Button>
    const chart = this.authorizedStudent() && <ScoreChart />

    return (
      <div className='container'>
        <h1 className='ui aligned header'>
          {`Welcome, ${localStorage.getItem('username')}`}
        </h1>
        {chart}
        {link}
      </div>
    )
  }
}
