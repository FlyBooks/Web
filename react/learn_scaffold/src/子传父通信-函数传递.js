import React, {Component} from 'react';

class ChildCmp extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {onClick} = this.props;
    return(
      <div>
        <button onClick={onClick}>+1 child</button>
      </div>
    );
  }
}


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  render(){
    return (
      <div>
        <h1>次数：{this.state.count}</h1>
        <button onClick={()=>{this.increment()}}>+1</button>
        <ChildCmp onClick={()=>{this.increment()}}/>
      </div>
    );
  }

  increment(){
    this.setState({
      count: ++this.state.count
    });
  }
}