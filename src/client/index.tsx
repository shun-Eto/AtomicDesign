import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory, createHashHistory } from "history";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core";
import { muiTheme, origTheme } from "./assets/styles/theme";

//	styles
import "./styles.css";

//	FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

import Route from "./Route";

const history = (() => {
	if (window.location.href.includes(".html")) {
		return createHashHistory();
	} else {
		return createBrowserHistory();
	}
})();

//  Providers wrap
ReactDOM.render(
	<StylesProvider injectFirst>
		<MuiThemeProvider theme={{ ...muiTheme, origTheme }}>
			<StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
				<Router history={history}>
					<Route />
				</Router>
			</StyledThemeProvider>
		</MuiThemeProvider>
	</StylesProvider>,
	document.getElementById("root") as HTMLElement
);
