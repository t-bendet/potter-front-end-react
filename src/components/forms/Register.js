import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registerUser } from "../../actions"; // add logic to redirect from here if user logged in
import history from "../../history";
import { Form, Container } from "semantic-ui-react";

class Register extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn) {
      history.push("/userPage");
      console.log(history);
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
      <div className="field ">
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
          className="error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          size="large"
          style={{
            background: "white",
            padding: "2rem 3rem",
            borderRadius: "7px",
            maxWidth: "300px",
          }}
        >
          <Field name="name" component={this.renderInput} label={"name"} />
          <Field name="email" component={this.renderInput} label={"email"} />
          <Field
            name="password"
            component={this.renderInput}
            label={"password"}
          />

          <button className="ui button primary">Register</button>
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
  if (!formValues.name) {
    errors.password = "please enter a name";
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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authentication.isSignedIn,
    user: state.authentication.user,
  };
};

export default connect(mapStateToProps, { registerUser })(formWrapped);
