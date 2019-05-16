import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function Review({ classes, text, reviewer }) {
  return (
    <div className={classes.reviewCard}>
      <h4 className={classes.whiteText}>A dream to work with</h4>
      <div className={classes.review}>
        <p>{text}</p>
      </div>
      <p className={classes.whiteText}>{reviewer}</p>
    </div>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
