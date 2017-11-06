import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'
import BASE_URL from '../requests'
import axios from 'axios'

export default class ProjectPage extends Component{
  state = {}

  componentDidMount() {
    let project_id = this.props.match.params.id
    axios.get(`${BASE_URL}/api/v1/projects/${project_id}/ungraded_subs`)
      .then((response) => {
        this.setState({submissions: response.data})
      })
      .catch((error) => {
        console.error(error);
      })
  }

  mapSubmissions(rawSubs) {
    return rawSubs.map((sub) => {
      return {
        title: {
          content: `Submitted by: ${sub.user.first_name}, Github: ${sub.github_url}`,
          key: `title-${sub.id}`
        },
        content: {
          content: <div>Cool Stuff Goes Here</div>,
          key: `content-${sub.id}`
        }
      }
    })
  }

  render() {
    const rawSubs = this.state.submissions
    const submissions = rawSubs && this.mapSubmissions(rawSubs)
    return (
      <Accordion fluid styled defaultActiveIndex={-1} panels={submissions}/>
    )
  }
}
