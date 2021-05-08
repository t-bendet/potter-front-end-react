import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Books from "./Books";
import Movies from "./Movies";

// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();
// history={history}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/movies" component={Movies} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
