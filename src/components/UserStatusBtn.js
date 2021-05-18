import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions";
import { Link } from "react-router-dom";
import history from "../history";

import { Menu } from "semantic-ui-react";

//TODO add msg on sign out
//TODO change dimmer

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
        <>
          <Menu.Item
            as="a"
            content="Sign Out"
            key="Sign Out"
            onClick={this.onSignOutClick}
          />
          <Menu.Item
            as="a"
            content="Your Account"
            key="Your Account"
            href="/userPage"
          />
        </>
      );
    } else {
      return (
        <>
          <Menu.Item as="a" content="Sign In" key="Sign In" href="/signIn" />
          <Menu.Item
            as="a"
            content="Register"
            key="register"
            href="/register"
          />
        </>
      );
    }
  }
  render() {
    return <>{this.renderAuthButton()}</>;
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
