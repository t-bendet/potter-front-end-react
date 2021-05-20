import React from "react";
import { Field, reduxForm } from "redux-form";
import "../../styles/utility.css";
import {
  Form,
  Container,
  Button,
  Image,
  Segment,
  Icon,
  Header,
} from "semantic-ui-react";

class DrawingForm extends React.Component {
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
  handlePreview = (imageUrl) => {
    const previewImageDom = document.querySelector(".preview-image");
    previewImageDom.src = imageUrl;
  };
  handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
      this.handlePreview(localImageUrl);
    }
  };
  renderFileInput = ({ input, type, meta, label }) => {
    return (
      <div className="basic-box">
        <label>{label}</label>
        <input
          name={input.name}
          type={type}
          onChange={(event) => this.handleChange(event, input)}
        />
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
          padding: "0 3rem",
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
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <Field
            name="imageFile"
            type="file"
            label="imageFile"
            component={this.renderFileInput}
          />
          <Segment placeholder compact>
            <Header icon>
              <Icon name="pencil alternate" />
              Drawing Preview
            </Header>

            <Image className="preview-image" size="small"></Image>
          </Segment>
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

  if (!formValues.description) {
    errors.description = "You must enter description";
  }

  if (formValues.imageFile && formValues.imageFile.size / 1024 > 4000) {
    errors.imageFile = "File size max limit is 4 MB";
  }

  return errors;
};

export default reduxForm({
  form: "drawingForm",
  validate,
})(DrawingForm);

//TODO add error in form submit for image type
