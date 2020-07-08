import React, { Component } from "react";

class ProfileHear extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>用户昵称：{this.context.name}</h2>
        <h2>用户等级:{this.context.level}</h2>
      </div>
    );
  }
}

const UserContent = React.createContext({
  name: "Allen",
  level: -1,
});

ProfileHear.contextType = UserContent;

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
      name: "FlyBooks",
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
