import React from "react";
import { connect } from "react-redux";
import { createStory } from "../../actions";
import StoryForm from "./StoryForm";
import { getCookie } from "../../utils/cookies";

class StoryCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStory(getCookie("token"), formValues);
  };

  render() {
    return (
      <div>
        <StoryForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStory })(StoryCreate);
