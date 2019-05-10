import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const HomeBanner = ({ classes }) => {
  return (
    <section className={classes.bannerContainer}>
      <div className={classes.imageContianer}>
        <img
          src="/images/HomeBanner.png"
          alt=""
          className={classes.bannerImage}
        />
        <div className={classes.ContentContainer}>
          <Typography
            className={classes.subtext}
            component="h2"
            variant="headline"
            gutterBottom
          >
            Welcome to
          </Typography>
          <Typography
            className={classes.text}
            component="h3"
            variant="display4"
            gutterBottom
          >
            Mash
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(HomeBanner);
