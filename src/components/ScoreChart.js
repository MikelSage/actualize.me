import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import BASE_URL from '../requests'
import axios from 'axios'


export default class ScoreChart extends Component {
  state = {}

  componentDidMount() {
    let user_id = localStorage.getItem('user_id')
    axios.get(`${BASE_URL}/api/v1/users/${user_id}/average_scores`)
    .then((response) => {
      this.setState({
        scores: response.data
      })
    })
  }

  render() {
    if (this.state.scores && this.state.scores.length) {
      return (
        <div>
          <h2>Your average scores</h2>
          <BarChart width={600} height={300} data={this.state.scores}
                    layout='vertical'
                    margin={{top: 30, left: 100, bottom: 30}}>
            <XAxis type='number' domain={[0, 4.0]}/>
            <YAxis type='category' dataKey='name'/>
            <Tooltip />
            <Bar dataKey='avg' fill='#82ca9d' />
          </BarChart>
        </div>
      )
    } else {
      return <h2>No Scores Yet!</h2>
    }
  }
}
