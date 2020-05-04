import React, { Component } from "react";
import { withStyles, FormControl, InputLabel, NativeSelect, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";




import CustomInput, { InputStyle }   from "../CustomInput/CustomInput";
import { Style } from  "./SignUp.style";

class SignUp extends Component {

    submit=()=>{
        
            window.alert("Regsitered Successfuly!!") 
           
    }
render() {
    const { classes, Countries } = this.props;

    return (
        
        <form className={classes.formFieldCover} >
          <CustomInput label="First and Last Name"  name="Name" type="text" />
          <CustomInput label="Email"  name="Email"  type="email" />
          <MuiPhoneNumber
            name="MobileNumber"
            label="Mobile Number"
            data-cy="user-phone"
            defaultCountry={"us"}
            
            inputClass={classes.mobile}
          />
          <FormControl className={classes.countrySelect}>
          <InputLabel htmlFor="select-country">Country</InputLabel>
          <NativeSelect   input={<InputStyle name="Country" id="select-country" />}>
            <option className={classes.selectOption} value={"0"} disabled>
              Select
            </option>
            
          </NativeSelect>
          </FormControl>
          <CustomInput label="Password"  name="Password"  type="password" />
          <CustomInput label="Confirm Password"  name="ConfirmPassword"  type="password" />
  
          <FormControlLabel
            classes={{
              root: classes.checkLabelRoot,
              label: classes.checkBoxLabel,
            }}
            control={<Checkbox classes={{ root: classes.checkBox, checked: classes.checked }}  onChange={this.handleChecked} />}
            label="By signing up, I agree to Lorem ipsum dolor sit amet,"
          />
          <Button variant="contained" type="submit" onClick={this.submit} className={classes.signUpButton} >
            Sign up
          </Button>
        </form>
        
      );
}

}



export default (withStyles(Style)(SignUp));