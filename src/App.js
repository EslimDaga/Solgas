import React, { Component } from "react";
import { Router as BrowseRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";
import "./assets/scss/index.scss";
import Routes from "./Routes";
import { AuthProvider, ToastProvider } from "./context/provider";
const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <AuthProvider>
            <BrowseRouter history={browserHistory}>
              <Routes />
            </BrowseRouter>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    );
  }
}

export default App;
