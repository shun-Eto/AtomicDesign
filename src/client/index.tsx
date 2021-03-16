import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory, createHashHistory } from "history";
import store from "./redux/store";

//	styles
import "./styles.css";

//  Providers
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";

//	FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { muiTheme, origTheme } from "./assets/styles/theme";

//  Route
import Route from "./Route";

library.add(fab, fas, far);

const history = (() => {
  if (window.location.href.includes(".html")) {
    return createHashHistory();
  }
  return createBrowserHistory();
})();

/*
 *  Provider関係はここで全てラップする
 */
ReactDOM.render(
  <ReduxProvider store={store}>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={{ ...muiTheme, origTheme }}>
        <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
          <Router history={history}>
            <Route />
          </Router>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </ReduxProvider>,
  document.getElementById("root") as HTMLElement
);
