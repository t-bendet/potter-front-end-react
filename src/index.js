import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers";

import Test from "./test";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Test style={{ height: "100%", width: "100%" }}>
    <Provider store={store}>
      <App />
    </Provider>
  </Test>,
  document.querySelector("#root")
);
