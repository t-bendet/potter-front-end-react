import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserDrawings, deleteDrawing } from "../actions";
import { Item, Image } from "semantic-ui-react";

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
    return this.props.userDrawings.map((drawing, i) => {
      return (
        <Item
          key={drawing._id}
          style={{
            maxHeight: "220px",
            overflowY: "scroll",
            overflowX: "hidden",
            margin: "2rem 1rem",
          }}
        >
          <i className="icon pencil alternate" />
          <Item.Content>
            <Item.Header>{drawing.title}</Item.Header>
            <Item.Description>{drawing.description}</Item.Description>
          </Item.Content>

          <div className="right floated content">
            <Link
              to={`/drawings/edit/${drawing._id}`}
              className="ui button circular"
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
          <Image
            size="small"
            src={`https://potter-back-end.herokuapp.com/drawings/${drawing._id}`}
          ></Image>
        </Item>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>DrawingsList</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>
          <Link to="/drawings/new" className="ui button teal">
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
