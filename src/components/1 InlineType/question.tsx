// TODO: Add inline typing to these components

// Name should accept a parameter of string
const RocketName = ({ name }) => {
  return <label>Name: {name}</label>;
};

// ShowAge should accept a age parameter of number
function RocketAge({ age }) {
  return <label>Age: {age}</label>;
}

// There are three sizes "L", "M" and "S". It could be any one of the three
function RocketSize({ size }) {
  return <label>Size: {size}</label>;
}

// SerialNumber should accept a string that starts with 'ROAM-'.
function SerialNumber({ serial }) {
  return <label>Serial: {serial}</label>;
}

export const InlineTypeQ = () => (
  <>
    <ul>
      <li>
        <RocketName name="Roam Force One" />
      </li>
      <li>
        <RocketAge age={1} />
      </li>
      <li>
        <RocketSize size={"L"} />
      </li>
      <li>
        <SerialNumber serial="ROAM-1234567" />
        {/* <SerialNumber serial="1234567" /> //Typescript should throw an error for this*/}
      </li>
    </ul>
  </>
);
