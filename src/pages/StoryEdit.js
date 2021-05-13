import React from "react";
import { connect } from "react-redux";
import { editStory } from "../actions";
import StoryForm from "../components/forms/StoryForm";
import { getCookie } from "../utils/cookies";

class StoryEdit extends React.Component {
  renderInitValues() {
    const story = this.props.userStories.find((obj) => {
      return obj._id === this.props.match.params.id;
    });
    console.log("story", story);
    return {
      title: story.title,
      body: story.body,
    };
  }
  onSubmit = (formValues) => {
    this.props.editStory(
      getCookie("token"),
      formValues,
      this.props.match.params.id
    );
  };

  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StoryForm
          initialValues={this.renderInitValues()}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { userStories: state.userStories };
};

export default connect(mapStateToProps, { editStory })(StoryEdit);

// onSubmit = (formValues) => {
//   this.props.editStream(this.props.match.params.id, formValues);
// };

// return (
//   <div>
//     <h3>Edit a Stream</h3>
//     <StoryFormForm
//       initialValues={_.pick(this.props.stream, "title", "description")}
//       onSubmit={this.onSubmit}
//     />
//   </div>
// );
