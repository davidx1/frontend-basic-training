import React from "react";

interface ClickableProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Clickable = ({ handleClick }: ClickableProps) => {
  return (
    <button type="button" onClick={handleClick}>
      Click Me!
    </button>
  );
};

export const OnSubmitS = () => {
  const [count, setCount] = React.useState<number>(0);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setCount(count + 1);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(count);
  };

  return (
    <>
      {count}
      <form onSubmit={handleSubmit}>
        <Clickable handleClick={handleClick} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
