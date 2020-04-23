import React from "react";
import "./styles.css";
import Counter from "./Counter";

import IncrementState from "./context/incrementState";

const App = () => {
  return (
    <IncrementState>
      <div className="App">
        <Counter />
      </div>
    </IncrementState>
  );
};
export default App;
