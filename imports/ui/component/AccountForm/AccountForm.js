import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import { Form, Field, FormSpy } from "react-final-form";
import validate from "./helpers/validation";
import { FormControl, Grid, Input, InputLabel } from "@material-ui/core";
import { Accounts } from "meteor/accounts-base";
import { withRouter } from "react-router-dom";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    zIndex: 99999
  };
}

const required = value => (value ? undefined : "Required");

const newUser = {
  imageurl: "https://i.pravatar.cc/300",
  description: "No bio yet but just wait... it will blow your mind",
  reviews: [
    {
      title: "No reviews yet",
      text: "In the meantime, give me the benefit of the doubt.",
      reviewer: null
    }
  ],
  specialties: [],
  genres: [],
  musicWorks: []
};

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      getCurrentPosition: {
        lat: null,
        lng: null
      },
      error: null,
      open: false
    };
  }
  geolocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          getCurrentPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      },
      err => console.log(err)
    );
  };
  componentDidMount() {
    this.geolocation();
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { formToggle, error, open } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button className={classes.button} onClick={this.handleOpen}>
          LOGIN | SIGN UP
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h3" id="modal-title" className={classes.title}>
              {formToggle ? "Welcome Back!" : "Welcome to the Mash community!"}
            </Typography>

            <Form
              onSubmit={values => {
                this.setState.error = null;
                formToggle
                  ? Meteor.loginWithPassword(
                      values.email,
                      values.password,
                      err => {
                        console.log(err);
                        err ? this.setState({ error: err.reason }) : null;
                      },
                      () => {
                        this.props.history.push("/directory");
                      }
                    )
                  : Accounts.createUser(
                      {
                        email: values.email,
                        password: values.password,
                        profile: {
                          fullname: values.fullname,
                          location: {
                            lat: this.state.getCurrentPosition.lat,
                            lng: this.state.getCurrentPosition.lng
                          },
                          ...newUser
                        }
                      },
                      () => {
                        this.props.history.push("/preference");
                      }
                    );
              }}
              subscription={{
                submitted: true
              }}
              render={({ handleSubmit, pristine, submitting, invalid }) => (
                <form onSubmit={handleSubmit} className={classes.accountForm}>
                  {!formToggle && (
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="fullname" className={classes.label}>
                        Fullname
                      </InputLabel>
                      <Field
                        name="fullname"
                        placeholder="fullname"
                        validate={required}
                        type="text"
                        subscription={{
                          value: true,
                          active: true,
                          error: true,
                          touched: true
                        }}
                      >
                        {({ input, meta, placeholder }) => (
                          <div>
                            <Input
                              id="fullname"
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                              value={input.value}
                              required
                              fullWidth
                              className={classes.input}
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                    </FormControl>
                  )}

                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="email" className={classes.label}>
                      Email
                    </InputLabel>

                    <Field
                      name="email"
                      placeholder="Email"
                      validate={required}
                      subscription={{
                        value: true,
                        active: true,
                        error: true,
                        touched: true
                      }}
                    >
                      {({ input, meta }) => (
                        <div>
                          <Input
                            id="email"
                            type="email"
                            className={meta.active ? "active" : ""}
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                            className={classes.input}
                            fullWidth
                            required
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="password" className={classes.label}>
                      Password
                    </InputLabel>

                    <Field name="password" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <Input
                            id="password"
                            className={classes.input}
                            type="password"
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                            fullWidth
                            required
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormControl>

                  <FormControl className={classes.formControl}>
                    <Grid className={classes.buttons}>
                      <Button
                        type="submit"
                        className={classes.formButton}
                        variant="contained"
                        size="large"
                        color="secondary"
                        disabled={pristine || invalid || submitting}
                      >
                        {formToggle ? "Enter" : "Create Account"}
                      </Button>

                      <Button
                        className={classes.formToggle}
                        type="button"
                        onClick={() => {
                          this.setState({
                            formToggle: !formToggle
                          });
                        }}
                      >
                        {formToggle
                          ? "Create an account."
                          : "Login to existing account."}
                      </Button>
                    </Grid>
                  </FormControl>

                  <Typography>{error}</Typography>
                </form>
              )}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

AccountForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(AccountForm));
