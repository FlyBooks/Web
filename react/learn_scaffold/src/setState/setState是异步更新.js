import React, { Component } from "react";

// setState是异步更新
/*
setState设计为异步，可以显著提升性能：
1.如果每次调用setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的
2.最好的方法是获取到多个更新之后进行批量更新

如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步；
1. state和props不能保持一致性，会在开发中产生很大问题
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
        <h1>当前计数： {this.state.msg}</h1>
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
    this.setState({
      msg: "Up Up!",
    });
    console.log(this.state.msg);

    //方式一： 获取异步更新后的数据
    //setState(更新state,回调函数)
    this.setState({
      msg:'haha,这次可以一致了欧~'
    },()=>{
      console.log(this.state.msg,'call back');
    });
  }

  //方式二：获取异步更新的state
  componentDidUpdate(){
    console.log(this.state.msg,'componentDidUpdate');
  }
}
