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
        <img
          src="/images/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <Fade left duration={1000}>
              <div className={classes.item}>
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
                  {/* {
                    "From the latest trendy boutique hotel to the iconic palace with XXL pool"
                  }
                  {
                    ", go for a mini-vacation just a few subway stops away from your home."
                  } */}
                </Typography>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} md={4}>
            <Fade left duration={2000}>
              <div className={classes.item}>
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
                  {/* {
                    "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                  }
                  {"your Sundays will not be alike."} */}
                </Typography>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} md={4}>
            <Fade left duration={3000}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src="/images/agree.svg"
                  alt="agree"
                />
                <Typography variant="h6" className={classes.title}>
                  AGREE
                </Typography>
                <Typography className={classes.subpara} variant="h5">
                  When it is time to put things into terms, Mash is here to make
                  your life easy: write contracts in simple terms and have them
                  registered on immutable blockchain!
                  {/* {
                    "By registering, you will access specially negotiated rates "
                  }
                  {"that you will not find anywhere else."} */}
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
