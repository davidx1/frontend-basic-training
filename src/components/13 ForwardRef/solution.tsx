// TODO: Modify the code so that on page load, the second MyCustomInput input field receives focus
// TODO: Add typescript to this file

import { forwardRef, useEffect, useRef } from "react";

const MyCustomInput = forwardRef<HTMLInputElement, { label: string }>(
  ({ label }, ref) => (
    <>
      <label>{label}</label>
      <input ref={ref}></input>
    </>
  )
);

export const ForwardRefS = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <>
      <ul>
        <li>
          <MyCustomInput label="Customized 1"></MyCustomInput>
        </li>
        <li>
          <MyCustomInput ref={ref} label="Second Input"></MyCustomInput>
        </li>
      </ul>
    </>
  );
};
