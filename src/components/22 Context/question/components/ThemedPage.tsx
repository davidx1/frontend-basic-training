import { ImageSection } from "./ImageSection";
import { TextSection } from "./TextSection";

// TODO: Use React's Context API to implement the feature where when the Green button is pressed,
// all the texts in this project displays green text,
// and if the Red button is pressed, all the texts will display red texts.
export const ThemedPage = () => {
  return (
    <div>
      <h3>Theme</h3>
      <button>Red</button>
      <button>Green</button>
      <ImageSection></ImageSection>
      <TextSection></TextSection>
    </div>
  );
};
