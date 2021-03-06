import { withTheme } from "@material-ui/core";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 10
  },
  formControl: {
    background: "#3f51b5",
    padding: 10,
    width: 250,
    minWidth: 120,
    maxWidth: 300,
    borderRadius: 10
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: "0.5rem",
    background: "#3ACBA6",
    color: "white",
    fontWeight: 800
  },
  noLabel: {
    marginTop: "4.5rem"
  },
  label: {
    color: "white",
    padding: 10
  }
};

export default styles;
