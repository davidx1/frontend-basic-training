//TODO: Add typescript to this file

import React from "react";

const Clickable = ({ handleClick }) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const BasicHookQ = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = (e) => {
    console.log(e);
    setCount(count + 1);
  };

  return (
    <>
      <Clickable handleClick={handleClick} />
    </>
  );
};
