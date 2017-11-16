import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import BASE_URL from '../requests'
import axios from 'axios'

export default class ProjectDropdown extends Component {
  state = {}

  componentDidMount() {
    axios.get(`${BASE_URL}/api/v1/current_projects`,
    {params: {user_id: localStorage.getItem('user_id')}})
    .then((response) => {
      this.setState({
        projects: response.data
      })
    })
  }

  render() {
    const projects = this.state.projects && this.state.projects.map((proj) => {
      return {
        text: proj.name,
        value: proj.id,
        key: `project-${proj.id}`
      }
    })
    return (
      <Dropdown
        id='project-dropdown'
        placeholder='Select a Project'
        fluid selection
        options={projects || []}
        onChange={this.props.handleChange}
      />
    )
  }
}
