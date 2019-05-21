import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import AccountForm from "../AccountForm";
import { compose } from "recompose";
import { withTracker } from "meteor/react-meteor-data";
import MessageBox from "../MessageBox";
import { Meteor } from "meteor/meteor";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {
      openAlert: false,
      alertMessage: "You have a new friend!"
    };
  }
  handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      this.setState({ openAlert: false });
      Meteor.call("artists.removeNewFriendAlert");
      return;
    }
    this.setState({ openAlert: false });
    Meteor.call("artists.removeNewFriendAlert");
  };
  render() {
    const { classes, currentUserId, currentUser } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <div className={classes.cover} />
          <Toolbar className={classes.toolbar}>
            <a href="/">
              <img
                className={classes.logo}
                src="/branding/images/mash_logo.svg"
                alt=""
              />
            </a>
            {Meteor.userId() && (
              <div>
                <a className={classes.link} href={"/"}>
                  Welcome
                </a>
                <a className={classes.link} href={"/preference"}>
                  Preferences
                </a>
                <a className={classes.link} href={"/directory"}>
                  Directory
                </a>
                <a
                  className={classes.link}
                  href={`/profile/${Meteor.userId()}`}
                >
                  Your Profile
                </a>
              </div>
            )}

            {currentUserId ? (
              <div className={classes.buttonsContainer}>
                {!!currentUser &&
                currentUser.profile.messages &&
                currentUser.profile.messages.length > 0 ? (
                  <MessageBox />
                ) : null}
                <Button
                  className={classes.button}
                  onClick={() => Meteor.logout()}
                >
                  Logout
                </Button>
                <Snackbar
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  open={currentUser && currentUser.profile.hasNewFriend}
                  onClose={this.handleAlertClose}
                  ContentProps={{
                    "aria-describedby": "message-id"
                  }}
                >
                  <SnackbarContent
                    className={classes.alertMessage}
                    aria-describedby="client-snackbar"
                    message={
                      <span id="message-id">{this.state.alertMessage}</span>
                    }
                  />
                </Snackbar>
              </div>
            ) : (
              <AccountForm />
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
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
