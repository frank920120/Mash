const styles = {
  checkboxButton: {
    margin: 10,
    backgroundColor: "#EFEFEF",
    borderRadius: 40,
    border: "1px solid #D0D0D0",
    overflow: "auto",
    float: "left"
  },
  formItem: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  label: {
    float: "left",
    width: "4.0em"
  },

  CheckboxText: {
    cursor: "pointer",
    width: 150,
    textAlign: "center",
    padding: 20,
    display: "block",
    borderRadius: 40,
    color: "white",
    backgroundColor: "#3ACBA6",
    fontWeight: 800
  },

  input: {
    position: "absolute",
    top: -20,
    "&:checked + span": {
      backgroundColor: "#4f4af6",
      color: "#fff"
    }
  }
};

export default styles;
