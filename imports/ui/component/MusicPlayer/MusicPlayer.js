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
    <div>
      <Typography variant="display3" gutterBottom>
        {track.title}
      </Typography>
      <h3>{track.user.username}</h3>

      <IconButton aria-label="Play/pause" onClick={() => play()}>
        {playing ? (
          <PauseIcon className={classes.playPauseIcon} />
        ) : (
          <PlayArrowIcon className={classes.playPauseIcon} />
        )}
      </IconButton>

      <PlayButton className="custom-player-btn" onPlayClick={() => play()} />

      <button onClick={() => play()}>{playing ? "Pause" : "Play"}</button>
      {/* <LinearProgress
        variant="determinate"
        value={(currentTime / duration) * 100 || 0}
      /> */}

      <Progress
        className="mt1 mb1 rounded"
        innerClassName="rounded-left"
        value={(currentTime / duration) * 100 || 0}
        {...props}
      />

      <Timer
        className="custom-player-timer"
        duration={track ? track.duration / 1000 : 0}
        currentTime={currentTime}
        {...props}
      />
      <CardMedia
        className={classes.cover}
        image="https://loremflickr.com/320/240"
        title="Live from space album cover"
      />
    </div>
  );

  // const { track, currentTime } = props;

  // return (
  //   <div className="custom-player">
  //     <PlayButton
  //       className="custom-player-btn"
  //       onPlayClick={() => {
  //         console.log("play button clicked!");
  //       }}
  //       {...props}
  //     />
  //     <h2 className="custom-player-title">
  //       {track ? track.title : "Loading..."}
  //     </h2>

  //     <Timer
  //       className="custom-player-timer"
  //       duration={track ? track.duration / 1000 : 0}
  //       currentTime={currentTime}
  //       {...props}
  //     />
  //   </div>
  // );
});

MusicPlayer.propTypes = {};

export default withStyles(styles, { withTheme: true })(MusicPlayer);
