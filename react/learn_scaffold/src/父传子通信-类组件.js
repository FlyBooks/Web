import React, { Component } from "react";

class ChildCmp extends Component {
  // constructor(props) {
  //   super();
  //   this.props = props;
  // }

  //子类默认的构造器如下，所以我们可以省略不写
  // constructor(props){
  //   super(props);
  // } 
  render() {
    const { name, age, height } = this.props;
    return (
      <div>
        <h2>子组件:</h2>
        <h2>{"name:" + name}</h2>
        <h2>{"age:" + age}</h2>
        <h2>{"height:" + height}</h2>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCmp name="Eva" age="18" height="1.68" />
        <ChildCmp name="Selena" age="18" height="1.66" />
        <ChildCmp name="Taylor" age="18" height="1.76" />
      </div>
    );
  }
}
