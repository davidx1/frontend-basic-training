//TODO: Add Typescript and fix all error in this file
const Rocket = ({ name, children }) => {
  <div>
    <h3>{name}</h3>
    {children}
  </div>;
};

//TODO: Serial accepts a string that starts with `BOOST-` followed by numbers
const Booster = ({ serial }) => (
  <>
    <h4>Booster: {serial}</h4>
    <sub>{serial}</sub>
  </>
);

//TODO: Serial accepts a string that starts with `BOOST-` followed by numbers
const Shuttle = ({ serial }) => {
  <>
    <h4>Shuttle</h4>
    <sub>{serial}</sub>
  </>;
};

export const ChildrenQ = () => (
  <>
    <Rocket name="Roam Force 1">
      <Shuttle serial="BOOST-7365"></Shuttle>
      <Booster serial="BOOST-1345" />
      <Booster serial="BOOST-1234" />
      <Booster serial="BOOST-2I47" />
    </Rocket>
  </>
);
