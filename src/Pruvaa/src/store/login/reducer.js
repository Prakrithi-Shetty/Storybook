import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from "./types";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        Loading: true,
        Success: false,
        Error: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        Loading: false,
        Success: true,
        Error: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        Loading: false,
        Success: false,
        Error: true,
      };

    default:
      return state;
  }
};

export default reducer;
