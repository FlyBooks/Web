import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <h1>开始学习react啦~~</h1>
//     </div>
//   );
// }

class Cmp extends Component {
  render() {
    return <div>我是Cmp组件</div>;
  }

  componentWillUnmount() {
    console.log("调用了子组件的componentWillUnmount方法~");
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isShow: true,
    };
    console.log("执行了组件的constructor方法~~~");
  }
  render() {
    console.log("执行了render方法~~");
    return (
      <div>
        <h1>我是类组件</h1>
        <h1>计数器：{this.state.count}</h1>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.displayOrNot();
          }}
        >
          show or not
        </button>
        {this.state.isShow && <Cmp />}
      </div>
    );
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  displayOrNot() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  componentDidMount() {
    console.log("执行了componentDidMount方法");
  }

  componentDidUpdate() {
    console.log("执行了componentDidUpdate方法~~");
  }
}

// function App(){
//   return (
//     <div>
//       <span>我是函数组件</span>
//       <p>你好呀，函数组件~</p>
//     </div>
//   );
// }

export default App;
