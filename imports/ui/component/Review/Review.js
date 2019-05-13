import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function Review(props) {
  const { classes } = props;

  return (
    <div className={classes.reviewCard}>
      <h4 className={classes.whiteText}>A dream to work with</h4>
      <div className={classes.review}>
        <p>
          Phasellus iaculis nisl enim, nec molestie dolor semper id. Fusce non
          eleifend mi. Donec porttitor accumsan ligula sit amet vehicula. Donec
          posuere tristique est, vitae bibendum mauris imperdiet nec. Vestibulum
          sodales imperdiet leo, ac mattis tortor blandit eu.
        </p>
      </div>
      <p className={classes.whiteText}>Walter White</p>
    </div>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
