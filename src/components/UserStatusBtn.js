import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions";
import { Link } from "react-router-dom";
import history from "../history";

//TODO add msg on sign out

class UserStatusBtn extends React.Component {
  onSignOutClick = async () => {
    this.props.signOut(this.props.token);
    history.push("/");
  };
  // renders sign in button if not signed in
  renderAuthButton() {
    if (this.props.isLoading) {
      return (
        <div class="ui segment">
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
        </div>
      );
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button onClick={this.onSignOutClick} className="ui red  button">
            <i className="icon sign out alternate"></i>
            Sign Out
          </button>
          <Link to="/userPage" className="ui green  button">
            <i className="icon user"></i>
            Your Account
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signIn" className="ui green  button">
            <i className="icon"></i>
            Sign In
          </Link>
          <Link to="/register" className="ui green  button">
            <i className="icon registered outline"></i>
            Register
          </Link>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authentication.isSignedIn,
    token: state.authentication.token,
    isLoading: state.authentication.isLoading,
  };
};

export default connect(mapStateToProps, { signOut })(UserStatusBtn);
