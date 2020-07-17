import React, { PureComponent } from "react";
import ProfileStyle from "./app.module.css";

export default class Profile extends PureComponent{
  render(){
    return (
      <div>
        <ul className={ProfileStyle.ul}>
          <li className={ProfileStyle.li}>
            1
          </li>
          <li>
            1
          </li>
          <li>
            1
          </li>
        </ul>
      </div>
    );
  }
}
