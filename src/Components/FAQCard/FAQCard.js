import React from "react";
import { withStyles, Paper, Typography, Icon,Modal } from "@material-ui/core";
import { Style } from "./FAQCard.style";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RoomIcon from '@material-ui/icons/Room';
import CategoryModal from "../CategoryModal/CategoryModal";




const FAQCard = ({ classes,handleModalOpen}) => {
  
  return (
    <Paper elevation={0} className={classes.paper} onClick={() => handleModalOpen()}>
      <Typography className={classes.title}>
        {"Title One"}
        <ChevronRightIcon className={classes.icon}>chevron_right</ChevronRightIcon>
      </Typography>
     
  <Typography  id={1} className={classes.description}>{"Lorem ipsum dolor sit amet, utamur placerat per eu, his mundi labitur id. Eam dicunt molestiae appellantur ex, eu vis modo semper appellantur, ei vim mentitum inimicus omittantur. Summo minim efficiantur in vim, eam et impedit repudiare. Mel ut errem vidisse ornatus, id quo case viderer."}</Typography>
 
    
    </Paper>
    
  );
};

export default withStyles(Style)(FAQCard);
