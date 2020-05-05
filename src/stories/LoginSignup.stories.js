import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";


import LogIn from "../Components/Login/Login";
import Header from "../Components/Header/Header";
import history from "../Components/History/History"
import LoginSignUp from "../Components/LoginSignUp/LoginSignUp";
import Login from "../Components/Login/Login"

export default {
  title: 'LoginSignup'
 
};





export const  Headercomp = () => (
    <Router history={history}>
        
        <Header/>
      </Router>

 
    
);

export const  MainLogin = () => (
    <Router history={history}>
        
       <Login/>
      </Router>

 
    
);