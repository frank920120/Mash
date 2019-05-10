import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const HomeDes = ({ classes }) => {
  return (
    <section className={classes.desContainer}>
      <div className={classes.desContent}>
        <Typography
          className={classes.desHeader}
          component="h3"
          variant="display3"
          gutterBottom
        >
          What is MASH
        </Typography>
        <Typography
          className={classes.desPara}
          component="p"
          variant="body2"
          gutterBottom
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Typography>
      </div>
      <Button variant="contained" color="secondary" className={classes.button}>
        SIGN ME UP
      </Button>
    </section>
  );
};

export default withStyles(styles)(HomeDes);
