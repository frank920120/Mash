const styles = theme => ({
  messageButton: {
    margin: theme.spacing.unit,
    borderRadius: 50,
    boxShadow: "0 0px 0px 0px",
    color: "black",
    height: 45,
    width: 45,
    minWidth: 45,
    "&:hover": {
      background: "rgba(0, 0, 0, 0.1)"
    },
    padding: 0
  }
});
export default styles;
