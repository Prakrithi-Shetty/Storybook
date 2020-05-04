import { combineReducers } from "redux";
import loginReducer from "./login";
import signUpReducer from "./signUp";

const reducer = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
});
export default reducer;
