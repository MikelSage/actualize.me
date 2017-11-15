import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import ModuleDropdown from './ModuleDropdown'

export default class NewProjectForm extends Component {
  render() {
    return (
      <div>
        <h1 className='ui center aligned header'>
          Add a New Project
        </h1>
        <Form>
          <Form.Field>
            <label>Project Name</label>
            <input id='project-name'
             placeholder='Project Name'
             onChange={this.handleChange}
              />
          </Form.Field>
          <Form.Field>
            <label>Project Description</label>
            <input id='project-description'
             placeholder='Project Description'
             onChange={this.handleChange}
              />
          </Form.Field>
          <Form.Field>
            <label>Module</label>
            <ModuleDropdown/>
          </Form.Field>
        </Form>
      </div>
    )
  }
}
