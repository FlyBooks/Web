import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  render() {
    return (
      <div>
        <h1>受控组件</h1>
        <label htmlFor="username">
          用户名称：
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={(e) => {
              this.getUserName(e);
            }}
          />
        </label>

        <label htmlFor="password">
          用户密码：
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={(e) => {
              this.getUserName(e);
            }}
          />
        </label>

        <label htmlFor="email">
          邮箱：
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={(e) => {
              this.getUserName(e);
            }}
          />
        </label>
      </div>
    );
  }

  getUserName(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}
