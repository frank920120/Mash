import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import { Meteor } from "meteor/meteor";
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
const specialties = [
  "Singing",
  "Keyboard",
  "Piano",
  "Recorder",
  "Classical Guitar",
  "Drums",
  "Electric Guitar",
  "Violin",
  "Percussion",
  "Bass Guitar",
  "Saxophone",
  "Flute",
  "Cello",
  "Trumpet",
  "Harp"
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 500
    }
  }
};

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    const thisUser = this.props.user;
    console.log(thisUser);
    // const action = this.props.action;
    this.state = {
      fullname: thisUser.profile.fullname ? thisUser.profile.fullname : "",
      bio: thisUser.profile.description ? thisUser.profile.description : "",
      specialties: thisUser.profile.specialties
        ? thisUser.profile.specialties
        : [],
      genres: thisUser.profile.genres ? thisUser.profile.genres : []
    };
  }
  handleNameChange = event => {
    this.setState({ fullname: event.target.value });
  };
  handleBioChange = event => {
    this.setState({ bio: event.target.value });
  };
  handleGenresChange = event => {
    this.setState({ genres: event.target.value });
  };
  handleSpecialtiesChange = event => {
    this.setState({ specialties: event.target.value });
  };
  onSubmit = () => {
    const user = {
      _id: this.props.user._id,
      "profile.fullname": this.state.fullname,
      "profile.description": this.state.bio,
      "profile.specialties": this.state.specialties,
      "profile.genres": this.state.genres
    };
    Meteor.call("artists.updateProfile", user);
    // // alert("success");
    this.props.action();
  };
  render() {
    const { classes } = this.props;
    return (
      <Form
        className={classes.formContainer}
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="fullname"
                required={true}
                render={({ input, meta }) => (
                  <TextField
                    id="outlined-name"
                    label="Full Name"
                    className={classes.textField}
                    value={this.state.fullname}
                    onChange={this.handleNameChange}
                    margin="normal"
                    InputLabelProps={{
                      classes: {
                        root: classes.label,
                        focused: classes.focusedLabel,
                        error: classes.erroredLabel
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.underline,
                        error: classes.error
                      }
                    }}
                  />
                )}
              />
            </div>
            <div>
              <Field
                name="bio"
                render={({ input, meta }) => (
                  <TextField
                    id="standard-multiline-flexible"
                    label="Bio"
                    multiline
                    rowsMax="4"
                    rows="4"
                    value={this.state.bio}
                    onChange={this.handleBioChange}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    color="primary"
                    InputLabelProps={{
                      classes: {
                        root: classes.label,
                        focused: classes.focusedLabel,
                        error: classes.erroredLabel
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.underline,
                        error: classes.error
                      }
                    }}
                  />
                )}
              />
            </div>

            <div>
              <Field
                name="specialties"
                render={({ input, meta }) => (
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      className={classes.label}
                      htmlFor="select-multiple-chip"
                    >
                      Specialties
                    </InputLabel>
                    <Select
                      className={classes.label}
                      multiple
                      variant="outlined"
                      value={this.state.specialties}
                      onChange={this.handleSpecialtiesChange}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div className={classes.chips}>
                          {selected.map(value => (
                            <Chip
                              key={value}
                              label={value}
                              color="primary"
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {specialties.map(specialisit => (
                        <MenuItem key={specialisit} value={specialisit}>
                          {specialisit}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </div>
            <div>
              <Field
                name="genres"
                render={({ input, meta }) => (
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      htmlFor="select-multiple-chip"
                      className={classes.label}
                    >
                      Genres
                    </InputLabel>
                    <Select
                      multiple
                      value={this.state.genres}
                      onChange={this.handleGenresChange}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div className={classes.chips}>
                          {selected.map(value => (
                            <Chip
                              key={value}
                              label={value}
                              color="primary"
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {genres.map(genre => (
                        <MenuItem key={genre} value={genre}>
                          {genre}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </div>

            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
                // disabled={pristine || invalid}
              >
                <CloudUploadIcon className={classes.leftIcon} />
                Update
              </Button>
            </div>
            {/* <pre>{JSON.stringify(this.state, 0, 2)}</pre> */}
          </form>
        )}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProfileForm);
