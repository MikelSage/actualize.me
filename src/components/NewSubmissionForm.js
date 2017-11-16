import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import ProjectDropdown from './ProjectDropdown'
import BASE_URL from '../requests'
import axios from 'axios'


export default class NewSubmissionForm extends Component {
  state = {
    fireRedirect: false
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleDropdownChange = (event, data) => {
    this.setState({
      [data.id]: data.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/api/v1/submissions`,{
      userId: localStorage.getItem('user_id'),
      githubUrl: this.state['repo-url'],
      projectId: this.state['project-dropdown']
    }).then((response) => {
      this.setState({
        fireRedirect: true
      })
    })
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state
    return (
      <div>
        <h1>Submit a Project</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Select a Project</label>
            <ProjectDropdown handleChange={this.handleDropdownChange}/>
          </Form.Field>
          <Form.Field>
            <label>Enter Github Repo Url</label>
            <input
              id='repo-url'
              placeholder='Github Repo'
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        {fireRedirect && (
          <Redirect to={from || '/projects'}/>
        )}
      </div>
    )
  }
}
