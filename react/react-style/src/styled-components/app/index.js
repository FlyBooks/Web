import React, { PureComponent } from "react";
import styled from "styled-components";
import Home from "../home";
import Profile from "../profile";

const StyledDiv = styled.div`
  font-size: 50px;
  color: ${(props)=>{return props.hoverColor}};
`;

const StyledH2 = styled.h2`
  text-decoration: line-through;
  text-shadow: 2px 2px lightsalmon;
`;

const StyledInput = styled.input.attrs({
  placeholder: "请输入你的姓名~",
  bcolor: "lightblue",
})`
  background-color: lightsalmon;
  border-color: ${props => props.hoverColor}
`;

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      hoverColor: "purple"
    }
  }
  render() {
    return (
      <StyledDiv>
        <StyledH2>App I am coming~~~</StyledH2>
        <StyledInput type="text" />
        <Home onClick={()=>{this.changeColor()}}/>
        <Profile/>
      </StyledDiv>
    );
  }

  changeColor(){
    console.log(111);
    console.log(this.state.hoverColor);
    this.setState({
      hoverColor: "blue"
    })
  }
}
