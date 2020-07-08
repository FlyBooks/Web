import React, { Component } from 'react'

export default class Navbar2 extends Component {
  render() {
    const {left_slot,middle_slot,right_slot} = this.props;
    return (
      <div className="nav">
        <div className="nav_left">{left_slot}</div>
        <div className="nav_middle">{middle_slot}</div>
        <div className="nav_right">{right_slot}</div>
      </div>
    )
  }
}
