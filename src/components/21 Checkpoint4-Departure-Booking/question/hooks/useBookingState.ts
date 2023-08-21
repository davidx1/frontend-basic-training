import { mockedResponse } from "../../mocked-response";

const fetchData = () => {
  return mockedResponse;
};

const postData = ({ rocket, meal, luggageSize }) => {
  console.log(rocket, meal, luggageSize);
};

// TODO: implementing useBookingState Hook
// The hook should initialize itself by fetching data by calling the `fetchData` function
// The submitSelection should call the `postData` function
export const useBookingState = () => {
  return {
    rocket,
    meal,
    luggageSize,
    setRocket,
    setMeal,
    setLuggageSize,
    options,
    submitSelection,
  };
};
