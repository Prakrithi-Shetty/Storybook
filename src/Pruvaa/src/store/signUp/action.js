import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR, GET_COUNTRIES_PENDING, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_ERROR } from "./types";
import API from "../../constants/API";

const startSignUp = () => {
  return {
    type: SIGNUP_PENDING,
  };
};

const signUpCompleted = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
};

const signUpError = (err) => {
  return {
    type: SIGNUP_ERROR,
    err,
  };
};

const getCountries = () => {
  return {
    type: GET_COUNTRIES_PENDING,
  };
};

const getCountriesCompleted = (data) => {
  return {
    type: GET_COUNTRIES_SUCCESS,
    data,
  };
};

const getCountriesError = (err) => {
  return {
    type: GET_COUNTRIES_ERROR,
    err,
  };
};

export const signUpUser = (value) => {
  return (dispatch) => {
    dispatch(startSignUp());

    let headers = {
      "Content-Type": "application/json",
    };
    const data = {
      username: value.Email,
      email: value.Email,
      password1: value.Password,
      password2: value.ConfirmPassword,
      first_name: value.Name,
      last_name: value.Name,
      user_type: 0,
      location: value.Country,
      phone: value.MobileNumber,
    };

    API.post(`rest-auth/registration/`, data, {
      headers,
    })
      .then((res) => {
        console.log(res.data);
        dispatch(signUpCompleted(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(signUpError());
      });
  };
};

export const getCountriesList = () => {
  return (dispatch) => {
    dispatch(getCountries());

    let headers = {
      "Content-Type": "application/json",
    };

    API.get(`market/countries`, { headers })
      .then((res) => {
        dispatch(getCountriesCompleted(res.data));
      })
      .catch((err) => {
        dispatch(getCountriesError(err));
      });
  };
};
