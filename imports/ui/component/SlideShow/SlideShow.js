import React from "react";
import Coverflow from "react-coverflow";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import MediaCard from "../../component/MediaCard";
// const media = [
//   {
//     title: "aaa",
//     author: "aaa",
//     imageurl: "https://loremflickr.com/320/240",
//     musicurl: ""
//   },
//   {
//     title: "bbb",
//     author: "bbbb",
//     imageurl: "https://loremflickr.com/320/240",
//     musicurl: ""
//   },
//   {
//     title: "ccc",
//     author: "ccccc",
//     imageurl: "https://loremflickr.com/320/240",
//     musicurl: ""
//   },
//   {
//     title: "ddd",
//     author: "dddddd",
//     imageurl: "https://loremflickr.com/320/240",
//     musicurl: ""
//   }
// ];
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
        title={music.title}
        author={music.author}
        imageurl={music.imageurl}
        musicurl={music.musicurl}
        clientId='nJEgYbVDhjykb4wrNgX7LS7PM82wc0KI'
        resolveUrl={music.musicurl}
      />
    ))}
  </Coverflow>
);

export default withStyles(styles)(SlideShow);
