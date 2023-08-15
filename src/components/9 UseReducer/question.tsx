//TODO: Add typescript to this file

import React from "react";

const Clickable = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

const reducer = (state, action) => {
  //TODO: create a reducer that accept two types of actions - 'increment' and 'decrement'
};

export const UseReducerQ = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <>
      <h2>Exercise 13</h2>
      <h3>{state.count}</h3>
      <Clickable handleClick={() => dispatch("increment")} label="+" />
      <Clickable handleClick={() => dispatch("decrement")} label="-" />
      {/* THIS SHOULD THROW TYPESCRIPT ERROR => <Clickable handleClick={() => dispatch("nothing")} label="-" /> */}
    </>
  );
};
