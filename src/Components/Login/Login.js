import React, { Component } from "react";
import { withStyles, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomInput  from "../CustomInput/CustomInput";
import  {Style } from "../../Components/Login/Login.style"; 


class Login extends Component {
    

    handleSubmit=()=>{

        window.alert("Logged in successfully")
    }


    render() {
        const { classes } = this.props;
       
        return (
            
          <div className={classes.formFieldCover}>
            <CustomInput label="Email"  name="Email"  type="email" />
            <CustomInput label="Password"  name="Password" type="password" />
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
    