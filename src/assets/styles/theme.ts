import { createMuiTheme, Theme as MuiTheme } from "@material-ui/core";
import CreateBreakpoint, { BreakpointProps } from "./createBreakpoint";
import CreateColorPicker from "./createColorPicker";
import CreateFontSize from "./createFontSize";

const createBP = new CreateBreakpoint();
const createCP = new CreateColorPicker();
const createFS = new CreateFontSize();

interface OrigTheme {
  breakpoint: BreakpointProps;
  fontSize: typeof createFS.fontSize;
  colorPicker: typeof createCP.colorPicker;
}

const origTheme: OrigTheme = {
  breakpoint: createBP.breakpoint(),
  fontSize: key => createFS.fontSize(key),
  colorPicker: (color, option) => createCP.colorPicker(color, option)
};

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(40,40,40,1)"
    },
    secondary: {
      main: "rgba(55,5,5,1)"
    },
    text: {
      primary: "rgba(0,0,0,1)",
      secondary: "rgba(100,100,100,1)"
    }
  }
});

export { muiTheme, origTheme };

type Theme = OrigTheme & MuiTheme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
