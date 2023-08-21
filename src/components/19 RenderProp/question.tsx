import { useState } from "react";
export const FancyInput = ({ render }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      {/* TODO: modify the fancy button so it accepts either a string or a function as the render prop */}
      <p>PLACEHOLDER</p>
    </>
  );
};

const validate = (s) => {
  const message =
    s.length === 0
      ? "I'm a very picky input"
      : s.length < 5
      ? "You need to enter at least 5 characters"
      : !s.includes("12345")
      ? "Don't enter '12345', I don't like it"
      : s.charAt(s.length - 1) === "!"
      ? "Why are you shouting at me?!"
      : "Alright, I guess that's acceptable";
  return message;
};

export const RenderPropQ = () => {
  return (
    <div>
      <FancyInput render="Enter anything you want, I'm not picky" />
      <FancyInput render={(value) => validate(value)} />
    </div>
  );
};
