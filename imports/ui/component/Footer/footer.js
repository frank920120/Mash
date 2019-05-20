import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
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
          <div className={classes.contributor}>
            Build with <img className={classes.heart} src="/images/like.svg" />
            {" by "}
            <a
              className={classes.member}
              href="https://github.com/amarquesmoura"
            >
              Andre Moura,{" "}
            </a>
            <a className={classes.member} href="https://github.com/frank920120">
              Frank Fang,{" "}
            </a>
            <a className={classes.member} href="https://github.com/naijizhang">
              NaiJi Zhang,{" "}
            </a>
            <a className={classes.member} href="https://github.com/nancychuchu">
              Nancy Chu
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
