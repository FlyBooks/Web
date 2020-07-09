import React, { Component } from "react";

// setState是异步更新
/*
一般分成两张情况：
1、在组件生命周期或者React合成事件中， setState是异步；
2.在setTimeout或者原生dom事件中，setState是同步
*/

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>当前计数： {this.state.count}</h1>
        <button
          onClick={(e) => {
            this.changeContent();
          }}
        >
          改变文本内容
        </button>
      </div>
    );
  }

  changeContent() {
    //1. setState本身会被合并，这里点击一下并不会更新3次
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );

    //2.setState合并时进行累加
    this.setState((preState, props) => {
      return {
        count: preState.count + 1,
      };
    });
    this.setState((preState, props) => {
      return {
        count: preState.count + 1,
      };
    });
    this.setState((preState, props) => {
      return {
        count: preState.count + 1,
      };
    });
  }
}
