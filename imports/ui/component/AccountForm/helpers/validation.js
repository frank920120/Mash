export default function validate(values) {
  const error = {};

  if (!values.email) {
    error.email = "Email is required";
  }
  if (/.*@.*\..*/.test(values.email) === false) {
    error.email = "Please enter a valid email address";
  }
  if (!values.password) {
    error.password = "Password is required";
  }
  if (values.fullname && !values.fullname) {
    error.fullname = "Full name is required";
  }
  return error;
}
