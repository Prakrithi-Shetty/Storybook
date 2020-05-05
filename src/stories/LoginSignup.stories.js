import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";


import LogIn from "../Components/Login/Login";
import Header from "../Components/Header/Header";
import history from "../Components/History/History"
import Login from "../Components/LoginSignUp/LoginL";
import Signup from "../Components/LoginSignUp/LoginS";

export default {
  title: 'LoginSignup'
 
};





export const  Headercomp = () => (
    <Router history={history}>
        
        <Header/>
      </Router>

 
    
);

export const  MailLogin = () => (
    <Router history={history}>
        
        <Login/>
      </Router>

 
    
);

export const  MainSignup = () => (
  <Router history={history}>
      
      <Signup/>
    </Router>


  
);