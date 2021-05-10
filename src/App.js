import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Movies from "./pages/Movies";
import Games from "./pages/Games";
import Characters from "./pages/Characters";
import PotterApi from "./pages/PotterApi";
import Signup from "./pages/Signup";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/potter-Api" component={PotterApi} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
