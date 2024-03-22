import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.tsx";

export const ThemeSelector: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <span className="material-icons-outlined">brightness_4</span>
      ) : (
        <span className="material-icons-outlined">brightness_7</span>
      )}
    </button>
  );
};
