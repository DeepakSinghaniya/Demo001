import React, {useContext, useReducer} from "react";
import { DECRIMENT, INCREMENT } from "./actions";
import ThemeContext from "./context";
import {reducer, initialState} from './reducer';

function ThemedButton() {
    const theme = useContext(ThemeContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
        <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type: INCREMENT})} style={{ background: theme.background, color: theme.foreground }}>
        Increment
      </button>
      <button onClick={()=>dispatch({type: DECRIMENT})} style={{ background: theme.background, color: theme.foreground }}>
      Decriment
    </button>
    </>
    );
  }

  export default ThemedButton;