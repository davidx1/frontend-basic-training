// TODO: Modify the code so that on page load, the page calls the 'fetchData' function

import { useEffect } from "react";

const fetchData = () => {
  console.log("fetching data...");
};

export const UseEffectS = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};
