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

function Profile({ classes, artist }) {
  // console.log(match.params.userId);

  // console.log(artist);
  const clientId = "5IHUoTCYwQmJR7RbijX9OigWp2zCoiyC";

  // console.log(profile);

  if (artist.length < 1 || artist == undefined) return <h1>Loading...</h1>;
  else
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <div className={classes.cover}>
            <Grid container spacing={24}>
              <Grid item xs={5} className={classes.picButton}>
                <Avatar
                  alt={artist[0].profile.fullname}
                  //   src={artist.profileurl}
                  src={artist[0].profile.imageurl}
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
                  {artist[0].profile.fullname}
                </Typography>

                <Typography component="p" className={classes.whiteText}>
                  Specialties:
                </Typography>
                {artist[0].profile.specialties.map((specialty, index) => (
                  <Chip
                    key={index}
                    label={specialty}
                    className={classes.specialtyChip}
                  />
                ))}

                <Typography component="p" className={classes.whiteText}>
                  Genres:
                </Typography>
                {artist[0].profile.genres.map((genre, index) => (
                  <Chip
                    key={index}
                    label={genre}
                    className={classes.genreChip}
                  />
                ))}
              </Grid>

              <Grid item xs={12}>
                <Typography component="p" className={classes.whiteText}>
                  {artist[0].profile.description}
                </Typography>
              </Grid>

              <Grid item xs={7}>
                <Paper className={classes.paper}>
                  <Typography component="header">Past music works:</Typography>

                  {artist[0].profile.musicWorks.map((song, index) => (
                    <MusicPlayer
                      key={index}
                      clientId={clientId}
                      resolveUrl={song}
                      onReady={() => console.log("track is loaded!")}
                    />
                  ))}
                </Paper>
              </Grid>

              <Grid item xs={5}>
                <Typography component="header" className={classes.whiteText}>
                  Reviews:
                </Typography>
                {artist[0].profile.reviews.map((review, index) => (
                  <Review
                    key={index}
                    text={review.text}
                    reviewer={review.reviewer}
                  />
                ))}
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
      artist: Artists.find({ _id: profileId }).fetch()
    };
  })(Profile)
);
