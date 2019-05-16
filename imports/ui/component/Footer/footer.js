import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const icons = [
  {
    id: 0,
    url: "/socialMediaIcons/facebook.svg"
  },
  {
    id: 1,
    url: "/socialMediaIcons/google-plus.svg"
  },
  {
    id: 2,
    url: "/socialMediaIcons/instagram.svg"
  },
  {
    id: 3,
    url: "/socialMediaIcons/twitter.svg"
  }
];

const Footer = ({ classes }) => {
  return (
    <Grid container className={classes.footerContainer}>
      <Grid item className={classes.footerHeader}>
        <span className={classes.headerLeft} />
        <img
          className={classes.footerLogo}
          src="/branding/images/mash_logo.svg"
          alt="footer-logo"
        />
        <h3 variant="subtitle1" className={classes.subHeader}>
          MASH
        </h3>

        <span className={classes.headerRight} />
      </Grid>

      <Grid item className={classes.footerBottom} xs={12}>
        <h1 className={classes.copyRight}>©2019 MASH. All rights reserved.</h1>
        <div className={classes.iconContainer}>
          {icons.map(icon => (
            <a href="#0" key={icon.id}>
              <img className={classes.socialMeida} src={icon.url} alt="logo" />
            </a>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
