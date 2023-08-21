import React, { useState } from "react";
import { ImageSection } from "./ImageSection";
import { TextSection } from "./TextSection";

type Theme = "red" | "green";
export const ThemeContext = React.createContext<Theme>("red");

//TODO: Modify components in this exercise so that when the Green button is pressed, all the texts in this project
//displays green text, and if the Red button is pressed, all the texts will display red texts.
//However, do NOT pass any prop between any components.
export const ThemedPage = () => {
  const [currentTheme, setTheme] = useState<Theme>("red");

  return (
    <div>
      <h3>Theme</h3>
      <button onClick={() => setTheme("red")}>Red</button>
      <button onClick={() => setTheme("green")}>Green</button>

      <ThemeContext.Provider value={currentTheme}>
        <ImageSection></ImageSection>
        <TextSection></TextSection>
      </ThemeContext.Provider>
    </div>
  );
};
