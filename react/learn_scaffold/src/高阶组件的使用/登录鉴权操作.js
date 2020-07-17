import React, { PureComponent } from "react";

class Login extends PureComponent{
  render(){
    return <h1>请先登录~~~</h1>;
  }
}

class Cart extends PureComponent{
  render(){
    return <h1>购物车</h1>;
  }
}

function AuthCmp(WarppedComponent){
  return (props)=>{
    if(props.isLogin){
      return (<WarppedComponent/>);
    }
    else{
      return <Login/>;
    }
  };
}

const AuthenticatedApp = AuthCmp(Cart);
export default class App extends PureComponent{

  render(){
    return (
      <div>
        <AuthenticatedApp {...this.props} isLogin={true}/>
      </div>
    );
  }
}
