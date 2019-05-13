import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
class PreferenceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: [
        { id: 1, value: "ROCK", isChecked: false },
        { id: 2, value: "BLUES", isChecked: false },
        { id: 3, value: "COUNTRY", isChecked: false },
        { id: 4, value: "R&B", isChecked: false },
        { id: 5, value: "POP", isChecked: false },
        { id: 6, value: "JAZE", isChecked: false },
        { id: 7, value: "FOLK", isChecked: false },
        { id: 8, value: "CLASSICAL", isChecked: false },
        { id: 9, value: "HIP HOP", isChecked: false },
        { id: 10, value: "GRAVY", isChecked: false }
      ]
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
  };
  handleChange = e => {
    const genre = this.state.genre.map(g => {
      if (g.value === e.target.name) {
        g.isChecked = !g.isChecked;
      }
    });

    this.setState({ genre }, () => {
      console.log(this.state.genre);
    });
  };

  render() {
    const { genre } = this.state;
    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        {genre.map(g => (
          <label key={g.id}>
            {g.value}
            <input
              name={g.value}
              type="checkbox"
              checked={g.isChecked}
              onChange={this.handleChange}
            />
          </label>
        ))}

        <button type="Submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
export default withStyles(styles)(PreferenceContainer);
