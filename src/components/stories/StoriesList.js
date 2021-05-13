import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserStories, deleteStory } from "../../actions";
import { getCookie } from "../../utils/cookies";
//TODO refector render methods to components
// refactor story.body to show only first 10 words of each story
class StoriesList extends React.Component {
  componentDidMount() {
    this.props.fetchUserStories(getCookie("token"));
  }
  onDeleteClick = (id) => {
    this.props.deleteStory(getCookie("token"), id);
  };
  renderList() {
    return this.props.userStories.map((story, i) => {
      return (
        <div className="item" key={story._id}>
          <i className="icon book" />
          <div className="content">
            {story.title}
            <div className="description">{story.body}</div>
          </div>
          <div className="right floated content">
            <Link
              to={`/stories/edit/${story._id}`}
              className="ui button primary"
            >
              Edit
            </Link>
            <button
              onClick={() => {
                this.onDeleteClick(story._id);
              }}
              className="ui button negative"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Stories List</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>
          <Link to="/stories/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userStories: state.userStories,
    // currentUserId: state.auth.userId,
    // isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchUserStories, deleteStory })(
  StoriesList
);
