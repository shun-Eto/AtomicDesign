import React from "react";

//  providers
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";

//  redux store
import store from "./redux/store";

//  theme
import { muiTheme, origTheme } from "./assets/styles/theme";

const Providers: React.FC = props => {
  return (
    <ReduxProvider store={store}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={{ ...muiTheme, origTheme }}>
          <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
            {props.children}
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </ReduxProvider>
  );
};

export default Providers;
