import React from "react";
import { createBrowserHistory, createHashHistory } from "history";

//  providers
import { Router } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";

//  redux store
import store from "./redux/store";

//  theme
import { muiTheme, origTheme } from "./assets/styles/theme";

const history = (() => {
  if (window.location.href.includes(".html")) {
    return createHashHistory();
  }
  return createBrowserHistory();
})();

const Providers: React.FC = props => {
  return (
    <Router history={history}>
      <ReduxProvider store={store}>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={{ ...muiTheme, origTheme }}>
            <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
              {props.children}
            </StyledThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </ReduxProvider>
    </Router>
  );
};

export default Providers;
