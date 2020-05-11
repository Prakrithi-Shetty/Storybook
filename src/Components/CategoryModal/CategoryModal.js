import React from "react";
import { withStyles, Typography, Icon } from "@material-ui/core";
import { Style } from "./CategoryModal.style";
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

const CategoryModal = ({ classes, title, description, handleModalClose }) => {
  return (
    <div className={classes.modalCover}>
      <CloseIcon onClick={handleModalClose} className={classes.close}>
       
      </CloseIcon>
      <div className={classes.contentCover}>
      <Typography className={classes.title}>{"Title One"}</Typography>
        <Typography className={classes.description}>{"Lorem ipsum dolor sit amet, utamur placerat per eu, his mundi labitur id. Eam dicunt molestiae appellantur ex, eu vis modo semper appellantur, ei vim mentitum inimicus omittantur. Summo minim efficiantur in vim, eam et impedit repudiare. Mel ut errem vidisse ornatus, id quo case viderer."}</Typography>
      </div>
      <div className={classes.contactCover}>
        <div className={classes.email}>
          <Typography className={classes.contactLabel}>EMAIL US</Typography>
          <a href="mailto:info@pruvaa.com" className={classes.link}>
            <MailOutlineIcon className={classes.icon}>mail_outline</MailOutlineIcon>info@pruvaa.com
          </a>
        </div>
        <div>
          <Typography className={classes.contactLabel}>CALL US</Typography>
          <a href="tel:1-800-xxx-xxxx" className={classes.link}>
            <PhoneInTalkIcon className={classes.icon}>phone_in_talk</PhoneInTalkIcon>1-800-xxx-xxxx
          </a>
        </div>
      </div>
    </div>
  );
};

export default withStyles(Style)(CategoryModal);
