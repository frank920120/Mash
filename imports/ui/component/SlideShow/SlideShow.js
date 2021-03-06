import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";
import MediaCard from "../../component/MediaCard";
import ItemsCarousel from "react-items-carousel";
import ChevronLeft from "rmdi/lib/ChevronLeft";
import ChevronRight from "rmdi/lib/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import Fade from "react-reveal/Fade";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
class SlideShow extends Component {
  componentWillMount() {
    this.setState({
      activeItemIndex: 0
    });
  }
  render() {
    const { media, classes } = this.props;
    const { activeItemIndex } = this.state;
    return (
      <div className={classes.SlideShowWrapper}>
        <Fade top duration={2000}>
          <h1 className={classes.CollaborationHeading}>
            COLLABORATIONS
            <span className={classes.underline} />
          </h1>
        </Fade>
        <div className={classes.cover} />
        <ItemsCarousel
          className={classes.SlideShowContainer}
          placeholderItem={<div style={{ height: 200, background: "#EEE" }} />}
          numberOfPlaceholderItems={3}
          numberOfCars={3}
          gutter={12}
          slidesToScroll={2}
          chevronWidth={60}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={value =>
            this.setState({ activeItemIndex: value })
          }
          rightChevron={
            <IconButton>
              <ChevronRight size={32} color="white" />
            </IconButton>
          }
          leftChevron={
            <IconButton>
              <ChevronLeft size={32} color="white" />
            </IconButton>
          }
        >
          {media.map(music => (
            <MediaCard
              className={classes.eachCard}
              key={music._id}
              clientId="nJEgYbVDhjykb4wrNgX7LS7PM82wc0KI"
              resolveUrl={music.musicurl}
            />
          ))}
        </ItemsCarousel>
      </div>
    );
  }
}

SlideShow.propTypes = {
  classes: PropTypes.object.isRequired,
  media: PropTypes.array.isRequired
};
export default withStyles(styles)(SlideShow);
