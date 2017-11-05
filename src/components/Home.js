import React, { Component } from 'react'
import {Header} from 'semantic-ui-react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          <Header.Content>
            Welcome to Some Stuff
          </Header.Content>
        </Header>
      </div>
    )
  }
}
