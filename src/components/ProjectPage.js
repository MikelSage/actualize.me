import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'
import Submission from './Submission'
import BASE_URL from '../requests'
import axios from 'axios'

export default class ProjectPage extends Component{
  state = {}

  componentDidMount() {
    this.fetchSubmissions()
  }

  fetchSubmissions = () => {
    let project_id = this.props.match.params.id
    axios.all([
      axios.get(`${BASE_URL}/api/v1/projects/${project_id}/ungraded_subs`),
      axios.get(`${BASE_URL}/api/v1/projects/${project_id}`)
    ])
      .then(axios.spread((subs, project) => {
        console.log(subs.data);
        this.setState({
          submissions: subs.data,
          project: project.data
        })
      }))
      .catch((error) => {
        console.error(error);
      })
  }

  mapSubmissions(rawSubs) {
    return rawSubs.map((sub) => {
      return {
        title: {
          content: `Submitted by: ${sub.user.first_name} ${sub.user.last_name}, Github: ${sub.github_url}`,
          key: `title-${sub.id}`
        },
        content: {
          content: <Submission submission={sub} fetchSubs={this.fetchSubmissions}/>,
          key: `content-${sub.id}`
        }
      }
    })
  }

  render() {
    const rawSubs = this.state.submissions
    const submissions = rawSubs && this.mapSubmissions(rawSubs)
    const projectName = this.state.project && this.state.project.name
    const desc = this.state.project && this.state.project.description
    return (
      <div>
        <h2>{projectName}</h2>
        <h3>{desc}</h3>
        {
          rawSubs && rawSubs.length ? (
            <Accordion fluid styled defaultActiveIndex={-1} panels={submissions} ugh={this.state.something}/>
          ) : (
            <h2>No Submissions Found</h2>
          )
        }
      </div>
    )
  }
}
