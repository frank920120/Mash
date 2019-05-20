const styles = theme => ({
  formContainer: {
    margin: 40
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    "&$focusedLabel": {
      color: "white"
    },
    "&$erroredLabel": {
      color: "orange"
    }
  },
  focusedLabel: {},
  erroredLabel: {},
  underline: {
    color: "white",
    "&$error:after": {
      borderBottomColor: "orange"
    },
    "&:after": {
      borderBottomColor: `2px solid cyan`
    }
  },
  error: {},
  floatingLabelFocusStyle: {
    color: "red"
  },
  test: {
    background: "linear-gradient(360deg, #7239c5, #4717f6)",
    color: "white"
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "100%",
    borderBottom: "1px solid white"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    color: "#prime"
  },
  chip: {
    margin: theme.spacing.unit / 4,
    backgroundColor: "#3ACBA6",
    fontWeight: "bold"
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    borderBottom: "1px solid white"
  },
  buttons: {
    width: "100%",
    textAlign: "center"
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#F50057"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  whiteLabel: {
    color: "white"
  }
});
export default styles;
