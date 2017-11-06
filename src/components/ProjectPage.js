import React, { Component } from 'react'

export default class ProjectPage extends Component{
  render() {
    console.log(this.props);
    return <div>Project {this.props.match.params.id} Page</div>
  }
}
