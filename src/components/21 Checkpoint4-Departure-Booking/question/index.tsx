import { Preview } from "./components/Preview";
import { Select } from "./components/Select";
import { useBookingState } from "./hooks/useBookingState";

//DO NOT MODIFY
export interface RocketInfo {
  label: string;
  description: string;
}

//DO NOT MODIFY
export interface MealInfo {
  label: string;
  calories: number;
}

//DO NOT MODIFY
export interface LuggageSizeInfo {
  label: string;
  height: number;
  width: number;
}

// TODO: Create a booking system where the user can select their rocket, their meal and their luggage size
// Display "Loading..." when fetching data
// See Sample.png for what it should look like
export const Checkpoint4Q = () => {
  const {
    rocket,
    meal,
    luggageSize,
    setRocket,
    setMeal,
    setLuggageSize,
    options,
    submitSelection,
  } = useBookingState();

  return (
    <div>
      <Select />
      <Select />
      <Select />
      <Preview />
      <button>Submit</button>
    </div>
  );
};
