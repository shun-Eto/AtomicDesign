import * as React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";

const Component: React.FC = () => (
  <Switch>
    {/*
     * 全てここでルーティング
     */}
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Component;
