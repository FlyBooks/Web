import React, { PureComponent } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>当前计数：{this.state.count}</h1>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +1
        </button>
      </div>
    );
  }

  increment(){
    this.setState({
      count: this.state.count+1
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.refCounter = null;
  }
  render() {
    return (
      <div>
        <Counter
          ref={(args) => {
            this.refCounter = args;
          }}
        />
        <button onClick={()=>{this.refCounter.increment();}}>App</button>
      </div>
    );
  }
}
