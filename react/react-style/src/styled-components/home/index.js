import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
  render() {
    const {onClick} = this.props;
    return (
      <div>
        <div onClick={onClick}>Home: hahah</div>
        <p>xixi~</p>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    )
  }
}
