import React from "react";
import { withStyles, Paper, Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Style } from "./CustomInfoCard.style";

const CustomInfoCard = ({ classes , primary,label,buttonLabel }) => {
  return (
    <Paper className={classes.start}>
      <Typography className={classes.startText}>{label}</Typography>
      <Button variant="contained" className={`${classes.button} ${primary ? classes.buttonPrimary : null}`} href="/login">
       {buttonLabel}
      </Button>
    </Paper>
  );
};

CustomInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonLabel: PropTypes.string,
  label: PropTypes.string,
  primary: PropTypes.bool,
};

CustomInfoCard.defaultProps={
  label:"Change the way you book your hotels",
  buttonLabel:"GET STARTED",
  primary:false,
}

export default withStyles(Style)(CustomInfoCard);
