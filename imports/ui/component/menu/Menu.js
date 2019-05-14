import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles";
import AccountForm from "../AccountForm";

function Menu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <div className={classes.cover} />
        <Toolbar className={classes.toolbar}>
          <img
            className={classes.logo}
            src="/branding/images/mash_logo.svg"
            alt=""
          />

          {/* <AccountsUIWrapper /> */}
          {/* check if there's a user logged in. If yes, logout, if not login/create account */}
          <AccountForm />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
