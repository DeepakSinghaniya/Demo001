import React from "react";
import ThemeContext, {themes} from "./context";
import ThemedButton from "./ThemeButton";


function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}




export default App;