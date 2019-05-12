const styles = theme => ({
  root: {
    flexGrow: 1
  },

  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center"
    // paddingLeft: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit
  },
  playPauseIcon: {
    height: 38,
    width: 38
  }
});

export default styles;
