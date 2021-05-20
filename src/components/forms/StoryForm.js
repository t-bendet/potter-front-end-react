import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Container, Button } from "semantic-ui-react";
import "../../styles/utility.css";
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
      <div className="basic-box">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  renderText = ({ input, label, meta }) => {
    return (
      <div className="basic-box">
        <label>{label}</label>
        <textarea {...input} />
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
        <Form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="error"
          size="large"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />

          <Field
            name="body"
            component={this.renderText}
            label="Enter Story Body"
          />
          <Button className="primary ">Submit</Button>
        </Form>
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
