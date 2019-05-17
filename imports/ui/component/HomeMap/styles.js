const styles = {
  mapContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: "url('/images/productCurvyLines.png')"
  },
  map: {
    position: "relative",
    width: "100%",
    height: 600
  },
  underline: {
    width: 55,
    height: 4,
    margin: "8px auto 0",
    display: "block",
    backgroundColor: "#4f4af6"
  },
  info: {
    backgroundColor: "red"
  },
  popupContainer: {
    width: "100%"
  },
  mapHeader: {
    fontWeight: 800,
    fontSize: 40,
    color: "black",
    paddingTop: 60
  },
  popupTop: {
    display: "flex",
    justifyContent: "center"
  },
  userImage: {
    borderRadius: "50%"
  },
  username: {
    margin: 0,
    padding: 5
  },
  icon: {
    width: 30,
    height: 30,
    objectFit: "contain"
  },
  listContainer: {
    display: "flex",
    alignItems: "center",
    padding: 0
  },
  iconlist: {
    listStyle: "none",
    padding: 10
  }
};

export const MapsStyles = [
  { elementType: "geometry", stylers: [{ color: "#5E239D" }] },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }]
  }
];

export default styles;
