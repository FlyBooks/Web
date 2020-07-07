import React, { Component } from "react";
import PropTypes from "prop-types";

function ChildCmp(props) {
  return (
    <div>
      <h1>{props.name + "," + props.age + "," + props.height}</h1>
      <ul>
        {props.names.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
ChildCmp.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  names: PropTypes.array.isRequired,
};
ChildCmp.defaultProps = {
  name: "Laus",
  age: 21,
  height: 1.78,
  names: ["music", "actress", "famous"],
};

class ChildCmp2 extends Component{
  static propTypes = {
    job: PropTypes.string,
    title: PropTypes.string
  };
  render(){
    return (<h1>
     <p>JOB: {this.props.job}</p>
     <p>TITLE: {this.props.title}</p>
    </h1>);
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCmp
          name="Eva"
          age={18}
          height="1.68"
          names={["Lauv", "Puth", "Tom"]}
        />
        <ChildCmp
          name="Selena"
          age={18}
          height="1.66"
          names={["Lady", "Zedd", "John"]}
        />
        <ChildCmp
          name="Taylor"
          age={17}
          height="1.78"
          names={["Byoned", "Bone", "Stone"]}
        />
        <ChildCmp2 job="IT" title="Web Developer"/>
      </div>
    );
  }
}
