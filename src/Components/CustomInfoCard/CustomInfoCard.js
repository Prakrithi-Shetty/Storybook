import React from "react";
import { withStyles, Paper, Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Style } from "./CustomInfoCard.style";

const CustomInfoCard = ({ classes , primary }) => {
  return (
    <Paper className={classes.start}>
      <Typography className={classes.startText}>{"Change the way you book your hotels"}</Typography>
      <Button variant="contained" className={`${classes.button} ${primary ? classes.buttonPrimary : null}`} href="/login">
        {"GET STARTED"}
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

export default withStyles(Style)(CustomInfoCard);
