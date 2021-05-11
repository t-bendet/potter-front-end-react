import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Movies from "./pages/Movies";
import Games from "./pages/Games";
import Characters from "./pages/Characters";
import PotterApi from "./pages/PotterApi";
import Register from "./components/forms/Register";
import SignIn from "./components/forms/SignIn";
import { getCookie } from "./utils/cookies";
import { connect } from "react-redux";
import { validateUser } from "./actions";

//TODO add logic to prevent sending a request to the server on each mount
class App extends React.Component {
  componentDidMount() {
    this.props.validateUser(getCookie("token"));
  }
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
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
          </Switch>
        </BrowserRouter>
      </div>
    );
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

export default connect(mapStateToProps, { validateUser })(App);
