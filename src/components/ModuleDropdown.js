import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import BASE_URL from '../requests'

export default class ModuleDropdown extends Component {
  state = {}

  componentDidMount() {
    axios.get(`${BASE_URL}/api/v1/modules`)
    .then((response) => {
      this.setState({
        modules: response.data
      })
    })
  }

  render() {
    const mods = this.state.modules && this.state.modules.map((mod) => {
      return {
        text: `${mod.inning} ${mod.program}`,
        value: `${mod.inning} ${mod.program}`,
        key: `mod-${mod.id}`
      }
    })

    return (
      <Dropdown placeholder='Select Module' fluid selection options={mods || []}/>
    )
  }
}
