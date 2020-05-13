import React from "react";
import { withStyles, Paper, Typography, Icon } from "@material-ui/core";
import { Style } from "./FAQCard.style";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const FAQCard = ({ classes,title,description,handleModalOpen }) => {
  return (
    <Paper elevation={0} className={classes.paper} >
      <Typography className={classes.title}>
      {title}
        <ChevronRightIcon className={classes.icon}>chevron_right</ChevronRightIcon>
      </Typography>
      <Typography className={classes.description}>{description.substring(0, 140)}..</Typography>
 
    </Paper>
  );
};

FAQCard.defaultProps={
title:"Title One" ,
description:"Lorem ipsum dolor sit amet, utamur placerat per eu, his mundi labitur id. Eam dicunt molestiae appellantur ex, eu vis modo semper appellantur, ei vim mentitum inimicus omittantur. Summo minim efficiantur in vim, eam et impedit repudiare. Mel ut errem vidisse ornatus, id quo case viderer."
}


export default withStyles(Style)(FAQCard);
