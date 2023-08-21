import { forwardRef, useEffect, useRef, useState } from "react";

interface RouteInfo {
  name: string;
  route: {
    origin: string;
    destination: string;
  };
}

interface SearchBoxProps {
  placeholder: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

//TODO: Create a custom hook, that accepts an array of routes as input
// and filters the input based on name, origin, and destination
// and returns the filtered array as `results`;
const useSearchRoute = (routes: RouteInfo[]) => {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [results, setResults] = useState(routes);

  const triggerSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
    const results = routes.filter(
      (routeInfo) =>
        (routeInfo.name === name || name === "") &&
        (routeInfo.route.origin === origin || origin === "") &&
        (routeInfo.route.destination === destination || destination === "")
    );
    setResults(results);
  };
  return {
    results,
    setName,
    setOrigin,
    setDestination,
    triggerSearch,
  };
};

//TODO: Complete the SearchBox component so that it can set
//search terms in the parent, and also accepts a ref, and a placeholder
const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ placeholder, setSearchTerm }, ref) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setSearchTerm(e.target.value);
    };
    return (
      <input
        ref={ref}
        onChange={handleChange}
        placeholder={placeholder}
      ></input>
    );
  }
);

//TODO: Add Typescript to this Search Result component
const SearchResult = ({ results }: { results: RouteInfo[] }) => {
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

//TODO: On page load, set focus to the first search box
// And complete this component, so that users can type search terms into three different
// search boxes, and find the route they are looking for
const DepartureSearch = ({ routes }: { routes: RouteInfo[] }) => {
  const { results, setName, setOrigin, setDestination, triggerSearch } =
    useSearchRoute(routes);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <div>
      <SearchBox placeholder="Name" setSearchTerm={setName} ref={ref} />
      <SearchBox placeholder="Origin" setSearchTerm={setOrigin} />
      <SearchBox placeholder="Destination" setSearchTerm={setDestination} />
      <button onClick={triggerSearch}>Submit</button>
      <SearchResult results={results} />
    </div>
  );
};

export const Checkpoint2S = () => {
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
