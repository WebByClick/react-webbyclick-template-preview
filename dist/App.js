import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Homepage } from "./Homepage";

function App() {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/"
  }, /*#__PURE__*/React.createElement(Homepage, null))));
}

export default App;