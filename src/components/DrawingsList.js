import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserDrawings, deleteDrawing } from "../actions";
//, deleteDrawing
import { getCookie } from "../utils/cookies";
//TODO refector render methods to components

class DrawingsList extends React.Component {
  componentDidMount() {
    this.props.fetchUserDrawings(getCookie("token"));
  }
  onDeleteClick = (id) => {
    console.log(id);
    this.props.deleteDrawing(getCookie("token"), id);
  };
  renderList() {
    if (this.props.isLoading) {
      return (
        <div class="ui segment">
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
        </div>
      );
    }
    return this.props.userDrawings.map((drawing, i) => {
      return (
        <div className="item" key={drawing._id}>
          <i className="icon book" />
          <div className="content">
            {drawing.title}
            <div className="description">{drawing.description}</div>
          </div>
          <div className="right floated content">
            <Link
              to={`/drawings/edit/${drawing._id}`}
              className="ui button primary"
            >
              Edit
            </Link>

            <button
              onClick={() => {
                this.onDeleteClick(drawing._id);
              }}
              className="ui button negative"
            >
              Delete
            </button>
          </div>
          <img
            src={`https://potter-back-end.herokuapp.com/drawings/${drawing._id}`}
          ></img>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>DrawingsList</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>
          <Link to="/drawings/new" className="ui button primary">
            Create Drawing
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDrawings: state.userDrawings,
    isLoading: state.authentication.isLoading,
  };
};

export default connect(mapStateToProps, { fetchUserDrawings, deleteDrawing })(
  DrawingsList
);
