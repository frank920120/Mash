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

const MusicPlayer = withSoundCloudAudio(props => {
  let { track, currentTime } = props;

  return (
    <div className="custom-player">
      <PlayButton
        className="custom-player-btn"
        onPlayClick={() => {
          console.log("play button clicked!");
        }}
        {...props}
      />
      <h2 className="custom-player-title">
        {track ? track.title : "Loading..."}
      </h2>

      <Timer
        className="custom-player-timer"
        duration={track ? track.duration / 1000 : 0}
        currentTime={currentTime}
        {...props}
      />
    </div>
  );
});

MusicPlayer.propTypes = {};

export default MusicPlayer;
