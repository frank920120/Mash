const styles = theme => ({
  root: {
    flexGrow: 1
  },
  audioCard: {
    display: "flex",
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderTopWidth: 2,
    borderColor: "#e7dfdd"
  },
  musicDisplay: {
    display: "flex",
    flexDirection: "column",
    width: "82%"
  },
  controls: {
    display: "flex",
    padding: 7,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
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
    width: 70
  },
  timer: {
    fontSize: 13
  }
});

export default styles;
