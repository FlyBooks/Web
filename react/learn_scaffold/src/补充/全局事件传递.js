import React, { PureComponent } from "react";
import { EventEmitter } from "events";

/*
跨组件之间的事件传递：events
安装events: yarn add events

events常用的API:
创建EventEmitter对象： eventBus对象；
发出事件：eventBus.emit("事件名称",参数列表);
监听事件：eventBus.addListener("事件名称"，监听函数);
移除事件：eventBus.removeListener("事件名称",监听函数);
*/

const eventBus = new EventEmitter();

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: 123,
    };
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.state.show}</p>
      </div>
    );
  }

  componentDidMount() {
    eventBus.addListener("sayHello", (...args)=>{this.sendDataToSiblings(...args)});
  }
  componentWillUnmount() {
    eventBus.removeListener("sayHello",(...args)=>{this.sendDataToSiblings(...args)});
  }

  sendDataToSiblings(str1, str2, num) {
    this.setState({
      show: str1+str2+num
    });
    console.log(str1, str2, num);
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <button
          onClick={() => {
            this.emitEvent();
          }}
        >
          个人信息
        </button>
      </div>
    );
  }

  emitEvent() {                                                                                  
    eventBus.emit("sayHello", "data1", "data1", 2333);
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}
