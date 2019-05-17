import React from "react";
import { Form, Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";
import CheckboxGroup from "../../component/CheckBox";
import styles from "./styles";
import Fade from "react-reveal/Fade";
import { withStyles } from "@material-ui/core/styles";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";

const myOptions = [
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

function PreferenceContainer({ classes, history }) {
  const onSubmit = values => {
    const user = {
      _id: Meteor.userId(),
      "profile.genres": values.genres
    };
    Meteor.call("artists.updateProfile", user);
    history.push("/directory");
  };
  return (
    <div className={classes.formWrapper}>
      <a href="/directory">
        <button className={classes.skip}>Skip</button>
      </a>
      <Fade right duration={2000}>
        <img
          className={classes.guitor}
          src="/images/Preference.png"
          alt="guitor"
        />
      </Fade>
      <div className={classes.cover} />
      <div className={classes.formContainer}>
        <Fade left cascade duration={2000}>
          <h1 className={classes.header}>What's your musical style?</h1>
        </Fade>
        <Form
          onSubmit={onSubmit}
          mutators={{
            ...arrayMutators
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <FieldArray
                name="genres"
                component={CheckboxGroup}
                options={myOptions}
              />

              <button className={classes.submit} type="submit">
                Submit
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default withRouter(withStyles(styles)(PreferenceContainer));
