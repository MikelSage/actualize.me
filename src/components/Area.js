import React, { Component } from 'react'
import { Form, Grid } from 'semantic-ui-react'
import _ from 'lodash'

export default class Area extends Component {
  render() {
    const rawArea = this.props.rawArea
    const scoreButtons = _.times(4, (index) => {
      return <Form.Field
              label='This one'
              control='input'
              type='radio'
              value={index + 1}
              name={`${rawArea.id}`} />
    })
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <label>{rawArea.name}</label>
          </Grid.Column>
          <Grid.Column>
            <Form.Group inline onChange={this.props.handleChange}>
              {scoreButtons}
            </Form.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
