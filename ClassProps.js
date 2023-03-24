import React, { Component } from 'react'

export class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>
        {this.props.name} welcome back from {this.props.city}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default ClassProps