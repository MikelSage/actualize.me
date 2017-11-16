import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import ProjectDropdown from './ProjectDropdown'

export default class NewSubmissionForm extends Component {
  render() {
    return (
      <div>
        <h1>Submit a Project</h1>
        <Form>
          <Form.Field>
            <label>Select a Project</label>
            <ProjectDropdown />
          </Form.Field>
          <Form.Field>
            <label>Enter Github Repo Url</label>
            <input
              id='repo-url'
              placeholder='Github Repo'
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}
