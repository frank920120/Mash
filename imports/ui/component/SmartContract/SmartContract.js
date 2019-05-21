import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import styles from "./styles";

function SmartContract(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.layoutBody} width="large">
        <Fade top duration={2000}>
          <h1 className={classes.header}>
            HOW IT WORKS
            <span className={classes.underline} />
          </h1>
        </Fade>
        <Grid className={classes.mainContainer} container spacing={40}>
          <Grid item xs={12} md={4}>
            <Fade left duration={1000}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  className={classes.image}
                  src="/images/find.svg"
                  alt="find"
                />
                <Typography variant="h6" className={classes.title}>
                  FIND
                </Typography>
                <Typography className={classes.subpara} variant="h5">
                  Search for the artists in your area and find that matching
                  talent that will take your gigs to the next level!
                </Typography>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} md={4}>
            <Fade left duration={2000}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  className={classes.image}
                  src="/images/connect.svg"
                  alt="connect"
                />
                <Typography variant="h6" className={classes.title}>
                  CONNECT
                </Typography>
                <Typography className={classes.subpara} variant="h5">
                  Create a network of like-minded artists to collaborate, jam
                  together or simple have lots of fun!
                </Typography>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} md={4}>
            <Fade left duration={3000}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  className={classes.image}
                  src="/images/agree.svg"
                  alt="agree"
                />
                <Typography variant="h6" className={classes.title}>
                  AGREE
                </Typography>
                <Typography className={classes.subpara} variant="h5">
                  Mash helps you to write collaboration agreements in simple
                  terms and have them registered on immutable blockchain!
                </Typography>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

SmartContract.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SmartContract);
