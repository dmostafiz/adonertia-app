/******/ var __webpack_modules__ = ({

/***/ "./resources/js/Pages/Index.tsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
exports.__esModule = true;
exports.UsersStack = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var core_1 = __webpack_require__(/*! @mantine/core */ "@mantine/core");
var icons_1 = __webpack_require__(/*! @tabler/icons */ "@tabler/icons");
function UsersStack(_a) {
  var users = _a.users;
  var rows = users.map(function (item) {
    return react_1["default"].createElement("tr", {
      key: item.name
    }, react_1["default"].createElement("td", null, react_1["default"].createElement(core_1.Group, {
      spacing: "sm"
    }, react_1["default"].createElement("div", null, react_1["default"].createElement(core_1.Text, {
      size: "sm",
      weight: 500
    }, item.name)))), react_1["default"].createElement("td", null, react_1["default"].createElement(core_1.Text, {
      size: "sm"
    }, item.email), react_1["default"].createElement(core_1.Text, {
      size: "xs",
      color: "dimmed"
    }, "Email")), react_1["default"].createElement("td", null, react_1["default"].createElement(core_1.Group, {
      spacing: 0,
      position: "right"
    }, react_1["default"].createElement(core_1.ActionIcon, null, react_1["default"].createElement(icons_1.IconPencil, {
      size: 16,
      stroke: 1.5
    })), react_1["default"].createElement(core_1.Menu, {
      transition: "pop",
      withArrow: true,
      position: "bottom-end"
    }, react_1["default"].createElement(core_1.Menu.Target, null, react_1["default"].createElement(core_1.ActionIcon, null, react_1["default"].createElement(icons_1.IconDots, {
      size: 16,
      stroke: 1.5
    }))), react_1["default"].createElement(core_1.Menu.Dropdown, null, react_1["default"].createElement(core_1.Menu.Item, {
      icon: react_1["default"].createElement(icons_1.IconMessages, {
        size: 16,
        stroke: 1.5
      })
    }, "Send message"), react_1["default"].createElement(core_1.Menu.Item, {
      icon: react_1["default"].createElement(icons_1.IconNote, {
        size: 16,
        stroke: 1.5
      })
    }, "Add note"), react_1["default"].createElement(core_1.Menu.Item, {
      icon: react_1["default"].createElement(icons_1.IconReportAnalytics, {
        size: 16,
        stroke: 1.5
      })
    }, "Analytics"), react_1["default"].createElement(core_1.Menu.Item, {
      icon: react_1["default"].createElement(icons_1.IconTrash, {
        size: 16,
        stroke: 1.5
      }),
      color: "red"
    }, "Terminate contract"))))));
  });
  return react_1["default"].createElement(core_1.ScrollArea, null, react_1["default"].createElement(core_1.Table, {
    sx: {
      minWidth: 800
    },
    verticalSpacing: "md"
  }, react_1["default"].createElement("tbody", null, rows)));
}
exports.UsersStack = UsersStack;

/***/ }),

/***/ "./resources/js/ssr.tsx":
/*!******************************!*\
  !*** ./resources/js/ssr.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
exports.__esModule = true;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ "react-dom/server"));
var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
function render(page) {
  return (0, inertia_react_1.createInertiaApp)({
    page: page,
    render: server_1["default"].renderToString,
    resolve: function resolve(name) {
      return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name));
    },
    setup: function setup(_a) {
      var App = _a.App,
        props = _a.props;
      return react_1["default"].createElement(App, __assign({}, props));
    }
  });
}
exports["default"] = render;

/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Index": "./resources/js/Pages/Index.tsx",
	"./Index.tsx": "./resources/js/Pages/Index.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "@inertiajs/inertia-react":
/*!*******************************************!*\
  !*** external "@inertiajs/inertia-react" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@inertiajs/inertia-react");

/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ "@tabler/icons":
/*!********************************!*\
  !*** external "@tabler/icons" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@tabler/icons");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./resources/js/ssr.tsx");
/******/ module.exports = __webpack_exports__;
/******/ 
