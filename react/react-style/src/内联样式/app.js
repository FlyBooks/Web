import React,{PureComponent} from "react";

export default class App extends PureComponent{
  render(){
    const divStyle = {
      color: 'blue',
      'fontFamily': '微软雅黑'
    };
    return (
      <div>
        <p style={{color:"yellowgreen", fontSize:"55px"}}>内联样式哈~</p>
        <div style={divStyle}>
          Dream It Possible
        </div>
      </div>
    );
  }
}