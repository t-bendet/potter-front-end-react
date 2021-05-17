import React from "react";
import { connect } from "react-redux";
import { createDrawing } from "../../actions";
import DrawingForm from "./DrawingForm";
import { getCookie } from "../../utils/cookies";

class DrawingCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createDrawing(getCookie("token"), formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a DrawingForm</h3>
        <DrawingForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createDrawing })(DrawingCreate);
