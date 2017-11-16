import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import BASE_URL from '../requests'

export default class AreaDropdown extends Component {
  state = {}

  componentDidMount() {
    axios.get(`${BASE_URL}/api/v1/areas`)
    .then((response) => {
      this.setState({
        areas: response.data
      })
    })
  }

  render() {
    const areas = this.state.areas && this.state.areas.map((area) => {
      return {
        text: `${area.name}`,
        value: area.id,
        key: `area-${area.id}`
      }
    })

    return (
      <Dropdown
        id='area-dropdown'
        placeholder='Select Areas'
        fluid multiple selection
        options={areas || []}
        onChange={this.props.onChange}
      />
    )
  }
}
