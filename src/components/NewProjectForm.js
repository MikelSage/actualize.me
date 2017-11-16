import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import ModuleDropdown from './ModuleDropdown'
import AreaDropdown from './AreaDropdown'
import BASE_URL from '../requests'
import axios from 'axios'

export default class NewProjectForm extends Component {
  state = {
    'project-name': '',
    'project-description': '',
    'spec-url': '',
    'module-dropdown': '',
    'area-dropdown': [],
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
    axios.post(`${BASE_URL}/api/v1/projects`, {
      name: this.state['project-name'],
      description: this.state['project-description'],
      moduleId: this.state['module-dropdown'],
      specUrl: this.state['spec-url'],
      areas: this.state['area-dropdown']
    })
    .then((response) => {
      this.setState({
        'project-name': '',
        'project-description': '',
        'spec-url': '',
        'module-dropdown': '',
        'area-dropdown': [],
        fireRedirect: true
      })
    })
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

    return (
      <div>
        <h1 className='ui center aligned header'>
          Add a New Project
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Project Name</label>
            <input id='project-name'
             placeholder='Project Name'
             value={this.state['project-name']}
             onChange={this.handleInputChange}
              />
          </Form.Field>
          <Form.Field>
            <label>Project Description</label>
            <input id='project-description'
             placeholder='Project Description'
             value={this.state['project-description']}
             onChange={this.handleInputChange}
              />
          </Form.Field>
          <Form.Field>
            <label>Spec Url</label>
            <input id='spec-url'
              placeholder='Spec Url'
              value={this.state['spec-url']}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Module</label>
            <ModuleDropdown onChange={this.handleDropdownChange}/>
          </Form.Field>
          <Form.Field>
            <label>Areas</label>
            <AreaDropdown onChange={this.handleDropdownChange}/>
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
