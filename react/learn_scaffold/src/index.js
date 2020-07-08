import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component_defined_way/app.js';
import App from './跨组件的通信/context函数式组件多个context.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


