import React from "react";
import { Field, reduxForm } from "redux-form";

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

  renderInput = ({ input, label, meta, type, accept, onChange }) => {
    return (
      <div>
        <label>{label}</label>
        <input onChange={onChange} type={type} {...input} />
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
  renderFileInput = ({ input, type, meta }) => {
    // const { mimeType } = this.props;
    return (
      <div>
        <input
          name={input.name}
          type={type}
          // accept={mimeType}
          onChange={(event) => this.handleChange(event, input)}
        />
      </div>
    );
  };

  onSubmit = (formValues) => {
    // this.props.onSubmit(formValues);
    console.log(formValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
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
          <Field name="image" type="file" component={this.renderFileInput} />
          <button className="ui button primary">Submit</button>
        </form>
        <div style={{ height: "200px" }}>
          <img className="preview-image"></img>
        </div>
      </div>
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

  return errors;
};

export default reduxForm({
  form: "drawingForm",
  validate,
})(DrawingForm);
