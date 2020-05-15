import React from "react";
import { withStyles, InputBase, fade, FormControl, InputLabel } from "@material-ui/core";

export const InputStyle = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 8,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    fontSize: 15,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const Style = (theme) => ({
  formField: {
    width: "100%",
    marginBottom: 12,
    "& label": {
      fontSize: 20,
      color: theme.palette.primary.dark,
    },
  },
});

const CustomInput = ({ classes,label ,value,name,handleChange,type,textArea}) => {
  return (
    <FormControl className={classes.formField}>
      <InputLabel shrink htmlFor="name-input">
       {label}
      </InputLabel>
      <InputStyle defaultValue="" id="name-input"  onChange={handleChange} name={name} type={type} multiline={textArea} rows="5" />
    </FormControl>
  );
};


CustomInput.defaultProps={
  label:"Password",
  type:"password",
  name:"Password",
  value:"",
  handleChange:function(){console.log("Password")},
  textArea:false,


}


export default withStyles(Style)(CustomInput);
