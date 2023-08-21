import { LuggageSizeInfo, MealInfo, RocketInfo } from "..";

interface PreviewProps {
  rocket: RocketInfo;
  meal: MealInfo;
  luggageSize: LuggageSizeInfo;
}

export const Preview = ({ rocket, meal, luggageSize }: PreviewProps) => {
  return (
    <div>
      <h3>Your booking</h3>
      <ul>
        <li>
          <h4>{rocket.label}</h4>
          <p>{rocket.description}</p>
        </li>
        <li>
          <h4>{meal.label}</h4>
          <p>{meal.calories} Calories</p>
        </li>
        <li>
          <h4>{luggageSize.label}</h4>
          <p>{`${luggageSize.height}cm x ${luggageSize.width}cm`}</p>
        </li>
      </ul>
    </div>
  );
};
