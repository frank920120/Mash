import React, { Component } from "react";
import ArtistCard from "../../component/ArtistCard/ArtistCard";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";
import { Grid, withStyles } from "@material-ui/core";
import FilterSkills from "../../component/FilterSkills/FilterSkills";
import FilterGenres from "../../component/FilterGenres/FilterGenres";
import SearchArtists from "../../component/SearchArtists/SearchArtists";
import styles from "./styles";

class Directory extends Component {
  render() {
    const artists = this.props.allUsers;
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <div className={classes.filters}>
          <SearchArtists />
          <FilterSkills />
          <FilterGenres />
        </div>

        <Grid container className={classes.root} spacing={12}>
          {artists.map((artist, i) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={artist._id}>
                <ArtistCard artist={artist} />
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
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
