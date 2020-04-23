import React, { useContext } from "react";
import IncrementContext from "./context/incrementContext";

const Counter = () => {
  const incrementContext = useContext(IncrementContext);

  const { count, increment, decrement } = incrementContext;

  const incrementa = () => {
    increment();
  };
  const decrementa = () => {
    decrement();
  };
  return (
    <div>
      <div className="count">{count}</div>
      <button onClick={incrementa}>+</button>
      <button onClick={decrementa}>-</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default Counter;
