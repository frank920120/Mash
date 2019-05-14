import React from "react";
import { Form, Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";
import CheckboxGroup from "../../component/CheckBox";
import styles from "./styles";
import Fade from "react-reveal/Fade";
import { withStyles } from "@material-ui/core/styles";
const onSubmit = values => {
  console.log(values);
};

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

function PreferenceContainer({ classes }) {
  return (
    <div className={classes.formWrapper}>
      <Fade right duration={2000}>
        <img
          className={classes.guitor}
          src="/images/Preference.png"
          alt="guitor"
        />
      </Fade>
      <div className={classes.cover} />
      <div className={classes.formContainer}>
        <Fade top duration={2000}>
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
                name="genre"
                component={CheckboxGroup}
                options={myOptions}
              />

              <a className={classes.submit} type="submit">
                Submit
              </a>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(PreferenceContainer);
