import React, { useState } from "react";
import "./../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setselectedOption] = useState(null); // Initial state as null

  function handleClick(option) {
    setselectedOption(option); // Set the selected option directly
  }

  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        height: "400px",
        width: "400px",
        padding: "10px",
      }}
    >
      <h1>Parent Component</h1>
      <ChildComponent1 onClick={handleClick} />
      <ChildComponent2 onClick={handleClick} />
      <p>Selected option: {selectedOption?.text}</p>
    </div>
  );
};

export default App;
