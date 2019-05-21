import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";
class SearchAppBar extends React.Component {
  state = {
    name: ""
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.myFilter[0].profile.myFilter.fullname
        ? nextProps.myFilter[0].profile.myFilter.fullname
        : ""
    });
  }
  handleChange = event => {
    this.setState({ name: event.target.value });

    const user = {
      _id: Meteor.userId(),
      "profile.myFilter.fullname": event.target.value
    };

    Meteor.call("artists.updateProfile", user);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <div className={classes.searchContainer}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  withTracker(() => {
    Meteor.subscribe("getFilter");
    return {
      myFilter: Artists.find({}).fetch()
    };
  })(SearchAppBar)
);
