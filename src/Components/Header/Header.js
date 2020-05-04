import React from "react";
import { withStyles, AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../Theme/Theme"

import { Style } from "./Header.style";

const Header = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.logo}>P</Typography>
        <div className={classes.navItems}>
          <Link to="#">About PRUVAA</Link>
          <Link to="#">FAQs</Link>
          <Link to="#">Contact Us</Link>
          <Button variant="contained" className={classes.button}>
            Log in / Sign up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
    </MuiThemeProvider>
  );
};

export default withStyles(Style)(Header);
