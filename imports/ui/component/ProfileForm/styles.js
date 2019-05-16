const styles = theme => ({
  formContainer: {
    margin: 40
  },
  label: {
    color: "white",
    "&$focusedLabel": {
      color: "cyan"
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
      borderBottom: `2px solid cyan`
    }
  },
  error: {},
  floatingLabelFocusStyle: {
    color: "red"
  },
  test: {
    backgroundColor: "#9b42f4",
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
    color: "prime"
  },
  chip: {
    margin: theme.spacing.unit / 4
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
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  whiteLabel: {
    color: "white"
  }
});
export default styles;
