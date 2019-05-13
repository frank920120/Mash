import React from "react";
import Coverflow from "react-coverflow";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import MediaCard from "../../component/MediaCard";
const SlideShow = ({ classes, media }) => (
  <Coverflow
    className={classes.root}
    displayQuantityOfSide={2}
    navigation
    infiniteScroll
    enableHeading={false}
    media={{ width: "auto", height: "500px" }}
  >
    {media.map(music => (
      <MediaCard
        clientId='nJEgYbVDhjykb4wrNgX7LS7PM82wc0KI'
        resolveUrl={music}
      />
    ))}
  </Coverflow>
);

export default withStyles(styles)(SlideShow);
