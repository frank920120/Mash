import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import { Form, FormSpy } from "react-final-form";
import { FormControl, Grid, Input, InputLabel } from "@material-ui/core";
import { Field } from "react-final-form-html5-validation";
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
    const { error, open } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Login</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Login Form
            </Typography>

            <Form
              onSubmit={values => {
                this.setState.error = null;
                this.state.formToggle
                  ? Meteor.loginWithPassword(
                      values.email,
                      values.password,
                      err => {
                        console.log(err);
                        err ? this.setState({ error: err.reason }) : null;
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
                          }
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
                  {!this.state.formToggle && (
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="fullname">Fullname</InputLabel>

                      <Field
                        name="fullname"
                        required
                        valueMissing="Required: What should we call you?"
                        render={({ input, meta }) => (
                          <div>
                            <Input
                              id="fullname"
                              className={meta.active ? classes.active : ""}
                              type="text"
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                              value={input.value}
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </div>
                        )}
                      />
                    </FormControl>
                  )}
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="email">Email</InputLabel>

                    <Field
                      name="email"
                      required
                      valueMissing="required: Please enter an email"
                      type="email"
                      typeMismatch="Please enter a valid email address"
                      render={({ input, meta }) => (
                        <div>
                          <Input
                            id="email"
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                          />
                          {/* {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )} */}
                        </div>
                      )}
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>

                    <Field
                      name="password"
                      validate={required}
                      minLength={4}
                      tooShort="Please enter a longer password"
                      required
                      valueMissing="required: Please enter a password"
                      render={({ input, meta }) => (
                        <div>
                          <Input
                            id="password"
                            type="password"
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                          />
                          {/* {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )} */}
                        </div>
                      )}
                    >
                      <div>
                        {/* {fieldState => (
                          <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
                        )} */}
                      </div>
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
                        {this.state.formToggle ? "Enter" : "Create Account"}
                      </Button>

                      <Button
                        className={classes.formToggle}
                        type="button"
                        onClick={() => {
                          this.setState({
                            formToggle: !this.state.formToggle
                          });
                        }}
                      >
                        {this.state.formToggle
                          ? "Create an account."
                          : "Login to existing account."}
                      </Button>
                    </Grid>
                  </FormControl>

                  <FormSpy subscription={{ values: true }}>
                    {({ values }) => (
                      <pre>{JSON.stringify(values, undefined, 2)}</pre>
                    )}
                  </FormSpy>
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
