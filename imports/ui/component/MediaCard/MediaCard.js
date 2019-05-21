import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withSoundCloudAudio } from "react-soundplayer/addons";
import {
  PlayButton,
  Timer,
  Progress,
  Icons,
  VolumeControl
} from "react-soundplayer/components";

const MediaCard = withSoundCloudAudio(props => {
  const {
    classes,
    soundCloudAudio,
    playing,
    track,
    currentTime,
    duration
  } = props;
  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };
  if (!track) {
    return <div>Loading...</div>;
  }
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <img className={classes.image} src={track.artwork_url} />
        <CardContent className={classes.content}>
          <Typography
            component="h5"
            variant="title"
            className={classes.SongName}
          >
            {track.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {track.user.username}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Play/pause" onClick={() => play()}>
            {playing ? (
              <PauseIcon className={classes.playPauseIcon} />
            ) : (
              <PlayArrowIcon className={classes.playPauseIcon} />
            )}
          </IconButton>
          <Timer
            className="custom-player-timer"
            duration={track ? track.duration / 1000 : 0}
            currentTime={currentTime}
            {...props}
          />
        </div>
      </div>
    </Card>
  );
});

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
