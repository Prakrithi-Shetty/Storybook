import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";

import { Style } from "../Bidtimer/Bidtimer.style";

const calculateTimeLeft = (date) => {
  const difference = +new Date(date) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    hours = hours >= 10 ? hours : `0${hours}`;
    minutes = minutes >= 10 ? minutes : `0${minutes}`;
    seconds = seconds >= 10 ? seconds : `0${seconds}`;
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  return timeLeft;
};

class BidTimer extends Component {
  state = {
    timeLeft: calculateTimeLeft(),
  };

  static defaultProps={
    date:"2020-07-05",
  }

  componentDidMount(props) {
    setInterval(() => {
      this.setState({ timeLeft: calculateTimeLeft(this.props.date) });
    }, 1000);
  }

  render() {
    const timerComponents = [];
    const { classes ,date} = this.props;

    Object.keys(this.state.timeLeft).forEach((interval) => {
      if (!this.state.timeLeft[interval]) {
        return;
      }
      if (interval === "seconds") {
        timerComponents.push(<>{this.state.timeLeft[interval]}</>);
      } else {
        timerComponents.push(<>{this.state.timeLeft[interval]}:</>);
      }
    });
    return (
      <>
      
        {timerComponents.length ? (
          <div>
            <Typography className={classes.timer}>
              Market closing in <span>{timerComponents}</span>
            </Typography>
          </div>
        ) : null}
      </>
    );
  }
}

export default withStyles(Style)(BidTimer);
