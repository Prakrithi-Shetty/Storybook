
import React, { Component } from "react";
import { withStyles, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

import  Login from "../../Components/Login/Login";
import {Style} from "../../Components/LoginSignUp/LoginSignUp.style";
import Signup from "../SignUp/SignUp"

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
     <div className={classes.container}>
                         <ExpansionPanel className={classes.expansion} expanded={Expanded === "panel1"} onChange={this.handleChange("panel1")}>
                  <ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header" className={classes.content}>
                    <Typography className={classes.heading}>Log in to your account</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Login />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
               
          </div>
          );
    }
  }
  
  export default withStyles(Style)(LogInSignUp);