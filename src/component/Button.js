import React, {useContext} from "react";
import { INCREMENT } from "../store/actions";
import StoreContext from "../store/context";

function Button() {
    const { dispatch, state} = useContext(StoreContext);

    return (
        <>
        <h1>Other component</h1>
      <button onClick={()=>dispatch({type: INCREMENT})} >
        Increment ++ {state.count}
      </button>
     
    </>
    );
  }

  export default Button;