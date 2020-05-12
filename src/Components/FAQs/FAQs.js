import React ,{Component}from "react";
import { withStyles, Paper, Typography, Icon,Modal } from "@material-ui/core";
import { Style } from "./FAQs.style";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RoomIcon from '@material-ui/icons/Room';
import CategoryModal from "../CategoryModal/CategoryModal";




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

class FAQ extends Component {
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
    <Paper elevation={0} className={classes.paper} onClick={this.handleModalOpen}>
      <Typography className={classes.title}>
        {"Title One"}
        <ChevronRightIcon className={classes.icon}>chevron_right</ChevronRightIcon>
      </Typography>
     
  <Typography  id={1} className={classes.description}>{"Lorem ipsum dolor sit amet, utamur placerat per eu, his mundi labitur id. Eam dicunt molestiae appellantur ex, eu vis modo semper appellantur, ei vim mentitum inimicus omittantur. Summo minim efficiantur in vim, eam et impedit repudiare. Mel ut errem vidisse ornatus, id quo case viderer."}</Typography>
 
    
    </Paper>
    <Modal open={IsModalOpen === 1} onClose={this.handleModalClose} className={classes.modal} hideBackdrop={true}>
                      <CategoryModal  handleModalClose={this.handleModalClose} />
                    </Modal>
    </div>
    
  );
  }
};



export default withStyles(Style)(FAQ);
