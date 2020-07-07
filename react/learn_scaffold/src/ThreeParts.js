import React, { Component } from "react";
import { Header, Banner, Footer } from "./component_defined_way/Header.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isShow: true,
    };
    console.log("执行了组件的constructor方法~~~");
  }

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;
