// import React from "react";
// import PropTypes from "prop-types";

import React from "react";
import ReactDOM from "react-dom";
import {
  PlayButton,
  Timer,
  Progress,
  Icons,
  VolumeControl
} from "react-soundplayer/components";
import { withSoundCloudAudio } from "react-soundplayer/addons";
import PropTypes from "prop-types";
import styles from "./styles";

import { Meteor } from "meteor/meteor";
import { Artists } from "../../../api/artists.js";
import { withTracker } from "meteor/react-meteor-data";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import LinearProgress from "@material-ui/core/LinearProgress";

const MusicPlayer = withSoundCloudAudio(props => {
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
    <div className={classes.audioCard}>
      <CardMedia
        className={classes.cover}
        image={track.artwork_url}
        title="Live from space album cover"
      />

      <div className={classes.musicDisplay}>
        <div className={classes.controls}>
          <IconButton aria-label="Play/pause" onClick={() => play()}>
            {playing ? (
              <PauseIcon className={classes.playPauseIcon} />
            ) : (
              <PlayArrowIcon className={classes.playPauseIcon} />
            )}
          </IconButton>
          <div className={classes.trackInfo}>
            <Typography variant="display5" className={classes.trackTitle}>
              {track.title}
            </Typography>
            <Typography variant="display7" className={classes.trackArtist}>
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
        {/* <Progress
          className={classes.progressBar}
          value={(currentTime / duration) * 100 || 0}
          {...props}
        /> */}
      </div>
    </div>
  );
});

MusicPlayer.propTypes = {};

export default withStyles(styles, { withTheme: true })(
  withTracker(() => {
    return {
      artists: Artists.find({}).fetch()
    };
  })(MusicPlayer)
);
