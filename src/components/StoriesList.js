import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserStories, deleteStory } from "../actions";
import { getCookie } from "../utils/cookies";
import { Item } from "semantic-ui-react";
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
        <Item
          key={story._id}
          style={{
            maxHeight: "220px",
            overflowY: "scroll",
            overflowX: "hidden",
            margin: "2rem 1rem",
          }}
        >
          <i className="icon book" />
          <Item.Content>
            <Item.Header>{story.title}</Item.Header>
            <Item.Description>{story.body}</Item.Description>
          </Item.Content>
          <div className="right floated content">
            <Link
              to={`/stories/edit/${story._id}`}
              edit
              className="ui button circular"
            >
              <i className="icon edit" />
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
        </Item>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Stories List</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>
          <Link to="/stories/new" className="ui button   teal">
            Create Story
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userStories: state.userStories,
  };
};

export default connect(mapStateToProps, { fetchUserStories, deleteStory })(
  StoriesList
);
