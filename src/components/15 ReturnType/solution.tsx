// TODO: Figure out why you are getting Typescript error and fix them

const Passenger1 = (): JSX.Element => {
  return <h1>Passenger 1</h1>;
};

const Passenger2: React.FC = () => {
  return <h1>Passenger 2</h1>;
};

const Passenger3 = (): JSX.Element => {
  return <h1>Passenger 3</h1>;
};

export const ReturnTypeS = () => (
  <>
    <Passenger1></Passenger1>
    <Passenger2></Passenger2>
    <Passenger3></Passenger3>
  </>
);
