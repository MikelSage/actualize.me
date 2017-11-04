import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = {}

  handleNavClick = (element, name) => {
    return this.setState({activeItem: name})
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item as={NavLink} exact activeClassName='active' to ='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleNavClick}
        >
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName='active' to='/projects'
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleNavClick}
        >
          Projects
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
          name='logout'
          onClick={this.props.logoutHandler}
          >
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
