import React from "react";

interface ClickableProps {
  label: string;
  handleClick: () => void;
}

const Clickable = ({ handleClick, label }: ClickableProps) => {
  return <button onClick={handleClick}>{label}</button>;
};

type ActionType = "increment" | "decrement";
interface StateType {
  count: number;
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

export const UseReducerS = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <>
      <h3>{state.count}</h3>
      <Clickable handleClick={() => dispatch("increment")} label="+" />
      <Clickable handleClick={() => dispatch("decrement")} label="-" />
      {/* THIS SHOULD THROW TYPESCRIPT ERROR => <Clickable handleClick={() => dispatch("nothing")} label="-" /> */}
    </>
  );
};
