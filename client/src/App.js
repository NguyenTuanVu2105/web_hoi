import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import Routes from "./router";
import store from "./redux";

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
