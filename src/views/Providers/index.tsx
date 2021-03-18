import React from "react";

//  providers
import Router from "./Router";
import ThemeProvider from "./Theme";
import ReduxProvider from "./Redux";

const Providers: React.FC = props => {
  return (
    <Router>
      <ReduxProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </ReduxProvider>
    </Router>
  );
};

export default Providers;
