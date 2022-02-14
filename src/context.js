import React from "react";

export const themes = {
  light: {
    foreground: "#ff0000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#00ff00",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;