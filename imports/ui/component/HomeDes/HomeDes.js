import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Bounce from "react-reveal/Bounce";
import { Parallax } from "react-scroll-parallax";
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
              What is <span className={classes.highlight}>MASH</span>
            </Typography>
          </Bounce>
          <Bounce left duration={2000}>
            <Typography
              className={classes.desPara}
              component="p"
              variant="body2"
              gutterBottom
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </Bounce>
        </div>
        <Bounce right duration={2000}>
          <Button variant="contained" className={classes.button}>
            SIGN ME UP
          </Button>
        </Bounce>
      </section>
    </Parallax>
  );
};

export default withStyles(styles)(HomeDes);
