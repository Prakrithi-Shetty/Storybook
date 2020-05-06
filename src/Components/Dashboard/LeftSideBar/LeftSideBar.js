import React, { Component } from "react";
import { withStyles, Typography, Button } from "@material-ui/core";

import { Style } from "../LeftSideBar/LeftSideBar.style";

class LeftSideBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.leftSideBar}>
        <Typography className={classes.welcome}>WELCOME TO YOUR DASHBOARD</Typography>
        <Typography className={classes.saved}>
          You’ve saved <span>$235</span> with PRUVAA to date!
        </Typography>
        <Button variant="contained" className={classes.create}>
          + CREATE NEW MARKET
        </Button>
      </div>
    );
  }
}

export default withStyles(Style)(LeftSideBar);
