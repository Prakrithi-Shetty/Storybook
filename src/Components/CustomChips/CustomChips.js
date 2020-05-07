import React from "react";
import { withStyles, Chip, Icon } from "@material-ui/core";

import { Style } from "../CustomChips/CustomChips.style";
import LocationCityIcon from '@material-ui/icons/LocationCity';

const CustomChips = ({ classes, icon, label, FilterSelected, handleFilter, val }) => {
  console.log(val);
  return <Chip classes={{ root: classes.root, label: classes.label }} icon={ <Icon><LocationCityIcon></LocationCityIcon></Icon>} label={"Hotels"} />;
};

export default withStyles(Style)(CustomChips);
