import React, { Component } from "react";
import { withStyles, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomInput  from "../CustomInput/CustomInput";
import  {Style } from "../../Components/Login/Login.style"; 


class Login extends Component {
    state = {
      Email: "",
      Password: "",
      RememberMe: false,
      IsSubmitted: false,
    };

    handleSubmit=()=>{

        window.alert("Logged in successfully")
    }


    render() {
        const { classes } = this.props;
        const { Email, Password } = this.state;
        return (
            
          <div className={classes.formFieldCover}>
            <CustomInput label="Email" value={Email} name="Email" handleChange={this.handleInputChange} type="email" />
            <CustomInput label="Password" value={Password} name="Password" handleChange={this.handleInputChange} type="password" />
            <FormControlLabel
              classes={{
                root: classes.checkLabelRoot,
                label: classes.checkBoxLabel,
                fontFamily: "Josefin Sans, sans-serif"
              }}
              control={<Checkbox classes={{ root: classes.checkBox, checked: classes.checked }} />}
              label="Remember me and stay logged in"
            />
            <Button variant="contained" className={classes.logInButton} onClick={this.handleSubmit} href="/dashboard">
              Log in
            </Button>
            <Link to="#" className={classes.forgot}>
              Forgot your password?
            </Link>
          </div>
        );
      }
    }

    export default (withStyles(Style)(Login));
    