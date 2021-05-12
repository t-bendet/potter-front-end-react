import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registerUser } from "../../actions"; // add logic to redirect from here if user logged in

class Register extends React.Component {
  //if user touch input and leaves
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label> {label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.registerUser(formValues);
  };
  //added class name error for semantic ui(otherwise error display is none)
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="name" component={this.renderInput} label={"name"} />
        <Field name="email" component={this.renderInput} label={"email"} />
        <Field
          name="password"
          component={this.renderInput}
          label={"password"}
        />

        <button className="ui button primary">Register</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "why no email?!?!?";
  }
  if (!formValues.password) {
    errors.password = "why no password?!?!?!";
  }
  if (!formValues.name) {
    errors.password = "why no name?!?!?!";
  }
  return errors;
};
//TODO validation
// name
// email
//password cant contain password ,min 7 char

const formWrapped = reduxForm({
  form: "registerUser",
  validate,
})(Register);

export default connect(null, { registerUser })(formWrapped);
