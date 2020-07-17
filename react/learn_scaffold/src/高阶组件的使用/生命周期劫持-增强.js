import React, { PureComponent } from "react";

function enhancePeriod(WrappedCmp) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.start = Date.now();
    }

    componentDidMount() {
      this.end = Date.now();
      const period = this.end - this.start;
      console.log(`${WrappedCmp.name} 花了 ${period}`);
    }
    render() {
      return <WrappedCmp {...this.props}/>;
    }
  };
}
class Home extends PureComponent {
  render() {
    return <h1>Home</h1>;
  }
}

class About extends PureComponent {
  render() {
    return <h1>About</h1>;
  }
}

const HomeEnhance = enhancePeriod(Home);
const AboutEnhance = enhancePeriod(About);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HomeEnhance />
        <AboutEnhance />
      </div>
    );
  }
}
