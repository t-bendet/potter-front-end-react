import React from "react";
import { connect } from "react-redux";
import { editDrawing } from "../../actions";
import DrawingForm from "./DrawingForm";
import { getCookie } from "../../utils/cookies";

class DrawingEdit extends React.Component {
  renderInitValues() {
    const drawing = this.props.userDrawings.find((obj) => {
      return obj._id === this.props.match.params.id;
    });
    console.log(drawing);
    return {
      title: drawing.title,
      description: drawing.description,
      imageFile: drawing.imageFile,
    };
  }
  onSubmit = (formValues) => {
    this.props.editDrawing(
      getCookie("token"),
      formValues,
      this.props.match.params.id
    );
  };

  render() {
    return (
      <div>
        <h3>Edit a Drawing</h3>
        <DrawingForm
          initialValues={this.renderInitValues()}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { userDrawings: state.userDrawings };
};

export default connect(mapStateToProps, { editDrawing })(DrawingEdit);
