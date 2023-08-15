// TODO: Create a RocketSizes interface and a PilotInfo

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

export const InterfaceptionQ = () => (
  <>
    <RocketInfo
      name="Roam Force 4"
      age={3}
      size="S"
      pilot={{ firstName: "bob", lastName: "john" }}
    />
  </>
);
