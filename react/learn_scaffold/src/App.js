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

// class App extends Component{
//   constructor(){
//     super();
//   }
//   render(){
//     return (
//       <div>
//         <h1>我是类组件</h1>
//       </div>
//     );
//   }
// }

function App(){
  return (
    <div>
      <span>我是函数组件</span>
      <p>你好呀，函数组件~</p>
    </div>
  );
}

export default App;
