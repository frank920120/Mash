import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import styles from "../FilterSkills/styles";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const genres = [
  "ROCK",
  "BLUES",
  "COUNTRY",
  "R&B",
  "POP",
  "JAZZ",
  "FOLK",
  "CLASSICAL",
  "HIP HOP",
  "GRAVY",
  "WORLD",
  "PUNK"
];

class FilterGenres extends React.Component {
  state = {
    name:[]
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.myFilter[0].profile.myFilter.genres
        ? nextProps.myFilter[0].profile.myFilter.genres
        : []
    });
  }

  handleChange = event => {
    Meteor.call("artists.updateProfile", {
      _id: Meteor.userId(),
      "profile.myFilter.genres": event.target.value
    });
    this.setState({ name: event.target.value });
  };

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.label} htmlFor="select-multiple-chip">
            Genres
          </InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {genres.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

FilterGenres.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  withTracker(() => {
    Meteor.subscribe("getFilter");
    return {
      myFilter: Artists.find({}).fetch()
    };
  })(FilterGenres)
);
