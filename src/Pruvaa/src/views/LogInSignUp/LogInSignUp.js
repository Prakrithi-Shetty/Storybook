import React, { Component } from "react";
import { withStyles, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from "@material-ui/core";

import Header from "../../layout/Header";
import { Style } from "./LoginSignUp.style";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

class LogInSignUp extends Component {
  state = {
    Expanded: false,
  };

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      Expanded: expanded ? panel : false,
    });
  };
  render() {
    const { classes } = this.props;
    const { Expanded } = this.state;
    return (
      <>
        <Header />
        <div className={classes.container}>
          {Expanded === false && <Typography className={classes.message}>Log back into your account, or sign up if you’re new here!</Typography>}
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={3}>
              <ExpansionPanel className={classes.expansion} expanded={Expanded === "panel1"} onChange={this.handleChange("panel1")}>
                <ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header" className={classes.content}>
                  <Typography className={classes.heading}>Log in to your account</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Login />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel className={classes.expansion} expanded={Expanded === "panel2"} onChange={this.handleChange("panel2")}>
                <ExpansionPanelSummary aria-controls="panel2a-content" id="panel2a-header" className={classes.content}>
                  <Typography className={classes.heading}>Sign up to get started</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <SignUp />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(Style)(LogInSignUp);
