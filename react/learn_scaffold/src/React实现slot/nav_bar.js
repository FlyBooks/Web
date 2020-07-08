import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav_left">{this.props.children[0]}</div>
        <div className="nav_middle">{this.props.children[1]}</div>
        <div className="nav_right">{this.props.children[2]}</div>
      </div>
    )
  }
}
