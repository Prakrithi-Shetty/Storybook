import React from "react";
import { withStyles, Card, CardMedia, CardContent, Typography, Icon } from "@material-ui/core";

import { Style } from "./CustomCard.style";
import BidTimer from "../BidTimer/BidTimer";

const CustomCard = ({ classes, image, oldPrice, price, location, date, person, bids, closingDate }) => {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={image} title="Hotel" />
      <div className={classes.bids}>
        <Icon className={classes.bidsIcon}>location_city</Icon>
        <Typography className={classes.bidsCount}>{bids}</Typography>
        <Typography className={classes.bidsText}>Active</Typography>
        <Typography className={classes.bidsText}> Bids</Typography>
      </div>
      <CardContent className={classes.cardContent}>
        <div className={classes.cardCover}>
          <Typography className={classes.price}>
            <span>${oldPrice}</span>${price}
          </Typography>
          <Typography className={classes.bestPrice}>BEST PRICE PER NIGHT</Typography>
          <div className={classes.details}>
            <Typography className={classes.detail}>
              <Icon>location_on</Icon>
              {location}
            </Typography>
            <Typography className={classes.detail}>
              <Icon>date_range</Icon>
              {date}
            </Typography>
            <Typography className={classes.detail}>
              <Icon>person</Icon>
              {person}
            </Typography>
          </div>
        </div>
        <BidTimer closingDate={closingDate} />
      </CardContent>
    </Card>
  );
};

export default withStyles(Style)(CustomCard);
