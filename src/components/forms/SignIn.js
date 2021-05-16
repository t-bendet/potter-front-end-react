import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn } from "../../actions";
import history from "../../history";

class SignIn extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn) {
      history.push("/userPage");
    }
  }
  componentDidUpdate() {
    if (this.props.isSignedIn) {
      history.push("/userPage");
    }
  }
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
    this.props.signIn(formValues);
  };
  //added class name error for semantic ui(otherwise error display is none)
  render() {
    if (this.props.isLoading) {
      return (
        <div class="ui segment">
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      );
    }
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="email" component={this.renderInput} label={"email"} />
        <Field
          name="password"
          component={this.renderInput}
          label={"password"}
        />
        <button className="ui button primary">Sign In</button>
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
};

const formWrapped = reduxForm({
  form: "signInUser",
  validate,
})(SignIn);

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authentication.isSignedIn,
    user: state.authentication.user,
    isLoading: state.authentication.isLoading,
  };
};

export default connect(mapStateToProps, { signIn })(formWrapped);
//TODO add logic to redirect from here if user logged in mapstatetoprops user
//TODO password ******
//TODO add delete user account
