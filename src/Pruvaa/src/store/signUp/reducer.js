import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR, GET_COUNTRIES_PENDING, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_ERROR } from "./types";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_PENDING:
      return {
        ...state,
        Loading: true,
        Success: false,
        Error: false,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        Loading: false,
        Success: true,
        Error: false,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        Loading: false,
        Success: false,
        Error: true,
      };

    case GET_COUNTRIES_PENDING:
      return {
        ...state,
        CountriesLoading: true,
        CountriesSuccess: false,
        CountriesError: false,
      };

    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        CountriesLoading: false,
        CountriesSuccess: true,
        CountriesError: false,
        Countries: action.data,
      };

    case GET_COUNTRIES_ERROR:
      return {
        ...state,
        CountriesLoading: false,
        CountriesSuccess: false,
        CountriesError: true,
      };

    default:
      return state;
  }
};

export default reducer;
