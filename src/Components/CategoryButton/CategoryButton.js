import React from "react";
import PropTypes from "prop-types";
import { withStyles, Button } from "@material-ui/core";
import { Style } from "./CategoryButton.style";

const CategoryButton = ({ classes, label, handleClick, id, selected }) => {
  console.log(selected);
  return (
    <Button variant="outlined" className={`${classes.categoryButton} ${selected ? classes.selectedCategory : null}`} onClick={() => handleClick(id)}>
      {"Category 1"}
    </Button>
  );
};

CategoryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Style)(CategoryButton);
