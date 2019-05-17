import React from "react";
import {
  withStyles,
  Paper,
  Typography,
  Grid,
  Card,
  Button,
  Avatar,
  Chip
} from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import MusicPlayer from "../../component/MusicPlayer";
import Review from "../../component/Review";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";
import { compose } from "recompose";
import { Meteor } from "meteor/meteor";

function Profile({ classes, artist, profile, match }) {
  // console.log(match.params.userId);

  // console.log(artist);
  const clientId = "5IHUoTCYwQmJR7RbijX9OigWp2zCoiyC";
  const resolveUrl = "https://soundcloud.com/lyricalvalue/clearly";

  //placeholder artist data
  const specialties = ["vocals", "guitar", "xylophone"];
  const genres = ["rock", "folk", "R&B"];

  console.log(profile);

  if (profile.length < 1 || profile == undefined) return <h1>Loading...</h1>;
  else
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <div className={classes.cover}>
            <Grid container spacing={24}>
              <Grid item xs={5} className={classes.picButton}>
                <Avatar
                  alt={profile[0].fullname}
                  //   src={artist.profileurl}
                  src="https://loremflickr.com/320/240"
                  className={classes.avatar}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Connect
                </Button>
              </Grid>
              <Grid item xs={7} className={classes.artistInfo}>
                <Typography
                  className={classes.whiteText}
                  gutterBottom
                  variant="h4"
                  component="h1"
                >
                  {profile[0].fullname}
                </Typography>

                <Typography component="p" className={classes.whiteText}>
                  Specialties:
                </Typography>
                {profile[0].specialties.map((specialty, index) => (
                  <Chip
                    key={index}
                    label={specialty}
                    className={classes.specialtyChip}
                  />
                ))}

                <Typography component="p" className={classes.whiteText}>
                  Genres:
                </Typography>
                {profile[0].genre.map((genre, index) => (
                  <Chip
                    key={index}
                    label={genre}
                    className={classes.genreChip}
                  />
                ))}
              </Grid>

              <Grid item xs={12}>
                <Typography component="p" className={classes.whiteText}>
                  {profile[0].description}
                </Typography>
              </Grid>

              <Grid item xs={7}>
                <Paper className={classes.paper}>
                  <Typography component="header">Past music works:</Typography>

                  {profile[0].musicWorks.map((song, index) => (
                    <MusicPlayer
                      key={index}
                      clientId={song.clientID}
                      resolveUrl={song.resolveURL}
                      onReady={() => console.log("track is loaded!")}
                    />
                  ))}
                </Paper>
              </Grid>

              <Grid item xs={5}>
                <Typography component="header" className={classes.whiteText}>
                  Reviews:
                </Typography>
                <Review />
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

Profile.defaultProps = {
  artist: {
    fullname: "Alice",
    email: "alice@red.com",
    description: "Hi I am a singer.",
    profileurl: "https://randomuser.me/api/?gender=female",
    location: {
      lat: null,
      lng: null
    },
    reviews: [
      {
        text: "Good Job!",
        reviewer: "Bob"
      }
    ],
    //ie: guitar, drums
    specialties: ["singing"],
    //ie: rock, classical
    genre: ["rock"],
    musicWorks: []
  }
};

export default withStyles(styles)(
  withTracker(({ match }) => {
    Meteor.subscribe("allArtists");
    const profileId = match.params.userId;
    console.log(profileId);

    return {
      profile: Artists.find({ _id: profileId }).fetch()
    };
  })(Profile)
);
