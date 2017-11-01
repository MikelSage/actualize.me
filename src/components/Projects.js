import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import axios from 'axios'

export default class Projects extends Component {
  state = {}
  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/current_projects')
      .then((response) => {
        this.setState({projects: response})
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    const projects = this.state.projects && this.state.projects.data.map(function(project) {
      return (
        <Header as='h3' textAlign='center' key={project.id}>
          <Header.Content>
            {project.name}
          </Header.Content>
        </Header>
      )
    })

    return(
      <div>
        <Header as='h1' textAlign='center'>
          <Header.Content>
            This is where the projects will go
          </Header.Content>
        </Header>
        {projects}
      </div>
    )
  }
}
