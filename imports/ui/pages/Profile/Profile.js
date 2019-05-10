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
  Avatar
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

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={24}>
          <Grid item xs={6} className={classes.picButton}>
            <Avatar
              alt={artist.fullname}
              src={artist.profileurl}
              className={classes.avatar}
            />
            <Button size="small" color="primary">
              Connect
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="h2">
              Jeffrey Star
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography component="p">
              Lorem ipsum bio here Lorem ipsum bio here Lorem ipsum bio here
              Lorem ipsum bio here Lorem ipsum bio here Lorem ipsum bio here
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <MusicPlayer
                clientId={clientId}
                resolveUrl={resolveUrl}
                onReady={() => console.log("track is loaded!")}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}> Reviews </Paper>
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
