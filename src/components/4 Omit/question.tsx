interface PlaneInfo {
  name: string;
  age: number;
  serialNumber: `ROAM-${number}`;
  crew: {
    name: string;
    role: "pilot" | "flight attendant" | "engineer";
  }[];
  wingspan: `${number}m`;
}

// TODO: Create a RocketInfo type by inheriting from the PlaneInfo interface,
// except Rocekets don't have wings, so we need to not have the 'wingspan' prop
// in RocketInfo;
interface RocketInfo {}

const Bob: RocketInfo = {
  name: "bob",
  age: 1,
  serialNumber: "ROAM-1234",
  crew: [
    {
      name: "alan",
      role: "pilot",
    },
  ],
};

export const OmitQ = () => <>{JSON.stringify(Bob)}</>;
