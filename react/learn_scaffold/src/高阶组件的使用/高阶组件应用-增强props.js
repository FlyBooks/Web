import React, { PureComponent } from "react";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <p>
          Home:{" "}
          {`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}
        </p>
      </div>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <p>
          About:{" "}
          {`昵称：${this.props.nickname} 等级： ${this.props.level} 区域：${this.props.region}`}
        </p>
      </div>
    );
  }
}

function enhanceProps(Wrapper) {
  return class extends PureComponent {
    render() {
      return <Wrapper {...this.props} region="中国" />;
    }
  };
}
function enhanceProps2(Wrapper) {
  return function (props) {
    return <Wrapper {...props} region="中国" />;
  };
}

const EnhanceHome = enhanceProps2(Home);
const EnhanceAbout = enhanceProps2(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>高阶组件之属性增强</h1>
        <EnhanceHome nickname="追风筝的人" level={90} />
        <EnhanceAbout nickname="追风筝的人" level={90} />
      </div>
    );
  }
}
