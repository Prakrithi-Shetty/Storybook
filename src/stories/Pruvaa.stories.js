import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";


import LogIn from "../Components/Login/Login";
import Header from "../Components/Header/Header";
import history from "../Components/History/History"
import Login from "../Components/LoginSignUp/LoginL";
import Signup from "../Components/LoginSignUp/LoginS";
import Timer from "../Components/Bidtimer/Mainbidtimer"
import Live from "../Components/Dashboard/MainContent/LiveMarket/LiveMarket";
import Chip from "../Components/CustomChips/CustomChips";
import Maincard from "../Components/CustomCard/Maincustomcard";
import { FILTERS, HOTELS } from "../Components/Data/Data";


import Leftbar from "../Components/Dashboard/LeftSideBar/LeftSideBar";

export default {
  title: 'Pruvaa'
 
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


export const  mainLeftbar=() => (

  
  <Router history={history}>
    <Leftbar/>
    </Router>


  
);
export const  timer=() => (

  
  <Router history={history}>
   <Timer/>
    </Router>


  
);

export const  Livemarket=() => (

  
  <Router history={history}>
    <Live/>
    </Router>


  
);


export const  Customchip=() => (

  
  <Router history={history}>
    <Chip/>
    </Router>


  
);

export const  Customcard=() => (

  
  <Router history={history}>
    <Maincard/>

</Router>
  
);


