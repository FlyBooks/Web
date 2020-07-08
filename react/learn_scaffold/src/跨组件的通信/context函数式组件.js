import React, { Component } from "react";

function ProfileHear() {
  return (
    <UserContent.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称：{value.name}</h2>
            <h2>用户等级: {value.level}</h2>
          </div>
        );
      }}
    </UserContent.Consumer>
  );
}

const UserContent = React.createContext({
  name: "Allen",
  level: -1,
});

function Profile(props) {
  // const { name, level } = props;
  return (
    <div>
      {/* <ProfileHear name={name} level={level} /> */}
      <ProfileHear />
      <ul>
        <li>设置1</li>
        <li>设置1</li>
        <li>设置1</li>
        <li>设置1</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "FlyBooks!",
      level: 999,
    };
  }
  render() {
    return (
      <div>
        <UserContent.Provider value={this.state}>
          <Profile />
        </UserContent.Provider>
      </div>
    );
  }
}
