import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import theme from "./theme";
import Routes from "./router";
import store from "./redux";

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}
