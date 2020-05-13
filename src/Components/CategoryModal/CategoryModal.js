import React from "react";
import { withStyles, Typography, Icon } from "@material-ui/core";
import { Style } from "./CategoryModal.style";
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import ContactDetails from "../ContactDetails/ContactDetails"

const CategoryModal = ({ classes, title, description }) => {

 
  return (
    <div className={classes.modalCover}>
      <CloseIcon  className={classes.close}>
       
      </CloseIcon>
      <div className={classes.contentCover}>
      <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>{description}</Typography>
      </div>
     <ContactDetails/> 
      
    </div>
  );
};

CategoryModal.defaultProps={
  title:"Title One",
  description:"Lorem ipsum dolor sit amet, utamur placerat per eu, his mundi labitur id. Eam dicunt molestiae appellantur ex, eu vis modo semper appellantur, ei vim mentitum inimicus omittantur. Summo minim efficiantur in vim, eam et impedit repudiare. Mel ut errem vidisse ornatus, id quo case viderer."
}

export default withStyles(Style)(CategoryModal);
