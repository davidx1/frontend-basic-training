import { useState } from "react";

interface FancyInputProp {
  render?: string | ((value: string) => string);
}

export const FancyInput = ({ render }: FancyInputProp) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      {render && <p>{typeof render === "string" ? render : render(value)}</p>}
    </>
  );
};

const validate = (s: string) => {
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

export const RenderPropS = () => {
  return (
    <div>
      <FancyInput render="Enter anything you want, I'm not picky" />
      <FancyInput render={(value) => validate(value)} />
    </div>
  );
};
