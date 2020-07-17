import React, { PureComponent, createContext } from "react";

class AccountA extends PureComponent {
  render() {
    return (
      <div>
        <userWith.Consumer>
          {(user) => {
            return (<p>{`用户：${user.name} 等级：${user.level} 区域：${user.place}`}</p>);
          }}
        </userWith.Consumer>
      </div>
    );
  }
}

class AccountB extends PureComponent {
  render() {
    return (<div>
    <userWith.Consumer>
      {
        (info)=>{
          return (
            <p>
              {`姓名：${info.name} 等级: ${info.level} 区域: ${info.place}`}
            </p>
          );
        }
      }
    </userWith.Consumer>
    </div>);
  }
}

const userWith = createContext({
  name: "zhangSan",
  level: -1,
  place: "unknown",
});

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>createContext</h1>
        <userWith.Provider value={{ name: "Taylor", level: 99, place: "USA" }}>
          <AccountA />
          <AccountB />
        </userWith.Provider>
        <userWith.Provider value={{ name: "Selena", level: 100, place: "USA" }}>
          <AccountB />
        </userWith.Provider>
      </div>
    );
  }
}
