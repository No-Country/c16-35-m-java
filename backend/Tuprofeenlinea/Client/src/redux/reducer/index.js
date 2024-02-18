import { POST_USER } from "../actions/types";

let initialState = { allUsers: [] };

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_USER:
      return {
        ...state,
        allVideoGames: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
