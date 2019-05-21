import React, { Component } from "react";
import styles, { MapsStyles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Typography from "@material-ui/core/Typography";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Gravatar from "react-gravatar";
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
        if (position) {
          this.setState({
            currentLatLng: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        }
      },
      err =>
        this.setState({
          currentLatLng: {
            lat: 49.225476,
            lng: -123.160795
          }
        })
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
    const { classes, users } = this.props;

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
            COLLABORATIONS IN YOUR AREA
            <span className={classes.underline} />
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
              zoom={11}
            >
              {users.map(user => (
                <Marker
                  key={user._id}
                  onClick={this.onMarkerClick}
                  name={user.profile.fullname}
                  specialties={user.profile.specialties}
                  id={user._id}
                  position={{
                    lat: user.profile.location.lat,
                    lng: user.profile.location.lng
                  }}
                />
              ))}

              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                className={classes.info}
              >
                <div className={classes.popupContainer}>
                  <div className={classes.popupTop}>
                    <Gravatar
                      className={classes.userImage}
                      email={this.state.selectedPlace.id + "@hotmail.com"}
                      size={30}
                    />
                    <h1 className={classes.username}>
                      {this.state.selectedPlace.name}
                    </h1>
                  </div>
                  <div className={classes.popupBottom}>
                    <h3>Specialties:</h3>
                    <ul className={classes.listContainer}>
                      {this.state.selectedPlace.specialties
                        ? this.state.selectedPlace.specialties.map(s => {
                            let specialties = s
                              .replace(/\s+/g, "")
                              .toLowerCase();
                            return (
                              <li className={classes.iconlist}>
                                <img
                                  className={classes.icon}
                                  src={`/specialties/${specialties}.svg`}
                                  alt="specialties"
                                />
                              </li>
                            );
                          })
                        : "loading.."}
                    </ul>
                  </div>
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
