import React, { Component } from "react";
import { withStyles, Tab } from "@material-ui/core";

import { Style, AntTabs } from "./MainContent.style";
import LiveMarket from "./LiveMarket/LiveMarket";

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 30,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontSize: 18,
    padding: 0,
    opacity: 0.5,
    color: theme.palette.primary.dark,
    "&:hover": {
      opacity: 1,
    },
    "&$selected": {
      opacity: 1,
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: theme.palette.primary.dark,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

class MainContent extends Component {
  state = {
    ActiveTab: 0,
  };

  handleTab = (event, value) => {
    this.setState({
      ActiveTab: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { ActiveTab } = this.state;
    return (
      <div className={classes.mainContent}>
        <AntTabs value={ActiveTab} onChange={this.handleTab} aria-label="ant example">
          <AntTab label="Live Markets" />
          <AntTab label="Done Deals" />
          <AntTab label="All" />
        </AntTabs>
        {ActiveTab === 0 && (
          <>
            <LiveMarket />
          </>
        )}
        {ActiveTab === 1 && <>hot</>}
        {ActiveTab === 2 && <>red</>}
      </div>
    );
  }
}

export default withStyles(Style)(MainContent);
