import React, { Component } from "react";

function ProfileHear(props) {
  const { name, level } = props;
  return (
    <div>
      <h2>用户昵称：{name}</h2>
      <h2>用户等级:{level}</h2>
    </div>
  );
}

function Profile(props) {
  // const { name, level } = props;
  return (
    <div>
      {/* <ProfileHear name={name} level={level} /> */}
      <ProfileHear {...props}/>
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
  render() {
    return (
      <div>
        <Profile name="FlyBooks" level={999} />
      </div>
    );
  }
}
