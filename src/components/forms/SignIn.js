import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn } from "../../actions";
import history from "../../history";
import { Form, Container } from "semantic-ui-react";

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
    return (
      <Container
        textAlign="center"
        style={{
          padding: "2rem 3rem",
          borderRadius: "7px",
          maxWidth: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          size="large"
          style={{
            background: "white",
            padding: "2rem 3rem",
            borderRadius: "7px",
            maxWidth: "300px",
          }}
        >
          <Field name="email" component={this.renderInput} label={"email"} />
          <Field
            name="password"
            component={this.renderInput}
            label={"password"}
          />
          <button className="ui button primary">Sign In</button>
        </Form>
      </Container>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "please enter a Email";
  }
  if (!formValues.password) {
    errors.password = "please enter a Email password";
  }

  return errors;
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
