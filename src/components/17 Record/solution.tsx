// TODO: complete the code so that it shows a list of rockets in the space port and their status.

type ShipStatus = "landing" | "landed" | "onLaunchPad";
type ShipRecord = Record<string, ShipStatus>;

const SpacePort = ({ portRecord }: { portRecord: ShipRecord }) => {
  return (
    <div>
      <ul>
        {Object.keys(portRecord).map((key) => {
          const status = portRecord[key];
          return (
            <li>
              <label>{`${key}-${status}`}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const RecordS = () => {
  const portRecord: ShipRecord = {
    "ROAM-1453": "landing",
    "ROAM-2765": "landed",
    "ROAM-2465": "onLaunchPad",
  };
  return <SpacePort portRecord={portRecord} />;
};
