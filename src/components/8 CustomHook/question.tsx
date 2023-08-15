//TODO: Add typescript to this file

import React from "react";

const Clickable = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

const useCounter = (initialValue) => {
  //TODO: create a custom hook
};

export const CustomHookQ = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <>
      <h3>{count}</h3>
      <Clickable handleClick={increment} label="+" />
      <Clickable handleClick={decrement} label="-" />
    </>
  );
};
