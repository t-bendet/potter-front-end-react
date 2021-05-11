import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { getCookie, setCookie, removeCookie } from "../utils/cookies";

class UserStatusBtn extends React.Component {
  onSignInClick = async () => {
    console.log("redirect to login page");
    this.props.signIn({
      email: "talbendet21@gamil.com",
      password: "123456789",
    });
  };
  componentDidUpdate() {
    if (this.props.token) {
      setCookie("token", this.props.token);
    } else {
      console.log("no token here");
    }
  }
  onSignOutClick = async () => {
    console.log(getCookie("token"));
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
        <button onClick={this.onSignInClick} className="ui green  button">
          <i className="icon"></i>
          Sign In
        </button>
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

export default connect(mapStateToProps, { signIn, signOut })(UserStatusBtn);

//TODO change isSignedIn === null to a spinner
//TODO add try catch to all
//change name
