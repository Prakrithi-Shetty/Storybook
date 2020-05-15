import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";


import LogIn from "../Components/Login/Login";
import Header from "../Components/Header/Header";
import history from "../Components/History/History"
import Login from "../Components/LoginSignUp/LoginL";
import Signup from "../Components/LoginSignUp/LoginS";
import Timer from "../Components/Bidtimer/Bidtimer"
import Chip from "../Components/CustomChips/CustomChips";
import Card from "../Components/CustomCard/CustomCard"
import Input from "../Components/Custominput/CustomInput";
import Citycard from "../Components/CustomCityCard/CustomCityCard";
import CustomInfo from "../Components/CustomInfoCard/CustomInfoCard";
import ContactDetails from "../Components/ContactDetails/ContactDetails";


import Leftbar from "../Components/Dashboard/LeftSideBar/LeftSideBar";
import FAQCard from "../Components/FAQCard/FAQCard"
import CategoryButton from "../Components/CategoryButton/CategoryButton";
import CategoryModal from "../Components/CategoryModal/CategoryModal"
import Faqopen from "../Components/FAQMerge/FAQMerge";
import CustomSlider from "../Components/CustomSlider/CustomSlider"
import CustomSelect from "../Components/CustomSelect/CustomSelect"

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


export const  FAQcard=() => (

  
  <Router history={history}>
    <FAQCard/>

</Router>
  
);

export const  Categorybutton=() => (

  
  <Router history={history}>
    <CategoryButton/>

</Router>
  
);

export const  CategoryModel=() => (

  
  <Router history={history}>
    <CategoryModal/>

</Router>
  
);

export const  FAQmerge=() => (

 
  <Router history={history}>
    <Faqopen  />

</Router>
  
);

export const  Slider=() => (

  
  <Router history={history}>
    <CustomSlider/>

</Router>
  
);

export const  Select=() => (

  
  <Router history={history}>
    <CustomSelect />

</Router>
  
);

export const  Contact=() => (

  
  <Router history={history}>
    <ContactDetails />

</Router>
  
);


