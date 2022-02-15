import React, {useContext} from "react";
import { DECRIMENT, INCREMENT } from "../store/actions";
import StoreContext from "../store/context";

function ThemedButton() {
    const {state, dispatch} = useContext(StoreContext);

    return (
        <>
        <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type: INCREMENT})} >
        Increment
      </button>
      <button onClick={()=>dispatch({type: DECRIMENT})}>
      Decriment
    </button>
    </>
    );
  }

  export default ThemedButton;