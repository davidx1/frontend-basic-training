import React, { useContext } from "react";
import { ThemeContext } from "../ThemedPage";

export const Paragraph = ({ children }: React.PropsWithChildren) => {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme }}>{children}</p>;
};
