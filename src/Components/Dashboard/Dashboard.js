import React, { Component } from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";

import { Style } from "./Dashboard.style";
import Header from "../Header/Header";
import LeftSideBar from "../Dashboard/LeftSideBar/LeftSideBar";
import MainContent from "./MainContent/MainContent";

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Header />
        <Grid container spacing={3} className={classes.dashboard}>
          <Grid item xs={3}>
            <LeftSideBar />
          </Grid>
          <Grid item xs={9}>
            <MainContent />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(Style)(Dashboard);
