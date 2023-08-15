import { useEffect, useRef } from "react";

export const UseRefS = () => {
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
          <input></input>
        </li>
        <li>
          <input ref={ref}></input>
        </li>
      </ul>
    </>
  );
};
