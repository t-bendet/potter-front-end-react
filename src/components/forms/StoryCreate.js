import React from "react";
import { connect } from "react-redux";
import { createStory } from "../../actions";
import StoryForm from "./StoryForm";
import { getCookie } from "../../utils/cookies";

//TODO add navigation and pop up after creating a new story

class StoryCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStory(getCookie("token"), formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Story</h3>
        <StoryForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStory })(StoryCreate);
