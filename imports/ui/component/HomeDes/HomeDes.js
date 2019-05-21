import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Bounce from "react-reveal/Bounce";
import { Parallax } from "react-scroll-parallax";
import AccountForm from "../AccountForm";

const HomeDes = ({ classes }) => {
  return (
    <Parallax className={classes.parallax} y={[-20, 20]} tagOuter="figure">
      <section className={classes.desContainer}>
        <div className={classes.desContent}>
          <Bounce left duration={2000}>
            <Typography
              className={classes.desHeader}
              component="h3"
              variant="display3"
              gutterBottom
            >
              WHAT IS <span className={classes.highlight}>MASH</span>
            </Typography>
          </Bounce>
          <Bounce left duration={2000}>
            <Typography
              className={classes.desPara}
              component="p"
              variant="body2"
              gutterBottom
            >
              Mash is a platform to connect musicians with other complementary
              musicians so they can mash their art together. No mater if it is
              for a serious collaboration on songwriting the next top 40 hit
              song or just to have fun jamming with friends, here at Mash every
              contribution is welcome. And on top of it all, you will be able to
              create collaboration terms and save it to a smart contract on the
              blockchain!
            </Typography>
          </Bounce>
        </div>
        <Bounce right duration={2000}>
          {/* <Button variant="contained" className={classes.button}>
            SIGN ME UP
          </Button> */}
          <AccountForm />
        </Bounce>
      </section>
    </Parallax>
  );
};

export default withStyles(styles)(HomeDes);
