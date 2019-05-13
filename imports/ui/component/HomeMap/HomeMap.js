import React, { Component } from "react";
import styles, { MapsStyles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Typography from "@material-ui/core/Typography";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
class HomeMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLatLng: {
        lat: null,
        lng: null
      },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  geolocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          currentLatLng: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      },
      err => console.log(err)
    );
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  componentDidMount() {
    this.geolocation();
  }
  render() {
    const { classes } = this.props;
    if (!this.props.google) {
      return <div>Loading...</div>;
    }
    return (
      <section className={classes.mapContainer}>
        <Fade top duration={2000}>
          <Typography
            className={classes.mapHeader}
            component="h1"
            variant="display3"
            gutterBottom
          >
            Artists ready to collaborate with you.....
          </Typography>
        </Fade>
        <Bounce left duration={2000}>
          <div className={classes.map}>
            <Map
              style={{
                width: "85%",
                height: "400px",
                margin: "auto"
              }}
              styles={MapsStyles}
              onClick={this.onMapClicked}
              google={this.props.google}
              center={{
                lat: this.state.currentLatLng.lat,
                lng: this.state.currentLatLng.lng
              }}
              zoom={10}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={"Your are here"}
                position={{
                  lat: this.state.currentLatLng.lat,
                  lng: this.state.currentLatLng.lng
                }}
                // icon={{
                //   url: "/path/to/custom_icon.png",
                //   anchor: new google.maps.Point(32, 32),
                //   scaledSize: new google.maps.Size(64, 64)
                // }}
              />

              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                className="popup"
              >
                <div className="popup">
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </Bounce>
      </section>
    );
  }
}

export default withStyles(styles)(
  GoogleApiWrapper({
    apiKey: "AIzaSyDndK-4FUhnuwdo6bnVMKLSMHlgS8qjZIU"
  })(HomeMap)
);
