import React from "react";
import { Timer } from "react-soundplayer/components";
import { withSoundCloudAudio } from "react-soundplayer/addons";
import PropTypes from "prop-types";
import styles from "./styles";

import { Artists } from "../../../api/artists.js";
import { withTracker } from "meteor/react-meteor-data";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import LinearProgress from "@material-ui/core/LinearProgress";

const MusicPlayer = withSoundCloudAudio(props => {
  const {
    classes,
    soundCloudAudio,
    playing,
    track,
    currentTime,
    duration,
    location
  } = props;

  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  if (!track) {
    return (
      <div className={classes.audioCard}>
        <h6 className={classes.audioPlaceholder}>No track to display...</h6>
      </div>
    );
  }

  return (
    <div className={classes.audioCard}>
      {location.pathname !== "/directory" ? (
        <CardMedia
          className={classes.cover}
          image={track.artwork_url}
          title="Live from space album cover"
        />
      ) : null}

      <div className={classes.musicDisplay}>
        <div className={classes.controls}>
          <IconButton
            aria-label="Play/pause"
            className={classes.button}
            onClick={() => play()}
          >
            {playing ? (
              <PauseIcon className={classes.playPauseIcon} />
            ) : (
              <PlayArrowIcon className={classes.playPauseIcon} />
            )}
          </IconButton>
          <div className={classes.trackInfo}>
            <Typography variant="overline" className={classes.trackTitle}>
              {track.title}
            </Typography>
            <Typography variant="caption" className={classes.trackArtist}>
              {track.user.username}
            </Typography>
          </div>

          <Timer
            className={classes.timer}
            duration={track ? track.duration / 1000 : 0}
            currentTime={currentTime}
            {...props}
          />
        </div>

        <LinearProgress
          variant="determinate"
          value={(currentTime / duration) * 100 || 0}
        />
      </div>
    </div>
  );
});

MusicPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
  artists: PropTypes.array.isRequired,
  playing: PropTypes.bool,
  track: PropTypes.object,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  location: PropTypes.object.isRequired
};

export default withRouter(
  withStyles(styles, { withTheme: true })(
    withTracker(() => {
      return {
        artists: Artists.find({}).fetch()
      };
    })(MusicPlayer)
  )
);
