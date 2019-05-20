import { withTheme } from "@material-ui/core";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: "90%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(360deg, #7239c5, #4717f6)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 5,
    outline: "none",
    zIndex: 99999,
    borderRadius: 4
  },
  root: {
    zIndex: 99999
  },
  label: {
    color: "white",
    fontWeight: "bold"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 50
  },
  formControl: {
    padding: 20
  },
  button: {
    backgroundColor: "#F50057",
    color: "white",
    "&:hover": {
      backgroundColor: "#4f4af6"
    }
  },
  formToggle: {
    color: "white",
    margin: 20
  },
  active: {
    backgroundColor: "white",
    opacity: "0.5"
  },
  input: {
    color: "white"
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  accountForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
