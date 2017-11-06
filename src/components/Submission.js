import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Area from './Area'
import axios from 'axios'
import BASE_URL from '../requests'

export default class Submission extends Component {
  state = {
    scores: []
  }

  handleChange = (event) => {
    let newScore = { [event.target.name]: event.target.value }
    this.setState({
      scores: this.state.scores.concat(newScore)
    })
  }

  handleSubmit = (event) => {
    axios.all(this.mapScorePosts())
    .then(axios.spread((...data) => {
      this.props.fetchSubs()
    }))
  }

  mapScorePosts = () => {
    return this.state.scores.map((score) => {
      let area = Object.keys(score)[0]
      return axios.post(`${BASE_URL}/api/v1/scores`, {
        sub_id: this.props.submission.id,
        area_id: area,
        score: score[area]
      })
    })
  }

  componentDidMount() {
    console.log(this.props);
    let project_id = this.props.submission.project_id
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
               key={`${this.props.submission.user_id}-${area.id}`}
               rawArea={area}
               user={this.props.submission.user_id}
               handleChange={this.handleChange}
              />
    })

    return (
      <Form onSubmit={this.handleSubmit}>
        {areas}
        <br/>
        <input type='submit' value='Submit' />
      </Form>
    )
  }
}
