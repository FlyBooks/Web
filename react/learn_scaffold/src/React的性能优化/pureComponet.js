import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    console.log("Header render()");
    return <h1>我是Header组件</h1>;
  }
}

class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: ["大话西游", "盗梦空间", "指环王", "饥饿游戏"],
    };
  }
  render() {
    console.log("Banner render()");
    return (
      <div>
        <h1>我是Banner组件</h1>
        <ul>
          {this.state.movies.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

class Footer extends PureComponent {
  render() {
    console.log("Footer render()");
    return <h1>我是Footer组件</h1>;
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("App render()");
    return (
      <div>
        <h1
          onClick={(e) => {
            this.increment();
          }}
        >
          当前计数：{this.state.count}
        </h1>
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}
