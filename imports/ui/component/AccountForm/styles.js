const styles = theme => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
    zIndex: 99999
  },
  root: {
    zIndex: 99999
  }
});

export default styles;
