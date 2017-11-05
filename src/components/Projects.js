import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import axios from 'axios'
import BASE_URL from '../requests'


export default class Projects extends Component {
  state = {}

  componentDidMount() {
    axios.get(BASE_URL + '/api/v1/current_projects')
      .then((response) => {
        this.setState({projects: response.data})
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    const rawProjs = this.state.projects
    const projects = rawProjs && rawProjs.map((project, index) => {
      return {
        title: {
          content: project.name,
          key: project.id
        },
        content: {
          content: (<p>Some Stuff</p>),
          key: project.id
        }
      }
    })

    return <Accordion fluid styled defaultActiveIndex={-1} panels={projects}/>
  }
}
