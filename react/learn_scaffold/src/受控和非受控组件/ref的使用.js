import React, { PureComponent, createRef } from "react";

/*
ref的值根据节点的类型而有所不同：
1.当ref属性用于html元素时，构造函数中使用React.createRef()创建的ref接受底层DOM元素作为其current属性；
2.当ref属性用于自定义class组件时，ref对象接收组件的挂载实例作为其current属性；
3.不能在函数组件上使用ref属性，因为他们没有实例
*/

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.objRef = createRef();
    this.refFunc = null;
  }
  render() {
    return (
      <div>
        <h2 ref="titleChange">ref的使用</h2>
        <h2 ref={this.objRef}>Hello World~</h2>
        <h2
          ref={(arg) => {
            this.refFunc = arg;
          }}
        >
          函数ref
        </h2>
        <button
          onClick={(e) => {
            this.changeContent();
          }}
        >
          change Text
        </button>
      </div>
    );
  }

  changeContent() {
    //1.使用方式一:字符串（不推荐了，淘汰）
    this.refs.titleChange.innerHTML = "字符串的ref";

    //2.使用方式二：createRef函数创建ref对象
    this.objRef.current.innerHTML = "Hello Object Ref";

    //3.使用方式三：函数的方式创建ref
    this.refFunc.innerHTML = "Hello Func Ref";
  }
}
