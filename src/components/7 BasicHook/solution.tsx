//TODO: Add typescript to this file

import React from "react";

interface ClickableProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Clickable = ({ handleClick }: ClickableProps) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const BasicHookS = () => {
  const [count, setCount] = React.useState<number>(0);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
    setCount(count + 1);
  };

  return (
    <>
      <h2>Exercise 10</h2>
      <Clickable handleClick={handleClick} />
    </>
  );
};
