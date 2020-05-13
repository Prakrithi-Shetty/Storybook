import React from "react";
import { withStyles, Typography, Card } from "@material-ui/core";
import PropTypes from "prop-types";
import { Style } from "./CustomCityCard.style";
import bgImage from "./bali.jpg";

const CustomCityCard = ({ classes, bgImage, title, subTitle  }) => {
  return (
    <div>
    <Card
      className={classes.card}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)), url(${bgImage})`,
      }}
    >
      <div className={classes.textCover}>
        <Typography className={classes.title}>{title}</Typography>
    <Typography className={classes.subTitle}>{subTitle}</Typography>
      </div>
    </Card>
    {/* <Card
      className={classes.card}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)), url(${bgImage})`,
      }}
    >
      <div className={classes.textCover}>
        <Typography className={classes.title}>{title}</Typography>
    <Typography className={classes.subTitle}>{subTitle}</Typography>
      </div>
    </Card> */}
    
  </div>
    
    
  );
};

CustomCityCard.propTypes = {
  classes: PropTypes.object.isRequired,
  bgImage: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

CustomCityCard.defaultProps={
  title:"Bali",
  subTitle:"50 Active Hotels • 254 Live Markets • 2352 Successful Bids",
  bgImage:bgImage,

}


export default withStyles(Style)(CustomCityCard);
