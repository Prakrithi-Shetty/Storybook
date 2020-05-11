import React from "react";
import { withStyles, Typography, Card } from "@material-ui/core";
import PropTypes from "prop-types";
import { Style } from "./CustomCityCard.style";
import bgImage from "./bali.jpg";

const CustomCityCard = ({ classes }) => {
  return (
    <Card
      className={classes.card}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)), url(${bgImage})`,
      }}
    >
      <div className={classes.textCover}>
        <Typography className={classes.title}>{"Bali"}</Typography>
        <Typography className={classes.subTitle}>{"50 Active Hotels • 254 Live Markets • 2352 Successful Bids"}</Typography>
      </div>
    </Card>
  );
};

CustomCityCard.propTypes = {
  classes: PropTypes.object.isRequired,
  bgImage: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default withStyles(Style)(CustomCityCard);
