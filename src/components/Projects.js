import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'semantic-ui-react'
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
          key: `title-${project.id}`
        },
        content: {
          content: (
            <div>
              <p>{project.description}</p>
              <a href={project.spec_url} target="_blank">Link to Spec</a> |
              <Link to={`/projects/${project.id}/ungraded`} className='sub-link'>
                Submissions
              </Link>
            </div>
          ),
          key: `content-${project.id}`
        }
      }
    })

    return <Accordion fluid styled defaultActiveIndex={-1} panels={projects}/>
  }
}
