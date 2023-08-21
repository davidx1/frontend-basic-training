//TODO: Add Typescript to this Search Result component

//TODO: Create a custom hook, that accepts an array of routes as input
const useSearchRoute = (routes) => {
  return {};
};

//TODO: Complete the SearchBox component
const SearchBox = ({}) => {
  return <input></input>;
};

const SearchResult = ({ results }) => {
  return (
    <ul>
      {results.map((result) => (
        <li>
          <label>{`${result.name} -- ${result.route.origin} -- ${result.route.destination}`}</label>
        </li>
      ))}
    </ul>
  );
};

// TODO: On page load, set focus to the first search box
// TOTO: Add functionality so that when the type search terms into the three different
// search boxes, the routes are filtered and the correct result is displayed
const DepartureSearch = ({ routes }) => {
  const { results } = useSearchRoute(routes);

  return (
    <div>
      <SearchBox placeholder="Name" />
      <SearchBox placeholder="Origin" />
      <SearchBox placeholder="Destination" />
      <button>Submit</button>
      <SearchResult results={results} />
    </div>
  );
};

export const Checkpoint2Q = () => {
  const routes = [
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
      name: "Roam 3",
      route: {
        origin: "Moon",
        destination: "Earth",
      },
    },
  ];
  return (
    <>
      <DepartureSearch routes={routes} />
    </>
  );
};
