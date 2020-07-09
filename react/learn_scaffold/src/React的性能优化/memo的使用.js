import React, { Component, memo } from "react";

const HeaderMemo = memo(function Header() {
  return <h1>我是Header组件</h1>;
});

const BannerMemo = memo(function Banner() {
  let state = { movies: ["大话西游", "盗梦空间", "指环王", "饥饿游戏"] };

  return (
    <div>
      <h1>我是Banner组件</h1>
      <ul>
        {state.movies.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
});


class Footer extends Component {
  render() {
    console.log("Footer render()");
    return <h1>我是Footer组件</h1>;
  }
}

export default class App extends Component {
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
        <HeaderMemo />
        <BannerMemo />
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
