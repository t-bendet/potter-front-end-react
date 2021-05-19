import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Container } from "semantic-ui-react";
// <Form.TextArea label='About' placeholder='Tell us more about you...' />
class StoryForm extends React.Component {
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
      <div>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Container
        textAlign="center"
        style={{
          background: "white",
          padding: "2rem 3rem",
          borderRadius: "7px",
        }}
      >
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <br />
          <br />
          <br />
          <Field
            name="body"
            component={this.renderInput}
            label="Enter Story Body"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </Container>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.body) {
    errors.body = "You must enter a Story Body";
  }

  return errors;
};

export default reduxForm({
  form: "storyForm",
  validate,
})(StoryForm);
