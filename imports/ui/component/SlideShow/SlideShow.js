import React, { PureComponent, Component } from "react";
import MediaCard from "../../component/MediaCard";
import "./styles.css";
import ItemsCarousel from "react-items-carousel";
import ChevronLeft from "rmdi/lib/ChevronLeft";
import ChevronRight from "rmdi/lib/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
export default class SlideShow extends Component {
  componentWillMount() {
    this.setState({
      activeItemIndex: 0
    });
  }
  render() {
    const { media } = this.props;
    const { activeItemIndex } = this.state;
    return (
      <div className="SlideShowWrapper">
        <h1 className="CollaborationHeading">Collablrations</h1>
        <ItemsCarousel
          placeholderItem={<div style={{ height: 200, background: "#EEE" }} />}
          enablePlaceholder={true}
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
            </IconButton >
          }
          leftChevron={
            <IconButton>
              <ChevronLeft size={32} color="white" />
            </IconButton>
          }
        >
          {media.map(music => (
            <MediaCard
              className="eachCard"
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
