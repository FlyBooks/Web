import React, {Component} from "react";

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  render(){
    return (
      <div>
        <h1>当前计数： {this.state.count}</h1>
        <button onClick={(e)=>{this.increment()}}>+1</button>
      </div>
    );
  }

  increment(){
    this.setState({
      count: ++this.state.count
    });
  }
}
