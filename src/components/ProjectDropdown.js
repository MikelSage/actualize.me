import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class ProjectDropdown extends Component {
  render() {
    return (
      <Dropdown
        id='project-dropdown'
        placeholder='Select a Project'
        fluid selection
        options={[]}
      />
    )
  }
}
