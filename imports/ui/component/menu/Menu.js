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
import MessageBox from "../MessageBox";

function Menu(props) {
  const { classes, currentUserId, currentUser } = props;
  console.log(props);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <div className={classes.cover} />
        <Toolbar className={classes.toolbar}>
          <a href="/directory">
            <img
              className={classes.logo}
              src="/branding/images/mash_logo.svg"
              alt=""
            />
          </a>
          {currentUserId ? (
            <div className={classes.buttonsContainer}>
              {(!!currentUser) && currentUser.profile.messages &&
              currentUser.profile.messages.length > 0 ? (
                <MessageBox />
              ) : null}
              <Button onClick={() => Meteor.logout()}>Logout</Button>
            </div>
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
    const currentUser = Meteor.user();
    return {
      currentUser: currentUser,
      currentUserId: currentUserId
    };
  })
)(Menu);
