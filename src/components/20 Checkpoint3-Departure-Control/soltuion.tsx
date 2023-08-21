//TODO: Create a landing and departure control system to manage the traffic coming and going from a space port
import { useState, useEffect } from "react";

type Status = "requestLanding" | "landed" | "onLaunchPad";
type SpacePortRecord = Record<string, Status>;
interface SpacePortProps {
  portName: string;
}

// TODO: Add typescript to this function
// This is a mock API for fetching what ships are in the spaceport, and their status
// The ships can have any string as their name (key),
// they can only one of three statuses `requestLanding`, `landed`, `onLaunchPad`.
const fetchPortRecord = () => {
  const portRecord: SpacePortRecord = {
    "Roam Force One": "requestLanding",
    "The TARDIS": "landed",
    "USS Enterprise (NC-1701)": "onLaunchPad",
    "Battlestar Galactica": "onLaunchPad",
  };
  return portRecord;
};

interface ShipStatusProps {
  name: string;
  status: Status;
  updateStatus: (name: string) => void;
}

//TODO: Add typescript to this component and complete its functionality
// ShipStatus displays the status for one ship (as the name implies)
// As well a button to control its status. The button display 'approve', or 'prepare for departure' or 'launch'
// depending on the ship's current status.
const ShipStatus = ({ name, status, updateStatus }: ShipStatusProps) => {
  const statusTextMap: Record<Status, string> = {
    requestLanding: "approve",
    landed: "prepare for depature",
    onLaunchPad: "launch",
  };

  const buttonText = statusTextMap[status];

  return (
    <li>
      <label>{`${name} --- ${status}`}</label>
      <button onClick={() => updateStatus(name)} style={{ marginLeft: "16px" }}>
        {buttonText}
      </button>
    </li>
  );
};

//TODO: complete this custom hook
// This custom hook keeps track of all the ships in the spaceport and update their status
// it accepts an initial state as input, and it exposes
// record - the status for all ships in the port
// updateEntry - update the status for one ship
// addNewShip - add a new ship entry to the record
const useSpacePortRecord = (initialState: SpacePortRecord | null) => {
  const [record, setRecord] = useState<SpacePortRecord | null>(initialState);

  useEffect(() => {
    setRecord(fetchPortRecord());
  }, []);

  const updateEntry = (name: string) => {
    if (record) {
      switch (record[name]) {
        case "requestLanding":
          setRecord({ ...record, [name]: "landed" });
          break;
        case "landed":
          setRecord({ ...record, [name]: "onLaunchPad" });
          break;
        default:
          delete record[name];
          setRecord(record);
      }
    }
  };

  const addNewShip = () => {
    const newShipName = `Visitor-${Math.trunc(Math.random() * 10000)}`;
    setRecord({
      ...record,
      [newShipName]: "requestLanding",
    });
  };

  return { record, updateEntry, addNewShip };
};

// TODO: add typescript to this component
// show 'Loading...' initially.
// show 'No ship found' if all the ship has departed
const SpacePort = ({ portName }: SpacePortProps) => {
  // Do not modify how this hook is being used, or change the initial value
  const { record, updateEntry, addNewShip } = useSpacePortRecord(null);

  if (!record) {
    return (
      <div>
        <h3>{portName} Spaceport Control</h3>
        <p>No record found</p>
      </div>
    );
  }

  const keys = Object.keys(record) as string[];

  return (
    <div>
      <h3>{portName} Spaceport Control</h3>
      <ul>
        {/* TODO: display the list of ship statuses here */}
        {keys.map((key) => {
          const status = record[key];
          return (
            <ShipStatus name={key} status={status} updateStatus={updateEntry} />
          );
        })}
      </ul>
      {/* TODO: add new ship when button is clicked */}
      <button onClick={addNewShip}>New Spaceship Approaches</button>
    </div>
  );
};

export const Checkpoint3S = () => {
  return (
    <>
      <SpacePort portName="Mars" />
    </>
  );
};
