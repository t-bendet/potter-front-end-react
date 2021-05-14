import React from "react";
import { connect } from "react-redux";
import history from "../history";
import { deleteUser } from "../actions";
import { removeCookie, getCookie } from "../utils/cookies";
import StoriesList from "../components/stories/StoriesList";
//TODO improve programmatic navigation

class UserPage extends React.Component {
  componentDidMount() {
    if (!this.props.isSignedIn) {
      history.push("/");
    }
  }
  onDeleteClick = () => {
    this.props.deleteUser(getCookie("token"));
    removeCookie("token");
    history.push("/");
  };
  render() {
    return (
      <div>
        <h1>UserPage</h1>
        <StoriesList />
        <button onClick={this.onDeleteClick} className="ui red  button">
          <i className="icon sign out alternate"></i>
          DELETE USER
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authentication.isSignedIn,
    user: state.authentication.user,
  };
};

export default connect(mapStateToProps, { deleteUser })(UserPage);
