import React, { Component } from "react";
import './nav.css';
import Navbar from "./nav_bar.js";
import Navbar2 from './nav_bar2.js';

export default class App extends Component {
  render() {
    return <div>
      <Navbar>
        <div>hhh</div>
        <span>bbb</span>
        <p>ccc</p>
      </Navbar>
      <Navbar2  left_slot={<div>hhh</div>} middle_slot={<span>bbb</span>} right_slot={<p>ccc</p>}/>
    </div>;
  }
}
