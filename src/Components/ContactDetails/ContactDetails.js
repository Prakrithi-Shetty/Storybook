import React from "react";
import { withStyles, Typography, Icon } from "@material-ui/core";
import { Style } from "./ContactDetail.style";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

const ContactDetails = ({ classes, contactPage }) => {
  return (
    <div className={`${classes.contactCover} ${contactPage ? classes.noPadding : null}`}>
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
  );
};

ContactDetails.defaultProps={

  contactPage:false,
}

export default withStyles(Style)(ContactDetails);
