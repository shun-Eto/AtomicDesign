import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { muiTheme, origTheme } from "../../../../assets/styles/theme";

//  test components
import { StyledButton } from "./index";

const WrappedStyledButton = () => (
  <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
    <StyledButton />
  </StyledThemeProvider>
);

describe("App", () => {
  test("renders App component", () => {
    const { container } = render(<WrappedStyledButton />);
    expect(container.innerHTML).toMatch("");
  });
});
