// import React,{useState} from "react";
// import { withStyles, FormControl, NativeSelect, InputLabel } from "@material-ui/core";
// import { Style } from "./CustomSelect.style";
// import { InputStyle } from "../Custominput/CustomInput";

// const CustomSelect = ({ classes }) => {
// //   const [cName,SetCname]=useState("")
// //   let handleInputChange=(e)=>{
// //     SetCname(e.target.value);
// //   }
//   return (
//     <FormControl className={classes.countrySelect}>
//       <InputLabel htmlFor="select-country">{"Country"}</InputLabel>
//       <NativeSelect value={"0"} input={<InputStyle name={"Country"} id={`select-${"Country"}`} />}>
//         <option className={classes.selectOption} value={"0"} disabled>
//           Select
//         </option>
       
//             <option  className={classes.selectOption}>
//              India
//             </option>
        
//       </NativeSelect>
//     </FormControl>
//   );
// };

// export default withStyles(Style)(CustomSelect);


import React from "react";
import { withStyles, FormControl, NativeSelect, InputLabel } from "@material-ui/core";
import { Style } from "./CustomSelect.style";
import { InputStyle } from "../Custominput/CustomInput";

const CustomSelect = ({ classes, Country, Countries, handleInputChange, label, name,title,id }) => {
  return (
    <FormControl className={classes.countrySelect}>
      <InputLabel htmlFor="select-country">{label}</InputLabel>
      <NativeSelect value={Country} onChange={handleInputChange} input={<InputStyle name={name} id={`select-${name}`} />}>
        <option className={classes.selectOption} value={"0"} disabled>
          Select
        </option>
        
            <option  className={classes.selectOption}>
            {title}
            </option>
        
      </NativeSelect>
    </FormControl>
  );
};

CustomSelect.defaultProps={

  name:"Country",
  label:"Country",
  title:"India",



}

export default withStyles(Style)(CustomSelect);

