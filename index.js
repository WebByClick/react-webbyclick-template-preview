"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Homepage = require("./Homepage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/"
  }, /*#__PURE__*/_react["default"].createElement(_Homepage.Homepage, null))));
}

var _default = App;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Footer(props) {
  return /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "This preview is used as a developer preview for WebByClick templates.")))));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Homepage = Homepage;

var _react = _interopRequireDefault(require("react"));

var _Footer = require("./Footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Homepage(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "grid-content",
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "section1\xA7",
    className: "grid-section grid-section-bright"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container grid-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-heading editable-content",
    "data-grid-content": "heading"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: " grid-align-left"
  }, "Lorem Ipsum")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-29 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-image  grid-align-center",
    "data-grid-content": "image"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "img-fluid",
    src: "https://klikem.cz/img/grid-dnd.png"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-31 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-text editable-content clearfix  ",
    "data-grid-content": "text"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "grid-align-justify"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /*#__PURE__*/_react["default"].createElement("p", null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /*#__PURE__*/_react["default"].createElement("p", null, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-button grid-align-left ",
    "data-grid-content": "button"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    target: "_self",
    className: "btn btn-lg btn-br-sm btn-inv "
  }, "Chci v\u011Bd\u011Bt v\xEDce!"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "pobyty-pro-skoly",
    className: "grid-section grid-section-bright",
    "data-grid-section": "15284"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container grid-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-heading editable-content",
    "data-grid-content": "heading"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Lorem Ipsum")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-30 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-text editable-content clearfix  ",
    "data-grid-content": "text"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "grid-align-justify"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /*#__PURE__*/_react["default"].createElement("p", null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /*#__PURE__*/_react["default"].createElement("p", null, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-button grid-align-left ",
    "data-grid-content": "button"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    target: "_self",
    className: "btn btn-lg btn-br-sm btn-inv "
  }, "Lorem Ipsum"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-30 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-image  grid-align-center",
    "data-grid-content": "image"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "img-fluid",
    src: "https://klikem.cz/img/grid-dnd.png"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "section2",
    className: "grid-section grid-section-bright"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container grid-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-heading editable-content  ",
    "data-grid-content": "heading"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: " grid-align-center"
  }, "Lipsum", /*#__PURE__*/_react["default"].createElement("br", null))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-icon  grid-align-center",
    "data-grid-content": "pictogram"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon-wrapper icon-sm icon-br-sm icon-col "
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-fax"
  })))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-14 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-text editable-content clearfix grid-padding-top-1",
    "data-grid-content": "text"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: " grid-align-center"
  }, /*#__PURE__*/_react["default"].createElement("b", null, "123 345 567"), /*#__PURE__*/_react["default"].createElement("br", null)))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-icon  grid-align-center",
    "data-grid-content": "pictogram"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon-wrapper icon-sm icon-br-sm icon-col "
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-at"
  })))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-14 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-text editable-content clearfix   grid-padding-top-1",
    "data-grid-content": "text"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: " grid-align-center"
  }, /*#__PURE__*/_react["default"].createElement("b", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "mailto:lorem@ipsum.com",
    target: "_self"
  }, "lorem@ipsum.com")), /*#__PURE__*/_react["default"].createElement("br", null)))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-icon  grid-align-center",
    "data-grid-content": "pictogram"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon-wrapper icon-sm icon-br-sm icon-col "
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-facebook"
  })))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-14 grid-cell grid-cell-column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-text editable-content clearfix   grid-padding-top-1",
    "data-grid-content": "text"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: " grid-align-center"
  }, /*#__PURE__*/_react["default"].createElement("b", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "http://www.facebook.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "www.facebok.com/lipsum")), /*#__PURE__*/_react["default"].createElement("br", null)))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-divider ",
    "data-grid-content": "divider"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-text editable-content clearfix",
    "data-grid-content": "text"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: " grid-align-center"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 grid-cell grid-cell-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-component"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-content grid-button grid-align-center ",
    "data-grid-content": "button"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    target: "_self",
    className: "btn btn-lg btn-br-sm btn-col "
  }, "Lorem ipsum"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row grid-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-60 col-xs-60 grid-cell grid-cell-empty"
  })))))), /*#__PURE__*/_react["default"].createElement(_Footer.Footer, null));
}
