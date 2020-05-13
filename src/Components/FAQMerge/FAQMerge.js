import React ,{Component}from "react";
import { withStyles, Paper, Typography, Icon,Modal } from "@material-ui/core";
import { Style } from "../FAQMerge/FAQMerge.style";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RoomIcon from '@material-ui/icons/Room';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import FAQ from "../FAQCard/FAQCard"




// const FAQCard = ({ classes,handleModalOpen}) => {
  
//   return (
//     <Paper elevation={0} className={classes.paper} onClick={() => handleModalOpen()}>
//       <Typography className={classes.title}>
//         {"Title One"}
//         <ChevronRightIcon className={classes.icon}>chevron_right</ChevronRightIcon>
//       </Typography>
     
//   <Typography  id={1} className={classes.description}>{"Lorem ipsum dolor sit amet, utamur placerat per eu, his mundi labitur id. Eam dicunt molestiae appellantur ex, eu vis modo semper appellantur, ei vim mentitum inimicus omittantur. Summo minim efficiantur in vim, eam et impedit repudiare. Mel ut errem vidisse ornatus, id quo case viderer."}</Typography>
 
    
//     </Paper>
    
//   );
// };

class FAQCard extends Component {
  state = {
    CategorySelected: 0,
    IsModalOpen: null,
    Blur: false,
  };

  handleClick = (val) => {
    this.setState({
      CategorySelected: 1,
    });
  };

  handleModalOpen = (val) => {
    this.setState({
      IsModalOpen: 1,
      Blur: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      IsModalOpen: null,
      Blur: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { CategorySelected, IsModalOpen, Blur } = this.state;
    
  
  return (
    <div className={Blur ? classes.blur : null}>
    <FAQ id={1}  handleModalOpen={this.handleModalOpen} />
                    
    <Modal open={IsModalOpen === 1} onClose={this.handleModalClose} className={classes.modal} hideBackdrop={true}>
                     <div className={classes.modalCover}>
      <CloseIcon onClick={this.handleModalClose} className={classes.close}>
       
      </CloseIcon>
      <div className={classes.contentCover}>
      <Typography className={classes.title}>{"Title One"}</Typography>
        <Typography className={classes.description}>{"Lorem ipsum dolor sit amet, utamur placerat per eu, his mundi labitur id. Eam dicunt molestiae appellantur ex, eu vis modo semper appellantur, ei vim mentitum inimicus omittantur. Summo minim efficiantur in vim, eam et impedit repudiare. Mel ut errem vidisse ornatus, id quo case viderer."}</Typography>
      </div>
      <div className={classes.contactCover}>
        <div className={classes.email}>
          <Typography className={classes.contactLabel}>EMAIL US</Typography>
          <a href="mailto:info@pruvaa.com" className={classes.link}>
            <MailOutlineIcon className={classes.icons}>mail_outline</MailOutlineIcon>info@pruvaa.com
          </a>
        </div>
        <div>
          <Typography className={classes.contactLabel}>CALL US</Typography>
          <a href="tel:1-800-xxx-xxxx" className={classes.link}>
            <PhoneInTalkIcon className={classes.icons}>phone_in_talk</PhoneInTalkIcon>1-800-xxx-xxxx
          </a>
        </div>
      </div>
    </div>
     
                    </Modal>
    </div>
    
  );
  }
};



export default withStyles(Style)(FAQCard);