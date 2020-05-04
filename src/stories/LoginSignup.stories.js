import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import loginsignup from "../Pruvaa/src/views/LogInSignUp/LogInSignUp";
import Login from "../Pruvaa/src/views/LogInSignUp/Login/Login";
import Header from "../Pruvaa/src/layout/Header";
import history from "../Pruvaa/src/constants/history/history";

export default {
  title: 'LoginSignup'
 
};





export const  LoginToYourAccount = () => (
    <Router history={history}>
        
        <Header/>
      </Router>

 
    
);