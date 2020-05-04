import React, { Component } from "react";
import { withStyles, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Style } from "./Login.style";
import CustomInput from "../../../components/CustomInput";
import { loginUser } from "../../../store/login/action";

class Login extends Component {
  state = {
    Email: "",
    Password: "",
    RememberMe: false,
    IsSubmitted: false,
  };

  handleRememberMe = (e) => {
    this.setState({
      RememberMe: e.target.value,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    let value = {
      Email: this.state.Email,
      Password: this.state.Password,
    };
    this.props.loginUser(value);
    this.setState({
      IsSubmitted: true,
    });
  };
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (value) => dispatch(loginUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Style)(Login));
