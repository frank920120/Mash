import React, { Component } from "react";
import { compose } from "recompose";
import { withTracker } from "meteor/react-meteor-data";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Mail from "rmdi/lib/Mail";
import Pets from "rmdi/lib/Pets";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Meteor } from "meteor/meteor";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
class MessageBox extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
      openPopup: false,
      openAlert: false,
      alertMessage: "",
      showAcceptButton: true
    };
  }
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleAlertClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   this.setState({ openAlert: false });
    //   return;
    // }
    this.setState({ openAlert: false });
  };
  handlePopupClose = () => {
    this.setState({ openPopup: false });
  };
  handlePopupOpen = () => {
    this.setState({ openPopup: true });
  };
  render() {
    const { anchorEl } = this.state;
    const { classes, currentUser, currentUserId } = this.props;
    return (
      <div>
        <Button
          variant="text"
          color="primary"
          disableFocusRipple={true}
          disableRipple={true}
          className={classes.messageButton}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Mail color="tomato" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          className={classes.menu}
        >
          {currentUser.profile.messages
            ? currentUser.profile.messages.map(message => (
                <MenuItem
                  onClick={() => {
                    console.log("message", message);
                    return this.setState({
                      showAcceptButton: message.type > 0 ? true : false,
                      anchorEl: null,
                      text: message.text,
                      from: message.from,
                      fromId: message.fromId,
                      openPopup: true
                    });
                  }}
                >
                  <Pets className={classes.marginRight} color="red" /> A message
                  from {message ? message.from : null}
                </MenuItem>
              ))
            : null}
        </Menu>
        <Dialog
          open={this.state.openPopup}
          onClose={this.handlePopupClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <div>
              {this.state.from}
              {" sent you a message:"}
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.text}
            </DialogContentText>
          </DialogContent>
          {this.state.showAcceptButton ? (
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  this.setState({
                    openPopup: false
                  });

                  const updatedMessage = currentUser.profile.messages.filter(
                    message => {
                      return (
                        message.type === 1 ||
                        message.fromId !== this.state.fromI
                      );
                    }
                  );

                  const user = {
                    _id: currentUserId,
                    "profile.messages": updatedMessage
                  };
                  Meteor.call("artists.updateProfile", user);
                  const message = {
                    type: 0,
                    toId: this.state.fromId,
                    text:
                      "I have accepted your request, this is my email address: " +
                      currentUser.emails[0].address,
                    fromId: currentUserId,
                    from: currentUser.profile.fullname
                      ? currentUser.profile.fullname
                      : "The user you connected"
                  };
                  Meteor.call("artists.addMessage", message);
                  this.setState({
                    openAlert: true,
                    alertMessage: `You are connecting with ${this.state.from}!`
                  });
                }}
                color="primary"
              >
                {"ACCEPT & REMOVE THE MESSAGE"}
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  this.setState({
                    openPopup: false
                  });
                  const updatedMessage = currentUser.profile.messages.filter(
                    message => {
                      return (
                        message.type === 1 ||
                        message.fromId !== this.state.fromId
                      );
                    }
                  );
                  const user = {
                    _id: currentUserId,
                    "profile.messages": updatedMessage
                  };
                  //console.log(user);
                  Meteor.call("artists.updateProfile", user);
                  console.log("reject");
                }}
              >
                {"REJECT"}
              </Button>
            </DialogActions>
          ) : (
            <DialogActions>
              <Button
                color="primary"
                onClick={() => {
                  this.setState({
                    openPopup: false
                  });
                  const updatedMessage = currentUser.profile.messages.filter(
                    message => {
                      return (
                        message.type !== 0 ||
                        message.fromId !== this.state.fromId
                      );
                    }
                  );
                  console.log("state from id", this.state.fromId);
                  console.log("updatedMessage", updatedMessage);
                  const user = {
                    _id: currentUserId,
                    "profile.messages": updatedMessage
                  };
                  //console.log(user);
                  Meteor.call("artists.updateProfile", user);
                  console.log("reject");
                }}
              >
                {"OK"}
              </Button>
            </DialogActions>
          )}
        </Dialog>
        <Snackbar
          className={classes.alertMessage}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.openAlert}
          onClose={this.handleAlertClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
        >
          <SnackbarContent
            className={classes.alertMessage}
            aria-describedby="client-snackbar"
            message={<span id="message-id">{this.state.alertMessage}</span>}
          />
        </Snackbar>
      </div>
    );
  }
}

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
)(MessageBox);
