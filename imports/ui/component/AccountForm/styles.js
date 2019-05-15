const styles = theme => ({
  paper: {
    position: "absolute",
    width: "90%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4717F6",
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
    zIndex: 99999,
    borderRadius: 4
  },
  root: {
    zIndex: 99999
  },
  formControl: {
    padding: 10
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around"
  }
});

export default styles;
