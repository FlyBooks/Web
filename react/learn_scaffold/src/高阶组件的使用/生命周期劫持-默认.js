import React, { PureComponent } from "react";

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Home</div>;
  }

  UNSAFE_componentWillMount() {
    this.start = Date.now();
  }

  componentDidMount() {
    this.end = Date.now();
    const interval = this.end - this.start;
    console.log(interval);
  }
}

class About extends PureComponent{
  render(){
    return <h1>About</h1>;
  }
  UNSAFE_componentWillMount(){
    this.start = Date.now();
  }

  componentDidMount(){
    this.end = Date.now();
    const period = this.end - this.start;
    console.log(`About 花了${period}`);
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About/>
      </div>
    );
  }
}
