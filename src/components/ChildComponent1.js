import React from "react";

const ChildComponent1 = ({ onClick }) => {
  return (
    <div
      style={{
        backgroundColor: "chocolate",
        padding: "10px",
      }}
    >
      <h1>Child Component 1</h1>
      <button onClick={() => onClick({ id: 1, text: "Option 1" })}>
        Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;
