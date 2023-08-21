import { useState, useEffect } from "react";
import { LuggageSizeInfo, MealInfo, Options, RocketInfo } from "..";
import { mockedResponse } from "../../mocked-response";

interface APIResponse {
  defaultRocket: string;
  defaultMeal: string;
  defaultLuggageSize: string;
  options: Options;
}

const fetchData = (): APIResponse => {
  return mockedResponse;
};

export const useBookingState = () => {
  const [rocket, setRocket] = useState<RocketInfo | null>(null);
  const [meal, setMeal] = useState<MealInfo | null>(null);
  const [luggageSize, setLuggageSize] = useState<LuggageSizeInfo | null>(null);
  const [options, setOptions] = useState<Options | null>(null);

  useEffect(() => {
    const response = fetchData();
    setRocket(
      response.options.rockets.find((r) => r.label === response.defaultRocket)!
    );
    setMeal(
      response.options.meals.find((m) => m.label === response.defaultMeal)!
    );
    setLuggageSize(
      response.options.luggageSizes.find((l) => response.defaultLuggageSize)!
    );
    setOptions(response.options!);
  }, []);

  const submitSelection = () => {
    console.log(rocket, meal, luggageSize);
  };

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
