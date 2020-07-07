import React from "react";

function ChildCmp(props) {
  return (
    <div>
      <h1>{props.name + "," + props.age + "," + props.height}</h1>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ChildCmp name="Eva" age="18" height="1.68" />
      <ChildCmp name="Selena" age="18" height="1.66" />
      <ChildCmp name="Taylor" age="18" height="1.78" />
    </div>
  );
}
