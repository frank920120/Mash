import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import styles from "./styles";
import { Link } from "react-router-dom";

const ArtistCard = ({ classes, artist }) => {
  const workSample = artist.profile.musicWorks[0];
  const clientId = "5IHUoTCYwQmJR7RbijX9OigWp2zCoiyC";

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={artist.profile.imageurl}
        title="Profile Picture"
      />
      <CardContent>
        <Typography gutterBottom className={classes.name} component="h2">
          {artist.profile.fullname}
        </Typography>
        <Typography className={classes.info} component="p">
          {artist.profile.specialties.join(" - ")}
        </Typography>
        <hr />
        <Typography className={classes.info} component="p">
          {artist.profile.genres.join(" - ")}
        </Typography>
      </CardContent>
      <MusicPlayer
        className={classes.player}
        clientId={clientId}
        resolveUrl={workSample && workSample}
      />
      <CardActions>
        <Link to={`/profile/${artist._id}`} className={classes.link}>
          <Button className={classes.learn}>Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

ArtistCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArtistCard);
