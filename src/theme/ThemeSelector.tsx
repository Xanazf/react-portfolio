import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.tsx";

export const ThemeSelector: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <span className="material-icons-outlined">dark_mode</span>
      ) : (
        <span
          className="material-icons-outlined"
          style={{
            color: "var(--dark-primary-200)",
          }}
        >
          light_mode
        </span>
      )}
    </button>
  );
};
