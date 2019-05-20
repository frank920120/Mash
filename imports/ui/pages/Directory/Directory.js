import React, { Component } from "react";
import ArtistCard from "../../component/ArtistCard/ArtistCard";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";
import { Grid, withStyles } from "@material-ui/core";
import FilterSkills from "../../component/FilterSkills/FilterSkills";
import FilterGenres from "../../component/FilterGenres/FilterGenres";
import SearchArtists from "../../component/SearchArtists/SearchArtists";
import Footer from "../../component/Footer";
import styles from "./styles";

class Directory extends Component {
  render() {
    const allArtists = this.props.allUsers;
    const classes = this.props.classes;
    const currentUserId = Meteor.userId();
    // console.log(currentUserId);
    // const currentUser = allArtists.filter(
    //   user => user._id === currentUserId
    // )[0];
    console.log("allArtists", allArtists);
    // const userPrefs = allArtists.find(_id === currentUser);
    // console.log(userPrefs);
    return (
      <React.Fragment>
        <div className={classes.filters}>
          <SearchArtists />
          <FilterSkills />
          <FilterGenres />
        </div>
        <Grid container className={classes.root} spacing={8}>
          {/* get genres preferences from current user */}
          {/* {const prefs = "";} */}
          {/* get allArtists but current user */}
          {/* {const allOtherArtists = filter(allArtists._id !== currentUser)} */}
          {/* set the initial state for genres with current user preferences */}
          {/* {setState(prefs)} */}
          {/* map filteredArtists */}
          {allArtists
            .filter(user => user._id != currentUserId)
            .map((artist, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={artist._id}
                  className={classes.itemgrid}
                >
                  <ArtistCard artist={artist} />
                </Grid>
              );
            })}
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(
  withTracker(() => {
    Meteor.subscribe("allArtists");
    Meteor.subscribe("getFilter");
    const myFilter = Artists.find({}).fetch();
    Meteor.subscribe(
      "filterUsers",
      myFilter[0] ? myFilter[0].profile.myFilter : null
    );
    return {
      allUsers: Artists.find({}).fetch(),
      filteredusers: Artists.find({}).fetch()
    };
  })(Directory)
);
