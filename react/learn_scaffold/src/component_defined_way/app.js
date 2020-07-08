import React, { Component } from "react";
import "./tab.css";
import TabComponents from "./tab_components.js";

export default class App extends Component {
  constructor() {
    super();
    this.titles = ["新款", "流行", "精选"];
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    return (
      <div>
        <TabComponents
          titles={this.titles}
          sendIndex={(index) => {
            this.setTabContentIndex(index);
          }}
        />
        <h1>{this.titles[this.state.currentIndex]}</h1>
      </div>
    );
  }

  setTabContentIndex(index) {
    // console.log(index);
    this.setState({
      currentIndex: index,
    });
  }
}
