import React,{useState} from "react";
import PropTypes from "prop-types";
import { withStyles, Button } from "@material-ui/core";
import { Style } from "./CategoryButton.style";

const CategoryButton = ({ classes,label }) => {
  const [selected, setSelected] = useState(false)
  

  const  click =()=>{setSelected(true)}
   
  
  return (
    <Button variant="outlined" className={`${classes.categoryButton} ${selected ? classes.selectedCategory : null}`} onClick={click}>
     {label}
    </Button>
  );
};

CategoryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

CategoryButton.defaultProps={
  label:"Category 1",
}

export default withStyles(Style)(CategoryButton);
