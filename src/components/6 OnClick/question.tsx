//TODO: Add typescript to this file

const Clickable = ({ handleClick }) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const OnClickQ = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Clickable handleClick={handleClick} />
    </>
  );
};
