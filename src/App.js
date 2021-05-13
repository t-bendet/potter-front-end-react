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
import Test from "./test";

import { getCookie } from "./utils/cookies";
import { connect } from "react-redux";
import { validateUser } from "./actions";
import history from "./history";

//TODO add logic to prevent sending a request to the server on each mount
class App extends React.Component {
  componentDidMount() {
    if (getCookie("token")) {
      this.props.validateUser(getCookie("token"));
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
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authentication.isSignedIn,
    user: state.authentication.user,
    token: state.authentication.token,
    error: state.authentication.error,
  };
};

export default connect(mapStateToProps, { validateUser })(App);
