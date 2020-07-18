import React from "react";
import classNames from "classnames";

export default class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state={
      isTrue: true
    }
  }
  render(){
    return (
      <div>
        <h1 className={classNames("title",{bold2: this.state.isTrue})}>我是classnames</h1>
      </div>
    );
  }

}