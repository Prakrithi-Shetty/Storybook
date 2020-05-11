import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";


import LogIn from "../Components/Login/Login";
import Header from "../Components/Header/Header";
import history from "../Components/History/History"
import Login from "../Components/LoginSignUp/LoginL";
import Signup from "../Components/LoginSignUp/LoginS";
import Timer from "../Components/Bidtimer/Bidtimer"
import Chip from "../Components/CustomChips/CustomChips";
import Card from "../Components/CustomCard/CustomCard";
import Input from "../Components/Custominput/CustomInput";
import Citycard from "../Components/CustomCityCard/CustomCityCard";
import CustomInfo from "../Components/CustomInfoCard/CustomInfoCard";



import Leftbar from "../Components/Dashboard/LeftSideBar/LeftSideBar";
import FAQCard from "../Components/FAQCard/FAQCard";
import CategoryButton from "../Components/CategoryButton/CategoryButton";
import CategoryModal from "../Components/CategoryModal/CategoryModal"

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




export const  Customchip=() => (

  
  <Router history={history}>
    <Chip/>
    </Router>


  
);

export const  Customcard=() => (

  
  <Router history={history}>
    <Card/>

</Router>
  
);

export const  Custominput=() => (

  
  <Router history={history}>
    <Input/>

</Router>
  
);

export const  Customcitycard=() => (

  
  <Router history={history}>
    <Citycard/>

</Router>
  
);

export const  Custominfo=() => (

  
  <Router history={history}>
    <CustomInfo/>

</Router>
  
);


export const  Faq=() => (

  
  <Router history={history}>
    <FAQCard/>

</Router>
  
);

export const  Categorybutton=() => (

  
  <Router history={history}>
    <CategoryButton/>

</Router>
  
);

export const  CategoryModell=() => (

  
  <Router history={history}>
    <CategoryModal/>

</Router>
  
);


