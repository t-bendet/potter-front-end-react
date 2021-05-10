import React from "react";
import backEnd from "../apis/backEnd";
import Cookies from "universal-cookie";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const cookie = new Cookies();

class Authentication extends React.Component {
  state = { isSignedIn: false };
  // sign in and out
  componentDidMount() {
    const test = cookie.get("token");
    if (test) {
      this.setState({ isSignedIn: true });
    }
  }
  onSignInClick = async () => {
    const res = await backEnd.post("/users/login", {
      email: "talbendet21@gamil.com",
      password: "123456789",
    });
    cookie.set("token", res.data.token, { path: "/" });
    console.log(res.data);
    if (res.data.token) {
      this.setState({ isSignedIn: true });
    }
  };
  onSignOutClick = async () => {
    const res = await backEnd.post("/users/logout", "", {
      headers: { Authorization: cookie.get("token") },
    });
    console.log(res.data);

    cookie.remove("token", { path: "/" });
    this.setState({ isSignedIn: false });
  };

  // renders sign in button if not signed in
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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

export default Authentication;
//TODO change isSignedIn === null to a spinner
//TODO add try catch to all
//TODO add callback to cookie change event
