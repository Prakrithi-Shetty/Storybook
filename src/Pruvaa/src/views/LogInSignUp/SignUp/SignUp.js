import React, { Component } from "react";
import { withStyles, FormControl, InputLabel, NativeSelect, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";
import { connect } from "react-redux";

import { Style } from "./SignUp.style";
import CustomInput, { InputStyle } from "../../../components/CustomInput";
import { getCountriesList, signUpUser } from "../../../store/signUp/action";

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

  handleSubmit = (e) => {
    e.preventDefault();
    let value = {
      Email: this.state.Email,
      Name: this.state.Name,
      MobileNumber: this.state.MobileNumber,
      Password: this.state.Password,
      ConfirmPassword: this.state.ConfirmPassword,
      Country: this.state.Country,
    };
    this.props.signUpUser(value);
  };

  componentDidMount() {
    this.props.getCountriesList();
  }
  render() {
    const { classes, Countries } = this.props;
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
        <FormControl className={classes.countrySelect}>
          <InputLabel htmlFor="select-country">Country</InputLabel>
          <NativeSelect value={Country} onChange={this.handleInputChange} input={<InputStyle name="Country" id="select-country" />}>
            <option className={classes.selectOption} value={"0"} disabled>
              Select
            </option>
            {Countries &&Countries.map((country) => (
              <option value={country.id} className={classes.selectOption}>
                {country.title}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
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
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  Countries: state.signUp.Countries,
});

const mapDispatchToProps = (dispatch) => ({
  getCountriesList: () => dispatch(getCountriesList()),
  signUpUser: (value) => dispatch(signUpUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Style)(SignUp));
