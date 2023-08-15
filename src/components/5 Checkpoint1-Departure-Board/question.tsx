//TODO: Add Typescript to this file

//DO NOT MODIFY
interface CrewMember {
  name: string;
  role: "pilot" | "flight attendant" | "engineer";
}

//DO NOT MODIFY
interface LegacyRocketInfoProps {
  name: string;
  age: number;
  crew: CrewMember[];
}

const RocketDepartureBoard = ({ rockets, routeInfo }) => {
  //TODO: Implement a departure board of three column
  // In the first column should be the rocket's name
  // In the second column should be the rocket's crew info
  // In the third column should be the rocket's route info
  return;
};

export const Checkpoint1Q = () => {
  const rockets = [
    {
      name: "Roam 1",
      crew: [
        { name: "lisa", role: "pilot" },
        { name: "john", role: "engineer" },
      ],
    },
    {
      name: "Roam 2",
      crew: [
        { name: "johnny", role: "pilot" },
        { name: "mellisa", role: "engineer" },
      ],
    },
    {
      name: "Roam 3",
      crew: [
        { name: "lizzie", role: "pilot" },
        { name: "jonathan", role: "engineer" },
      ],
    },
    {
      crew: [
        { name: "lizzie", role: "pilot" },
        { name: "jonathan", role: "engineer" },
      ],
      name: "Roam 4",
    },
    {
      name: "Roam 5",
      crew: [
        { name: "Maggie", role: "engineer" },
        { name: "Glenn", role: "flight attendant" },
      ],
    },
    {
      name: "Roam 6",
      crew: [
        { name: "Mario", role: "pilot" },
        { name: "Princess Peach", role: "engineer" },
      ],
    },
  ];

  const routeInfo = [
    {
      name: "Roam 1",
      route: {
        origin: "Earth",
        destination: "Mars",
      },
    },
    {
      name: "Roam 2",
      route: {
        origin: "Moon",
        destination: "Mars",
      },
    },
    {
      name: "Roam 2",
      route: {
        origin: "Mars",
        destination: "Earth",
      },
    },
    {
      name: "Roam 3",
      route: {
        origin: "Moon",
        destination: "Earth",
      },
    },
    {
      route: {
        origin: "Moon",
        destination: "Earth",
      },
      name: "Roam 4",
    },
    {
      name: "Roam 6",
      route: {
        origin: "Earth",
        destination: "Moon",
      },
    },
    {
      name: "Roam 6",
      route: {
        origin: "Mars",
        destination: "Earth",
      },
    },
    {
      name: "Roam 6",
      route: {
        origin: "Earth",
        destination: "Neptune",
      },
    },
  ];

  return (
    <>
      <RocketDepartureBoard rockets={rockets} routeInfo={routeInfo} />
    </>
  );
};
