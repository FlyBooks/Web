import React, { PureComponent, forwardRef, createRef } from "react";

function Home(props, ref) {
  return (
    <div ref={ref}>
      <p>我是home函数组件</p>
      <p>{props.name}</p>
    </div>
  );
}
const HomeRef = forwardRef(Home);
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.homeRef = createRef();
  }
  render() {
    return (
      <div>
        <HomeRef ref={this.homeRef} name="eva" />
        <button
          onClick={() => {
            this.homeHtml();
          }}
        >
          修改Home
        </button>
      </div>
    );
  }

  homeHtml() {
    console.log(this.homeRef.current);
  }
}
