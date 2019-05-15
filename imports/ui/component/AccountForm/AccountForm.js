import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import { Form, Field, FormSpy } from "react-final-form";
import { FormControl, Grid, Input, InputLabel } from "@material-ui/core";

import { Accounts } from "meteor/accounts-base";

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

      error: null,
      open: false
    };
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
                // const user = { variables: { user: values } };
                this.state.formToggle
                  ? Meteor.loginWithPassword(values.email, values.password)
                  : Accounts.createUser({
                      profile: { fullname: values.fullname },
                      email: values.email,
                      password: values.password
                    });
              }}
              subscription={{
                submitted: true
              }}
              // validate={validate.bind(this)}

              render={({ handleSubmit, pristine, invalid, values }) => (
                <form onSubmit={handleSubmit} className={classes.accountForm}>
                  {!this.state.formToggle && (
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="fullname">Fullname</InputLabel>

                      <Field
                        name="fullname"
                        validate={required}
                        render={({ input, meta }) => (
                          <Input
                            id="fullname"
                            type="text"
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                          />
                        )}
                      />
                    </FormControl>
                  )}
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="email">Email</InputLabel>

                    <Field
                      name="email"
                      validate={required}
                      render={({ input, meta }) => (
                        <Input
                          id="email"
                          type="text"
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />
                      )}
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>

                    <Field
                      name="password"
                      validate={required}
                      render={({ input, meta }) => (
                        <Input
                          id="password"
                          type="password"
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />
                      )}
                    >
                      {/* {fieldState => (
                        <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
                      )} */}
                    </Field>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Button
                        type="submit"
                        className={classes.formButton}
                        variant="contained"
                        size="large"
                        color="secondary"
                        disabled={pristine || invalid}
                      >
                        {this.state.formToggle ? "Enter" : "Create Account"}
                      </Button>
                      <Typography>
                        <button
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
                        </button>
                      </Typography>
                    </Grid>
                  </FormControl>

                  <FormSpy subscription={{ values: true }}>
                    {({ values }) => (
                      <pre>{JSON.stringify(values, undefined, 2)}</pre>
                    )}
                  </FormSpy>
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

export default withStyles(styles)(AccountForm);
