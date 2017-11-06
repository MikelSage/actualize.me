import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Area from './Area'
import axios from 'axios'
import BASE_URL from '../requests'

export default class Submission extends Component {
  state = {}

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    alert(`scores for project ${this.props.proj_id} from user ${this.props.user_id}: ${this.state[1]}`)
  }

  componentDidMount() {
    let project_id = this.props.proj_id
    axios.get(`${BASE_URL}/api/v1/projects/${project_id}/areas`)
    .then((response) => {
      this.setState({areas: response.data})
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    const rawAreas = this.state.areas
    const areas = rawAreas && rawAreas.map((area) => {
      return <Area
               key={`${this.props.user_id}-${area.id}`}
               rawArea={area}
               handleChange={this.handleChange}
              />
    })

    return (
      <Form onSubmit={this.handleSubmit}>
        {areas}
        <input type='submit' value='Submit' />
      </Form>
    )
  }
}
