import { passengerManifest } from "./mocked-data";

// TODO: Create a passenger manifest component that
// displays all the passenger information as a list
// if information for any particular field does not exist
// then do NOT display the field at all.
export const PassengerManifest = ({ data }) => {
  return (
    <div>
      <h4>Passenger Manifest</h4>
      <ol>
        {data.map((person) => (
          <li>
            <ul>
              <li>ID:</li>
              <li>Title:</li>
              <li>First Name:</li>
              <li>Middle Name:</li>
              <li>Last Name:</li>
              <li>Email:</li>
              <li>Phone:</li>
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export const OptionalChainingQ = () => {
  return <PassengerManifest data={passengerManifest} />;
};
