import React, { useReducer } from "react";
import incrementContext from "./incrementContext";
import incrementReducer from "./incrementReducer";

const incrementState = props => {
  const initialState = {
    count: 0
  };
  const [state, dispatch] = useReducer(incrementReducer, initialState);

  const increment = e => {
    dispatch({ type: "increment" });
  };

  const decrement = e => {
    dispatch({ type: "decrement" });
  };

  const reset = e => {
    dispatch({ type: "reset", payload: { value: 0 } });
  };
  return (
    <incrementContext.Provider
      value={{
        count: state.count,
        increment,
        reset,
        decrement
      }}
    >
      {props.children}
    </incrementContext.Provider>
  );
};

export default incrementState;
