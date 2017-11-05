import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import axios from 'axios'
import BASE_URL from '../requests'


export default class Projects extends Component {
  state = {
    activeIndex: -1
  }

  handleClick = (element, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({
      activeIndex: newIndex
    })
  }

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
    const { activeIndex } = this.state
    const projects = rawProjs && rawProjs.map((project, index) => {
      return (
        <div>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={this.handleClick}
          >
            <Icon name='dropdown'/>
            {project.name}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <p>Some Stuff</p>
          </Accordion.Content>
        </div>
      )
    })

    return(
      <Accordion fluid styled>
        {projects}
      </Accordion>
    )
  }
}
