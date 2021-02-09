import React from "react";

import { h1, span } from "./components/ReactCreateElement";
import ReactComponent from "./components/ReactComponent";
import ReactPureComponent from "./components/ReactPureComponent";
import FunctionalComponent from "./components/FunctionalComponent";

const App = () => {
  const ReactComponentRoot = React.createElement(ReactComponent, null, null);
  const ReactPureComponentRoot = React.createElement(
    ReactPureComponent,
    null,
    null
  );
  const FunctionalComponentRoot = React.createElement(
    FunctionalComponent,
    null,
    null
  );

  return React.createElement(
    "div",
    null,
    h1,
    span,
    ReactComponentRoot,
    ReactPureComponentRoot,
    FunctionalComponentRoot
  );
};

export default App;
