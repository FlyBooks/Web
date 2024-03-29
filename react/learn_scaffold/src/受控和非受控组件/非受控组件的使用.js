import React, {PureComponent, createRef} from "react";

export default class App extends PureComponent{
  constructor(props){
    super(props);
    this.userRef = createRef();
  }
  render(){
    return (
      <div>
        <form onSubmit={(e)=>{this.handleSubmit(e);}}>
          <label htmlFor="username">
            用户姓名：<input id="username" name="username" ref={this.userRef}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.userRef.current.value);
  }
}