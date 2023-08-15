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

//TODO: Add Typescript to this file

interface RouteInfo {
  name: string;
  route: {
    origin: string;
    destination: string;
  };
}

type RocketInfo = Omit<LegacyRocketInfoProps, "age">;

interface RocketDepartureProps {
  rockets: RocketInfo[];
  routeInfo: RouteInfo[];
}

const DetermineRoutes = ({
  rocketName,
  routeInfo,
}: {
  rocketName: string;
  routeInfo: RouteInfo[];
}) => {
  const relatedRoutes = routeInfo.filter((route) => rocketName === route.name);
  if (relatedRoutes.length == 0) {
    return <p>{rocketName} has no routes at this time.</p>;
  } else {
    return (
      <ol>
        {relatedRoutes.map((rocketRoute) => (
          <li>
            Route Origin: {rocketRoute.route.origin} Route Destination:{" "}
            {rocketRoute.route.destination}
          </li>
        ))}
      </ol>
    );
  }
};

const RocketDepartureBoard = ({ rockets, routeInfo }: RocketDepartureProps) => {
  //TODO: Implement a departure board of three column
  // In the first column should be the rocket's name
  // In the second column should be the rocket's crew info
  // In the third column should be the rocket's route info
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Crew</th>
        <th>Route</th>
      </tr>
      {rockets.map((rocket) => (
        <tr>
          <td>{rocket.name}</td>
          <td>
            {rocket.crew.map((crewMember) => (
              <p>
                Name: {crewMember.name} Role: {crewMember.role}
              </p>
            ))}
          </td>
          <td>
            <DetermineRoutes rocketName={rocket.name} routeInfo={routeInfo} />
          </td>
        </tr>
      ))}
    </table>
  );
};

export const Checkpoint1S = () => {
  const rockets: RocketInfo[] = [
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

  const routeInfo: RouteInfo[] = [
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
