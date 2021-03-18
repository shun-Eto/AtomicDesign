import React from "react";

import { muiTheme, origTheme } from "@assets/styles/theme";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core";

const OrigThemeProvider: React.FC = props => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={{ ...muiTheme, origTheme }}>
        <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
          {props.children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default OrigThemeProvider;
