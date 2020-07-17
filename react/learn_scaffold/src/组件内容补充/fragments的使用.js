import React, { PureComponent, Fragment } from "react";

/*
<React.Fragment> 用法：
<Fragment></Fragment>
也可以省略成<> </>
*/

class Movies extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: ["指环王", "黑客帝国", "饥饿游戏", "风雨哈佛路"],
    };
  }

  render() {
    return (
      <Fragment>
        {
        this.state.movies.map((item) => {
          return <td>{item}</td>;
        })
        }
      </Fragment>
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <table>
        <tr>
          <Movies />
        </tr>
      </table>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
