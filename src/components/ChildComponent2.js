import React from "react";

const ChildComponent1 = ({ onClick }) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: "10px",
      }}
    >
      <h1>Child Component 2</h1>
      <button onClick={() => onClick({ id: 2, text: "Option 2" })}>
        Option 2
      </button>
    </div>
  );
};

export default ChildComponent1;
