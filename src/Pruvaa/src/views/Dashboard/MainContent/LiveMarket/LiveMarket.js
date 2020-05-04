import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import { Style } from "./LiveMarket.style";
import { FILTERS, HOTELS } from "../../../../constants/data/Dashboard";
import CustomChips from "../../../../components/CustomChips/CustomChips";
import CustomCard from "../../../../components/CustomCard/CustomCard";

class LiveMarket extends Component {
  state = {
    FilterSelected: 0,
  };

  handleFilter = (event, val) => {
    this.setState({
      FilterSelected: val,
    });
  };
  render() {
    const { classes } = this.props;
    const { FilterSelected } = this.state;
    console.log(FilterSelected);
    return (
      <>
        <div className={classes.filters}>
          {FILTERS.map((filter, index) => (
            <CustomChips
              key={index}
              icon={filter.icon}
              val={index}
              label={filter.label}
              FilterSelected={FilterSelected}
              handleFilter={this.handleFilter}
            />
          ))}
        </div>
        <div className={classes.hotels}>
          {HOTELS.map((hotel) => (
            <CustomCard
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
      </>
    );
  }
}

export default withStyles(Style)(LiveMarket);
