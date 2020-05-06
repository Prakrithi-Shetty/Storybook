import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Card from "./CustomCard";
import { FILTERS, HOTELS } from "../Data/Data";

class Maincard extends Component {
    render() {
        
      return (
          <div>
              {HOTELS.map((hotel) => (
            <Card
              key={hotel.id}
              image={hotel.image}
              location={hotel.location}
              price={hotel.price}
              oldPrice={hotel.oldPrice}
              date={hotel.date}
              person={hotel.person}
              bids={hotel.bids}
              closingDate={hotel.closingDate}
            />
          ))}
          </div>
      );
    }
        
  }
  
  export default (Maincard);
  