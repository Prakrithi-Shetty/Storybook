// import React ,{Component}from "react";
// import { withStyles, Paper, Typography, Icon,Modal } from "@material-ui/core";
// import { Style } from "../FAQMerge/FAQMerge.style";
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import RoomIcon from '@material-ui/icons/Room';
// import CloseIcon from '@material-ui/icons/Close';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
// import FAQ from "../FAQCard/FAQCard";
// import CategoryModal from "../CategoryModal/CategoryModal"
// import ContactDetails from "../ContactDetails/ContactDetails"




// class FAQs extends Component {
//   state = {
//     CategorySelected: 0,
//     IsModalOpen: null,
//     Blur: false,
//   };

//   handleClick = (val) => {
//     this.setState({
//       CategorySelected: val,
//     });
//   };

//   handleModalOpen = (val) => {
//     this.setState({
//       IsModalOpen: 1,
//       Blur: true,
//     });
//   };

//   handleModalClose = () => {
//     this.setState({
//       IsModalOpen: null,
//       Blur: false,
//     });
//   };
//   render() {
//     const { classes } = this.props;
//     const { CategorySelected, IsModalOpen, Blur } = this.state;
  
//     return (
//       <div className={Blur ? classes.blur : null}>

// <Paper elevation={0} className={classes.paper}  onClick={this.handleModalOpen}>
//       <Typography className={classes.title}>
//       hi
//         <ChevronRightIcon className={classes.icon}>chevron_right</ChevronRightIcon>
//       </Typography>
//       <Typography className={classes.description}>hello</Typography>
 
//     </Paper>
//     <Modal open={IsModalOpen == 1}  className={classes.modal} hideBackdrop={true}>
//     {/* <div className={classes.modalCover}>
//       <CloseIcon  className={classes.close}  onClick={this.handleModalClose}>
      
//       </CloseIcon>
//       <div className={classes.contentCover}>
//       <Typography className={classes.title}>hi</Typography>
//         <Typography className={classes.description}>hi}</Typography>
//       </div>
   
      
//     </div> */}
//     <div>
//     <CategoryModal/>
//     <ContactDetails/> 
//     </div>
//     </Modal>
                 
//       </div>
//     );
//   }
// }

// export default withStyles(Style)(FAQs);
import React ,{Component}from "react";
import { withStyles, Paper, Typography, Icon,Modal } from "@material-ui/core";
import { Style } from "../FAQMerge/FAQMerge.style";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RoomIcon from '@material-ui/icons/Room';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import FAQ from "../FAQCard/FAQCard";
import CategoryModal from "../CategoryModal/CategoryModal"
import ContactDetails from "../ContactDetails/ContactDetails"
import FAQCard from "../FAQCard/FAQCard";




class FAQs extends Component {
  state = {
    CategorySelected: 0,
    IsModalOpen: null,
    Blur: false,
  };

  handleClick = (val) => {
    this.setState({
      CategorySelected: val,
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


  static defaultProps={
    title:"Title One" ,
    description:"Lorem ipsum dolor sit amet, utamur placerat per eu, his mundi labitur id. Eam dicunt molestiae appellantur ex, eu vis modo semper appellantur, ei vim mentitum inimicus omittantur. Summo minim efficiantur in vim, eam et impedit repudiare. Mel ut errem vidisse ornatus, id quo case viderer.",
    
  }
  render() {
    const { classes,title,description } = this.props;
    const { CategorySelected, IsModalOpen, Blur } = this.state;

    
  
    return (
      <div className={Blur ? classes.blur : null}>

     <FAQCard handleModalOpen={this.handleModalOpen}/>
    <Modal open={IsModalOpen == 1}  className={classes.modal} hideBackdrop={true}>
   
    <div>
      <CategoryModal  handleModalClose={this.handleModalClose} />
    <ContactDetails/>
    </div>
    </Modal>
    </div>
                 
    
    );
  }
}



export default withStyles(Style)(FAQs);

