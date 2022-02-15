import React, {useReducer} from "react";
import StoreContext from "./store/context";
import ThemedButton from "./component/ThemeButton";
import Button from "./component/Button";
import {reducer, initialState} from "./store/reducer";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      <ThemedButton />
      <Button />
    </StoreContext.Provider>
  );
}




export default App;