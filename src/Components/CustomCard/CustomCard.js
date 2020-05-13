import React from "react";
import { withStyles, Card, CardMedia, CardContent, Typography, Icon } from "@material-ui/core";
import Rating from "material-ui-rating";

import { Style } from "./CustomCard.style";


import RoomIcon from '@material-ui/icons/Room';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import hotel from "./hotels.jpg"

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const CustomCard = ({ classes, image, oldPrice, price, location, date, person, bids, closingDate, done, checkOut, name, handleRating, rating }) => {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={image} title="Hotel" />
      <div className={`${classes.bids} ${done ? classes.doneDeals : null}`}>
        <LocationCityIcon className={classes.bidsIcon}>location_city</LocationCityIcon>
        <Typography className={classes.bidsCount}>{bids}</Typography>
        <Typography className={classes.bidsText}>{done ? "Total " : "Active"}</Typography>
        <Typography className={classes.bidsText}> Bids</Typography>
      </div>
      <CardContent className={classes.cardContent}>
        <div className={classes.cardCover}>
          {done && (
            <>
              <Typography className={classes.titleName}>{name}</Typography>
              <Rating
                value={rating}
                max={5}
                classes={{
                  root: classes.ratingRoot,
                  icon: classes.ratingIcon,
                  iconButton: classes.ratingIconButton,
                }}
                onChange={handleRating}
              />
            </>
          )}
          <Typography className={`${classes.price} ${done ? classes.doneDealsText : null}`}>
            <span>${oldPrice}</span>${price}
          </Typography>
          <Typography className={classes.bestPrice}>{done ? "PER NIGHT" : "BEST PRICE PER NIGHT"}</Typography>
          <div className={classes.details}>
            <Typography className={`${classes.detail} ${done ? classes.doneDealsIcon : null}`}>
              <RoomIcon className={done?classes.icons :classes.icon}>location_on_outlined</RoomIcon>
              {location}
            </Typography>
            <Typography className={`${classes.detail} ${done ? classes.doneDealsIcon : null}`}>
              <DateRangeIcon className={done?classes.icons :classes.icon}>date_range_outlined</DateRangeIcon>
              {date}
            </Typography>
            <Typography className={`${classes.detail} ${done ? classes.doneDealsIcon : null}`}>
              <PersonIcon  className={done?classes.icons :classes.icon}>person_outlined</PersonIcon>
              {person}
            </Typography>
            {done && (
              <>
                <Typography className={`${classes.detail} ${done ? classes.doneDealsIcon : null}`}>
                  <AssignmentTurnedInIcon className={done?classes.icons :null}>assignment_turned_in_outlined</AssignmentTurnedInIcon>
                  {checkOut}
                </Typography>
                <Typography className={`${classes.detail} ${done ? classes.doneDealsIcon : null}`}>
                  <ControlPointIcon className={done?classes.icons :null}>control_point</ControlPointIcon>
                  Free Cancellation
                </Typography>
                <Typography className={`${classes.detail} ${done ? classes.doneDealsIcon : null}`}>
                  <ControlPointIcon className={done?classes.icons :null}>control_point</ControlPointIcon>
                  Free Breakfast Vouchers
                </Typography>
                <Typography className={classes.addOns}>FREE ADD ONS!</Typography>
              </>
            )}
          </div>
        </div>
        {done ? (
          <>
            <Typography className={classes.reference}>Booking Reference: #237498</Typography>
            <Typography className={classes.accepted}>Bid Accepted 12 Nov 2018</Typography>
          </>
        ) : (
        null
        )}
      </CardContent>
    </Card>
  );
};


CustomCard.defaultProps={

  image:hotel,
  oldPrice:200,
  price:180,
  location:"Bangkok",
  date:"25 -27 November 2018",
  person:"2 Adults - 1 Room",
  bids:54,
  closingDate:"2020-13-05",
  done:false,
  checkOut:"Late Check-Out",
  name:"Le Meridian",
 
}
export default withStyles(Style)(CustomCard);
