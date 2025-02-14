import React, { Component } from "react";
import Headings from "../../components/Headings";
//Material Styles

import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: "white",
    height: "100%",
    background: "black",
    width: "100vw"
  },
  navbar: {
    height: "calc(100%*0.10)"
  },
  events: {
    padding: "20px 0",
    minHeight: "95px"
  },
  trending: {},
  centerPadding: {
    width: "calc(100vw*0.9)",
    margin: "0 auto"
  },
  reaction: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  }
};

class SecondScreenExperience extends Component {
  render() {
    const {
      classes,
      isFullScreen,
      navbar,
      events,
      trending,
      reaction,
      children
    } = this.props;

    return (
      <div className={classes.root}>
        {!isFullScreen && navbar}
        {children}
        {!isFullScreen && (
          <React.Fragment>
            <div className={classes.events}>{events}</div>
            <div className={classes.trending}>
              <div className={classes.centerPadding}>
                <Headings text="TRENDING ENTITIES" />
              </div>
              {trending}
            </div>
            <div className={classes.reaction}>
              <div className={classes.centerPadding}>
                <Headings text="TWEET STREAM" />
              </div>
              {reaction}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(SecondScreenExperience);
