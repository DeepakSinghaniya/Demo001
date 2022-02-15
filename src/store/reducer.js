import { INCREMENT, DECRIMENT } from "./actions";

export const initialState = { count: 0 };

export function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECRIMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
