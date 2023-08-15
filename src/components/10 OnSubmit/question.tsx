//TODO: 1 - Add typescript to this file
//TODO: 2- Update the code so that clicking on 'Click Me' Increment the count
//TODO: 3- Update the code so the current count is logged out in the console when 'Submit' is clicked

import React from "react";

const Clickable = ({ handleClick }) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const OnSubmitQ = () => {
  const [count, setCount] = React.useState<number>(0);
  const handleClick = (e) => {
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    //TODO: Implement
  };

  return (
    <>
      {count}
      <form onSubmit={handleSubmit}>
        <Clickable handleClick={handleClick} />
        <button>Submit</button>
      </form>
    </>
  );
};
