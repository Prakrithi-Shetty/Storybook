import React, { Component } from 'react';
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Components/Theme/Theme"




export default class componentName extends Component {
  render() {
    return (
      
      <MuiThemeProvider theme={theme}>
  <LoginSignUp/>
    </MuiThemeProvider>
      
    )
  }
}
