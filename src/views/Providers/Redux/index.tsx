import React from "react";

import { Provider } from "react-redux";
import store from "@redux/store";

const ReduxProvider: React.FC = props => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
