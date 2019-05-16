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
class MessageBox extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value
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
  render() {
    const { anchorEl } = this.state;
    const { classes, currentUser } = this.props;
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
        {currentUser.profile.messages?currentUser.profile.messages.map(
            message=>(
                <MenuItem onClick={()=>{
                    return (console.log("you clicked",message));
                }}><Pets className={classes.marginRight} color="red"/> A message from {message.from}</MenuItem>
            )
        ):null}
         

        </Menu>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withTracker(() => {
    const currentUserId = Meteor.userId();
    const currentUser= Meteor.user()
    return {
      currentUser: currentUser,
      currentUserId: currentUserId
    };
  })
)(MessageBox);
