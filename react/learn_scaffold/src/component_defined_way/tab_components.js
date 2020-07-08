import React, { Component } from "react";

export default class TabComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    const { titles, sendIndex } = this.props;
    return (
      <div className="tab_list">
        {titles.map((item, index) => {
          return (
            <div
              className={
                "tab_item " +
                (index === this.state.currentIndex ? "active" : "")
              }
              key={item}
              onClick={(e) => {
                this.itemClick(index);
              }}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    });
    this.props.sendIndex(index);
  }
}
