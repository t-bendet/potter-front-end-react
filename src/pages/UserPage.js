import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../actions";
import { removeCookie, getCookie } from "../utils/cookies";
import StoriesList from "../components/StoriesList";
import DrawingsList from "../components/DrawingsList";
import DrawingForm from "../components/forms/DrawingForm";
//TODO improve programmatic navigation

class UserPage extends React.Component {
  onDeleteClick = () => {
    this.props.deleteUser(getCookie("token"));
    removeCookie("token");
  };
  render() {
    return (
      <div>
        <h1>UserPage</h1>
        <StoriesList />
        <DrawingsList />
        <DrawingForm />
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
