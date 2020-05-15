// import React, { Component } from "react";
// import { withStyles, FormControl, InputLabel, NativeSelect, FormControlLabel, Checkbox, Button } from "@material-ui/core";
// import MuiPhoneNumber from "material-ui-phone-number";




// import CustomInput, { InputStyle }   from "../Custominput/CustomInput"
// import { Style } from  "./SignUp.style";

// class SignUp extends Component {

//     submit=()=>{
        
//             window.alert("Regsitered Successfuly!!") 
           
//     }
// render() {
//     const { classes, Countries } = this.props;

//     return (
        
//         <form className={classes.formFieldCover} >
//           <CustomInput label="First and Last Name"  name="Name" type="text" />
//           <CustomInput label="Email"  name="Email"  type="email" />
//           <MuiPhoneNumber
//             name="MobileNumber"
//             label="Mobile Number"
//             data-cy="user-phone"
//             defaultCountry={"us"}
            
//             inputClass={classes.mobile}
//           />
//           <FormControl className={classes.countrySelect}>
//           <InputLabel htmlFor="select-country">Country</InputLabel>
//           <NativeSelect   input={<InputStyle name="Country" id="select-country" />}>
//             <option className={classes.selectOption} value={"0"} disabled>
//               Select
//             </option>
            
//           </NativeSelect>
//           </FormControl>
//           <CustomInput label="Password"  name="Password"  type="password" />
//           <CustomInput label="Confirm Password"  name="ConfirmPassword"  type="password" />
  
//           <FormControlLabel
//             classes={{
//               root: classes.checkLabelRoot,
//               label: classes.checkBoxLabel,
//             }}
//             control={<Checkbox classes={{ root: classes.checkBox, checked: classes.checked }}  onChange={this.handleChecked} />}
//             label="By signing up, I agree to Lorem ipsum dolor sit amet,"
//           />
//           <Button variant="contained" type="submit" onClick={this.submit} className={classes.signUpButton} >
//             Sign up
//           </Button>
//         </form>
        
//       );
// }

// }





// export default (withStyles(Style)(SignUp));







import React, { Component } from "react";
import { withStyles, FormControlLabel, Checkbox, Button, Typography } from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";
import { connect } from "react-redux";
import CustomSelect from "../CustomSelect/CustomSelect"
import { Style } from "./SignUp.style";
import CustomInput from "../Custominput/CustomInput"


class SignUp extends Component {
  state = {
    Email: "",
    Name: "",
    UserName: "",
    MobileNumber: "",
    Password: "",
    ConfirmPassword: "",
    Country: "0",
    Agree: false,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChecked = (e) => {
    this.setState({
      Agree: e.target.checked,
    });
  };

  handleMobileChange = (val) => {
    this.setState({
      MobileNumber: val,
    });
  };

 
  
  render() {
    const { classes, Countries, success } = this.props;
    const { MobileNumber, Country, Name, Email, Password, ConfirmPassword, Agree } = this.state;
    return (
      <form className={classes.formFieldCover} onSubmit={this.handleSubmit}>
        <CustomInput label="First and Last Name" value={Name} name="Name" handleChange={this.handleInputChange} type="text" />
        <CustomInput label="Email" value={Email} name="Email" handleChange={this.handleInputChange} type="email" />
        <MuiPhoneNumber
          name="MobileNumber"
          label="Mobile Number"
          data-cy="user-phone"
          defaultCountry={"us"}
          value={MobileNumber}
          onChange={this.handleMobileChange}
          inputClass={classes.mobile}
        />
        <CustomSelect label="Country" Country={Country} handleInputChange={this.handleInputChange} name="Country" Countries={Countries} />
        <CustomInput label="Password" value={Password} name="Password" handleChange={this.handleInputChange} type="password" />
        <CustomInput label="Confirm Password" value={ConfirmPassword} name="ConfirmPassword" handleChange={this.handleInputChange} type="password" />

        <FormControlLabel
          classes={{
            root: classes.checkLabelRoot,
            label: classes.checkBoxLabel,
          }}
          control={<Checkbox classes={{ root: classes.checkBox, checked: classes.checked }} checked={Agree} onChange={this.handleChecked} />}
          label="By signing up, I agree to Lorem ipsum dolor sit amet,"
        />
        <Button variant="contained" type="submit" className={classes.signUpButton} disabled={!Agree}>
          Sign up
        </Button>
        {success && <Typography>Registered Successfully</Typography>}
      </form>
    );
  }
}



export default (withStyles(Style)(SignUp));
