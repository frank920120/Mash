import React, { Component } from "react";
import ArtistCard from "../../component/ArtistCard/ArtistCard";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";
import { Grid, withStyles } from "@material-ui/core";
import styles from "./styles";

class Directory extends Component {
  render() {
    const profiles = this.props.allUsers;
    const classes = this.props.classes;
    return (
      <Grid container className={classes.root} spacing={24}>
        {profiles.map((profile, i) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={profile._id}>
              <ArtistCard profile={profile} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default withStyles(styles)(
  withTracker(() => {
    Meteor.subscribe("allArtists");
    return {
      allUsers: Artists.find({}).fetch()
    };
  })(Directory)
);
