import React, { Component } from "react";
import {
  withStyles,
  Paper,
  Typography,
  Grid,
  Card,
  Button,
  Avatar,
  Dialog,
  DialogTitle,
  Chip
} from "@material-ui/core";

import styles from "./styles";
import PropTypes from "prop-types";
import MusicPlayer from "../../component/MusicPlayer";
import Review from "../../component/Review";
import ProfileForm from "../../component/ProfileForm";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";
import { compose } from "recompose";
import { Meteor } from "meteor/meteor";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);

    this.state = { open: false };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, artist, currentUser } = this.props;
    const clientId = "5IHUoTCYwQmJR7RbijX9OigWp2zCoiyC";
    console.log("artist", artist);
    if (artist.length < 1 || artist == undefined || currentUser === undefined)
      return <h1>Loading...</h1>;
    else
      return (
        <div className={classes.profile}>
          <Card className={classes.card}>
            <div className={classes.cover}>
              <Grid container spacing={24}>
                <Grid item xs={5} className={classes.picButton}>
                  <Avatar
                    alt={artist[0].profile.fullname}
                    src={artist[0].profile.imageurl}
                    className={classes.avatar}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={() => {
                      const message = {
                        type: 1,
                        toId: artist[0]._id,
                        text:
                          "I went through your profile. Can I get your email for future collaboration?",
                        fromId: currentUser._id,
                        from: currentUser.profile.fullname
                      };
                      Meteor.call("artists.addMessage", message);
                      window.alert("Sent the message!");
                    }}
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
                  <div className={classes.chips}>
                    {artist[0].profile.specialties.map((specialty, index) => (
                      <Chip
                        key={index}
                        label={specialty}
                        className={classes.specialtyChip}
                      />
                    ))}
                  </div>

                  <Typography component="p" className={classes.whiteText}>
                    Genres:
                  </Typography>
                  <div className={classes.chips}>
                    {artist[0].profile.genres.map((genre, index) => (
                      <Chip
                        key={index}
                        label={genre}
                        className={classes.genreChip}
                      />
                    ))}
                  </div>
                  {Meteor.userId() === artist[0]._id && (
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={this.handleClickOpen}
                    >
                      Edit
                    </Button>
                  )}
                  <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                    maxWidth="lg"
                  >
                    <Paper className={classes.paper}>
                      <DialogTitle id="form-dialog-title">
                        Edit your profile
                      </DialogTitle>
                      <ProfileForm user={artist[0]} action={this.handleClose} />
                    </Paper>
                  </Dialog>
                </Grid>

                <Grid item xs={12} className={classes.description}>
                  <Typography component="p" className={classes.whiteText}>
                    {artist[0].profile.description}
                  </Typography>
                </Grid>

                <Grid item xs={7}>
                  <Paper className={classes.music}>
                    <Typography component="header" variant="h6">
                      Past music works:
                    </Typography>

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
                  <Typography
                    component="header"
                    variant="h6"
                    className={classes.whiteText}
                  >
                    Reviews:
                  </Typography>
                  {artist[0].profile.reviews.map((review, index) => (
                    <Review
                      key={index}
                      text={review.text}
                      reviewer={review.reviewer}
                    />
                  ))}
                </Grid>
              </Grid>
            </div>
          </Card>
        </div>
      );
  }
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
    Meteor.subscribe("getProfileById", match.params.userId);
    const currentUser = Meteor.user();

    return {
      artist: Artists.find({ _id: match.params.userId }).fetch(),
      currentUser: currentUser
    };
  })(Profile)
);
