// PilotInfo contains:
// firstName which is a string
// lastName which is a string
interface PilotInfo {
  firstName: string;
  lastName: string;
}

// Rocketsize can be any one of the three; "L", "M" and "S"
type RocketSizes = "L" | "M" | "S";

// Name should accept a parameter of string
// ShowAge should accept a age parameter of number
// Size which is a Rocket Size
// pilot which is a PilotInfo
interface RocketInfoProps {
  name: string;
  age: number;
  size: RocketSizes;
  pilot: PilotInfo;
}

const RocketInfo = ({ name, age, size, pilot }: RocketInfoProps) => (
  <>
    <ul>
      <li>
        <label>Name: {name}</label>
      </li>
      <li>
        <label>Age: {age}</label>
      </li>
      <li>
        <label>Size: {size}</label>
      </li>
      <li>
        <label>Pilot: {`${pilot.firstName} ${pilot.lastName}`} </label>
      </li>
    </ul>
  </>
);

export const InterfaceptionS = () => (
  <>
    <RocketInfo
      name="Roam Force 4"
      age={3}
      size="S"
      pilot={{ firstName: "bob", lastName: "john" }}
    />
  </>
);
