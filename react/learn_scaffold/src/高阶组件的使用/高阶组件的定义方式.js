import React, { PureComponent } from "react";

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>我是高阶组件</h1>
      </div>
    );
  }
}

function enhanceComponent(WarpComponent){
  class NewComponet extends PureComponent{
    render(){
      return(
        <WarpComponent {...this.props}/>
      );
    }
  }

  return NewComponet;
}

function enhanceComponent2(WarpComponent){
 function NewComponent(props){
  return <WarpComponent/>;
 }
 NewComponent.displayName = "New2";
 return  NewComponent;
}


export default enhanceComponent2(App);
