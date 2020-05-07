import React from "react";
import { withStyles, Card, CardMedia, CardContent, Typography, Icon } from "@material-ui/core";

import { Style } from "../CustomCard/CustomCard.style";
import BidTimer from "../Bidtimer/Bidtimer";
import RoomIcon from '@material-ui/icons/Room';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import hotel from "../../Components/assets/images/hotels.jpg"

const CustomCard = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={hotel} title="Hotel" />
      <div className={classes.bids}>
        <LocationCityIcon className={classes.bidsIcon}>location_city</LocationCityIcon>
        <Typography className={classes.bidsCount}>54</Typography>
        <Typography className={classes.bidsText}>Active</Typography>
        <Typography className={classes.bidsText}> Bids</Typography>
      </div>
      <CardContent className={classes.cardContent}>
        <div className={classes.cardCover}>
          <Typography className={classes.price}>
            <span>$200</span>$180
          </Typography>
          <Typography className={classes.bestPrice}>BEST PRICE PER NIGHT</Typography>
          <div className={classes.details}>
            <Typography className={classes.detail}>
             <RoomIcon className={classes.icon}>location_on</RoomIcon>
             Bangkok
            </Typography>
            <Typography className={classes.detail}>
              <DateRangeIcon className={classes.icon}>date_range</DateRangeIcon>
              25 -27 November 2018
            </Typography>
            <Typography className={classes.detail}>
              <PersonIcon className={classes.icon}>person</PersonIcon>
              2 Adults - 1 Room
            </Typography>
          </div>
        </div>
       
      </CardContent>
    </Card>
  );
};

export default withStyles(Style)(CustomCard);
