//TODO: Add typescript to this file

import React from "react";

interface ClickableProps {
  label: string;
  handleClick: () => void;
}

const Clickable = ({ handleClick, label }: ClickableProps) => {
  return <button onClick={handleClick}>{label}</button>;
};

const useCounter = (initialValue: number) => {
  const [count, setCount] = React.useState<number>(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export const CustomHookS = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <>
      <h3>{count}</h3>
      <Clickable handleClick={increment} label="+" />
      <Clickable handleClick={decrement} label="-" />
    </>
  );
};
