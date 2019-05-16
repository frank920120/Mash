export default function validate(values) {
  const errors = {};

  if (!values.email || values.email === "") {
    errors.email = "Email is required";
  }
  if (/.*@.*\..*/.test(values.email) === false) {
    errors.email = "Please enter a valid email address";
  }
  if (!values.password || values.password === "") {
    errors.password = "Password is required";
  }
  if (values.fullname && !values.fullname) {
    errors.fullname = "Full name is required";
  }
  return errors;
}
