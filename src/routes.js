import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";

const Routes = () => (
  <div className="router">
    <Route exact path="/" component={Home} />
  </div>
);

export default Routes;
