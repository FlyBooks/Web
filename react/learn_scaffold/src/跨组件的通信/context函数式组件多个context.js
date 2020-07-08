import React, { Component } from "react";

function ProfileHear() {
  return (
    <UserContent.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称：{value.name}</h2>
            <h2>用户等级: {value.level}</h2>
            <ThemeContent.Consumer>
              {(theme) => {
                return (
                  <h2 style={{ color: theme.color }}>
                    等级颜色：蓝色 {theme.color}
                  </h2>
                );
              }}
            </ThemeContent.Consumer>
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

const ThemeContent = React.createContext({
  color: "black",
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
      color: "yellowgreen",
    };
  }
  render() {
    return (
      <div>
        <UserContent.Provider value={this.state}>
          <ThemeContent.Provider value={{ color: this.state.color }}>
            <Profile />
          </ThemeContent.Provider>
        </UserContent.Provider>
      </div>
    );
  }
}
