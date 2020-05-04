import React from "react";
import { withStyles, Chip, Icon } from "@material-ui/core";

import { Style } from "./CustomChips.style";

const CustomChips = ({ classes, icon, label, FilterSelected, handleFilter, val }) => {
  console.log(val);
  return <Chip classes={{ root: classes.root, label: classes.label }} icon={icon && <Icon>{icon}</Icon>} label={label} />;
};

export default withStyles(Style)(CustomChips);
