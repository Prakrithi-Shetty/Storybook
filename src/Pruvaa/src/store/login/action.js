import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from "./types";
import API from "../../constants/API";

const startLogin = () => {
  return {
    type: LOGIN_PENDING,
  };
};

const loginCompleted = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

const loginError = (err) => {
  return {
    type: LOGIN_ERROR,
    err,
  };
};

export const loginUser = (value) => {
  return (dispatch) => {
    dispatch(startLogin());

    let headers = {
      "Content-Type": "application/json",
    };
    const data = {
      email: value.Email,
      password: value.Password,
    };

    API.post(`rest-auth/login/`, data, {
      headers: headers,
    })
      .then((res) => {
        console.log(res.data);
        dispatch(loginCompleted(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginError());
      });
  };
};
