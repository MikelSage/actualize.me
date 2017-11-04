import React, {Component} from 'react'
import {Button, Form, Header} from 'semantic-ui-react'

export default class LoginForm extends Component {
  render() {
    const loginError = this.props.error && <h1 className='ui centered aligned header'>{this.props.error}</h1>
    return (
      <div>
        <Header as='h2' textAlign='center'>
          <Header.Content>Please Log In</Header.Content>
        </Header>
        {loginError}
        <br/>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input id='username'
             placeholder='Username'
             onChange={this.props.handleChange}
              />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input id='password'
            placeholder='Password'
            onChange={this.props.handleChange}
             />
          </Form.Field>
          <Button type='submit'>Log In</Button>
        </Form>
      </div>
    )
  }
}
