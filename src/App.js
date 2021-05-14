import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Movies from "./pages/Movies";
import Games from "./pages/Games";
import Characters from "./pages/Characters";
import PotterApi from "./pages/PotterApi";
import Register from "./components/forms/Register";
import SignIn from "./components/forms/SignIn";
import UserPage from "./pages/UserPage";
import StoryCreate from "./pages/StoryCreate";
import StoryEdit from "./pages/StoryEdit";
import Test from "./test";

import { getCookie, setCookie, removeCookie } from "./utils/cookies";
import { connect } from "react-redux";
import { validateUser } from "./actions";
import history from "./history";

//TODO add logic to prevent sending a request to the server on each mount
class App extends React.Component {
  //if a cookie exists in local and no user is signed in,try to validate user
  componentDidMount() {
    if (!this.props.isSignedIn && getCookie("token")) {
      console.log("validate cookie");

      this.props.validateUser(getCookie("token"));
    }
  }
  componentDidUpdate() {
    if (this.props.isSignedIn && !getCookie("token")) {
      console.log("setting  cookie");

      setCookie("token", this.props.token);
    }
    if (!this.props.isSignedIn && getCookie("token")) {
      console.log("removing cookie");
      removeCookie("token");
    }
  }
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/potter-Api" component={PotterApi} />

            <Route exact path="/register" component={Register} />
            <Route exact path="/signIn" component={SignIn} />

            <Route exact path="/userPage" component={UserPage} />
            <Route exact path="/stories/new" component={StoryCreate} />
            <Route path="/stories/edit/:id" exact component={StoryEdit} />
          </Switch>
        </Router>
      </div>
    );
  }
}
//TODO remove some of the properties
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authentication.isSignedIn,
    user: state.authentication.user,
    token: state.authentication.token,
    error: state.authentication.error,
  };
};

export default connect(mapStateToProps, { validateUser })(App);
