import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './component_defined_way/app.js';
// import App from './跨组件的通信/context函数式组件多个context.js';
// import App from "./setState/whyUse_setState.js";
// import App from "./setState/setState是异步更新.js";
// import App from './setState/setState数据合并.js';
  import App from "./补充/setState不可变的力量.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
