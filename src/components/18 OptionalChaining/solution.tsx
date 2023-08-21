import { passengerManifest } from "./mocked-data";

// TODO: Create a passenger manifest component that
// displays all the passenger information as a list
// if information for any particular field does not exist
// then do NOT display the field at all.

interface PassengerInfo {
  id: number;
  personal?: {
    title?: string;
    name?: {
      first_name?: string;
      middle_name?: string;
      last_name?: string;
    };
  };
  contact?: {
    email?: string;
    phone?: string;
  };
}

interface PassengerManifest {
  data: PassengerInfo[];
}

export const PassengerManifest = ({ data }: PassengerManifest) => {
  return (
    <div>
      <h4>Passenger Manifest</h4>
      <ol>
        {data.map((person) => (
          <li>
            <ul>
              {person.id && <li>ID: {person.id}</li>}
              {person.personal?.title && <li>Title:{person.personal.title}</li>}
              {person.personal?.name?.first_name && <li>First Name:</li>}
              {person.personal?.name?.middle_name && <li>Middle Name:</li>}
              {person.personal?.name?.last_name && <li>Last Name:</li>}
              {person.contact?.email && <li>Email:</li>}
              {person.contact?.phone && <li>Phone:</li>}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export const OptionalChainingS = () => {
  return <PassengerManifest data={passengerManifest} />;
};
