// TODO: Modify the code so that on page load, the second MyCustomInput input field receives focus
// TODO: Add typescript to this file

const MyCustomInput = ({ label }) => (
  <>
    <label>{label}</label>
    <input></input>
  </>
);

export const ForwardRefQ = () => {
  return (
    <>
      <ul>
        <li>
          <MyCustomInput label="Customized 1"></MyCustomInput>
        </li>
        <li>
          <MyCustomInput label="Second Input"></MyCustomInput>
        </li>
      </ul>
    </>
  );
};
