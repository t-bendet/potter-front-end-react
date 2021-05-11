import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions";
import { getCookie, setCookie, removeCookie } from "../utils/cookies";
import { Link } from "react-router-dom";

class UserStatusBtn extends React.Component {
  componentDidUpdate() {
    if (this.props.token) {
      setCookie("token", this.props.token);
    } else {
      console.log("no token here");
    }
  }
  onSignOutClick = async () => {
    this.props.signOut(getCookie("token"));
    removeCookie("token");
  };
  // renders sign in button if not signed in
  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red  button">
          <i className="icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <div>
          <Link to="/signIn" className="ui green  button">
            <i className="icon"></i>
            Sign In
          </Link>
          <Link to="/register" className="ui green  button">
            <i className="icon"></i>
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
  console.log(state);
  return {
    isSignedIn: state.authentication.isSignedIn,
    user: state.authentication.user,
    token: state.authentication.token,
  };
};

export default connect(mapStateToProps, { signOut })(UserStatusBtn);

//TODO change isSignedIn === null to a spinner
//TODO add try catch to all
