import { createMuiTheme, Theme as MuiTheme } from "@material-ui/core";
import { BreakpointProps, createBreakpoint } from "./createBreakpoint";
import { createColorPicker } from "./createColorPicker";
import { createFontSize } from "./createFontSize";

const createBP = new createBreakpoint();
const createCP = new createColorPicker();
const createFS = new createFontSize();

interface OrigTheme {
	breakpoint: BreakpointProps;
	fontSize: typeof createFS.fontSize;
	colorPicker: typeof createCP.colorPicker;
}

const origTheme: OrigTheme = {
	breakpoint: createBP.breakpoint(),
	fontSize: (key) => createFS.fontSize(key),
	colorPicker: (color, option) => createCP.colorPicker(color, option),
};

const muiTheme = createMuiTheme({
	palette: {
		primary: {
			main: "rgba(40,40,40,1)",
		},
		secondary: {
			main: "rgba(55,5,5,1)",
		},
		text: {
			primary: "rgba(240,242,236,1)",
			secondary: "rgba(240,242,236,1)",
		},
	},
});

export { muiTheme, origTheme };

type Theme = OrigTheme & MuiTheme;
declare module "styled-components" {
	interface DefaultTheme extends Theme {}
}
