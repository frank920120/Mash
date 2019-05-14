import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Bounce from "react-reveal/Bounce";
const CheckboxGroup = ({ fields, options, classes }) => {
  const toggle = (event, option) => {
    if (event.target.checked) {
      fields.push(option);
    } else fields.remove(option);
  };
  return (
    <div className={classes.formItem}>
      {options.map((option, index) => (
        <Bounce key={option} top duration={400 * index}>
          <div className={classes.checkboxButton}>
            <label className={classes.lable}>
              <input
                className={classes.input}
                type="checkbox"
                onClick={event => toggle(event, option)}
              />
              <span className={classes.CheckboxText}>{option}</span>
            </label>
          </div>
        </Bounce>
      ))}
    </div>
  );
};

export default withStyles(styles)(CheckboxGroup);
