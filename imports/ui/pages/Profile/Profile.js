import React from "react";
import {
  withStyles,
  Paper,
  Typography,
  Grid,
  Divider,
  Card,
  CardActionArea,
  Button,
  CardMedia,
  CardActions,
  Avatar,
  Chip
} from "@material-ui/core";
import styles from "./styles";
import CardContent from "@material-ui/core/CardContent";
// import Gravatar from "react-gravatar";
import PropTypes from "prop-types";
import MusicPlayer from "../../component/MusicPlayer";

function Profile(props, artist) {
  const { classes } = props;
  const clientId = "5IHUoTCYwQmJR7RbijX9OigWp2zCoiyC";
  const resolveUrl = "https://soundcloud.com/lyricalvalue/clearly";

  //placeholder artist data
  const specialties = ["vocals", "guitar", "xylophone"];
  const genres = ["rock", "folk", "R&B"];

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={24}>
          <Grid item xs={6} className={classes.picButton}>
            <Avatar
              alt={artist.fullname}
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
          <Grid item xs={6} className={classes.artistInfo}>
            <Typography gutterBottom variant="h4" component="h1">
              Jeffrey Star
            </Typography>

            <Typography component="p">Specialties:</Typography>
            {specialties.map(specialty => (
              <Chip
                key={specialty.index}
                label={specialty}
                className={classes.specialtyChip}
              />
            ))}

            <Typography component="p">Genres:</Typography>
            {genres.map(genre => (
              <Chip
                key={genre.index}
                label={genre}
                className={classes.genreChip}
              />
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography component="p">
              Lorem ipsum bio here Lorem ipsum bio here Lorem ipsum bio here
              Lorem ipsum bio here Lorem ipsum bio here Lorem ipsum bio here
            </Typography>
          </Grid>

          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <Typography component="header">Past music works:</Typography>
              <MusicPlayer
                clientId={clientId}
                resolveUrl={resolveUrl}
                onReady={() => console.log("track is loaded!")}
              />
              <MusicPlayer
                clientId={clientId}
                resolveUrl="https://soundcloud.com/vira-talisa-dharmawan/ill-be-home-for-christmas"
                onReady={() => console.log("track is loaded!")}
              />
            </Paper>
          </Grid>

          <Grid item xs={5}>
            <Paper className={classes.paper}>
              {" "}
              <Typography component="header">Reviews:</Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
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

export default withStyles(styles)(Profile);
