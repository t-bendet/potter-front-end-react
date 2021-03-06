import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Movies from "./pages/Movies";
import PotterApi from "./pages/PotterApi";
import Register from "./components/forms/Register";
import SignIn from "./components/forms/SignIn";
import UserPage from "./pages/UserPage";
import StoryCreate from "./components/forms/StoryCreate";
import StoryEdit from "./components/forms/StoryEdit";
import DrawingCreate from "./components/forms/DrawingCreate";
import DrawingEdit from "./components/forms/DrawingEdit";
import ProtectedRoute from "./components/ProtectedRoute";
import FansArt from "./pages/FansArt";
import { getCookie, setCookie, removeCookie } from "./utils/cookies";
import { connect } from "react-redux";
import { validateUser } from "./actions";
import history from "./history";

//TODO add logic to prevent sending a request to the server on each mount
import "./styles/app.css";
import Test from "./test";

class App extends React.Component {
  //if a cookie exists in local and no user is signed in,try to validate user
  componentDidMount() {
    if (!this.props.isSignedIn && getCookie("token")) {
      this.props.validateUser(getCookie("token"));
    }
  }
  componentDidUpdate() {
    if (this.props.isSignedIn && !getCookie("token")) {
      setCookie("token", this.props.token);
    }
    if (!this.props.isSignedIn && getCookie("token")) {
      removeCookie("token");
    }
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="app">
        <Router history={history}>
          <Navigation />
          <Switch>
            <Test>
              <Route exact path="/" component={Home} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/potter-Api" component={PotterApi} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/signIn" component={SignIn} />
              <Route exact path="/fans-art" component={FansArt} />
              <ProtectedRoute exact path="/userPage" component={UserPage} />
              <ProtectedRoute
                exact
                path="/stories/new"
                component={StoryCreate}
              />
              <ProtectedRoute
                exact
                path="/stories/edit/:id"
                component={StoryEdit}
              />
              <ProtectedRoute
                exact
                path="/drawings/new"
                component={DrawingCreate}
              />
              <ProtectedRoute
                exact
                path="/drawings/edit/:id"
                component={DrawingEdit}
              />
            </Test>
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
    isLoading: state.authentication.isLoading,
  };
};

export default connect(mapStateToProps, { validateUser })(App);
