import React, { PureComponent, createContext } from "react";

class UserA extends PureComponent {
  render() {
    return (
      <div>
        <p>{`姓名: ${this.props.name} 职业： ${this.props.job} 等级：${this.props.level}`}</p>
      </div>
    );
  }
}

class UserB extends PureComponent {
  render() {
    return (
      <div>
        <p>{`姓名: ${this.props.name} 职业： ${this.props.job} 等级：${this.props.level}`}</p>
      </div>
    );
  }
}

const withUser = createContext({
  name: "路人甲",
  job: "coder",
  level: 9,
});

function enhanceUser(WrappedComponent) {
  return function (props) {
    return (
      <withUser.Consumer>
        {(userData) => {
          return <WrappedComponent {...props} {...userData}/>
        }}
      </withUser.Consumer>
    );
  };
}
const EnhanchA = enhanceUser(UserA);
const EnhanchB = enhanceUser(UserB);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>createContext增强版</h1>
        <withUser.Provider
          value={{ name: "Taylor", job: "Singer", level: 999 }}
        >
          <EnhanchA />
          <EnhanchB />
        </withUser.Provider>
      </div>
    );
  }
}
