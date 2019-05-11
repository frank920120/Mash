import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const MediaCard = ({ classes,title, author, imageurl, musicurl }) => (
    <Card className={classes.card}>
    <div className={classes.details}>
    <img className={classes.image} src={imageurl}/>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {author}
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <IconButton aria-label="Previous">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton aria-label="Play/pause">
          <PlayArrowIcon className={classes.playIcon} />
        </IconButton>
        <IconButton aria-label="Next">
          <SkipNextIcon />
        </IconButton>
      </div>
    </div>
  </Card>
  );
  
  export default withStyles(styles)(MediaCard);
  