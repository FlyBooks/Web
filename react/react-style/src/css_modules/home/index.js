import React, { PureComponent } from "react";
import homeStyle from "./app.module.css";

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <p className={homeStyle.p}>HongKong</p>
      </div>
    );
  }
}
