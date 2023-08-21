import { useContext } from "react";
import { ThemeContext } from "../ThemedPage";

export const ImageTitle = () => {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme }}>Fig 1: Image of a man dancing happily</p>;
};
