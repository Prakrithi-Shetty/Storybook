import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Bidtimer from "../Bidtimer/Bidtimer";
import { FILTERS, HOTELS } from "../Data/Data";

class Mainbidtimer extends Component {

    
    render() {
        let today = new Date(),
        date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
      return (
          <div>
           <Bidtimer closingDate={date} />   
          </div>
      );
    }
        
  }
  
  export default (Mainbidtimer);
  