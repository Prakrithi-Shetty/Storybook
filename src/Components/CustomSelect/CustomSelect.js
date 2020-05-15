import React from "react";
import { withStyles, FormControl, NativeSelect, InputLabel } from "@material-ui/core";
import { Style } from "./CustomSelect.style";
import { InputStyle } from "../Custominput/CustomInput";

const CustomSelect = ({ classes, Country, Countries, handleInputChange, label, name }) => {
  return (
    <FormControl className={classes.countrySelect}>
      <InputLabel htmlFor="select-country">{label}</InputLabel>
      <NativeSelect value={Country} onChange={handleInputChange} input={<InputStyle name={name} id={`select-${name}`} />}>
        <option className={classes.selectOption} value={0} disabled>
          Select
        </option>
        {Countries &&
          Countries.map((country) => (
            <option value={country.id} className={classes.selectOption}>
              {country.title}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

CustomSelect.defaultProps={
  Country:0,
  Countries:[{id:1,title:"India"},{id:2,title:"Australia"}],
  handleInputChange:function(){window.alert("Select")},
  label:"Country",
  name:"Country"
}

export default withStyles(Style)(CustomSelect);
