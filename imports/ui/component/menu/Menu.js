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
import { compose } from "recompose";
import { withTracker } from "meteor/react-meteor-data";

function Menu(props) {
  const { classes, currentUserId } = props;
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
          {currentUserId ? (
            <Button onClick={() => Meteor.logout()}>Logout</Button>
          ) : (
            <AccountForm />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withTracker(() => {
    const currentUserId = Meteor.userId();
    return {
      currentUser: Meteor.user(),
      currentUserId
    };
  })
)(Menu);
