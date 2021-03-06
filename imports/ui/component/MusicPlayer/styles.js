const styles = theme => ({
  root: {
    flexGrow: 1
  },
  audioCard: {
    display: "flex",
    padding: 5,
    width: "100%",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderTopWidth: 2,
    borderColor: "#e7dfdd",
    backgroundColor: "#e7dfdd",
    height: 92,
    marginTop: 10
  },
  button: {
    backgroundColor: "white",
    marginRight: 7
  },
  musicDisplay: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  trackTitle: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "auto"
  },
  controls: {
    display: "flex",
    padding: 7,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignContent: "center",
    flexGrow: 0
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: "1 0 auto"
  },
  playPauseIcon: {
    height: 30,
    width: 30,
    color: "#a239ca"
  },
  cover: {
    height: 70,
    width: 70,
    padding: 10,
    flexShrink: 0
  },
  timer: {
    fontSize: 13
  },
  audioPlaceholder: {
    alignSelf: "center"
  },
  trackInfo: {
    flexShrink: 1
  }
});

export default styles;
