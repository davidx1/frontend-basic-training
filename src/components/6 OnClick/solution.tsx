//TODO: Add typescript to this file

interface ClickableProps {
  handleClick: () => void;
}

const Clickable = ({ handleClick }: ClickableProps) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const OnClickS = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Clickable handleClick={handleClick} />
    </>
  );
};
