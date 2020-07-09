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
      msg: "Hello World",
    };
  }

  render() {
    return (
      <div>
        <h1>改变信息： {this.state.msg}</h1>
        <button
          onClick={(e) => {
            this.changeContent();
          }}
        >
          改变文本内容
        </button>
        <button id="sync">原生测试同步</button>
      </div>
    );
  }

  componentDidMount() {
    const btn = document.getElementById("sync");

    btn.addEventListener("click", () => {
      this.setState({
        msg: "we are friends",
      });
      console.log(this.state.msg);
    });
  }

  changeContent() {
    setTimeout(() => {
      this.setState({
        msg: "大家好呀~",
      });
      console.log(this.state.msg);
    });
  }
}
