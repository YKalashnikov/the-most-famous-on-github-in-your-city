module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./GlobalTheme.js":
/*!************************!*\
  !*** ./GlobalTheme.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const globalTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  common: {
    black: '#000',
    white: '#fff'
  },
  shape: {//borderRadius: '8px',
  },
  background: {
    paper: '#fff',
    headers: '#2882F8',
    default: 'rgba(229, 229, 229, 1)'
  },
  palette: {
    primary: {
      light: '#2882F8',
      main: '#2882F8',
      dark: '#212121'
    },
    secondary: {
      main: '#E5E4F3',
      light: '#D4D3CF'
    },
    error: {
      main: '#ff0000',
      dark: '#212121'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 33,
      fontFamily: 'Montserrat',
      fontWeight: 300,
      color: '#2882F8',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
      textAlign: 'center'
    },
    subtitle1: {
      fontSize: 14,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      alignItems: 'center'
    },
    subtitle2: {
      fontSize: 16,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      alignItems: 'center'
    },
    h4: {
      fontSize: 14,
      fontWeight: 300,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center'
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center'
    },
    h3: {
      fontSize: 14,
      fontWeight: 600,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center'
    },
    overline: {
      fontSize: 20,
      fontWeight: 800,
      fontFamily: 'Montserrat',
      color: '#2882F8',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center'
    }
  }
});
globalTheme.overrides = {
  MuiTextField: {
    root: {
      background: globalTheme.background.paper,
      marginTop: globalTheme.spacing(2),
      marginBottom: globalTheme.spacing(3),
      borderRadius: globalTheme.shape.borderRadius
    }
  },
  MuiInputBase: {
    root: {
      padding: globalTheme.spacing(1)
    }
  },
  MuiButton: {
    root: {
      fontSize: 14,
      height: '53px',
      fontWeight: 600,
      fontFamily: 'Montserrat',
      letterSpacing: '0.0075em',
      marginTop: '18px'
    }
  },
  MuiListItemText: {
    root: {
      fontSize: 20,
      fontWeight: 800,
      fontFamily: 'Montserrat',
      color: '#2882F8',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (globalTheme);

/***/ }),

/***/ "./actions/getUserActions.js":
/*!***********************************!*\
  !*** ./actions/getUserActions.js ***!
  \***********************************/
/*! exports provided: handleSnackBarStatus, loadMostPopularUsers, handleCityToSearchChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSnackBarStatus", function() { return handleSnackBarStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMostPopularUsers", function() { return loadMostPopularUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCityToSearchChange", function() { return handleCityToSearchChange; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./actions/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable import/prefer-default-export */



const pick = __webpack_require__(/*! lodash.pick */ "lodash.pick");

const map = __webpack_require__(/*! lodash.map */ "lodash.map");

const partialRight = __webpack_require__(/*! lodash.partialright */ "lodash.partialright");

const headers = {
  'Content-Type': 'application/json'
};
const handleSnackBarStatus = bool => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SNACKBAR_STATUS"],
    payload: bool
  };
};

const getEachUserGivenId = (id, index) => {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.all([axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${id}`), axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${id}/repos?per_page=200`)]).then(axios__WEBPACK_IMPORTED_MODULE_1___default.a.spread((userProfile, userRepo) => {
      let userProfileData = userProfile.data;
      const totalUserStars = userRepo.data.map(i => i.stargazers_count).reduce((total, item) => total + item);
      let result = pick(userProfileData, ['login', 'bio', 'email', 'name', 'id']);
      let modifiedResult = Object.assign(result, {
        totalUserStars: totalUserStars
      });

      if (result && Object.entries(modifiedResult).length !== 0 && result.constructor === Object) {
        resolve(modifiedResult);
      } else {
        reject(new Error('No data received'));
      }
    })).catch(err => {
      console.log('HIT the ERROR');
    });
  });
};

const mergeArraysConditionally = (topUsers, userProfiles) => {
  let merged = []; // First return the first array with only elements whose id matches with an element's id from the second array

  topUsers.every(i => userProfiles.map(j => j.id).includes(i.id) ? merged.push(i) : null); // Now that I have got two separate arrays of matched and the original array, simply merge the matched array (on the basis of ID) with the original array containing the data.

  merged = merged.map(i => Object.assign(i, userProfiles.find(j => j.id === i.id)));
  return merged;
};

const loadMostPopularUsers = (city, page, numbersToFetch) => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING"],
      payload: true
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'get',
      // url: `https://api.github.com/search/users?q=location%3A${city}&followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users`,
      url: `https://api.github.com/search/users?q=location:${city}`,
      headers
    }).then(async res => {
      const totalNoOfUsersFromAPI = res.data.items.length;
      const start = page * numbersToFetch;
      const end = start + numbersToFetch;
      const resData = res.data.items.slice(start, end);
      var topTenUsersInCity = map(resData, partialRight(pick, ['login', 'id', 'avatar_url']));
      const userIds = topTenUsersInCity.map(i => i.login);
      let topTenUserProfiles = await userIds.map(getEachUserGivenId);
      let topUserIndividualProfiles = Promise.all(topTenUserProfiles);
      topUserIndividualProfiles.then(res => {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MOST_POPULAR_USERS"],
          payload: {
            topTenUsersInCity: mergeArraysConditionally(topTenUsersInCity, res),
            totalNoOfUsersFromAPI
          }
        });
      }).catch(err => {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["ERROR_WHILE_FETCHING_INITIAL_TABLE"],
          payload: 'Error occurred while loading Initial Data'
        });
      });
    }).catch(err => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["ERROR_WHILE_FETCHING_INITIAL_TABLE"],
        payload: 'Error occurred while loading Initial Data'
      });
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["ERROR_WHILE_FETCHING_INITIAL_TABLE"],
      payload: 'Error occurred while loading Initial Data'
    });
  }
};
const handleCityToSearchChange = city => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CITY_TO_SEARCH"],
    payload: city
  };
};

/***/ }),

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: LOADING, LOAD_MOST_POPULAR_USERS, ERROR_WHILE_FETCHING_INITIAL_TABLE, CITY_TO_SEARCH, SNACKBAR_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MOST_POPULAR_USERS", function() { return LOAD_MOST_POPULAR_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_WHILE_FETCHING_INITIAL_TABLE", function() { return ERROR_WHILE_FETCHING_INITIAL_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITY_TO_SEARCH", function() { return CITY_TO_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNACKBAR_STATUS", function() { return SNACKBAR_STATUS; });
const LOADING = 'LOADING';
const LOAD_MOST_POPULAR_USERS = 'LOAD_MOST_POPULAR_USERS';
const ERROR_WHILE_FETCHING_INITIAL_TABLE = 'ERROR_WHILE_FETCHING_INITIAL_TABLE';
const CITY_TO_SEARCH = 'CITY_TO_SEARCH';
const SNACKBAR_STATUS = 'SNACKBAR_STATUS'; // export const UPDATE_TOP_TEN_USER_IN_CITY = 'UPDATE_TOP_TEN_USER_IN_CITY'

/***/ }),

/***/ "./components/AppSnackbarContent.js":
/*!******************************************!*\
  !*** ./components/AppSnackbarContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors/amber */ "@material-ui/core/colors/amber");
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "@material-ui/core/SnackbarContent");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/yuriikalashnikov/Desktop/popular-user-in-github/components/AppSnackbarContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  close: {
    padding: theme.spacing(2)
  },
  success: {
    backgroundColor: theme.palette.secondary.main
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_4___default.a[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const AppSnackbarContent = props => {
  const classes = useStyles();

  const {
    className,
    message,
    onClose,
    variant
  } = props,
        other = _objectWithoutProperties(props, ["className", "message", "onClose", "variant"]);

  return __jsx(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes[variant], className),
    "aria-describedby": "client-snackbar",
    message: __jsx("span", {
      id: "client-snackbar",
      className: classes.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, message) // eslint-disable-next-line react/jsx-props-no-spreading

  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }));
};

AppSnackbarContent.defaultProps = {
  className: undefined,
  message: '',
  onClose: () => {}
};
AppSnackbarContent.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  message: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['success', 'warning', 'error', 'info']).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppSnackbarContent);

/***/ }),

/***/ "./components/GlobalSnackbar.js":
/*!**************************************!*\
  !*** ./components/GlobalSnackbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AppSnackbarContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppSnackbarContent */ "./components/AppSnackbarContent.js");
var _jsxFileName = "/Users/yuriikalashnikov/Desktop/popular-user-in-github/components/GlobalSnackbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  margin: {
    margin: theme.spacing(4)
  }
}));

const GlobalSnackbar = ({
  open,
  onClose,
  message,
  variant
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    open: open,
    autoHideDuration: 8000,
    onClose: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_AppSnackbarContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: onClose,
    variant: variant,
    className: classes.margin,
    message: message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }));
};

GlobalSnackbar.defaultProps = {
  open: false,
  onClose: () => {},
  message: 'Unknown error',
  variant: 'warning'
};
GlobalSnackbar.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  message: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (GlobalSnackbar);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yuriikalashnikov/Desktop/popular-user-in-github/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* import {logo} from '../assets/favicon.ico'  */

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  container: {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    backgroundColor: theme.background.headers,
    textAlign: 'center',
    height: '80px'
  },
  internalContainer: {
    position: 'relative',
    height: '100%',
    margin: 'auto',
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center !important',
    justifyContent: 'center'
  },
  iconContainer: {
    padding: theme.spacing(2),
    '& img': {
      position: 'absolute',
      top: theme.spacing(2),
      left: theme.spacing(0),
      height: '50px',
      width: '65px'
    }
  },
  textContainer: {
    margin: 0,
    height: '100% !important',
    textAlign: 'center !important',
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  }
}));

const Header = ({}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.internalContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.iconContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("div", {
    className: classes.textContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, " Find Popular GutHub User "))));
};
/* Header.propTypes = {
  headerText: PropTypes.string.isRequired,
} */


/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlobalTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GlobalTheme */ "./GlobalTheme.js");
var _jsxFileName = "/Users/yuriikalashnikov/Desktop/popular-user-in-github/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["MuiThemeProvider"], {
  theme: _GlobalTheme__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Popular GutHub user in your city"), __jsx("link", {
  rel: "icon",
  href: "../public/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, props.children)));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LoadingSpinner.js":
/*!**************************************!*\
  !*** ./components/LoadingSpinner.js ***!
  \**************************************/
/*! exports provided: LoadingSpinner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yuriikalashnikov/Desktop/popular-user-in-github/components/LoadingSpinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '7rem',
    height: '100%'
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: '50%'
  }
});
const LoadingSpinner = ({
  size
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.progress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
    mode: "indeterminate",
    size: size,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })));
};
LoadingSpinner.defaultProps = {
  size: 80
};
LoadingSpinner.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./containers/EachUserListItem.js":
/*!****************************************!*\
  !*** ./containers/EachUserListItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/yuriikalashnikov/Desktop/popular-user-in-github/containers/EachUserListItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  eachUserContainerEven: {
    marginTop: '10px',
    width: '100%',
    paddingBottom: theme.spacing(2),
    backgroundColor: '#E5E4F3',
    border: '0.1px solid gray',
    borderRadius: '12px'
  },
  eachUserContainerOdd: {
    marginTop: '10px',
    width: '100%',
    paddingBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
    border: '0.1px solid gray',
    borderRadius: '12px' //borderBottomWidth: '0.5px !important',
    //borderBottom: '0.5px solid grey',

  },
  imageClass: {
    width: '25px',
    height: '25px'
  },
  listItem: {
    marginLeft: '80px'
  },
  avatar: {
    width: '60px',
    height: '70px'
  }
}));

const EachUserListItem = ({
  currentCityShown
}) => {
  const globalStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.globalStore);
  const classes = useStyles();
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    dense: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, globalStore.topTenUsersInCity.map((item, index) => {
    const labelId = `checkbox-list-secondary-label-${item}`;
    return __jsx("div", {
      className: index % 2 ? classes.eachUserContainerOdd : classes.eachUserContainerEven,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: item.id,
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: classes.avatar,
      alt: `Avatar n°${item + 1}`,
      src: item.avatar_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    })), __jsx("div", {
      style: {
        marginLeft: '15px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        display: 'table-cell'
      },
      href: `https://github.com/${item.login}`,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, item.login)))), __jsx("div", {
      style: {
        marginLeft: '102px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, "Total Stars Received", __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: labelId,
      primary: item.totalUserStars,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    })))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: index,
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }, __jsx("div", {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, "Name", __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: labelId,
      primary: item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }))), __jsx("div", {
      style: {
        marginLeft: '70px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: undefined
    }, "Bio", __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: labelId,
      primary: item.bio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    })))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        marginLeft: '70px',
        display: 'flex',
        flexDirection: 'row'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: undefined
    }, __jsx("img", {
      className: classes.imageClass
      /*  src={require('../public/location.png')} */
      ,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: undefined
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: undefined
    }, currentCityShown)), __jsx("div", {
      style: {
        marginLeft: '55px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, __jsx("img", {
      className: classes.imageClass
      /* src={require('../../assets/images/email.png')}
      alt="" */
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: labelId,
      primary: item.email === null ? 'Email not accessible' : item.email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: undefined
    })))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EachUserListItem);

/***/ }),

/***/ "./containers/GithubMostPopularList.js":
/*!*********************************************!*\
  !*** ./containers/GithubMostPopularList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GlobalSnackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GlobalSnackbar */ "./components/GlobalSnackbar.js");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoadingSpinner */ "./components/LoadingSpinner.js");
/* harmony import */ var _actions_getUserActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/getUserActions */ "./actions/getUserActions.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-autosuggest */ "react-autosuggest");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _EachUserListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EachUserListItem */ "./containers/EachUserListItem.js");
/* harmony import */ var _utils_country_city_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/country-city-js */ "./utils/country-city-js.js");
/* harmony import */ var react_autosuggest_dist_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-autosuggest/dist/theme */ "react-autosuggest/dist/theme");
/* harmony import */ var react_autosuggest_dist_theme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest_dist_theme__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _GithubMostPopularListStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GithubMostPopularListStyle */ "./containers/GithubMostPopularListStyle.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "@material-ui/core/TablePagination");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/yuriikalashnikov/Desktop/popular-user-in-github/containers/GithubMostPopularList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable react/button-has-type */

/* eslint-disable-next-line react-hooks/exhaustive-deps */















const escapeRegexCharacters = str => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');
  return _utils_country_city_js__WEBPACK_IMPORTED_MODULE_10__["default"].filter(language => regex.test(language.name));
};

const getSuggestionValue = suggestion => {
  return suggestion.name;
};

const renderSuggestion = suggestion => {
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, suggestion.name);
};

const GithubMostPopularList = ({
  onClose
}) => {
  const globalStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.globalStore);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const classes = Object(_GithubMostPopularListStyle__WEBPACK_IMPORTED_MODULE_12__["useStyles"])();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: suggestions,
    1: setSuggestions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: currentCityShown,
    1: setcurrentCityShown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(10);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_actions_getUserActions__WEBPACK_IMPORTED_MODULE_6__["loadMostPopularUsers"])(currentCityShown, page, rowsPerPage));
  }, [currentCityShown, dispatch, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const closeSnackbar = () => dispatch(Object(_actions_getUserActions__WEBPACK_IMPORTED_MODULE_6__["handleSnackBarStatus"])(false));

  const loadAllData = () => {
    const city = globalStore.city_to_search;
    setcurrentCityShown(city);
    dispatch(Object(_actions_getUserActions__WEBPACK_IMPORTED_MODULE_6__["loadMostPopularUsers"])(city, page, rowsPerPage));
  };

  const onChange = (event, {
    newValue,
    method
  }) => {
    dispatch(Object(_actions_getUserActions__WEBPACK_IMPORTED_MODULE_6__["handleCityToSearchChange"])(newValue));
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({
    value
  }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Start typing your city name',
    value,
    onChange: onChange
  };
  return __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.tableAndFabContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, console.log('PAGE ', page), globalStore.loading ? __jsx("div", {
    className: classes.spinner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })) : __jsx("div", {
    className: classes.table,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, console.log('SNACKBAR ', globalStore.snackbar), __jsx("div", {
    className: classes.inputandButtonContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_8___default.a, {
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    getSuggestionValue: getSuggestionValue,
    renderSuggestion: renderSuggestion,
    inputProps: inputProps,
    theme: _objectSpread({}, react_autosuggest_dist_theme__WEBPACK_IMPORTED_MODULE_11__["defaultTheme"], {
      container: classes.react_autosuggest__container,
      input: classes.react_autosuggest__input,
      inputOpen: classes.react_autosuggest__input__open,
      inputFocused: classes.react_autosuggest__input__focused,
      suggestionsContainer: classes.react_autosuggest__suggestions_container,
      suggestionsContainerOpen: classes.react_autosuggest__suggestions_container__open,
      suggestionsList: classes.react_autosuggest__suggestions_list,
      suggestion: classes.react_autosuggest__suggestion,
      suggestionHighlighted: classes.react_autosuggest__suggestion__highlighted
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: loadAllData,
    variant: "contained",
    size: "large",
    color: "primary",
    disabled: globalStore.city_to_search === '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h3",
    className: classes.modalButtonLabelEnabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Load City Data"))), __jsx("div", {
    style: {
      marginTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx(_EachUserListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    currentCityShown: currentCityShown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_13___default.a, {
    rowsPerPageOptions: [10, 15, 20],
    component: "div",
    count: globalStore.totalNoOfUsersFromAPI,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }), __jsx(_components_GlobalSnackbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: globalStore.snackbar === true || typeof globalStore.snackbar === 'object' || typeof globalStore.snackbar === 'string' || globalStore.snackbar instanceof String,
    variant: "error",
    message: 'Error occurred while loading Initial Data',
    onClose: closeSnackbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  })));
};

GithubMostPopularList.propTypes = {
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GithubMostPopularList);

/***/ }),

/***/ "./containers/GithubMostPopularListStyle.js":
/*!**************************************************!*\
  !*** ./containers/GithubMostPopularListStyle.js ***!
  \**************************************************/
/*! exports provided: useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  container: {
    margin: 'auto',
    backgroundColor: theme.background.default,
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px'
  },
  tableAndFabContainer: {
    position: 'relative',
    margin: 'auto',
    maxWidth: '1400px',
    minHeight: 'calc(100vh - 100px)',
    alignItems: 'center ',
    justifyContent: 'centert',
    verticalAlign: 'middle t',
    textAlign: 'center'
  },
  table: {
    backgroundColor: theme.background.paper,
    paddingBottom: '100px',
    alignItems: 'center ',
    justifyContent: 'center ',
    verticalAlign: 'middle ',
    textAlign: 'center'
  },
  inputandButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center ',
    justifyContent: 'center '
  },
  react_autosuggest__container: {
    position: 'relative',
    height: '30px',
    marginRight: '10px'
  },
  react_autosuggest__input: {
    width: '240px',
    height: '30px',
    padding: '10px 20px',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '16px',
    border: '1px solid #aaa',
    borderRadius: '4px'
  },
  react_autosuggest__input__focused: {
    outline: 'none'
  },
  react_autosuggest__input__open: {
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0'
  },
  react_autosuggest__suggestions_container: {
    display: 'none'
  },
  react_autosuggest__suggestions_container__open: {
    display: 'block',
    position: 'absolute',
    left: 0,
    top: '51px',
    width: '280px',
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '16px',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    zIndex: '2'
  },
  react_autosuggest__suggestions_list: {
    margin: '0',
    padding: '0',
    listStyleType: 'none'
  },
  react_autosuggest__suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  react_autosuggest__suggestion__highlighted: {
    backgroundColor: '#6711E0'
  }
}));


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_GithubMostPopularList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/GithubMostPopularList */ "./containers/GithubMostPopularList.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _GlobalTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../GlobalTheme */ "./GlobalTheme.js");
var _jsxFileName = "/Users/yuriikalashnikov/Desktop/popular-user-in-github/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const store = Object(redux__WEBPACK_IMPORTED_MODULE_9__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["default"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_9__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_8___default.a));
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    width: '100%'
  },
  header: {
    height: '64px'
  },
  contentContainer: {
    height: 'calc(100% - 64px)'
  }
}));

const Home = () => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store,
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_containers_GithubMostPopularList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1561337796",
    __self: undefined
  }, ".container.jsx-1561337796{width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpaWthbGFzaG5pa292L0Rlc2t0b3AvcG9wdWxhci11c2VyLWluLWdpdGh1Yi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2UsQUFHc0IsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy95dXJpaWthbGFzaG5pa292L0Rlc2t0b3AvcG9wdWxhci11c2VyLWluLWdpdGh1Yi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEdpdGh1Yk1vc3RQb3B1bGFyTGlzdCBmcm9tICcuLi9jb250YWluZXJzL0dpdGh1Yk1vc3RQb3B1bGFyTGlzdCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgcm9vdFJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzJ1xuaW1wb3J0IHJlZHV4VGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IGdsb2JhbFRoZW1lIGZyb20gJy4uL0dsb2JhbFRoZW1lJ1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcnMsIHt9LCBhcHBseU1pZGRsZXdhcmUocmVkdXhUaHVuaykpXG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGhlaWdodDogJzY0cHgnLFxuICB9LFxuICBjb250ZW50Q29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiAnY2FsYygxMDAlIC0gNjRweCknLFxuICB9LFxufSkpXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgPlxuICA8TGF5b3V0ID4gICAgXG4gICA8R2l0aHViTW9zdFBvcHVsYXJMaXN0Lz5cbiAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuICA8L1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/yuriikalashnikov/Desktop/popular-user-in-github/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ "./reducers/userReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  globalStore: _userReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  error_while_fetching_initial_table: false,
  error_while_fetching_initial_data: false,
  city_to_search: '',
  snackbar: false,
  topTenUsersInCity: [],
  totalNoOfUsersFromAPI: 0
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, actions) => {
  switch (actions.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOADING"]:
      return _objectSpread({}, state, {
        loading: actions.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SNACKBAR_STATUS"]:
      console.log('SNACKBAR COMING TO REDUCER ', actions.payload);
      return _objectSpread({}, state, {
        snackbar: actions.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MOST_POPULAR_USERS"]:
      // console.log('RESP IN REDUCER ', state.topTenUsersInCity)
      return _objectSpread({}, state, {
        loading: false,
        snackbar: false,
        topTenUsersInCity: actions.payload.topTenUsersInCity,
        totalNoOfUsersFromAPI: actions.payload.totalNoOfUsersFromAPI
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ERROR_WHILE_FETCHING_INITIAL_TABLE"]:
      return _objectSpread({}, state, {
        snackbar: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CITY_TO_SEARCH"]:
      return _objectSpread({}, state, {
        city_to_search: actions.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./utils/country-city-js.js":
/*!**********************************!*\
  !*** ./utils/country-city-js.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const countryCity=[{"name":"les Escaldes"},{"name":"Andorra la Vella"},{"name":"Umm al Qaywayn"},{"name":"Ras al-Khaimah"},{"name":"Khawr Fakkān"},{"name":"Dubai"},{"name":"Dibba Al-Fujairah"},{"name":"Dibba Al-Hisn"},{"name":"Sharjah"},{"name":"Ar Ruways"},{"name":"Al Fujayrah"},{"name":"Al Ain"},{"name":"Ajman"},{"name":"Adh Dhayd"},{"name":"Abu Dhabi"},{"name":"Zaranj"},{"name":"Taloqan"},{"name":"Shīnḏanḏ"},{"name":"Shibirghān"},{"name":"Shahrak"},{"name":"Sar-e Pul"},{"name":"Sang-e Chārak"},{"name":"Aībak"},{"name":"Rustāq"},{"name":"Qarqīn"},{"name":"Qarāwul"},{"name":"Pul-e Khumrī"},{"name":"Paghmān"},{"name":"Nahrīn"},{"name":"Maymana"},{"name":"Mehtar Lām"},{"name":"Mazār-e Sharīf"},{"name":"Lashkar Gāh"},{"name":"Kushk"},{"name":"Kunduz"},{"name":"Khōst"},{"name":"Khulm"},{"name":"Khāsh"},{"name":"Khanabad"},{"name":"Karukh"},{"name":"Kandahār"},{"name":"Kabul"},{"name":"Jalālābād"},{"name":"Jabal os Saraj"},{"name":"Herāt"},{"name":"Ghormach"},{"name":"Ghazni"},{"name":"Gereshk"},{"name":"Gardēz"},{"name":"Fayzabad"},{"name":"Farah"},{"name":"Kafir Qala"},{"name":"Charikar"},{"name":"Barakī Barak"},{"name":"Bāmyān"},{"name":"Balkh"},{"name":"Baghlān"},{"name":"Ārt Khwājah"},{"name":"Āsmār"},{"name":"Asadābād"},{"name":"Andkhōy"},{"name":"Bāzārak"},{"name":"Markaz-e Woluswalī-ye Āchīn"},{"name":"Saint John’s"},{"name":"The Valley"},{"name":"Sarandë"},{"name":"Kukës"},{"name":"Korçë"},{"name":"Gjirokastër"},{"name":"Elbasan"},{"name":"Burrel"},{"name":"Vlorë"},{"name":"Tirana"},{"name":"Shkodër"},{"name":"Patos Fshat"},{"name":"Lushnjë"},{"name":"Lezhë"},{"name":"Laç"},{"name":"Kuçovë"},{"name":"Krujë"},{"name":"Kavajë"},{"name":"Fier-Çifçi"},{"name":"Fier"},{"name":"Durrës"},{"name":"Berat"},{"name":"Kapan"},{"name":"Goris"},{"name":"Hats’avan"},{"name":"Artashat"},{"name":"Ararat"},{"name":"Yerevan"},{"name":"Ejmiatsin"},{"name":"Spitak"},{"name":"Sevan"},{"name":"Masis"},{"name":"Vanadzor"},{"name":"Gavarr"},{"name":"Hrazdan"},{"name":"Armavir"},{"name":"Gyumri"},{"name":"Ashtarak"},{"name":"Abovyan"},{"name":"Saurimo"},{"name":"Lucapa"},{"name":"Luau"},{"name":"Uíge"},{"name":"Soio"},{"name":"Nzeto"},{"name":"N’dalatando"},{"name":"Mbanza Congo"},{"name":"Malanje"},{"name":"Luanda"},{"name":"Caxito"},{"name":"Cabinda"},{"name":"Sumbe"},{"name":"Namibe"},{"name":"Menongue"},{"name":"Luena"},{"name":"Lubango"},{"name":"Longonjo"},{"name":"Lobito"},{"name":"Cuito"},{"name":"Huambo"},{"name":"Catumbela"},{"name":"Catabola"},{"name":"Camacupa"},{"name":"Caluquembe"},{"name":"Caála"},{"name":"Benguela"},{"name":"Zárate"},{"name":"Villa Ocampo"},{"name":"Villa Lugano"},{"name":"Villaguay"},{"name":"Villa Gesell"},{"name":"Tigre"},{"name":"Tandil"},{"name":"San Vicente"},{"name":"Santo Tomé"},{"name":"Santa Elena"},{"name":"San Pedro"},{"name":"San Luis del Palmar"},{"name":"San Lorenzo"},{"name":"San Javier"},{"name":"San Isidro"},{"name":"Saladas"},{"name":"Retiro"},{"name":"Resistencia"},{"name":"Reconquista"},{"name":"Quilmes"},{"name":"Puerto Rico"},{"name":"Puerto Iguazú"},{"name":"Puerto Esperanza"},{"name":"Puerto Eldorado"},{"name":"Posadas"},{"name":"Pontevedra"},{"name":"Pirané"},{"name":"Paso de los Libres"},{"name":"Oberá"},{"name":"Necochea"},{"name":"Morón"},{"name":"Monte Caseros"},{"name":"Montecarlo"},{"name":"Mercedes"},{"name":"Mercedes"},{"name":"Mar del Plata"},{"name":"Luján"},{"name":"La Plata"},{"name":"La Paz"},{"name":"Jardín América"},{"name":"Gualeguaychú"},{"name":"Gualeguay"},{"name":"Goya"},{"name":"Gobernador Ingeniero Valentín Virasoro"},{"name":"General José de San Martín"},{"name":"Garupá"},{"name":"Formosa"},{"name":"Fontana"},{"name":"Federal"},{"name":"Esquina"},{"name":"El Soberbio"},{"name":"Dolores"},{"name":"Curuzú Cuatiá"},{"name":"Corrientes"},{"name":"Concordia"},{"name":"Concepción del Uruguay"},{"name":"Colegiales"},{"name":"Chajarí"},{"name":"Campana"},{"name":"Buenos Aires"},{"name":"Barranqueras"},{"name":"Azul"},{"name":"Avellaneda"},{"name":"Aristóbulo del Valle"},{"name":"Zapala"},{"name":"Yerba Buena"},{"name":"Villa Regina"},{"name":"Villa Paula de Sarmiento"},{"name":"Villa Nueva"},{"name":"Villa María"},{"name":"Villa Dolores"},{"name":"Villa Constitución"},{"name":"Villa Carlos Paz"},{"name":"Villa Ángela"},{"name":"Villa Allende"},{"name":"Viedma"},{"name":"Victoria"},{"name":"Vera"},{"name":"Venado Tuerto"},{"name":"Veinticinco de Mayo"},{"name":"Ushuaia"},{"name":"Unquillo"},{"name":"Tres Isletas"},{"name":"Tres Arroyos"},{"name":"Trelew"},{"name":"Termas de Río Hondo"},{"name":"Tartagal"},{"name":"Tafí Viejo"},{"name":"Sunchales"},{"name":"Santo Tomé"},{"name":"Santiago del Estero"},{"name":"Santa Rosa"},{"name":"Santa Lucía"},{"name":"Santa Fe de la Vera Cruz"},{"name":"San Salvador de Jujuy"},{"name":"San Ramón de la Nueva Orán"},{"name":"San Rafael"},{"name":"San Pedro"},{"name":"San Nicolás de los Arroyos"},{"name":"San Miguel de Tucumán"},{"name":"San Martín de los Andes"},{"name":"San Martín"},{"name":"San Luis"},{"name":"San Justo"},{"name":"San Juan"},{"name":"San José de Jáchal"},{"name":"San Jorge"},{"name":"San Francisco"},{"name":"San Fernando del Valle de Catamarca"},{"name":"San Antonio Oeste"},{"name":"Salta"},{"name":"Rufino"},{"name":"Rosario"},{"name":"Río Tercero"},{"name":"Río Segundo"},{"name":"Río Gallegos"},{"name":"Río Cuarto"},{"name":"Río Ceballos"},{"name":"Rawson"},{"name":"Rafaela"},{"name":"Quitilipi"},{"name":"Punta Alta"},{"name":"Puerto Madryn"},{"name":"Presidencia Roque Sáenz Peña"},{"name":"Pocito"},{"name":"Plottier"},{"name":"Pergamino"},{"name":"Pérez"},{"name":"Paraná"},{"name":"Palpalá"},{"name":"Olavarría"},{"name":"Nueve de Julio"},{"name":"Neuquén"},{"name":"Morteros"},{"name":"Monteros"},{"name":"Mendoza"},{"name":"Marcos Juárez"},{"name":"Machagai"},{"name":"Lincoln"},{"name":"Libertador General San Martín"},{"name":"Las Breñas"},{"name":"La Rioja"},{"name":"La Falda"},{"name":"La Calera"},{"name":"Laboulaye"},{"name":"Junín"},{"name":"Joaquín V. González"},{"name":"Jesús María"},{"name":"Granadero Baigorria"},{"name":"Gobernador Gálvez"},{"name":"General Roca"},{"name":"General Pinedo"},{"name":"General Pico"},{"name":"General Enrique Mosconi"},{"name":"Gálvez"},{"name":"Firmat"},{"name":"Famaillá"},{"name":"Esquel"},{"name":"Esperanza"},{"name":"Embarcación"},{"name":"Embalse"},{"name":"El Bolsón"},{"name":"Diamante"},{"name":"Deán Funes"},{"name":"Cutral-Có"},{"name":"Cruz del Eje"},{"name":"Crespo"},{"name":"Cosquín"},{"name":"Coronel Suárez"},{"name":"Coronda"},{"name":"Córdoba"},{"name":"Comodoro Rivadavia"},{"name":"Cipolletti"},{"name":"Cinco Saltos"},{"name":"Chivilcoy"},{"name":"Chimbas"},{"name":"Chilecito"},{"name":"Charata"},{"name":"Chacabuco"},{"name":"Centenario"},{"name":"Caucete"},{"name":"Catriel"},{"name":"Castelli"},{"name":"Casilda"},{"name":"Carcarañá"},{"name":"Capitán Bermúdez"},{"name":"Cañada de Gómez"},{"name":"Caleta Olivia"},{"name":"Bell Ville"},{"name":"Bella Vista"},{"name":"Bahía Blanca"},{"name":"Arroyo Seco"},{"name":"Arroyito"},{"name":"Añatuya"},{"name":"Alta Gracia"},{"name":"Allen"},{"name":"Alderetes"},{"name":"Albardón"},{"name":"Aguilares"},{"name":"Villa Santa Rita"},{"name":"Villa Mercedes"},{"name":"San Carlos de Bariloche"},{"name":"Adrogué"},{"name":"Pago Pago"},{"name":"Wolfsberg"},{"name":"Wiener Neustadt"},{"name":"Vienna"},{"name":"Wels"},{"name":"Weinzierl bei Krems"},{"name":"Villach"},{"name":"Traun"},{"name":"Traiskirchen"},{"name":"Ternitz"},{"name":"Steyr"},{"name":"Spittal an der Drau"},{"name":"Schwechat"},{"name":"Sankt Pölten"},{"name":"Salzburg"},{"name":"Saalfelden am Steinernen Meer"},{"name":"Mödling"},{"name":"Lustenau"},{"name":"Linz"},{"name":"Leonding"},{"name":"Leoben"},{"name":"Kufstein"},{"name":"Krems an der Donau"},{"name":"Klosterneuburg"},{"name":"Klagenfurt am Wörthersee"},{"name":"Kapfenberg"},{"name":"Innsbruck"},{"name":"Hallein"},{"name":"Graz"},{"name":"Feldkirch"},{"name":"Dornbirn"},{"name":"Bregenz"},{"name":"Braunau am Inn"},{"name":"Baden"},{"name":"Amstetten"},{"name":"Ansfelden"},{"name":"Whyalla"},{"name":"Rockingham"},{"name":"Prospect"},{"name":"Port Hedland"},{"name":"Perth"},{"name":"Murray Bridge"},{"name":"Mount Isa"},{"name":"Morphett Vale"},{"name":"Mandurah"},{"name":"Kwinana"},{"name":"Kalgoorlie"},{"name":"Gosnells"},{"name":"Geraldton"},{"name":"Gawler"},{"name":"Fremantle"},{"name":"Darwin"},{"name":"Busselton"},{"name":"Bunbury"},{"name":"Armadale"},{"name":"Alice Springs"},{"name":"Albany"},{"name":"Adelaide"},{"name":"Woodridge"},{"name":"Wodonga"},{"name":"Werribee"},{"name":"Warrnambool"},{"name":"Wantirna South"},{"name":"Wangaratta"},{"name":"Wagga Wagga"},{"name":"Traralgon"},{"name":"Townsville"},{"name":"Toowoomba"},{"name":"Thornbury"},{"name":"Thomastown"},{"name":"Tarneit"},{"name":"Taree"},{"name":"Tamworth"},{"name":"Sydney"},{"name":"Surfers Paradise"},{"name":"Sunnybank"},{"name":"Sunbury"},{"name":"Port Stephens"},{"name":"Springvale"},{"name":"Southport"},{"name":"South Grafton"},{"name":"Shepparton"},{"name":"Seaford"},{"name":"Saint Kilda"},{"name":"Saint Albans"},{"name":"Rowville"},{"name":"Rockhampton"},{"name":"Richmond"},{"name":"Reservoir"},{"name":"Queanbeyan"},{"name":"Quakers Hill"},{"name":"Preston"},{"name":"Port Macquarie"},{"name":"Point Cook"},{"name":"Pakenham South"},{"name":"Orange"},{"name":"Nowra"},{"name":"Northcote"},{"name":"Noble Park"},{"name":"Newcastle"},{"name":"Nerang"},{"name":"Narre Warren"},{"name":"Narangba"},{"name":"Mulgrave"},{"name":"Mount Martha"},{"name":"Mount Gambier"},{"name":"Mount Eliza"},{"name":"Mosman"},{"name":"Mornington"},{"name":"Morayfield"},{"name":"Moe"},{"name":"Mill Park"},{"name":"Mildura"},{"name":"Melton"},{"name":"Melbourne"},{"name":"Maryborough"},{"name":"Marrickville"},{"name":"Maroubra"},{"name":"Maitland"},{"name":"Mackay"},{"name":"Liverpool"},{"name":"Lismore"},{"name":"Lilydale"},{"name":"Launceston"},{"name":"Lara"},{"name":"Langwarrin"},{"name":"Lalor"},{"name":"Keysborough"},{"name":"Kew"},{"name":"Katoomba"},{"name":"Hornsby"},{"name":"Hobart"},{"name":"Hawthorn South"},{"name":"Hampton Park"},{"name":"Griffith"},{"name":"Greensborough"},{"name":"Granville"},{"name":"Goulburn"},{"name":"Gold Coast"},{"name":"Glenroy"},{"name":"Glenferrie"},{"name":"Gladstone"},{"name":"Geelong"},{"name":"Frankston East"},{"name":"Frankston"},{"name":"Forster"},{"name":"Essendon"},{"name":"Epping"},{"name":"Epping"},{"name":"Engadine"},{"name":"Eltham"},{"name":"Echuca"},{"name":"Earlwood"},{"name":"Dubbo"},{"name":"Doncaster East"},{"name":"Doncaster"},{"name":"Devonport"},{"name":"Deer Park"},{"name":"Deception Bay"},{"name":"Dandenong"},{"name":"Cronulla"},{"name":"Cranbourne"},{"name":"Cranbourne"},{"name":"Craigieburn"},{"name":"Coffs Harbour"},{"name":"Coburg"},{"name":"Clayton"},{"name":"Wollongong"},{"name":"Cessnock"},{"name":"Castle Hill"},{"name":"Carrum Downs"},{"name":"Carnegie"},{"name":"Carlingford"},{"name":"Caringbah"},{"name":"Canberra"},{"name":"Camberwell"},{"name":"Caloundra"},{"name":"Cairns"},{"name":"Caboolture"},{"name":"Burnie"},{"name":"Bundaberg"},{"name":"Buderim"},{"name":"Brunswick"},{"name":"Broken Hill"},{"name":"Brisbane"},{"name":"Boronia"},{"name":"Blacktown"},{"name":"Berwick"},{"name":"Bendigo"},{"name":"Baulkham Hills"},{"name":"Bathurst"},{"name":"Banora Point"},{"name":"Bankstown"},{"name":"Ballarat"},{"name":"Auburn"},{"name":"Ashfield"},{"name":"Armidale"},{"name":"Albury"},{"name":"South Brisbane"},{"name":"Cheltenham"},{"name":"Randwick"},{"name":"Dee Why"},{"name":"Umina"},{"name":"Palmerston"},{"name":"Bracken Ridge"},{"name":"North Ryde"},{"name":"Hoppers Crossing"},{"name":"Logan City"},{"name":"Carindale"},{"name":"Paramatta"},{"name":"Ferntree Gully"},{"name":"City of Parramatta"},{"name":"Adelaide Hills"},{"name":"Canning Vale"},{"name":"Glenmore Park"},{"name":"Glen Iris"},{"name":"Balwyn North"},{"name":"Carnegie"},{"name":"Malvern East"},{"name":"Brighton East"},{"name":"Booval"},{"name":"St Albans"},{"name":"Endeavour Hills"},{"name":"Clayton"},{"name":"Taylors Lakes"},{"name":"Roxburgh Park"},{"name":"Wyndham Vale"},{"name":"Willetton"},{"name":"Thornbury"},{"name":"Thornlie"},{"name":"Hillside"},{"name":"Bundoora"},{"name":"Forest Lake"},{"name":"Sunnybank Hills"},{"name":"Narre Warren South"},{"name":"Dandenong North"},{"name":"Frankston South"},{"name":"Sunshine West"},{"name":"Altona Meadows"},{"name":"West Pennant"},{"name":"Oranjestad"},{"name":"Babijn"},{"name":"Angochi"},{"name":"Mariehamn"},{"name":"Xankandi"},{"name":"Əhmədbəyli"},{"name":"Shushi"},{"name":"Salyan"},{"name":"Saatlı"},{"name":"Neftçala"},{"name":"Nakhchivan"},{"name":"Lankaran"},{"name":"Imishli"},{"name":"Fizuli"},{"name":"Dzhalilabad"},{"name":"Pushkino"},{"name":"Beylagan"},{"name":"Astara"},{"name":"Şirvan"},{"name":"Ağdam"},{"name":"Zaqatala"},{"name":"Zabrat"},{"name":"Yevlakh"},{"name":"Yelenendorf"},{"name":"Xaçmaz"},{"name":"Ujar"},{"name":"Terter"},{"name":"Sumqayıt"},{"name":"Qaraçuxur"},{"name":"Shamkhor"},{"name":"Shamakhi"},{"name":"Sheki"},{"name":"Sabunçu"},{"name":"Sabirabad"},{"name":"Qusar"},{"name":"Quba"},{"name":"Hacıqabul"},{"name":"Qazax"},{"name":"Hacı Zeynalabdin"},{"name":"Mingelchaur"},{"name":"Maştağa"},{"name":"Mardakan"},{"name":"Lökbatan"},{"name":"Kyurdarmir"},{"name":"Khirdalan"},{"name":"Yeni Suraxanı"},{"name":"Geoktschai"},{"name":"Hövsan"},{"name":"Ganja"},{"name":"Divichibazar"},{"name":"Buzovna"},{"name":"Biny Selo"},{"name":"Barda"},{"name":"Bilajari"},{"name":"Baku"},{"name":"Amirdzhan"},{"name":"Aghsu"},{"name":"Ağdaş"},{"name":"Agdzhabedy"},{"name":"Bakıxanov"},{"name":"Zenica"},{"name":"Visoko"},{"name":"Velika Kladuša"},{"name":"Tuzla"},{"name":"Trebinje"},{"name":"Travnik"},{"name":"Sarajevo"},{"name":"Prijedor"},{"name":"Mostar"},{"name":"Gradačac"},{"name":"Gračanica"},{"name":"Goražde"},{"name":"Doboj"},{"name":"Cazin"},{"name":"Bugojno"},{"name":"Brčko"},{"name":"Bosanska Krupa"},{"name":"Bijeljina"},{"name":"Bihać"},{"name":"Banja Luka"},{"name":"Konjic"},{"name":"Bridgetown"},{"name":"Thākurgaon"},{"name":"Teknāf"},{"name":"Tungi"},{"name":"Sylhet"},{"name":"Dohār"},{"name":"Jamālpur"},{"name":"Shibganj"},{"name":"Sātkhira"},{"name":"Sirājganj"},{"name":"Netrakona"},{"name":"Narsingdi"},{"name":"Sandwīp"},{"name":"Shāhzādpur"},{"name":"Rāmganj"},{"name":"Rājshāhi"},{"name":"Pirojpur"},{"name":"Panchagarh"},{"name":"Patiya"},{"name":"Parbatipur"},{"name":"Nārāyanganj"},{"name":"Nālchiti"},{"name":"Nāgarpur"},{"name":"Nageswari"},{"name":"Mymensingh"},{"name":"Muktāgācha"},{"name":"Mirzāpur"},{"name":"Maulavi Bāzār"},{"name":"Morrelgonj"},{"name":"Mehendiganj"},{"name":"Mathba"},{"name":"Lalmanirhat"},{"name":"Lākshām"},{"name":"Comilla"},{"name":"Rangpur"},{"name":"Kushtia"},{"name":"Kālīganj"},{"name":"Jhingergācha"},{"name":"Joypur Hāt"},{"name":"Ishurdi"},{"name":"Habiganj"},{"name":"Gaurnadi"},{"name":"Gafargaon"},{"name":"Feni"},{"name":"Rāipur"},{"name":"Sarankhola"},{"name":"Dhaka"},{"name":"Chilmāri"},{"name":"Chhāgalnāiya"},{"name":"Lālmohan"},{"name":"Khagrachhari"},{"name":"Chhātak"},{"name":"Bhātpāra Abhaynagar"},{"name":"Bherāmāra"},{"name":"Bhairab Bāzār"},{"name":"Bāndarban"},{"name":"Kālia"},{"name":"Baniachang"},{"name":"Bājitpur"},{"name":"Badarganj"},{"name":"Narail"},{"name":"Tungipāra"},{"name":"Sarishābāri"},{"name":"Sakhipur"},{"name":"Raojān"},{"name":"Phultala"},{"name":"Pālang"},{"name":"Pār Naogaon"},{"name":"Nabīnagar"},{"name":"Lakshmīpur"},{"name":"Kesabpur"},{"name":"Hājīganj"},{"name":"Farīdpur"},{"name":"Dinājpur"},{"name":"Uttar Char Fasson"},{"name":"Chittagong"},{"name":"Char Bhadrāsan"},{"name":"Bera"},{"name":"Burhānuddin"},{"name":"Sātkania"},{"name":"Cox’s Bāzār"},{"name":"Khulna"},{"name":"Bhola"},{"name":"Barisāl"},{"name":"Jessore"},{"name":"Pābna"},{"name":"Tāngāil"},{"name":"Bogra"},{"name":"Pīrgaaj"},{"name":"Nawābganj"},{"name":"Mādārīpur"},{"name":"Sherpur"},{"name":"Kishorganj"},{"name":"Manikchari"},{"name":"Bhāndāria"},{"name":"Fatikchari"},{"name":"Saidpur"},{"name":"Azimpur"},{"name":"Paltan"},{"name":"Zwijndrecht"},{"name":"Zwevegem"},{"name":"Zottegem"},{"name":"Zonhoven"},{"name":"Zoersel"},{"name":"Zemst"},{"name":"Zele"},{"name":"Zedelgem"},{"name":"Zaventem"},{"name":"Wuustwezel"},{"name":"Willebroek"},{"name":"Wevelgem"},{"name":"Wetteren"},{"name":"Westerlo"},{"name":"Wervik"},{"name":"Wavre"},{"name":"Waterloo"},{"name":"Waregem"},{"name":"Walcourt"},{"name":"Visé"},{"name":"Vilvoorde"},{"name":"Verviers"},{"name":"Turnhout"},{"name":"Tubize"},{"name":"Tournai"},{"name":"Torhout"},{"name":"Tongeren"},{"name":"Tienen"},{"name":"Tielt"},{"name":"Tessenderlo"},{"name":"Tervuren"},{"name":"Temse"},{"name":"Stekene"},{"name":"Stabroek"},{"name":"Soumagne"},{"name":"Soignies"},{"name":"Sint-Truiden"},{"name":"Sint-Pieters-Leeuw"},{"name":"Sint-Niklaas"},{"name":"Sint-Kruis"},{"name":"Sint-Katelijne-Waver"},{"name":"Sint-Gillis-Waas"},{"name":"Sint-Genesius-Rode"},{"name":"Seraing"},{"name":"Schoten"},{"name":"Schilde"},{"name":"Saint-Nicolas"},{"name":"Saint-Ghislain"},{"name":"Rotselaar"},{"name":"Ronse"},{"name":"Roeselare"},{"name":"Rixensart"},{"name":"Riemst"},{"name":"Ranst"},{"name":"Quaregnon"},{"name":"Puurs"},{"name":"Putte"},{"name":"Poperinge"},{"name":"Pont-à-Celles"},{"name":"Péruwelz"},{"name":"Peer"},{"name":"Overijse"},{"name":"Oupeye"},{"name":"Oudenaarde"},{"name":"Oostkamp"},{"name":"Ostend"},{"name":"Nivelles"},{"name":"Ninove"},{"name":"Nijlen"},{"name":"Neerpelt"},{"name":"Namur"},{"name":"Mouscron"},{"name":"Mortsel"},{"name":"Morlanwelz-Mariemont"},{"name":"Mons"},{"name":"Mol"},{"name":"Middelkerke"},{"name":"Merelbeke"},{"name":"Menen"},{"name":"Meise"},{"name":"Mechelen"},{"name":"Marche-en-Famenne"},{"name":"Manage"},{"name":"Maldegem"},{"name":"Maasmechelen"},{"name":"Maaseik"},{"name":"Louvain-la-Neuve"},{"name":"Londerzeel"},{"name":"Lommel"},{"name":"Lokeren"},{"name":"Lochristi"},{"name":"Lille"},{"name":"Lier"},{"name":"Liège"},{"name":"Leuven"},{"name":"Lessines"},{"name":"Lede"},{"name":"Lebbeke"},{"name":"Lanaken"},{"name":"La Louvière"},{"name":"Kortrijk"},{"name":"Kortenberg"},{"name":"Kontich"},{"name":"Koksijde"},{"name":"Knokke-Heist"},{"name":"Kasterlee"},{"name":"Kapellen"},{"name":"Kalmthout"},{"name":"Izegem"},{"name":"Ieper"},{"name":"Huy"},{"name":"Houthalen"},{"name":"Hoogstraten"},{"name":"Hoboken"},{"name":"Heusden"},{"name":"Herzele"},{"name":"Herve"},{"name":"Herstal"},{"name":"Herentals"},{"name":"Herent"},{"name":"Helchteren"},{"name":"Heist-op-den-Berg"},{"name":"Hasselt"},{"name":"Harelbeke"},{"name":"Hamme"},{"name":"Halle"},{"name":"Haaltert"},{"name":"Grimbergen"},{"name":"Geraardsbergen"},{"name":"Gent"},{"name":"Genk"},{"name":"Gembloux"},{"name":"Geel"},{"name":"Frameries"},{"name":"Fleurus"},{"name":"Fléron"},{"name":"Flémalle-Haute"},{"name":"Evergem"},{"name":"Eupen"},{"name":"Essen"},{"name":"Eeklo"},{"name":"Edegem"},{"name":"Duffel"},{"name":"Dour"},{"name":"Dilbeek"},{"name":"Diksmuide"},{"name":"Diest"},{"name":"Diepenbeek"},{"name":"Destelbergen"},{"name":"Dendermonde"},{"name":"Denderleeuw"},{"name":"Deinze"},{"name":"Courcelles"},{"name":"Colfontaine"},{"name":"Chaudfontaine"},{"name":"Châtelet"},{"name":"Chasse Royale"},{"name":"Charleroi"},{"name":"Brussels"},{"name":"Brugge"},{"name":"Brecht"},{"name":"Brasschaat"},{"name":"Braine-le-Comte"},{"name":"Braine-l'Alleud"},{"name":"Boussu"},{"name":"Bornem"},{"name":"Boom"},{"name":"Blankenberge"},{"name":"Binche"},{"name":"Bilzen"},{"name":"Beveren"},{"name":"Beringen"},{"name":"Beersel"},{"name":"Beerse"},{"name":"Balen"},{"name":"Ath"},{"name":"Asse"},{"name":"Arlon"},{"name":"Antwerpen"},{"name":"Ans"},{"name":"Andenne"},{"name":"Aarschot"},{"name":"Aalter"},{"name":"Aalst"},{"name":"Zorgo"},{"name":"Yako"},{"name":"Tougan"},{"name":"Titao"},{"name":"Tenkodogo"},{"name":"Réo"},{"name":"Pô"},{"name":"Ouahigouya"},{"name":"Ouagadougou"},{"name":"Nouna"},{"name":"Manga"},{"name":"Léo"},{"name":"Koupéla"},{"name":"Koudougou"},{"name":"Kongoussi"},{"name":"Kombissiri"},{"name":"Kokologo"},{"name":"Kaya"},{"name":"Houndé"},{"name":"Gourcy"},{"name":"Garango"},{"name":"Fada N'gourma"},{"name":"Dori"},{"name":"Djibo"},{"name":"Diapaga"},{"name":"Dédougou"},{"name":"Boussé"},{"name":"Boulsa"},{"name":"Bobo-Dioulasso"},{"name":"Banfora"},{"name":"Gaoua"},{"name":"Orodara"},{"name":"Yambol"},{"name":"Vratsa"},{"name":"Vidin"},{"name":"Velingrad"},{"name":"Veliko Tŭrnovo"},{"name":"Varna"},{"name":"Targovishte"},{"name":"Troyan"},{"name":"Dobrich"},{"name":"Svishtov"},{"name":"Svilengrad"},{"name":"Stara Zagora"},{"name":"Dupnitsa"},{"name":"Sofia"},{"name":"Smolyan"},{"name":"Sliven"},{"name":"Silistra"},{"name":"Shumen"},{"name":"Sevlievo"},{"name":"Sandanski"},{"name":"Samokov"},{"name":"Ruse"},{"name":"Razgrad"},{"name":"Rakovski"},{"name":"Popovo"},{"name":"Plovdiv"},{"name":"Pleven"},{"name":"Petrich"},{"name":"Peshtera"},{"name":"Pernik"},{"name":"Pazardzhik"},{"name":"Panagyurishte"},{"name":"Nova Zagora"},{"name":"Montana"},{"name":"Lovech"},{"name":"Lom"},{"name":"Kyustendil"},{"name":"Kardzhali"},{"name":"Haskovo"},{"name":"Kharmanli"},{"name":"Kazanlŭk"},{"name":"Karnobat"},{"name":"Karlovo"},{"name":"Gotse Delchev"},{"name":"Gorna Oryakhovitsa"},{"name":"Gabrovo"},{"name":"Dimitrovgrad"},{"name":"Chirpan"},{"name":"Cherven Bryag"},{"name":"Burgas"},{"name":"Botevgrad"},{"name":"Blagoevgrad"},{"name":"Berkovitsa"},{"name":"Aytos"},{"name":"Asenovgrad"},{"name":"Sitrah"},{"name":"Madīnat ‘Īsá"},{"name":"Jidd Ḩafş"},{"name":"Madīnat Ḩamad"},{"name":"Dār Kulayb"},{"name":"Al Muharraq"},{"name":"Manama"},{"name":"Ar Rifā‘"},{"name":"Makamba"},{"name":"Bururi"},{"name":"Bujumbura"},{"name":"Muramvya"},{"name":"Gitega"},{"name":"Ruyigi"},{"name":"Ngozi"},{"name":"Kayanza"},{"name":"Muyinga"},{"name":"Rutana"},{"name":"Tchaourou"},{"name":"Tanguiéta"},{"name":"Savé"},{"name":"Savalou"},{"name":"Sakété"},{"name":"Porto-Novo"},{"name":"Pobé"},{"name":"Parakou"},{"name":"Ouidah"},{"name":"Nikki"},{"name":"Natitingou"},{"name":"Malanville"},{"name":"Lokossa"},{"name":"Kétou"},{"name":"Kandi"},{"name":"Dogbo"},{"name":"Djougou"},{"name":"Dassa-Zoumé"},{"name":"Cové"},{"name":"Cotonou"},{"name":"Comé"},{"name":"Bohicon"},{"name":"Bembèrèkè"},{"name":"Bassila"},{"name":"Banikoara"},{"name":"Aplahoué"},{"name":"Allada"},{"name":"Abomey-Calavi"},{"name":"Abomey"},{"name":"Gustavia"},{"name":"Hamilton"},{"name":"Tutong"},{"name":"Seria"},{"name":"Kuala Belait"},{"name":"Bandar Seri Begawan"},{"name":"Yacuiba"},{"name":"Warnes"},{"name":"Villazón"},{"name":"Villa Yapacaní"},{"name":"Villamontes"},{"name":"Tupiza"},{"name":"Trinidad"},{"name":"Tarija"},{"name":"Sucre"},{"name":"Santiago del Torno"},{"name":"Santa Cruz de la Sierra"},{"name":"San Ignacio de Velasco"},{"name":"San Borja"},{"name":"Riberalta"},{"name":"Punata"},{"name":"Potosí"},{"name":"Oruro"},{"name":"Montero"},{"name":"Mizque"},{"name":"Llallagua"},{"name":"La Paz"},{"name":"Huanuni"},{"name":"Guayaramerín"},{"name":"Cotoca"},{"name":"Cochabamba"},{"name":"Cobija"},{"name":"Camiri"},{"name":"Kralendijk"},{"name":"Vitória do Mearim"},{"name":"Vitória de Santo Antão"},{"name":"Viseu"},{"name":"Conde"},{"name":"Vigia"},{"name":"Viçosa do Ceará"},{"name":"Viçosa"},{"name":"Viana"},{"name":"Várzea Alegre"},{"name":"Varjota"},{"name":"Vargem Grande"},{"name":"Valença do Piauí"},{"name":"União dos Palmares"},{"name":"União"},{"name":"Tuntum"},{"name":"Tucuruí"},{"name":"Tucumã"},{"name":"Trindade"},{"name":"Trairi"},{"name":"Toritama"},{"name":"Tomé Açu"},{"name":"Timon"},{"name":"Timbiras"},{"name":"Timbaúba"},{"name":"Tianguá"},{"name":"Teresina"},{"name":"São João dos Inhamuns"},{"name":"Tamandaré"},{"name":"Tabira"},{"name":"Surubim"},{"name":"Sousa"},{"name":"Soure"},{"name":"Solânea"},{"name":"Sobral"},{"name":"Sirinhaém"},{"name":"Sertânia"},{"name":"Serra Talhada"},{"name":"Senador Pompeu"},{"name":"Satuba"},{"name":"São Raimundo Nonato"},{"name":"São Miguel dos Campos"},{"name":"São Miguel do Guamá"},{"name":"São Mateus do Maranhão"},{"name":"São Luís do Quitunde"},{"name":"São Luís"},{"name":"São Lourenço da Mata"},{"name":"São José do Egito"},{"name":"São José de Ribamar"},{"name":"São José de Mipibu"},{"name":"São João dos Patos"},{"name":"São Gonçalo do Amarante"},{"name":"São Félix do Xingu"},{"name":"São Domingos do Maranhão"},{"name":"São Bento"},{"name":"São Bento"},{"name":"Santa Rita"},{"name":"Santarém"},{"name":"Santa Quitéria do Maranhão"},{"name":"Santa Quitéria"},{"name":"Santana do Ipanema"},{"name":"Santa Luzia"},{"name":"Santa Inês"},{"name":"Santa Helena"},{"name":"Santa Cruz do Capibaribe"},{"name":"Santa Cruz"},{"name":"Salinópolis"},{"name":"Salgueiro"},{"name":"Russas"},{"name":"Rio Largo"},{"name":"Rio Formoso"},{"name":"Ribeirão"},{"name":"Recife"},{"name":"Quixeramobim"},{"name":"Quixadá"},{"name":"Presidente Dutra"},{"name":"Santana"},{"name":"Porto Calvo"},{"name":"Portel"},{"name":"Pombos"},{"name":"Pombal"},{"name":"Piripiri"},{"name":"Piracuruca"},{"name":"Pinheiro"},{"name":"Pindaré Mirim"},{"name":"Pilar"},{"name":"Picos"},{"name":"Petrolina"},{"name":"Jatobá"},{"name":"Pesqueira"},{"name":"Pentecoste"},{"name":"Penalva"},{"name":"Pedro II"},{"name":"Pedra Branca"},{"name":"Paulo Afonso"},{"name":"Paulista"},{"name":"Patos"},{"name":"Parnamirim"},{"name":"Parnaíba"},{"name":"Parintins"},{"name":"Parelhas"},{"name":"Paraipaba"},{"name":"Paragominas"},{"name":"Paracuru"},{"name":"Palmares"},{"name":"Pacatuba"},{"name":"Pacajus"},{"name":"Ouricuri"},{"name":"Orós"},{"name":"Oriximiná"},{"name":"Olinda"},{"name":"Oeiras"},{"name":"Ábidos"},{"name":"Nova Russas"},{"name":"Nova Cruz"},{"name":"Nazaré da Mata"},{"name":"Natal"},{"name":"Murici"},{"name":"Moreno"},{"name":"Morada Nova"},{"name":"Monteiro"},{"name":"Monte Alegre"},{"name":"Mombaça"},{"name":"Moju"},{"name":"Mossoró"},{"name":"Mocajuba"},{"name":"Maués"},{"name":"Matriz de Camaragibe"},{"name":"Mari"},{"name":"Marechal Deodoro"},{"name":"Maragogi"},{"name":"Maracanaú"},{"name":"Marabá"},{"name":"Mamanguape"},{"name":"Maceió"},{"name":"Macau"},{"name":"Macapá"},{"name":"Macaíba"},{"name":"Limoeiro do Norte"},{"name":"Limoeiro"},{"name":"Lavras da Mangabeira"},{"name":"Lajedo"},{"name":"Lago da Pedra"},{"name":"Lagoa do Itaenga"},{"name":"Juazeiro do Norte"},{"name":"José de Freitas"},{"name":"João Pessoa"},{"name":"João Câmara"},{"name":"Jaguaruana"},{"name":"Jaguaribe"},{"name":"Jaboatão"},{"name":"Itupiranga"},{"name":"Itacoatiara"},{"name":"Itaporanga"},{"name":"Itapissuma"},{"name":"Itapipoca"},{"name":"Itapecuru Mirim"},{"name":"Itapagé"},{"name":"Itaituba"},{"name":"Itaitinga"},{"name":"Itabaiana"},{"name":"Ipueiras"},{"name":"Ipubi"},{"name":"Ipu"},{"name":"Ipojuca"},{"name":"Imperatriz"},{"name":"Iguatu"},{"name":"Igarapé Miri"},{"name":"Igarapé Açu"},{"name":"Igarassu"},{"name":"Icó"},{"name":"Horizonte"},{"name":"Guaraciaba do Norte"},{"name":"Guarabira"},{"name":"Guaiúba"},{"name":"Gravatá"},{"name":"Granja"},{"name":"Grajaú"},{"name":"Goiana"},{"name":"Glória do Goitá"},{"name":"Garanhuns"},{"name":"Gameleira"},{"name":"Fortaleza"},{"name":"Floriano"},{"name":"Floresta"},{"name":"Eusébio"},{"name":"Extremoz"},{"name":"Estreito"},{"name":"Esperantina"},{"name":"Esperança"},{"name":"Escada"},{"name":"Dom Pedro"},{"name":"Demerval Lobão"},{"name":"Delmiro Gouveia"},{"name":"Custódia"},{"name":"Cururupu"},{"name":"Currais Novos"},{"name":"Cupira"},{"name":"Crato"},{"name":"Crateús"},{"name":"Coroatá"},{"name":"Condado"},{"name":"Conceição do Araguaia"},{"name":"Colinas"},{"name":"Coelho Neto"},{"name":"Codó"},{"name":"Chapadinha"},{"name":"Chã Grande"},{"name":"Ceará Mirim"},{"name":"Caxias"},{"name":"Caucaia"},{"name":"Catolé do Rocha"},{"name":"Catende"},{"name":"Castanhal"},{"name":"Cascavel"},{"name":"Caruaru"},{"name":"Carpina"},{"name":"Carolina"},{"name":"Capitão Poço"},{"name":"Capanema"},{"name":"Canindé"},{"name":"Canguaretama"},{"name":"Campos Sales"},{"name":"Campo Maior"},{"name":"Campo Alegre"},{"name":"Campina Grande"},{"name":"Camocim"},{"name":"Cametá"},{"name":"Cajueiro"},{"name":"Cajazeiras"},{"name":"Caicó"},{"name":"Cabrobó"},{"name":"Cabo"},{"name":"Cabedelo"},{"name":"Buriti Bravo"},{"name":"Buíque"},{"name":"Breves"},{"name":"Brejo Santo"},{"name":"Brejo da Madre de Deus"},{"name":"Bragança"},{"name":"Bom Conselho"},{"name":"Boa Viagem"},{"name":"Bezerros"},{"name":"Benevides"},{"name":"Belo Jardim"},{"name":"Belém"},{"name":"Belém"},{"name":"Beberibe"},{"name":"Bayeux"},{"name":"Baturité"},{"name":"Barreiros"},{"name":"Barreirinhas"},{"name":"Barras"},{"name":"Barra do Corda"},{"name":"Barcarena"},{"name":"Barbalha"},{"name":"Balsas"},{"name":"Bacabal"},{"name":"Augusto Corrêa"},{"name":"Atalaia"},{"name":"Areia Branca"},{"name":"Arcoverde"},{"name":"Araripina"},{"name":"Arari"},{"name":"Arapiraca"},{"name":"Araguaína"},{"name":"Aracati"},{"name":"Aquiraz"},{"name":"Apodi"},{"name":"Ananindeua"},{"name":"Amaraji"},{"name":"Altos"},{"name":"Altamira"},{"name":"Almeirim"},{"name":"Alenquer"},{"name":"Alagoa Grande"},{"name":"Águas Belas"},{"name":"Água Preta"},{"name":"Afogados da Ingazeira"},{"name":"Açu"},{"name":"Acopiara"},{"name":"Acaraú"},{"name":"Abreu e Lima"},{"name":"Abaetetuba"},{"name":"Xique Xique"},{"name":"Xanxerê"},{"name":"Votuporanga"},{"name":"Votorantim"},{"name":"Volta Redonda"},{"name":"Vitória da Conquista"},{"name":"Vitória"},{"name":"Visconde do Rio Branco"},{"name":"Viradouro"},{"name":"Vinhedo"},{"name":"Vila Velha"},{"name":"Videira"},{"name":"Viçosa"},{"name":"Viana"},{"name":"Viamão"},{"name":"Vespasiano"},{"name":"Veranópolis"},{"name":"Vera Cruz"},{"name":"Wenceslau Braz"},{"name":"Venâncio Aires"},{"name":"Vazante"},{"name":"Vassouras"},{"name":"Várzea Paulista"},{"name":"Várzea Grande"},{"name":"Várzea da Palma"},{"name":"Varginha"},{"name":"Vargem Grande do Sul"},{"name":"Valparaíso"},{"name":"Valinhos"},{"name":"Valença"},{"name":"Valença"},{"name":"Vacaria"},{"name":"Uruguaiana"},{"name":"Uruçuca"},{"name":"Uruaçu"},{"name":"União da Vitória"},{"name":"Unaí"},{"name":"Una"},{"name":"Umuarama"},{"name":"Uberlândia"},{"name":"Uberaba"},{"name":"Ubatuba"},{"name":"Ubatã"},{"name":"Ubaitaba"},{"name":"Ubá"},{"name":"Tupanciretã"},{"name":"Tupaciguara"},{"name":"Tupã"},{"name":"Tucano"},{"name":"Tubarão"},{"name":"Trindade"},{"name":"Três Rios"},{"name":"Três Pontas"},{"name":"Três Passos"},{"name":"Três Lagoas"},{"name":"Três de Maio"},{"name":"Três Coroas"},{"name":"Três Corações"},{"name":"Tremembé"},{"name":"Tramandaí"},{"name":"Torres"},{"name":"Toledo"},{"name":"Tobias Barreto"},{"name":"Timóteo"},{"name":"Timbó"},{"name":"Tijucas"},{"name":"Tietê"},{"name":"Teutônia"},{"name":"Teresópolis"},{"name":"Teófilo Otoni"},{"name":"Teodoro Sampaio"},{"name":"Telêmaco Borba"},{"name":"Taubaté"},{"name":"Tatuí"},{"name":"Taquarituba"},{"name":"Taquaritinga"},{"name":"Taquari"},{"name":"Taquara"},{"name":"Tapiramutá"},{"name":"Tapes"},{"name":"Tanguá"},{"name":"Tanabi"},{"name":"Tambaú"},{"name":"Taiobeiras"},{"name":"Taboão da Serra"},{"name":"Suzano"},{"name":"Sumaré"},{"name":"Sorocaba"},{"name":"Soledade"},{"name":"Socorro"},{"name":"Sobradinho"},{"name":"Simão Dias"},{"name":"Silva Jardim"},{"name":"Sidrolândia"},{"name":"Sete Lagoas"},{"name":"Sertãozinho"},{"name":"Serrinha"},{"name":"Serra Negra"},{"name":"Serrana"},{"name":"Serra"},{"name":"Seropédica"},{"name":"Senhor do Bonfim"},{"name":"Senador Canedo"},{"name":"Seabra"},{"name":"Schroeder"},{"name":"Saubara"},{"name":"Sarzedo"},{"name":"Sarandi"},{"name":"Sarandi"},{"name":"Saquarema"},{"name":"Sapucaia"},{"name":"Sapiranga"},{"name":"São Vicente"},{"name":"São Sepé"},{"name":"São Sebastião do Passé"},{"name":"São Sebastião do Paraíso"},{"name":"São Sebastião do Caí"},{"name":"São Sebastião"},{"name":"São Roque"},{"name":"São Pedro da Aldeia"},{"name":"São Pedro"},{"name":"São Paulo"},{"name":"São Miguel do Iguaçu"},{"name":"São Miguel do Araguaia"},{"name":"São Mateus do Sul"},{"name":"São Mateus"},{"name":"São Marcos"},{"name":"São Manuel"},{"name":"São Luiz Gonzaga"},{"name":"São Luís de Montes Belos"},{"name":"São Lourenço do Sul"},{"name":"São Lourenço"},{"name":"São Leopoldo"},{"name":"São José dos Pinhais"},{"name":"São José dos Campos"},{"name":"São José do Rio Preto"},{"name":"São José do Rio Pardo"},{"name":"São José"},{"name":"São Joaquim da Barra"},{"name":"São Joaquim"},{"name":"São João Nepomuceno"},{"name":"São João de Meriti"},{"name":"São João del Rei"},{"name":"São João da Boa Vista"},{"name":"São João da Barra"},{"name":"São Jerônimo"},{"name":"São Gotardo"},{"name":"São Gonçalo do Sapucaí"},{"name":"São Gabriel"},{"name":"São Francisco do Sul"},{"name":"São Francisco do Conde"},{"name":"São Francisco"},{"name":"São Fidélis"},{"name":"São Cristóvão"},{"name":"São Carlos"},{"name":"São Caetano do Sul"},{"name":"São Borja"},{"name":"São Bernardo do Campo"},{"name":"São Bento do Sul"},{"name":"Santos Dumont"},{"name":"Santos"},{"name":"Santo Estêvão"},{"name":"Santo Antônio do Monte"},{"name":"Santo Antônio do Amparo"},{"name":"Santo Antônio de Posse"},{"name":"Santo Antônio de Pádua"},{"name":"Santo Antônio de Jesus"},{"name":"Santo Antônio da Platina"},{"name":"Santo Ângelo"},{"name":"Santo André"},{"name":"Santo Anastácio"},{"name":"Santo Amaro da Imperatriz"},{"name":"Santo Amaro"},{"name":"Santiago"},{"name":"Santa Vitória do Palmar"},{"name":"Santa Rosa de Viterbo"},{"name":"Santa Rosa"},{"name":"Santa Rita do Sapucaí"},{"name":"Santa Rita do Passa Quatro"},{"name":"Santana do Paraíso"},{"name":"Santana do Livramento"},{"name":"Santana de Parnaíba"},{"name":"Santa Maria da Vitória"},{"name":"Santa Maria"},{"name":"Santa Luzia"},{"name":"Santaluz"},{"name":"Santa Isabel"},{"name":"Santa Helena de Goiás"},{"name":"Santa Gertrudes"},{"name":"Santa Fé do Sul"},{"name":"Santa Cruz do Sul"},{"name":"Santa Cruz do Rio Pardo"},{"name":"Santa Cruz das Palmeiras"},{"name":"Santa Cruz Cabrália"},{"name":"Santa Cecília"},{"name":"Santa Bárbara d'Oeste"},{"name":"Salvador"},{"name":"Salto de Pirapora"},{"name":"Salto"},{"name":"Salinas"},{"name":"Sacramento"},{"name":"Ruy Barbosa"},{"name":"Rubiataba"},{"name":"Rosário do Sul"},{"name":"Rondonópolis"},{"name":"Rolante"},{"name":"Rolândia"},{"name":"Rio Verde de Mato Grosso"},{"name":"Rio Real"},{"name":"Rio Pardo"},{"name":"Rio Negro"},{"name":"Rio Negrinho"},{"name":"Rio Grande da Serra"},{"name":"Rio Grande"},{"name":"Rio do Sul"},{"name":"Rio de Janeiro"},{"name":"Rio das Pedras"},{"name":"Rio das Ostras"},{"name":"Rio Claro"},{"name":"Rio Brilhante"},{"name":"Rio Branco do Sul"},{"name":"Rio Bonito"},{"name":"Ribeirão Preto"},{"name":"Ribeirão Pires"},{"name":"Ribeirão das Neves"},{"name":"Ribeirão da Ilha"},{"name":"Ribeira do Pombal"},{"name":"Riachão do Jacuípe"},{"name":"Resplendor"},{"name":"Resende"},{"name":"Registro"},{"name":"Regente Feijó"},{"name":"Rancharia"},{"name":"Quirinópolis"},{"name":"Queimados"},{"name":"Quatro Barras"},{"name":"Quaraí"},{"name":"Prudentópolis"},{"name":"Propriá"},{"name":"Promissão"},{"name":"Presidente Venceslau"},{"name":"Presidente Prudente"},{"name":"Presidente Epitácio"},{"name":"Prata"},{"name":"Praia Grande"},{"name":"Prado"},{"name":"Pouso Alegre"},{"name":"Posse"},{"name":"Porto União"},{"name":"Porto Seguro"},{"name":"Porto Ferreira"},{"name":"Porto Feliz"},{"name":"Porto Alegre"},{"name":"Portão"},{"name":"Porangatu"},{"name":"Pontes e Lacerda"},{"name":"Ponte Nova"},{"name":"Ponta Porã"},{"name":"Pontal"},{"name":"Ponta Grossa"},{"name":"Pompéu"},{"name":"Pompéia"},{"name":"Pomerode"},{"name":"Poços de Caldas"},{"name":"Poconé"},{"name":"Poções"},{"name":"Poá"},{"name":"Planaltina"},{"name":"Piúma"},{"name":"Piuí"},{"name":"Pitangui"},{"name":"Pitangueiras"},{"name":"Pitanga"},{"name":"Piritiba"},{"name":"Pires do Rio"},{"name":"Piraquara"},{"name":"Pirapozinho"},{"name":"Pirapora"},{"name":"Pirajuí"},{"name":"Piraju"},{"name":"Piraí do Sul"},{"name":"Piraí"},{"name":"Pirassununga"},{"name":"Piracicaba"},{"name":"Piracanjuba"},{"name":"Piracaia"},{"name":"Pinheiral"},{"name":"Pinhão"},{"name":"Espírito Santo do Pinhal"},{"name":"Pindobaçu"},{"name":"Pindamonhangaba"},{"name":"Pilar do Sul"},{"name":"Piedade"},{"name":"Petrópolis"},{"name":"Peruíbe"},{"name":"Pereira Barreto"},{"name":"Perdões"},{"name":"Penha"},{"name":"Penedo"},{"name":"Penápolis"},{"name":"Pelotas"},{"name":"Pedro Leopoldo"},{"name":"Pedreira"},{"name":"Pedra Azul"},{"name":"Pederneiras"},{"name":"Paulínia"},{"name":"Patrocínio"},{"name":"Patos de Minas"},{"name":"Pato Branco"},{"name":"Paty do Alferes"},{"name":"Passos"},{"name":"Passo Fundo"},{"name":"Parobé"},{"name":"Paraty"},{"name":"Paranavaí"},{"name":"Paranapanema"},{"name":"Paranaíba"},{"name":"Paranaguá"},{"name":"Paraíba do Sul"},{"name":"Paraguaçu Paulista"},{"name":"Paraguaçu"},{"name":"Pará de Minas"},{"name":"Paracatu"},{"name":"Paracambi"},{"name":"Panambi"},{"name":"Palotina"},{"name":"Palmital"},{"name":"Palmeira das Missões"},{"name":"Palmeira"},{"name":"Palmas"},{"name":"Palhoça"},{"name":"Paiçandu"},{"name":"Padre Bernardo"},{"name":"Ouro Preto"},{"name":"Ouro Branco"},{"name":"Ourinhos"},{"name":"Osvaldo Cruz"},{"name":"Osório"},{"name":"Osasco"},{"name":"Orleans"},{"name":"Orlândia"},{"name":"Oliveira"},{"name":"Olímpia"},{"name":"Novo Horizonte"},{"name":"Novo Hamburgo"},{"name":"Nova Viçosa"},{"name":"Nova Venécia"},{"name":"Nova Prata"},{"name":"Nova Petrópolis"},{"name":"Nova Olímpia"},{"name":"Nova Odessa"},{"name":"Nova Lima"},{"name":"Nova Iguaçu"},{"name":"Nova Granada"},{"name":"Nova Friburgo"},{"name":"Nova Era"},{"name":"Nossa Senhora do Socorro"},{"name":"Nossa Senhora da Glória"},{"name":"Niterói"},{"name":"Niquelândia"},{"name":"Nilópolis"},{"name":"Nerópolis"},{"name":"Nepomuceno"},{"name":"Nazaré"},{"name":"Naviraí"},{"name":"Navegantes"},{"name":"Nanuque"},{"name":"Muzambinho"},{"name":"Muritiba"},{"name":"Muriaé"},{"name":"Mucuri"},{"name":"Morro do Chapéu"},{"name":"Morro Agudo"},{"name":"Morrinhos"},{"name":"Montes Claros"},{"name":"Monte Santo de Minas"},{"name":"Montenegro"},{"name":"Monte Mor"},{"name":"Monte Carmelo"},{"name":"Monte Azul Paulista"},{"name":"Monte Aprazível"},{"name":"Monte Alto"},{"name":"Mongaguá"},{"name":"Mogi Mirim"},{"name":"Mogi-Gaucu"},{"name":"Mogi das Cruzes"},{"name":"Mococa"},{"name":"Mirandopólis"},{"name":"Miracema"},{"name":"Mineiros"},{"name":"Miguel Pereira"},{"name":"Miguelópolis"},{"name":"Mendes"},{"name":"Medianeira"},{"name":"Medeiros Neto"},{"name":"Mauá"},{"name":"Matozinhos"},{"name":"Mateus Leme"},{"name":"Matão"},{"name":"Mata de São João"},{"name":"Mascote"},{"name":"Martinópolis"},{"name":"Maringá"},{"name":"Marília"},{"name":"Maricá"},{"name":"Mariana"},{"name":"Marialva"},{"name":"Marechal Cândido Rondon"},{"name":"Marau"},{"name":"Marataizes"},{"name":"Maragogipe"},{"name":"Maracás"},{"name":"Maracaju"},{"name":"Manhumirim"},{"name":"Manhuaçu"},{"name":"Mangaratiba"},{"name":"Mandaguari"},{"name":"Mairiporã"},{"name":"Mairinque"},{"name":"Mafra"},{"name":"Machado"},{"name":"Macatuba"},{"name":"Macaé"},{"name":"Luziânia"},{"name":"Lucas"},{"name":"Louveira"},{"name":"Lorena"},{"name":"Londrina"},{"name":"Loanda"},{"name":"Livramento do Brumado"},{"name":"Lins"},{"name":"Linhares"},{"name":"Limeira"},{"name":"Leopoldina"},{"name":"Lençóis Paulista"},{"name":"Leme"},{"name":"Lavras"},{"name":"Laranjeiras do Sul"},{"name":"Laranjeiras"},{"name":"Laranjal Paulista"},{"name":"Lapa"},{"name":"Lajinha"},{"name":"Lages"},{"name":"Lajeado"},{"name":"Laguna"},{"name":"Lagoa Vermelha"},{"name":"Lagoa Santa"},{"name":"Lagoa da Prata"},{"name":"Lagarto"},{"name":"Ladário"},{"name":"Jundiaí"},{"name":"Júlio de Castilhos"},{"name":"Juiz de Fora"},{"name":"Juatuba"},{"name":"José Bonifácio"},{"name":"Joinville"},{"name":"João Pinheiro"},{"name":"João Monlevade"},{"name":"Joaçaba"},{"name":"Jeremoabo"},{"name":"Jequitinhonha"},{"name":"Jequié"},{"name":"Jaú"},{"name":"Jataí"},{"name":"Jarinu"},{"name":"Jardinópolis"},{"name":"Jardim"},{"name":"Jaraguá do Sul"},{"name":"Jaraguá"},{"name":"Japeri"},{"name":"Januária"},{"name":"Jandira"},{"name":"Jandaia do Sul"},{"name":"Janaúba"},{"name":"Jales"},{"name":"Jaguariúna"},{"name":"Jaguariaíva"},{"name":"Jaguarari"},{"name":"Jaguarão"},{"name":"Jaguaquara"},{"name":"Jacutinga"},{"name":"Jacobina"},{"name":"Jaciara"},{"name":"Jacarezinho"},{"name":"Jacareí"},{"name":"Jaboticabal"},{"name":"Ivoti"},{"name":"Ituverava"},{"name":"Iturama"},{"name":"Itupeva"},{"name":"Itumbiara"},{"name":"Ituiutaba"},{"name":"Ituberá"},{"name":"Itu"},{"name":"Itororó"},{"name":"Itaúna"},{"name":"Itatinga"},{"name":"Itatiba"},{"name":"Itararé"},{"name":"Itaqui"},{"name":"Itaquaquecetuba"},{"name":"Itapuranga"},{"name":"Itápolis"},{"name":"Itapira"},{"name":"Itapevi"},{"name":"Itapeva"},{"name":"Itapetininga"},{"name":"Itapetinga"},{"name":"Itaperuna"},{"name":"Itaperuçu"},{"name":"Itapemirim"},{"name":"Itapema"},{"name":"Itapecerica da Serra"},{"name":"Itapecerica"},{"name":"Itaparica"},{"name":"Itapaci"},{"name":"Itaocara"},{"name":"Itanhaém"},{"name":"Itambé"},{"name":"Itamarandiba"},{"name":"Itamaraju"},{"name":"Itajuípe"},{"name":"Itajubá"},{"name":"Itajaí"},{"name":"Itaí"},{"name":"Itaguaí"},{"name":"Itabuna"},{"name":"Itaboraí"},{"name":"Itabirito"},{"name":"Itabira"},{"name":"Itaberaí"},{"name":"Itaberaba"},{"name":"Itabaianinha"},{"name":"Itabaiana"},{"name":"Irecê"},{"name":"Irati"},{"name":"Iracemápolis"},{"name":"Iporá"},{"name":"Ipirá"},{"name":"Ipiaú"},{"name":"Iperó"},{"name":"Ipatinga"},{"name":"Ipameri"},{"name":"Ipaba"},{"name":"Inhumas"},{"name":"Indaiatuba"},{"name":"Indaial"},{"name":"Imbituva"},{"name":"Imbituba"},{"name":"Ilhéus"},{"name":"Ilha Solteira"},{"name":"Ilhabela"},{"name":"Ijuí"},{"name":"Iguape"},{"name":"Igrejinha"},{"name":"Igarapé"},{"name":"Igarapava"},{"name":"Igaraçu do Tietê"},{"name":"Içara"},{"name":"Ibotirama"},{"name":"Ibiúna"},{"name":"Ibitinga"},{"name":"Ibirité"},{"name":"Ibirataia"},{"name":"Ibirama"},{"name":"Ibiporã"},{"name":"Ibicaraí"},{"name":"Ibiá"},{"name":"Ibaté"},{"name":"Ibaiti"},{"name":"Iaçu"},{"name":"Hortolândia"},{"name":"Herval"},{"name":"Gurupi"},{"name":"Guaxupé"},{"name":"Guarulhos"},{"name":"Guarujá"},{"name":"Guariba"},{"name":"Guaratuba"},{"name":"Guaratinguetá"},{"name":"Guararema"},{"name":"Guararapes"},{"name":"Guarapuava"},{"name":"Guarapari"},{"name":"Guaranésia"},{"name":"Guaramirim"},{"name":"Guará"},{"name":"Guaporé"},{"name":"Guapimirim"},{"name":"Guanhães"},{"name":"Guanambi"},{"name":"Guaíra"},{"name":"Guaçuí"},{"name":"Gravataí"},{"name":"Governador Valadares"},{"name":"Goiatuba"},{"name":"Goiás"},{"name":"Goianira"},{"name":"Goiânia"},{"name":"Goianésia"},{"name":"Gaspar"},{"name":"Garibaldi"},{"name":"Garça"},{"name":"Gandu"},{"name":"Frutal"},{"name":"Frederico Westphalen"},{"name":"Franco da Rocha"},{"name":"Francisco Morato"},{"name":"Francisco Beltrão"},{"name":"Franca"},{"name":"Foz do Iguaçu"},{"name":"Forquilhinha"},{"name":"Formosa"},{"name":"Formiga"},{"name":"Florianópolis"},{"name":"Flores da Cunha"},{"name":"Ferraz de Vasconcelos"},{"name":"Fernandópolis"},{"name":"Feira de Santana"},{"name":"Farroupilha"},{"name":"Euclides da Cunha"},{"name":"Estrela"},{"name":"Esteio"},{"name":"Estância Velha"},{"name":"Estância"},{"name":"Esplanada"},{"name":"Espinosa"},{"name":"Esmeraldas"},{"name":"Erechim"},{"name":"Entre Rios"},{"name":"Encruzilhada do Sul"},{"name":"Encantado"},{"name":"Embu Guaçu"},{"name":"Embu"},{"name":"Elói Mendes"},{"name":"Duque de Caxias"},{"name":"Dourados"},{"name":"Dom Pedrito"},{"name":"Dois Vizinhos"},{"name":"Dois Córregos"},{"name":"Divinópolis"},{"name":"Diamantino"},{"name":"Diamantina"},{"name":"Diadema"},{"name":"Descalvado"},{"name":"Curvelo"},{"name":"Curitibanos"},{"name":"Curitiba"},{"name":"Cuiabá"},{"name":"Cubatão"},{"name":"Cruzeiro do Oeste"},{"name":"Cruzeiro"},{"name":"Cruz das Almas"},{"name":"Cruz Alta"},{"name":"Cristalina"},{"name":"Criciúma"},{"name":"Cravinhos"},{"name":"Coxim"},{"name":"Cotia"},{"name":"Cosmópolis"},{"name":"Coruripe"},{"name":"Corumbá"},{"name":"Coronel Vivida"},{"name":"Coronel Fabriciano"},{"name":"Coromandel"},{"name":"Cornélio Procópio"},{"name":"Corinto"},{"name":"Cordeirópolis"},{"name":"Cordeiro"},{"name":"Contagem"},{"name":"Conselheiro Lafaiete"},{"name":"Congonhas"},{"name":"Conde"},{"name":"Concórdia"},{"name":"Conchal"},{"name":"Conceição do Coité"},{"name":"Conceição do Jacuípe"},{"name":"Conceição das Alagoas"},{"name":"Conceição da Feira"},{"name":"Conceição da Barra"},{"name":"Colorado"},{"name":"Colombo"},{"name":"Colatina"},{"name":"Coaraci"},{"name":"Cláudio"},{"name":"Cícero Dantas"},{"name":"Cianorte"},{"name":"Charqueadas"},{"name":"Chapecó"},{"name":"Cerquilho"},{"name":"Ceres"},{"name":"Celso Ramos"},{"name":"Caxias do Sul"},{"name":"Caxambu"},{"name":"Catu"},{"name":"Catanduva"},{"name":"Catalão"},{"name":"Cataguases"},{"name":"Castro"},{"name":"Castelo"},{"name":"Cassilândia"},{"name":"Casimiro de Abreu"},{"name":"Cascavel"},{"name":"Casa Branca"},{"name":"Carmo do Paranaíba"},{"name":"Carmo do Cajuru"},{"name":"Carlos Barbosa"},{"name":"Carazinho"},{"name":"Caratinga"},{"name":"Carapicuíba"},{"name":"Carangola"},{"name":"Carandaí"},{"name":"Caraguatatuba"},{"name":"Capivari"},{"name":"Capinzal"},{"name":"Capim Grosso"},{"name":"Capelinha"},{"name":"Capela"},{"name":"Capão da Canoa"},{"name":"Capâo Bonito"},{"name":"Canoinhas"},{"name":"Canoas"},{"name":"Canguçu"},{"name":"Canela"},{"name":"Cândido Mota"},{"name":"Candelária"},{"name":"Canavieiras"},{"name":"Campo Verde"},{"name":"Campos Novos"},{"name":"Campos Gerais"},{"name":"Campos do Jordão"},{"name":"Campos Belos"},{"name":"Campos"},{"name":"Campo Mourão"},{"name":"Campo Largo"},{"name":"Campo Grande"},{"name":"Campo Formoso"},{"name":"Campo Belo"},{"name":"Campinas"},{"name":"Campina Grande do Sul"},{"name":"Cambuí"},{"name":"Cambé"},{"name":"Cambará"},{"name":"Camaquã"},{"name":"Camanducaia"},{"name":"Camaçari"},{"name":"Caldas Novas"},{"name":"Cajuru"},{"name":"Cajati"},{"name":"Cajamar"},{"name":"Caieiras"},{"name":"Caetité"},{"name":"Caeté"},{"name":"Cachoeiro de Itapemirim"},{"name":"Cachoeirinha"},{"name":"Cachoeiras de Macacu"},{"name":"Cachoeira do Sul"},{"name":"Cachoeira"},{"name":"Caçapava do Sul"},{"name":"Caçapava"},{"name":"Caçador"},{"name":"Cabreúva"},{"name":"Cabo Frio"},{"name":"Butiá"},{"name":"Buritizeiro"},{"name":"Buritis"},{"name":"Buri"},{"name":"Buerarema"},{"name":"Brusque"},{"name":"Brumado"},{"name":"Brumadinho"},{"name":"Brotas"},{"name":"Brodósqui"},{"name":"Brasília"},{"name":"Bragança Paulista"},{"name":"Braço do Norte"},{"name":"Botucatu"},{"name":"Bom Jesus do Itabapoana"},{"name":"Bom Jesus da Lapa"},{"name":"Bom Despacho"},{"name":"Boituva"},{"name":"Bocaiúva"},{"name":"Boa Esperança"},{"name":"Blumenau"},{"name":"Biritiba Mirim"},{"name":"Birigui"},{"name":"Biguaçu"},{"name":"Betim"},{"name":"Bertioga"},{"name":"Bento Gonçalves"},{"name":"Belo Oriente"},{"name":"Belo Horizonte"},{"name":"Belford Roxo"},{"name":"Bela Vista"},{"name":"Bebedouro"},{"name":"Bauru"},{"name":"Batatais"},{"name":"Bastos"},{"name":"Barueri"},{"name":"Barroso"},{"name":"Barrinha"},{"name":"Barretos"},{"name":"Barreiro do Jaíba"},{"name":"Barreiras"},{"name":"Barra Velha"},{"name":"Barra Mansa"},{"name":"Barra dos Coqueiros"},{"name":"Barra do Piraí"},{"name":"Barra do Garças"},{"name":"Barra do Bugres"},{"name":"Barra de São Francisco"},{"name":"Barra Bonita"},{"name":"Barra"},{"name":"Bariri"},{"name":"Barbacena"},{"name":"Barão de Cocais"},{"name":"Bandeirantes"},{"name":"Bambuí"},{"name":"Balneário Camboriú"},{"name":"Baixo Guandu"},{"name":"Bagé"},{"name":"Avaré"},{"name":"Atibaia"},{"name":"Astorga"},{"name":"Assis"},{"name":"Arujá"},{"name":"Artur Nogueira"},{"name":"Arroio Grande"},{"name":"Arroio do Meio"},{"name":"Arraial do Cabo"},{"name":"Armação de Búzios"},{"name":"Arcos"},{"name":"Araxá"},{"name":"Araucária"},{"name":"Araruama"},{"name":"Araras"},{"name":"Araraquara"},{"name":"Araranguá"},{"name":"Arapongas"},{"name":"Araguari"},{"name":"Aragarças"},{"name":"Araçuaí"},{"name":"Aracruz"},{"name":"Araçoiaba da Serra"},{"name":"Araci"},{"name":"Araçatuba"},{"name":"Aracaju"},{"name":"Aquidauana"},{"name":"Apucarana"},{"name":"Apiaí"},{"name":"Aparecida do Taboado"},{"name":"Aparecida"},{"name":"Antonina"},{"name":"Anicuns"},{"name":"Angra dos Reis"},{"name":"Andradina"},{"name":"Andradas"},{"name":"Anastácio"},{"name":"Anápolis"},{"name":"Amparo"},{"name":"Américo Brasiliense"},{"name":"Americana"},{"name":"Amargosa"},{"name":"Álvares Machado"},{"name":"Almirante Tamandaré"},{"name":"Almenara"},{"name":"Alfenas"},{"name":"Além Paraíba"},{"name":"Alegrete"},{"name":"Alegre"},{"name":"Alagoinhas"},{"name":"Aimorés"},{"name":"Agudos"},{"name":"Águas Vermelhas"},{"name":"Águas de Lindóia"},{"name":"Aguaí"},{"name":"Adamantina"},{"name":"Abaeté"},{"name":"Guaíba"},{"name":"Palmas"},{"name":"Tefé"},{"name":"Tarauacá"},{"name":"Tabatinga"},{"name":"Sena Madureira"},{"name":"São Gabriel da Cachoeira"},{"name":"Rio Branco"},{"name":"Porto Velho"},{"name":"Manaus"},{"name":"Manacapuru"},{"name":"Humaitá"},{"name":"Fonte Boa"},{"name":"Eirunepé"},{"name":"Cruzeiro do Sul"},{"name":"Coari"},{"name":"Carauari"},{"name":"Boa Vista"},{"name":"Ariquemes"},{"name":"Aripuanã"},{"name":"Vilhena"},{"name":"Pôsto Fiscal Rolim de Moura"},{"name":"Pimenta Bueno"},{"name":"Ouro Preto do Oeste"},{"name":"Ji Paraná"},{"name":"Jaru"},{"name":"Guajará Mirim"},{"name":"Cacoal"},{"name":"Aparecida de Goiânia"},{"name":"Campinas"},{"name":"Jaboatão dos Guararapes"},{"name":"Lauro de Freitas"},{"name":"Pinhais"},{"name":"Rio Preto da Eva"},{"name":"Simões Filho"},{"name":"Sinop"},{"name":"Cambebba"},{"name":"Trindade"},{"name":"Freguesia do Ribeirao da Ilha"},{"name":"Nassau"},{"name":"Lucaya"},{"name":"Freeport"},{"name":"Thimphu"},{"name":"Punākha"},{"name":"Phuntsholing"},{"name":"Tsirang"},{"name":"Tonota"},{"name":"Thamaga"},{"name":"Serowe"},{"name":"Selebi-Phikwe"},{"name":"Ramotswa"},{"name":"Palapye"},{"name":"Mosopa"},{"name":"Molepolole"},{"name":"Mogoditshane"},{"name":"Mochudi"},{"name":"Maun"},{"name":"Mahalapye"},{"name":"Lobatse"},{"name":"Letlhakane"},{"name":"Kanye"},{"name":"Janeng"},{"name":"Gaborone"},{"name":"Francistown"},{"name":"Horad Zhodzina"},{"name":"Zhlobin"},{"name":"Vitebsk"},{"name":"Vilyeyka"},{"name":"Vawkavysk"},{"name":"Svyetlahorsk"},{"name":"Stowbtsy"},{"name":"Smarhon’"},{"name":"Slutsk"},{"name":"Slonim"},{"name":"Shchuchin"},{"name":"Salihorsk"},{"name":"Rahachow"},{"name":"Rechytsa"},{"name":"Pruzhany"},{"name":"Polatsk"},{"name":"Pinsk"},{"name":"Pastavy"},{"name":"Asipovichy"},{"name":"Orsha"},{"name":"Novoye Medvezhino"},{"name":"Navapolatsk"},{"name":"Navahrudak"},{"name":"Minsk"},{"name":"Mazyr"},{"name":"Masty"},{"name":"Mar’’ina Horka"},{"name":"Maladzyechna"},{"name":"Mahilyow"},{"name":"Lyepyel’"},{"name":"Luninyets"},{"name":"Lida"},{"name":"Krychaw"},{"name":"Kalodzishchy"},{"name":"Kobryn"},{"name":"Kalinkavichy"},{"name":"Ivatsevichy"},{"name":"Hrodna"},{"name":"Horki"},{"name":"Gomel"},{"name":"Hlybokaye"},{"name":"Dzyarzhynsk"},{"name":"Dobrush"},{"name":"Bykhaw"},{"name":"Byaroza"},{"name":"Brest"},{"name":"Horad Barysaw"},{"name":"Baranovichi"},{"name":"Babruysk"},{"name":"Malinovka"},{"name":"San Ignacio"},{"name":"Orange Walk"},{"name":"Belmopan"},{"name":"Belize City"},{"name":"Abbotsford"},{"name":"Airdrie"},{"name":"Ajax"},{"name":"Alma"},{"name":"Amos"},{"name":"Anmore"},{"name":"Baie-Comeau"},{"name":"Barrie"},{"name":"Beaconsfield"},{"name":"Belleville"},{"name":"Beloeil"},{"name":"Blainville"},{"name":"Boisbriand"},{"name":"Boucherville"},{"name":"Bradford West Gwillimbury"},{"name":"Brampton"},{"name":"Brandon"},{"name":"Brant"},{"name":"Brantford"},{"name":"Brockville"},{"name":"Brossard"},{"name":"Burlington"},{"name":"Burnaby"},{"name":"Calgary"},{"name":"Cambridge"},{"name":"Campbell River"},{"name":"Camrose"},{"name":"Candiac"},{"name":"Chambly"},{"name":"Charlottetown"},{"name":"Châteauguay"},{"name":"Chilliwack"},{"name":"Clarence-Rockland"},{"name":"Cobourg"},{"name":"Cochrane"},{"name":"Collingwood"},{"name":"Conception Bay South"},{"name":"Coquitlam"},{"name":"Corner Brook"},{"name":"Cornwall"},{"name":"Côte-Saint-Luc"},{"name":"Courtenay"},{"name":"Cranbrook"},{"name":"Dartmouth"},{"name":"Delta"},{"name":"Deux-Montagnes"},{"name":"Dieppe"},{"name":"Dollard-Des Ormeaux"},{"name":"Dorval"},{"name":"Drummondville"},{"name":"Duncan"},{"name":"Edmonton"},{"name":"Etobicoke"},{"name":"Fort Erie"},{"name":"Fort McMurray"},{"name":"Fort St. John"},{"name":"Fredericton"},{"name":"Gatineau"},{"name":"Glace Bay"},{"name":"Granby"},{"name":"Grande Prairie"},{"name":"Greater Sudbury"},{"name":"Greater Napanee"},{"name":"Guelph"},{"name":"Hamilton"},{"name":"Huntsville"},{"name":"Joliette"},{"name":"Kamloops"},{"name":"Kelowna"},{"name":"Keswick"},{"name":"Kingston"},{"name":"Kirkland"},{"name":"Kitchener"},{"name":"Langford"},{"name":"Langley"},{"name":"Langley"},{"name":"La Prairie"},{"name":"L'Assomption"},{"name":"Laval"},{"name":"Leduc"},{"name":"Lethbridge"},{"name":"Lloydminster"},{"name":"London"},{"name":"Longueuil"},{"name":"Magog"},{"name":"Maple Ridge"},{"name":"Markham"},{"name":"Mascouche"},{"name":"Medicine Hat"},{"name":"Midland"},{"name":"Milton"},{"name":"Mirabel"},{"name":"Miramichi"},{"name":"Mississauga"},{"name":"Moncton"},{"name":"Montréal"},{"name":"Mont-Royal"},{"name":"Mont-Saint-Hilaire"},{"name":"Moose Jaw"},{"name":"Mount Pearl"},{"name":"Nanaimo"},{"name":"New Glasgow"},{"name":"Newmarket"},{"name":"New Westminster"},{"name":"Niagara Falls"},{"name":"Norfolk County"},{"name":"North Battleford"},{"name":"North Bay"},{"name":"North Cowichan"},{"name":"North Vancouver"},{"name":"North York"},{"name":"Oak Bay"},{"name":"Oakville"},{"name":"Orangeville"},{"name":"Orillia"},{"name":"Oshawa"},{"name":"Ottawa"},{"name":"Owen Sound"},{"name":"Parksville"},{"name":"Pembroke"},{"name":"Penticton"},{"name":"Petawawa"},{"name":"Peterborough"},{"name":"Pickering"},{"name":"Pitt Meadows"},{"name":"Pointe-Claire"},{"name":"Port Alberni"},{"name":"Port Colborne"},{"name":"Port Moody"},{"name":"Prince Albert"},{"name":"Prince Edward"},{"name":"Prince George"},{"name":"Quinte West"},{"name":"Rayside-Balfour"},{"name":"Red Deer"},{"name":"Regina"},{"name":"Repentigny"},{"name":"Richmond"},{"name":"Richmond Hill"},{"name":"Rouyn-Noranda"},{"name":"Saguenay"},{"name":"Saint-Basile-le-Grand"},{"name":"Saint-Bruno-de-Montarville"},{"name":"Saint-Constant"},{"name":"Sainte-Catherine"},{"name":"Sainte-Julie"},{"name":"Sainte-Thérèse"},{"name":"Saint-Eustache"},{"name":"Saint-Hyacinthe"},{"name":"Saint-Jean-sur-Richelieu"},{"name":"Saint-Jérôme"},{"name":"Saint John"},{"name":"Saint-Laurent"},{"name":"Saint-Lazare"},{"name":"Saint-Léonard"},{"name":"Salaberry-de-Valleyfield"},{"name":"Salmon Arm"},{"name":"Sarnia"},{"name":"Saskatoon"},{"name":"Sault Ste. Marie"},{"name":"Sept-Îles"},{"name":"Shawinigan"},{"name":"Sherbrooke"},{"name":"Sherwood Park"},{"name":"Sorel-Tracy"},{"name":"Spruce Grove"},{"name":"St. Albert"},{"name":"St. Catharines"},{"name":"Stratford"},{"name":"St. Thomas"},{"name":"Surrey"},{"name":"Terrace"},{"name":"Terrebonne"},{"name":"Thorold"},{"name":"Thunder Bay"},{"name":"Timmins"},{"name":"Toronto"},{"name":"Trois-Rivières"},{"name":"Truro"},{"name":"Val-d'Or"},{"name":"Vancouver"},{"name":"Varennes"},{"name":"Vaudreuil-Dorion"},{"name":"Vaughan"},{"name":"Vernon"},{"name":"Victoria"},{"name":"Victoriaville"},{"name":"Waterloo"},{"name":"Welland"},{"name":"West End"},{"name":"Westmount"},{"name":"Whitehorse"},{"name":"White Rock"},{"name":"Windsor"},{"name":"Winnipeg"},{"name":"Woodstock"},{"name":"Yellowknife"},{"name":"Yorkton"},{"name":"Halifax"},{"name":"St. John's"},{"name":"Québec"},{"name":"Lévis"},{"name":"Rimouski"},{"name":"Rivière-du-Loup"},{"name":"Sydney"},{"name":"L'Ancienne-Lorette"},{"name":"Edmundston"},{"name":"Thetford-Mines"},{"name":"Scarborough"},{"name":"Cole Harbour"},{"name":"Okanagan"},{"name":"West Kelowna"},{"name":"Bellechasse Regional County Municipality"},{"name":"Jonquière"},{"name":"Saint-Augustin-de-Desmaures"},{"name":"Ladner"},{"name":"Walnut Grove"},{"name":"Ancaster"},{"name":"West Vancouver"},{"name":"Willowdale"},{"name":"Lower Sacvkille"},{"name":"West Island"},{"name":"Yangambi"},{"name":"Watsa"},{"name":"Wamba"},{"name":"Uvira"},{"name":"Tshikapa"},{"name":"Sake"},{"name":"Mwene-Ditu"},{"name":"Mweka"},{"name":"Mbuji-Mayi"},{"name":"Lusambo"},{"name":"Luebo"},{"name":"Lubao"},{"name":"Lodja"},{"name":"Lisala"},{"name":"Kongolo"},{"name":"Kisangani"},{"name":"Kindu"},{"name":"Kasongo"},{"name":"Kananga"},{"name":"Kampene"},{"name":"Kamina"},{"name":"Kalemie"},{"name":"Kabinda"},{"name":"Kabare"},{"name":"Kabalo"},{"name":"Isiro"},{"name":"Ilebo"},{"name":"Goma"},{"name":"Gbadolite"},{"name":"Gandajika"},{"name":"Demba"},{"name":"Butembo"},{"name":"Buta"},{"name":"Businga"},{"name":"Bunia"},{"name":"Bumba"},{"name":"Bukavu"},{"name":"Bukama"},{"name":"Bondo"},{"name":"Boende"},{"name":"Beni"},{"name":"Basoko"},{"name":"Aketi"},{"name":"Lubumbashi"},{"name":"Likasi"},{"name":"Kolwezi"},{"name":"Kipushi"},{"name":"Kambove"},{"name":"Tshela"},{"name":"Nioki"},{"name":"Mushie"},{"name":"Mbanza-Ngungu"},{"name":"Mbandaka"},{"name":"Matadi"},{"name":"Mangai"},{"name":"Libenge"},{"name":"Kinshasa"},{"name":"Kikwit"},{"name":"Kasongo-Lunda"},{"name":"Kasangulu"},{"name":"Inongo"},{"name":"Gemena"},{"name":"Bulungu"},{"name":"Bolobo"},{"name":"Bandundu"},{"name":"Masina"},{"name":"Mobaye"},{"name":"Ippy"},{"name":"Bria"},{"name":"Bangassou"},{"name":"Bambari"},{"name":"Sibut"},{"name":"Paoua"},{"name":"Nola"},{"name":"Mbaïki"},{"name":"Kaga Bandoro"},{"name":"Damara"},{"name":"Carnot"},{"name":"Bozoum"},{"name":"Bouar"},{"name":"Bossangoa"},{"name":"Boda"},{"name":"Bimbo"},{"name":"Berbérati"},{"name":"Batangafo"},{"name":"Bangui"},{"name":"Sibiti"},{"name":"Pointe-Noire"},{"name":"Owando"},{"name":"Ouésso"},{"name":"Mossendjo"},{"name":"Madingou"},{"name":"Dolisie"},{"name":"Loandjili"},{"name":"Kayes"},{"name":"Impfondo"},{"name":"Gamboma"},{"name":"Brazzaville"},{"name":"Zürich"},{"name":"Zug"},{"name":"Yverdon-les-Bains"},{"name":"Winterthur"},{"name":"Wil"},{"name":"Wettingen"},{"name":"Vevey"},{"name":"Vernier"},{"name":"Uster"},{"name":"Thun"},{"name":"Steffisburg"},{"name":"Sitten"},{"name":"Sierre"},{"name":"Zürich (Kreis 11) / Seebach"},{"name":"Schaffhausen"},{"name":"Sankt Gallen"},{"name":"Renens"},{"name":"Rapperswil"},{"name":"Pully"},{"name":"Onex"},{"name":"Olten"},{"name":"Zürich (Kreis 11) / Oerlikon"},{"name":"Nyon"},{"name":"Neuchâtel"},{"name":"Muttenz"},{"name":"Montreux"},{"name":"Monthey"},{"name":"Meyrin"},{"name":"Luzern"},{"name":"Lugano"},{"name":"Littau"},{"name":"Le Châtelard"},{"name":"Lausanne"},{"name":"La Chaux-de-Fonds"},{"name":"Kriens"},{"name":"Kreuzlingen"},{"name":"Köniz"},{"name":"Kloten"},{"name":"Jona"},{"name":"Horgen"},{"name":"Zürich (Kreis 10) / Höngg"},{"name":"Herisau"},{"name":"Grenchen"},{"name":"Gossau"},{"name":"Genève"},{"name":"Fribourg"},{"name":"Frauenfeld"},{"name":"Emmen"},{"name":"Dübendorf"},{"name":"Dietikon"},{"name":"Chur"},{"name":"Carouge"},{"name":"Biel/Bienne"},{"name":"Bern"},{"name":"Bellinzona"},{"name":"Basel"},{"name":"Baden"},{"name":"Baar"},{"name":"Zürich (Kreis 4)"},{"name":"Allschwil"},{"name":"Adliswil"},{"name":"Aarau"},{"name":"Riehen"},{"name":"Zürich (Kreis 10) / Wipkingen"},{"name":"Zürich (Kreis 11) / Affoltern"},{"name":"Zürich (Kreis 2) / Wollishofen"},{"name":"Zürich (Kreis 3) / Sihlfeld"},{"name":"Zürich (Kreis 6) / Unterstrass"},{"name":"Zürich (Kreis 9) / Albisrieden"},{"name":"Zürich (Kreis 9) / Altstetten"},{"name":"Stadt Winterthur (Kreis 1)"},{"name":"Zürich (Kreis 12)"},{"name":"Seen (Kreis 3)"},{"name":"Zürich (Kreis 3)"},{"name":"Zürich (Kreis 11)"},{"name":"Zürich (Kreis 9)"},{"name":"Oberwinterthur (Kreis 2)"},{"name":"Zürich (Kreis 10)"},{"name":"Zürich (Kreis 2)"},{"name":"Zürich (Kreis 8)"},{"name":"Zürich (Kreis 7)"},{"name":"Zürich (Kreis 6)"},{"name":"Lancy"},{"name":"Zuénoula"},{"name":"Yamoussoukro"},{"name":"Vavoua"},{"name":"Toumodi"},{"name":"Touba"},{"name":"Tengrela"},{"name":"Tiassalé"},{"name":"Tanda"},{"name":"Tabou"},{"name":"Sinfra"},{"name":"Sassandra"},{"name":"San-Pédro"},{"name":"Sakassou"},{"name":"Oumé"},{"name":"Odienné"},{"name":"Mankono"},{"name":"Man"},{"name":"Lakota"},{"name":"Korhogo"},{"name":"Katiola"},{"name":"Issia"},{"name":"Guiglo"},{"name":"Grand-Bassam"},{"name":"Affery"},{"name":"Gagnoa"},{"name":"Ferkessédougou"},{"name":"Duekoué"},{"name":"Divo"},{"name":"Dimbokro"},{"name":"Daoukro"},{"name":"Danané"},{"name":"Daloa"},{"name":"Dabou"},{"name":"Boundiali"},{"name":"Bouna"},{"name":"Bouaké"},{"name":"Bouaflé"},{"name":"Bonoua"},{"name":"Bongouanou"},{"name":"Bondoukou"},{"name":"Bingerville"},{"name":"Biankouma"},{"name":"Béoumi"},{"name":"Bangolo"},{"name":"Arrah"},{"name":"Anyama"},{"name":"Akoupé"},{"name":"Agnibilékrou"},{"name":"Agboville"},{"name":"Adzopé"},{"name":"Adiaké"},{"name":"Aboisso"},{"name":"Abobo"},{"name":"Abidjan"},{"name":"Abengourou"},{"name":"Séguéla"},{"name":"Soubré"},{"name":"Avarua"},{"name":"Viña del Mar"},{"name":"Villarrica"},{"name":"Villa Alemana"},{"name":"Victoria"},{"name":"Valparaíso"},{"name":"Vallenar"},{"name":"Valdivia"},{"name":"Tomé"},{"name":"Tocopilla"},{"name":"Temuco"},{"name":"Talcahuano"},{"name":"Talca"},{"name":"Talagante"},{"name":"San Vicente de Tagua Tagua"},{"name":"San Vicente"},{"name":"Santiago"},{"name":"Santa Cruz"},{"name":"San Javier"},{"name":"San Felipe"},{"name":"San Carlos"},{"name":"San Bernardo"},{"name":"San Antonio"},{"name":"Río Bueno"},{"name":"Rengo"},{"name":"Rancagua"},{"name":"Quilpué"},{"name":"Quillota"},{"name":"Punta Arenas"},{"name":"Puerto Varas"},{"name":"Puerto Quellón"},{"name":"Puerto Natales"},{"name":"Puerto Montt"},{"name":"Puerto Aisén"},{"name":"Puente Alto"},{"name":"Pucón"},{"name":"Penco"},{"name":"Peñaflor"},{"name":"Parral"},{"name":"Panguipulli"},{"name":"Paine"},{"name":"Ovalle"},{"name":"Osorno"},{"name":"Nueva Imperial"},{"name":"Nacimiento"},{"name":"Mulchén"},{"name":"Molina"},{"name":"Melipilla"},{"name":"Machalí"},{"name":"Lota"},{"name":"Los Ángeles"},{"name":"Los Andes"},{"name":"Loncoche"},{"name":"Llaillay"},{"name":"Linares"},{"name":"Limache"},{"name":"Lebu"},{"name":"Lautaro"},{"name":"La Unión"},{"name":"La Serena"},{"name":"Lampa"},{"name":"La Ligua"},{"name":"La Laja"},{"name":"Iquique"},{"name":"Illapel"},{"name":"Hacienda La Calera"},{"name":"Graneros"},{"name":"Frutillar"},{"name":"El Monte"},{"name":"Diego de Almagro"},{"name":"Curicó"},{"name":"Curanilahue"},{"name":"Coronel"},{"name":"Coquimbo"},{"name":"Copiapó"},{"name":"Constitución"},{"name":"Concepción"},{"name":"Collipulli"},{"name":"Coihaique"},{"name":"Chimbarongo"},{"name":"Chillán"},{"name":"Chiguayante"},{"name":"Chicureo Abajo"},{"name":"Cauquenes"},{"name":"Castro"},{"name":"Cartagena"},{"name":"Cañete"},{"name":"Calama"},{"name":"Cabrero"},{"name":"Buin"},{"name":"Arica"},{"name":"Arauco"},{"name":"Antofagasta"},{"name":"Angol"},{"name":"Ancud"},{"name":"Las Animas"},{"name":"La Pintana"},{"name":"Lo Prado"},{"name":"Yaoundé"},{"name":"Yagoua"},{"name":"Wum"},{"name":"Tonga"},{"name":"Tiko"},{"name":"Tibati"},{"name":"Tcholliré"},{"name":"Sangmélima"},{"name":"Penja"},{"name":"Obala"},{"name":"Nkoteng"},{"name":"Nkongsamba"},{"name":"Ngaoundéré"},{"name":"Nanga Eboko"},{"name":"Muyuka"},{"name":"Mutengene"},{"name":"Mora"},{"name":"Mokolo"},{"name":"Melong"},{"name":"Meïganga"},{"name":"Mbouda"},{"name":"Mbanga"},{"name":"Mbandjok"},{"name":"Mbalmayo"},{"name":"Maroua"},{"name":"Manjo"},{"name":"Mamfe"},{"name":"Loum"},{"name":"Lolodorf"},{"name":"Limbe"},{"name":"Lagdo"},{"name":"Kumbo"},{"name":"Kumba"},{"name":"Kribi"},{"name":"Kousséri"},{"name":"Kaélé"},{"name":"Guider"},{"name":"Garoua Boulaï"},{"name":"Garoua"},{"name":"Fundong"},{"name":"Foumbot"},{"name":"Foumban"},{"name":"Fontem"},{"name":"Eséka"},{"name":"Edéa"},{"name":"Ébolowa"},{"name":"Dschang"},{"name":"Douala"},{"name":"Dizangué"},{"name":"Buea"},{"name":"Bogo"},{"name":"Bertoua"},{"name":"Bélabo"},{"name":"Batouri"},{"name":"Banyo"},{"name":"Bangangté"},{"name":"Bamusso"},{"name":"Bamenda"},{"name":"Bali"},{"name":"Bafoussam"},{"name":"Bafia"},{"name":"Bafang"},{"name":"Akonolinga"},{"name":"Idenao"},{"name":"Rikaze"},{"name":"Jiuquan"},{"name":"Shache"},{"name":"Qamdo"},{"name":"Nagqu"},{"name":"Lhasa"},{"name":"Laojunmiao"},{"name":"Kashgar"},{"name":"Jiayuguan"},{"name":"Hotan"},{"name":"Dêqên"},{"name":"Ürümqi"},{"name":"Laochenglu"},{"name":"Shihezi"},{"name":"Kuche"},{"name":"Sayibage"},{"name":"Hoxtolgay"},{"name":"Hami"},{"name":"Changji"},{"name":"Baijiantan"},{"name":"Aral"},{"name":"Altay"},{"name":"Yingbazha"},{"name":"Zunyi"},{"name":"Zoucheng"},{"name":"Yanjiang"},{"name":"Zigong"},{"name":"Zhuzhou"},{"name":"Zhumadian"},{"name":"Zhujiajiao"},{"name":"Shangqiu"},{"name":"Zhuji"},{"name":"Mizhou"},{"name":"Zhuanghe"},{"name":"Zhouzhuang"},{"name":"Zhoukou"},{"name":"Zhoucun"},{"name":"Yuxi"},{"name":"Zhongxing"},{"name":"Zhongshu"},{"name":"Zhicheng"},{"name":"Zhicheng"},{"name":"Zhenzhou"},{"name":"Zhenjiang"},{"name":"Zhaobaoshan"},{"name":"Zhengzhou"},{"name":"Xinghua"},{"name":"Zhaotong"},{"name":"Zhaoqing"},{"name":"Zhaogezhuang"},{"name":"Luofeng"},{"name":"Zhanjiang"},{"name":"Zhangzhou"},{"name":"Zhangye"},{"name":"Zibo"},{"name":"Anyang"},{"name":"Zaozhuang"},{"name":"Zaoyang"},{"name":"Yuyao"},{"name":"Yingchuan"},{"name":"Yuxia"},{"name":"Kunshan"},{"name":"Yunyang"},{"name":"Yunmeng Chengguanzhen"},{"name":"Jinghong"},{"name":"Pizhou"},{"name":"Yunfu"},{"name":"Yuncheng"},{"name":"Yulin"},{"name":"Yulin"},{"name":"Yudong"},{"name":"Yuci"},{"name":"Yucheng"},{"name":"Yuanping"},{"name":"Qianjiang"},{"name":"Heyuan"},{"name":"Yongfeng"},{"name":"Yongchuan"},{"name":"Yishui"},{"name":"Zhongxiang"},{"name":"Yingshang Chengguanzhen"},{"name":"Chengzhong"},{"name":"Yinchuan"},{"name":"Yima"},{"name":"Yigou"},{"name":"Qingzhou"},{"name":"Yichun"},{"name":"Yicheng"},{"name":"Yicheng"},{"name":"Yichang"},{"name":"Yibin"},{"name":"Yatou"},{"name":"Yashan"},{"name":"Yanzhou"},{"name":"Yantai"},{"name":"Yanliang"},{"name":"Yangzhou"},{"name":"Yangshuo"},{"name":"Zhangjiagang"},{"name":"Yangquan"},{"name":"Yangliuqing"},{"name":"Yanggu"},{"name":"Yangcun"},{"name":"Yancheng"},{"name":"Tongshan"},{"name":"Xucheng"},{"name":"Shangrao"},{"name":"Xunchang"},{"name":"Jiangguanchi"},{"name":"Xuanzhou"},{"name":"Xixiang"},{"name":"Xiuying"},{"name":"Xiulin"},{"name":"Xiongzhou"},{"name":"Guixi"},{"name":"Xinzhou"},{"name":"Xinzhou"},{"name":"Xinzhi"},{"name":"Xinyu"},{"name":"Hancheng"},{"name":"Xinyang"},{"name":"Nangandao"},{"name":"Xintai"},{"name":"Xinshi"},{"name":"Xinpu"},{"name":"Xinji"},{"name":"Xining"},{"name":"Shangmei"},{"name":"Xingtai"},{"name":"Ankang"},{"name":"Xindian"},{"name":"Xindi"},{"name":"Feicheng"},{"name":"Sanshui"},{"name":"Ximei"},{"name":"Wacheng"},{"name":"Xihe"},{"name":"Xichang"},{"name":"Xiazhuang"},{"name":"Xiazhen"},{"name":"Xiashi"},{"name":"Zijinglu"},{"name":"Xiaoweizhai"},{"name":"Xiaoshan"},{"name":"Xiaolingwei"},{"name":"Xiaogan"},{"name":"Xianyang"},{"name":"Xiantao"},{"name":"Xianshuigu"},{"name":"Xiannü"},{"name":"Xianning"},{"name":"Xianju"},{"name":"Zhuhai"},{"name":"Wenxing"},{"name":"Xiangxiang"},{"name":"Xiangtan"},{"name":"Xiangyang"},{"name":"Xiangcheng Chengguanzhen"},{"name":"Xi’an"},{"name":"Xiamen"},{"name":"Wuzhou"},{"name":"Wuyang"},{"name":"Wuxue"},{"name":"Wuxi"},{"name":"Dongyang"},{"name":"Changde"},{"name":"Wuhu"},{"name":"Wuhan"},{"name":"Wuhai"},{"name":"Wuda"},{"name":"Wucheng"},{"name":"Wenzhou"},{"name":"Wenshang"},{"name":"Wenling"},{"name":"Tianfu"},{"name":"Weinan"},{"name":"Weihai"},{"name":"Weifang"},{"name":"Wanxian"},{"name":"Wanning"},{"name":"Yinzhu"},{"name":"Wafangdian"},{"name":"Huangshan"},{"name":"Loushanguan"},{"name":"Tongzhou"},{"name":"Fuding"},{"name":"Tongren"},{"name":"Wusong"},{"name":"Tongchuan"},{"name":"Tianshui"},{"name":"Tianpeng"},{"name":"Tianjin"},{"name":"Tengzhou"},{"name":"Taozhuang"},{"name":"Tantou"},{"name":"Tangzhai"},{"name":"Tangshan"},{"name":"Tangping"},{"name":"Tangjiazhuang"},{"name":"Binhe"},{"name":"Tanggu"},{"name":"Taizhou"},{"name":"Taiyuan"},{"name":"Taixing"},{"name":"Taishan"},{"name":"Tai’an"},{"name":"Suzhou"},{"name":"Suozhen"},{"name":"Suizhou"},{"name":"Suixi"},{"name":"Suicheng"},{"name":"Suining"},{"name":"Songjiang"},{"name":"Sishui"},{"name":"Laixi"},{"name":"Shouguang"},{"name":"Shizuishan"},{"name":"Shizilu"},{"name":"Shiyan"},{"name":"Shiyan"},{"name":"Shiwan"},{"name":"Shitanjing"},{"name":"Shiqiao"},{"name":"Shiqi"},{"name":"Shima"},{"name":"Shilong"},{"name":"Tongchuan"},{"name":"Shijiazhuang"},{"name":"Shenzhen"},{"name":"Yanta"},{"name":"Shenjiamen"},{"name":"Shashi"},{"name":"Shaping"},{"name":"Shaoxing"},{"name":"Shaowu"},{"name":"Shaoguan"},{"name":"Shancheng"},{"name":"Shanwei"},{"name":"Shantou"},{"name":"Shanting"},{"name":"Shanghai"},{"name":"Shahecheng"},{"name":"Sanya"},{"name":"Sanming"},{"name":"Runing"},{"name":"Fuqing"},{"name":"Jieyang"},{"name":"Rizhao"},{"name":"Renqiu"},{"name":"Quzhou"},{"name":"Qujing"},{"name":"Qufu"},{"name":"Quanzhou"},{"name":"Wuxi"},{"name":"Zhuangyuan"},{"name":"Qiongshan"},{"name":"Qionghu"},{"name":"Qinzhou"},{"name":"Qinnan"},{"name":"Qinhuangdao"},{"name":"Jinjiang"},{"name":"Qingquan"},{"name":"Huai'an"},{"name":"Qingdao"},{"name":"Qingyuan"},{"name":"Hongqiao"},{"name":"Puyang Chengguanzhen"},{"name":"Puyang"},{"name":"Putian"},{"name":"Puqi"},{"name":"Pumiao"},{"name":"Pulandian"},{"name":"Poyang"},{"name":"Pingyin"},{"name":"Pingyi"},{"name":"Gutao"},{"name":"Pingxiang"},{"name":"Pingshan"},{"name":"Pingnan"},{"name":"Pingliang"},{"name":"Pingdu"},{"name":"Pingdingshan"},{"name":"Pengcheng"},{"name":"Dadukou"},{"name":"Ningyang"},{"name":"Yutan"},{"name":"Ninghai"},{"name":"Ninghai"},{"name":"Ningbo"},{"name":"Neijiang"},{"name":"Nanzhou"},{"name":"Nanzhang Chengguanzhen"},{"name":"Nanyang"},{"name":"Nantong"},{"name":"Pucheng"},{"name":"Nanping"},{"name":"Nanning"},{"name":"Nanma"},{"name":"Nanlong"},{"name":"Nanjing"},{"name":"Nangong"},{"name":"Nanfeng"},{"name":"Nandu"},{"name":"Nanding"},{"name":"Nanchong"},{"name":"Nanchang"},{"name":"Miyang"},{"name":"Mingshui"},{"name":"Mingguang"},{"name":"Minggang"},{"name":"Mianyang"},{"name":"Mentougou"},{"name":"Mengyin"},{"name":"Mengcheng Chengguanzhen"},{"name":"Meizhou"},{"name":"Wuchuan"},{"name":"Majie"},{"name":"Zhijiang"},{"name":"Macheng"},{"name":"Maba"},{"name":"Lüshun"},{"name":"Luqiao"},{"name":"Luoyang"},{"name":"Luoyang"},{"name":"Luoyang"},{"name":"Luorong"},{"name":"Luohe"},{"name":"Luocheng"},{"name":"Lucheng"},{"name":"Kangding"},{"name":"Lubu"},{"name":"Luancheng"},{"name":"Loudi"},{"name":"Longquan"},{"name":"Longgang"},{"name":"Licheng"},{"name":"Guankou"},{"name":"Puning"},{"name":"Lishui"},{"name":"Lintong"},{"name":"Linyi"},{"name":"Linxia Chengguanzhen"},{"name":"Linxi"},{"name":"Linshui"},{"name":"Linqu"},{"name":"Linqiong"},{"name":"Qingnian"},{"name":"Linping"},{"name":"Linhai"},{"name":"Lingcheng"},{"name":"Lincheng"},{"name":"Linfen"},{"name":"Xishan"},{"name":"Lichuan"},{"name":"Licheng"},{"name":"Liaocheng"},{"name":"Lianzhou"},{"name":"Lianzhou"},{"name":"Lianran"},{"name":"Wuwei"},{"name":"Liangxiang"},{"name":"Lianjiang"},{"name":"Leshan"},{"name":"Lengshuitan"},{"name":"Lengshuijiang"},{"name":"Leiyang"},{"name":"Lecheng"},{"name":"Laohekou"},{"name":"Lanzhou"},{"name":"Lanxi"},{"name":"Lianyuan"},{"name":"Langfang"},{"name":"Weichanglu"},{"name":"Laiyang"},{"name":"Laiwu"},{"name":"Laibin"},{"name":"Kunyang"},{"name":"Kunming"},{"name":"Kaiyuan"},{"name":"Kaihua"},{"name":"Kaifeng"},{"name":"Juye"},{"name":"Juegang"},{"name":"Jiujiang"},{"name":"Jishui"},{"name":"Qianzhou"},{"name":"Jinzhou"},{"name":"Jinxiang"},{"name":"Jinshi"},{"name":"Jinsha"},{"name":"Jinjiang"},{"name":"Jinji"},{"name":"Jining"},{"name":"Jinhua"},{"name":"Jingzhou"},{"name":"Tianchang"},{"name":"Jingmen"},{"name":"Jingling"},{"name":"Jingdezhen"},{"name":"Jinchang"},{"name":"Jincheng"},{"name":"Jinan"},{"name":"Jimo"},{"name":"Jijiang"},{"name":"Jiexiu"},{"name":"Jieshou"},{"name":"Jieshi"},{"name":"Jiehu"},{"name":"Jiazi"},{"name":"Jiaxing"},{"name":"Jiaozuo"},{"name":"Jiaozhou"},{"name":"Ningde"},{"name":"Jian’ou"},{"name":"Jiangyan"},{"name":"Jianguang"},{"name":"Jiangmen"},{"name":"Jiangkou"},{"name":"Yangjiang"},{"name":"Ji’an"},{"name":"Guangyuan"},{"name":"Huzhou"},{"name":"Hutang"},{"name":"Huoqiu Chengguanzhen"},{"name":"Humen"},{"name":"Huizhou"},{"name":"Huilong"},{"name":"Huicheng"},{"name":"Xinhui"},{"name":"Huazhou"},{"name":"Huangzhou"},{"name":"Huangyan"},{"name":"Huangshi"},{"name":"Dasha"},{"name":"Huangpi"},{"name":"Huangmei"},{"name":"Huanggang"},{"name":"Daxing"},{"name":"Dingcheng"},{"name":"Huaiyuan Chengguanzhen"},{"name":"Huainan"},{"name":"Huaicheng"},{"name":"Huaihua"},{"name":"Huaidian"},{"name":"Huaibei"},{"name":"Hongjiang"},{"name":"Heze"},{"name":"Hechuan"},{"name":"Yiyang"},{"name":"Hepo"},{"name":"Hengyang"},{"name":"Hengshui"},{"name":"Hefei"},{"name":"Hede"},{"name":"Hecun"},{"name":"Hebi"},{"name":"Hanzhong"},{"name":"Chengyang"},{"name":"Hanting"},{"name":"Hangzhou"},{"name":"Hangu"},{"name":"Handan"},{"name":"Hanchuan"},{"name":"Hancheng"},{"name":"Haizhou"},{"name":"Jiaojiang"},{"name":"Haimen"},{"name":"Haikou"},{"name":"Haikou"},{"name":"Guye"},{"name":"Guozhen"},{"name":"Guli"},{"name":"Guiyang"},{"name":"Guiren"},{"name":"Guiping"},{"name":"Guilin"},{"name":"Guigang"},{"name":"Gucheng Chengguanzhen"},{"name":"Guangzhou"},{"name":"Guangshui"},{"name":"Gejiu"},{"name":"Gaozhou"},{"name":"Gaoyou"},{"name":"Gaoping"},{"name":"Gaomi"},{"name":"Gaogou"},{"name":"Fuzhou"},{"name":"Fuyang"},{"name":"Fuyang"},{"name":"Qingyang"},{"name":"Fuling"},{"name":"Foshan"},{"name":"Fenyi"},{"name":"Fengxian"},{"name":"Fengrun"},{"name":"Fengkou"},{"name":"Feicheng"},{"name":"Fangshan"},{"name":"Ezhou"},{"name":"Enshi"},{"name":"Encheng"},{"name":"Duyun"},{"name":"Duobao"},{"name":"Ducheng"},{"name":"Xinyi"},{"name":"Shengli"},{"name":"Dongtai"},{"name":"Dongsheng"},{"name":"Dongkan"},{"name":"Donghai"},{"name":"Dongguan"},{"name":"Dongdu"},{"name":"Dongcun"},{"name":"Dingzhou"},{"name":"Dingtao"},{"name":"Dezhou"},{"name":"Deyang"},{"name":"Deqing"},{"name":"Dengzhou"},{"name":"Huazhou"},{"name":"Songyang"},{"name":"Dazhong"},{"name":"Zhangjiajie"},{"name":"Daye"},{"name":"Lijiang"},{"name":"Dazhou"},{"name":"Dawukou"},{"name":"Datong"},{"name":"Fenghua"},{"name":"Daokou"},{"name":"Danshui"},{"name":"Danjiangkou"},{"name":"Gushu"},{"name":"Xincheng"},{"name":"Daliang"},{"name":"Dalian"},{"name":"Dali"},{"name":"Chuzhou"},{"name":"Yangchun"},{"name":"Yiwu"},{"name":"Chongqing"},{"name":"Chonglong"},{"name":"Chizhou"},{"name":"Chenzhou"},{"name":"Chengyang"},{"name":"Jiangyin"},{"name":"Chengdu"},{"name":"Chenghua"},{"name":"Chaozhou"},{"name":"Chaohu"},{"name":"Changzhou"},{"name":"Changzhi"},{"name":"Changsha"},{"name":"Changqing"},{"name":"Changli"},{"name":"Changleng"},{"name":"Caohe"},{"name":"Weining"},{"name":"Cangzhou"},{"name":"Caidian"},{"name":"Buhe"},{"name":"Bozhou"},{"name":"Botou"},{"name":"Boshan"},{"name":"Baise City"},{"name":"Binzhou"},{"name":"Luxu"},{"name":"Bijie"},{"name":"Bianzhuang"},{"name":"Bengbu"},{"name":"Beijing"},{"name":"Beihai"},{"name":"Beidao"},{"name":"Beidaihehaibin"},{"name":"Beibei"},{"name":"Baoying"},{"name":"Langzhong"},{"name":"Baoding"},{"name":"Baiyin"},{"name":"Baihe"},{"name":"Shangyu"},{"name":"Babu"},{"name":"Anxiang"},{"name":"Anshun"},{"name":"Anqiu"},{"name":"Anqing"},{"name":"Mabai"},{"name":"Anlu"},{"name":"Anjiang"},{"name":"Anbu"},{"name":"Jiangyou"},{"name":"Suzhou"},{"name":"Zhoushan"},{"name":"Mudu"},{"name":"Songling"},{"name":"Zhongshan"},{"name":"Lianghu"},{"name":"Zhoucheng"},{"name":"Dalianwan"},{"name":"Yueyang"},{"name":"Bojia"},{"name":"Zhenlai"},{"name":"Zhengjiatun"},{"name":"Zhaozhou"},{"name":"Zhaoyuan"},{"name":"Zhaodong"},{"name":"Zhangjiakou"},{"name":"Zalantun"},{"name":"Yushu"},{"name":"Youhao"},{"name":"Yingkou"},{"name":"Yilan"},{"name":"Yichun"},{"name":"Yebaishou"},{"name":"Yantongshan"},{"name":"Yanji"},{"name":"Yakeshi"},{"name":"Zhangjiakou Shi Xuanhua Qu"},{"name":"Xiuyan"},{"name":"Xinqing"},{"name":"Xinmin"},{"name":"Xinglongshan"},{"name":"Xingcheng"},{"name":"Xilin Hot"},{"name":"Xifeng"},{"name":"Xiaoshi"},{"name":"Wuchang"},{"name":"Wangqing"},{"name":"Hepingjie"},{"name":"Wangkui"},{"name":"Ulanhot"},{"name":"Tumen"},{"name":"Tongliao"},{"name":"Tieling"},{"name":"Tieli"},{"name":"Guangming"},{"name":"Tailai"},{"name":"Taikang"},{"name":"Tahe"},{"name":"Sujiatun"},{"name":"Suileng"},{"name":"Suihua"},{"name":"Suifenhe"},{"name":"Songjianghe"},{"name":"Siping"},{"name":"Shunyi"},{"name":"Shulan"},{"name":"Shuangyashan"},{"name":"Shuangyang"},{"name":"Shuangcheng"},{"name":"Shiguai"},{"name":"Shenyang"},{"name":"Shanhetun"},{"name":"Shanhaiguan"},{"name":"Shangzhi"},{"name":"Sanchazi"},{"name":"Salaqi"},{"name":"Fendou"},{"name":"Taihe"},{"name":"Qiqihar"},{"name":"Qinggang"},{"name":"Qianguo"},{"name":"Pingzhuang"},{"name":"Panshi"},{"name":"Panshan"},{"name":"Nianzishan"},{"name":"Nenjiang"},{"name":"Nehe"},{"name":"Nantai"},{"name":"Nanpiao"},{"name":"Lianhe"},{"name":"Mujiayingzi"},{"name":"Mudanjiang"},{"name":"Mishan"},{"name":"Mingyue"},{"name":"Mingshui"},{"name":"Meihekou"},{"name":"Manzhouli"},{"name":"Longjing"},{"name":"Longjiang"},{"name":"Longfeng"},{"name":"Liuhe"},{"name":"Lishu"},{"name":"Linkou"},{"name":"Linjiang"},{"name":"Lingyuan"},{"name":"Lingdong"},{"name":"Liaozhong"},{"name":"Liaoyuan"},{"name":"Liaoyang"},{"name":"Lanxi"},{"name":"Langxiang"},{"name":"Langtou"},{"name":"Kuandian"},{"name":"Kaiyuan"},{"name":"Kaitong"},{"name":"Jixi"},{"name":"Jiutai"},{"name":"Jiupu"},{"name":"Jishu"},{"name":"Jinzhou"},{"name":"Lianshan"},{"name":"Jining"},{"name":"Jilin"},{"name":"Jidong"},{"name":"Minzhu"},{"name":"Jiamusi"},{"name":"Jalai Nur"},{"name":"Jagdaqi"},{"name":"Hushitai"},{"name":"Hunchun"},{"name":"Hulan Ergi"},{"name":"Hulan"},{"name":"Huinan"},{"name":"Huanren"},{"name":"Huangnihe"},{"name":"Huanan"},{"name":"Huadian"},{"name":"Honggang"},{"name":"Hohhot"},{"name":"Fendou"},{"name":"Helong"},{"name":"Heishan"},{"name":"Heihe"},{"name":"Hegang"},{"name":"Harbin"},{"name":"Hailun"},{"name":"Hailin"},{"name":"Hailar"},{"name":"Haicheng"},{"name":"Gongzhuling"},{"name":"Gongchangling"},{"name":"Genhe"},{"name":"Gannan"},{"name":"Fuyuan"},{"name":"Fuyu"},{"name":"Fuyu"},{"name":"Fuxin"},{"name":"Fuxin"},{"name":"Fushun"},{"name":"Fuli"},{"name":"Fujin"},{"name":"Beichengqu"},{"name":"Fengxiang"},{"name":"Fengcheng"},{"name":"Erenhot"},{"name":"Erdaojiang"},{"name":"Dunhua"},{"name":"Dongning"},{"name":"Dongling"},{"name":"Dongfeng"},{"name":"Dongxing"},{"name":"Dehui"},{"name":"Datong"},{"name":"Dashitou"},{"name":"Dashiqiao"},{"name":"Daqing"},{"name":"Dandong"},{"name":"Linghai"},{"name":"Dalai"},{"name":"Chifeng"},{"name":"Chengzihe"},{"name":"Chengde"},{"name":"Chaoyang"},{"name":"Chaoyang"},{"name":"Changtu"},{"name":"Changping"},{"name":"Changling"},{"name":"Changchun"},{"name":"Chaihe"},{"name":"Boli"},{"name":"Binzhou"},{"name":"Benxi"},{"name":"Beipiao"},{"name":"Bei’an"},{"name":"Bayan"},{"name":"Baotou"},{"name":"Baoshan"},{"name":"Baoqing"},{"name":"Bamiantong"},{"name":"Baishishan"},{"name":"Baiquan"},{"name":"Baicheng"},{"name":"Baishan"},{"name":"Anshan"},{"name":"Anda"},{"name":"Oroqen Zizhiqi"},{"name":"Acheng"},{"name":"Songling"},{"name":"Shilin"},{"name":"Changshu City"},{"name":"Shixing"},{"name":"Jiashan"},{"name":"Fenghuang"},{"name":"Zhu Cheng City"},{"name":"Shangri-La"},{"name":"Ordos"},{"name":"Wenshan City"},{"name":"Liupanshui"},{"name":"Zipaquirá"},{"name":"Zarzal"},{"name":"Zaragoza"},{"name":"Yumbo"},{"name":"Yopal"},{"name":"Yarumal"},{"name":"Viterbo"},{"name":"Villeta"},{"name":"Villavicencio"},{"name":"Villa del Rosario"},{"name":"Villanueva"},{"name":"Villanueva"},{"name":"Villamaría"},{"name":"Valledupar"},{"name":"Urrao"},{"name":"Ubaté"},{"name":"Turbo"},{"name":"Turbaco"},{"name":"Túquerres"},{"name":"Tunja"},{"name":"Tumaco"},{"name":"Tuluá"},{"name":"Tolú"},{"name":"Tierralta"},{"name":"Tame"},{"name":"Sucre"},{"name":"Sonsón"},{"name":"Soledad"},{"name":"Sogamoso"},{"name":"Socorro"},{"name":"Soacha"},{"name":"Sincelejo"},{"name":"Sincé"},{"name":"Sibaté"},{"name":"Sevilla"},{"name":"Segovia"},{"name":"Santuario"},{"name":"Santo Tomás"},{"name":"Santa Rosa de Cabal"},{"name":"Santander de Quilichao"},{"name":"Santa Marta"},{"name":"Santa Lucía"},{"name":"San Onofre"},{"name":"San Martín"},{"name":"San Marcos"},{"name":"San Juan Nepomuceno"},{"name":"San Juan del Cesar"},{"name":"San Jacinto"},{"name":"San Gil"},{"name":"San Carlos"},{"name":"San Carlos"},{"name":"San Benito Abad"},{"name":"San Andrés"},{"name":"Sampués"},{"name":"Salamina"},{"name":"Sahagún"},{"name":"Sabaneta"},{"name":"Sabanalarga"},{"name":"Sabanagrande"},{"name":"Roldanillo"},{"name":"Riosucio"},{"name":"Rionegro"},{"name":"Ríohacha"},{"name":"Repelón"},{"name":"Quimbaya"},{"name":"Quibdó"},{"name":"Puerto Tejada"},{"name":"Puerto Santander"},{"name":"Puerto López"},{"name":"Puerto Colombia"},{"name":"Puerto Boyacá"},{"name":"Puerto Berrío"},{"name":"Puerto Asís"},{"name":"Pradera"},{"name":"Popayán"},{"name":"Planeta Rica"},{"name":"Pivijay"},{"name":"Pitalito"},{"name":"Piedecuesta"},{"name":"Pereira"},{"name":"Patía"},{"name":"Pasto"},{"name":"Pamplona"},{"name":"Palmira"},{"name":"Palmar de Varela"},{"name":"Belalcazar"},{"name":"Pacho"},{"name":"Ocaña"},{"name":"Neiva"},{"name":"Mosquera"},{"name":"Morales"},{"name":"Montería"},{"name":"Montenegro"},{"name":"Montelíbano"},{"name":"Mompós"},{"name":"Mocoa"},{"name":"Melgar"},{"name":"Medellín"},{"name":"Mariquita"},{"name":"Marinilla"},{"name":"María la Baja"},{"name":"Manzanares"},{"name":"Manizales"},{"name":"Malambo"},{"name":"Málaga"},{"name":"Maicao"},{"name":"Magangué"},{"name":"Madrid"},{"name":"Los Patios"},{"name":"Lorica"},{"name":"Líbano"},{"name":"Leticia"},{"name":"Lérida"},{"name":"La Virginia"},{"name":"La Unión"},{"name":"La Unión"},{"name":"La Tebaida"},{"name":"La Plata"},{"name":"La Mesa"},{"name":"La Jagua de Ibirico"},{"name":"La Estrella"},{"name":"La Dorada"},{"name":"La Ceja"},{"name":"Jamundí"},{"name":"Itagüí"},{"name":"Ipiales"},{"name":"Ibagué"},{"name":"Honda"},{"name":"Guacarí"},{"name":"Granada"},{"name":"Girón"},{"name":"Girardot City"},{"name":"Garzón"},{"name":"Galapa"},{"name":"Fusagasuga"},{"name":"Funza"},{"name":"Fundación"},{"name":"Fresno"},{"name":"Fonseca"},{"name":"Floridablanca"},{"name":"Florida"},{"name":"Florencia"},{"name":"Flandes"},{"name":"Facatativá"},{"name":"Espinal"},{"name":"Envigado"},{"name":"El Retén"},{"name":"El Copey"},{"name":"El Charco"},{"name":"El Cerrito"},{"name":"El Carmen de Bolívar"},{"name":"El Banco"},{"name":"El Bagre"},{"name":"Duitama"},{"name":"Dos Quebradas"},{"name":"Curumaní"},{"name":"Cúcuta"},{"name":"Corozal"},{"name":"Corinto"},{"name":"Municipio de Copacabana"},{"name":"Circasia"},{"name":"Ciénaga de Oro"},{"name":"Ciénaga"},{"name":"Chiriguaná"},{"name":"Chiquinquirá"},{"name":"Chinú"},{"name":"Chinchiná"},{"name":"Chimichagua"},{"name":"Chigorodó"},{"name":"Chía"},{"name":"Chaparral"},{"name":"Cereté"},{"name":"Caucasia"},{"name":"Cartago"},{"name":"Cartagena"},{"name":"Carmen de Viboral"},{"name":"Candelaria"},{"name":"Campo de la Cruz"},{"name":"Campoalegre"},{"name":"Cali"},{"name":"Caldas"},{"name":"Calarcá"},{"name":"Cajicá"},{"name":"Caicedonia"},{"name":"Buga"},{"name":"Buenaventura"},{"name":"Buenaventura"},{"name":"Bucaramanga"},{"name":"Bogotá"},{"name":"Bello"},{"name":"Belén de Umbría"},{"name":"Barranquilla"},{"name":"Barrancas"},{"name":"Barrancabermeja"},{"name":"Barbosa"},{"name":"Barbosa"},{"name":"Baranoa"},{"name":"Ayapel"},{"name":"Armenia"},{"name":"Arjona"},{"name":"Ariguaní"},{"name":"Arauca"},{"name":"Aracataca"},{"name":"Apartadó"},{"name":"Anserma"},{"name":"Andes"},{"name":"Andalucía"},{"name":"Aguazul"},{"name":"Aguadas"},{"name":"Aguachica"},{"name":"Acacías"},{"name":"Morales"},{"name":"Carepa"},{"name":"Ciudad Bolívar"},{"name":"Agustín Codazzi"},{"name":"Plato"},{"name":"San José del Guaviare"},{"name":"Turrialba"},{"name":"Tejar"},{"name":"Siquirres"},{"name":"San Vicente"},{"name":"San Rafael Arriba"},{"name":"San Rafael Abajo"},{"name":"San Rafael"},{"name":"San Rafael"},{"name":"San Pedro"},{"name":"San Pablo"},{"name":"San Miguel"},{"name":"San Juan de Dios"},{"name":"San Juan"},{"name":"San José"},{"name":"San José"},{"name":"San Isidro"},{"name":"San Francisco"},{"name":"San Felipe"},{"name":"San Diego"},{"name":"Quesada"},{"name":"Purral"},{"name":"Puntarenas"},{"name":"Limón"},{"name":"Patarrá"},{"name":"Paraíso"},{"name":"Nicoya"},{"name":"Mercedes"},{"name":"Liberia"},{"name":"Ipís"},{"name":"Heredia"},{"name":"Guápiles"},{"name":"Guadalupe"},{"name":"Esparza"},{"name":"Curridabat"},{"name":"Colima"},{"name":"Chacarita"},{"name":"Cartago"},{"name":"Cañas"},{"name":"Calle Blancos"},{"name":"Aserrí"},{"name":"Alajuela"},{"name":"San Vicente de Moravia"},{"name":"Yara"},{"name":"Yaguajay"},{"name":"Viñales"},{"name":"Vertientes"},{"name":"Venezuela"},{"name":"Varadero"},{"name":"San Germán"},{"name":"Unión de Reyes"},{"name":"Trinidad"},{"name":"Sibanicú"},{"name":"Santo Domingo"},{"name":"Santiago de las Vegas"},{"name":"Santiago de Cuba"},{"name":"Santa Cruz del Sur"},{"name":"Santa Cruz del Norte"},{"name":"Santa Clara"},{"name":"San Miguel del Padrón"},{"name":"San Luis"},{"name":"San José de las Lajas"},{"name":"Sancti Spíritus"},{"name":"San Cristobal"},{"name":"San Antonio de los Baños"},{"name":"Sagua la Grande"},{"name":"Sagua de Tánamo"},{"name":"Rodas"},{"name":"Río Guayabal de Yateras"},{"name":"Río Cauto"},{"name":"Remedios"},{"name":"Regla"},{"name":"Ranchuelo"},{"name":"Puerto Padre"},{"name":"Primero de Enero"},{"name":"Placetas"},{"name":"Pinar del Río"},{"name":"Perico"},{"name":"Pedro Betancourt"},{"name":"Palmira"},{"name":"Palma Soriano"},{"name":"Nuevitas"},{"name":"Nueva Gerona"},{"name":"Niquero"},{"name":"Morón"},{"name":"Moa"},{"name":"Minas de Matahambre"},{"name":"Minas"},{"name":"Media Luna"},{"name":"Matanzas"},{"name":"Mariel"},{"name":"Manzanillo"},{"name":"Manicaragua"},{"name":"Maisí"},{"name":"Madruga"},{"name":"Los Palacios"},{"name":"Las Tunas"},{"name":"La Sierpe"},{"name":"La Salud"},{"name":"Havana"},{"name":"Jovellanos"},{"name":"Jobabo"},{"name":"Jobabo"},{"name":"Jiguaní"},{"name":"Jesús Menéndez"},{"name":"Jatibonico"},{"name":"Jaruco"},{"name":"Jagüey Grande"},{"name":"Holguín"},{"name":"Guisa"},{"name":"Güira de Melena"},{"name":"Güines"},{"name":"Guantánamo"},{"name":"Guane"},{"name":"Guanajay"},{"name":"Guanabacoa"},{"name":"Guáimaro"},{"name":"Gibara"},{"name":"Fomento"},{"name":"Florida"},{"name":"Florencia"},{"name":"Esmeralda"},{"name":"Encrucijada"},{"name":"Cumanayagua"},{"name":"Cueto"},{"name":"Cruces"},{"name":"Corralillo"},{"name":"Contramaestre"},{"name":"Consolación del Sur"},{"name":"Condado"},{"name":"Colón"},{"name":"Colombia"},{"name":"Ciro Redondo"},{"name":"Cifuentes"},{"name":"Cienfuegos"},{"name":"Ciego de Ávila"},{"name":"Chambas"},{"name":"Cerro"},{"name":"Cauto Cristo"},{"name":"Cárdenas"},{"name":"Campechuela"},{"name":"Camajuaní"},{"name":"Camagüey"},{"name":"Calimete"},{"name":"Caibarién"},{"name":"Cacocum"},{"name":"Cabaiguán"},{"name":"Bejucal"},{"name":"Bayamo"},{"name":"Bauta"},{"name":"Bartolomé Masó"},{"name":"Baraguá"},{"name":"Baracoa"},{"name":"Banes"},{"name":"Bahía Honda"},{"name":"Artemisa"},{"name":"Arroyo Naranjo"},{"name":"Amancio"},{"name":"Alquízar"},{"name":"Alamar"},{"name":"Aguada de Pasajeros"},{"name":"Abreus"},{"name":"Habana del Este"},{"name":"Centro Habana"},{"name":"La Habana Vieja"},{"name":"Báguanos"},{"name":"Jimaguayú"},{"name":"Arroyo Naranjo"},{"name":"Boyeros"},{"name":"Diez de Octubre"},{"name":"Santa Maria"},{"name":"Praia"},{"name":"Mindelo"},{"name":"Cova Figueira"},{"name":"Willemstad"},{"name":"Flying Fish Cove"},{"name":"Protaras"},{"name":"Paphos"},{"name":"Nicosia"},{"name":"Limassol"},{"name":"Larnaca"},{"name":"Kyrenia"},{"name":"Famagusta"},{"name":"Dvůr Králové nad Labem"},{"name":"Znojmo"},{"name":"Zlín"},{"name":"Žďár nad Sázavou Druhy"},{"name":"Žďár nad Sázavou"},{"name":"Žatec"},{"name":"Vyškov"},{"name":"Vsetín"},{"name":"Varnsdorf"},{"name":"Valašské Meziříčí"},{"name":"Ústí nad Orlicí"},{"name":"Ústí nad Labem"},{"name":"Uherský Brod"},{"name":"Uherské Hradiště"},{"name":"Trutnov"},{"name":"Třinec"},{"name":"Třebíč"},{"name":"Teplice"},{"name":"Tábor"},{"name":"Svitavy"},{"name":"Šumperk"},{"name":"Strakonice"},{"name":"Starý Bohumín"},{"name":"Sokolov"},{"name":"Slaný"},{"name":"Rožnov pod Radhoštěm"},{"name":"Rakovník"},{"name":"Prostějov"},{"name":"Prosek"},{"name":"Příbram"},{"name":"Přerov"},{"name":"Prague"},{"name":"Pilsen"},{"name":"Písek"},{"name":"Pelhřimov"},{"name":"Pardubice"},{"name":"Otrokovice"},{"name":"Otrokovice"},{"name":"Ostrov"},{"name":"Ostrava"},{"name":"Orlová"},{"name":"Opava"},{"name":"Olomouc"},{"name":"Nový Jičín"},{"name":"Neratovice"},{"name":"Náchod"},{"name":"Most"},{"name":"Modřany"},{"name":"Mladá Boleslav"},{"name":"Mělník"},{"name":"Louny"},{"name":"Litvínov"},{"name":"Litoměřice"},{"name":"Liberec"},{"name":"Libeň"},{"name":"Letňany"},{"name":"Kutná Hora"},{"name":"Kroměříž"},{"name":"Krnov"},{"name":"Kralupy nad Vltavou"},{"name":"Kopřivnice"},{"name":"Kolín"},{"name":"Klatovy"},{"name":"Klášterec nad Ohří"},{"name":"Kladno"},{"name":"Karviná"},{"name":"Karlovy Vary"},{"name":"Kadaň"},{"name":"Kadaň"},{"name":"Jirkov"},{"name":"Jindřichův Hradec"},{"name":"Jihlava"},{"name":"Jičín"},{"name":"Jablonec nad Nisou"},{"name":"Hranice"},{"name":"Hradec Králové"},{"name":"Hodonín"},{"name":"Havlíčkův Brod"},{"name":"Havířov"},{"name":"Frýdek-Místek"},{"name":"Děčín"},{"name":"Chrudim"},{"name":"Chomutov"},{"name":"Cheb"},{"name":"Český Těšín"},{"name":"České Budějovice"},{"name":"Česká Třebová"},{"name":"Česká Lípa"},{"name":"Bruntál"},{"name":"Brno"},{"name":"Břeclav"},{"name":"Braník"},{"name":"Brandýs nad Labem-Stará Boleslav"},{"name":"Bohumín"},{"name":"Blansko"},{"name":"Bílina Kyselka"},{"name":"Bílina"},{"name":"Beroun"},{"name":"Benešov"},{"name":"Černý Most"},{"name":"Zwickau"},{"name":"Zweibrücken"},{"name":"Zulpich"},{"name":"Zossen"},{"name":"Zittau"},{"name":"Zirndorf"},{"name":"Zerbst"},{"name":"Zeitz"},{"name":"Zehlendorf"},{"name":"Xanten"},{"name":"Wurzen"},{"name":"Würzburg"},{"name":"Würselen"},{"name":"Wuppertal"},{"name":"Wunstorf"},{"name":"Wülfrath"},{"name":"Wörth am Rhein"},{"name":"Worms"},{"name":"Wolfsburg"},{"name":"Wolfratshausen"},{"name":"Wolfenbüttel"},{"name":"Wolfen"},{"name":"Witzenhausen"},{"name":"Wittstock"},{"name":"Wittmund"},{"name":"Wittlich"},{"name":"Wittenberge"},{"name":"Wittenau"},{"name":"Witten"},{"name":"Wismar"},{"name":"Wipperfürth"},{"name":"Winterhude"},{"name":"Winsen"},{"name":"Winnenden"},{"name":"Wilnsdorf"},{"name":"Wilmersdorf"},{"name":"Willich"},{"name":"Wilhelmstadt"},{"name":"Wilhelmshaven"},{"name":"Wildeshausen"},{"name":"Wiesloch"},{"name":"Wiesbaden"},{"name":"Wiehl"},{"name":"Wetzlar"},{"name":"Wetter (Ruhr)"},{"name":"Westerstede"},{"name":"Westend"},{"name":"Wesseling"},{"name":"Wesel"},{"name":"Wertheim"},{"name":"Wernigerode"},{"name":"Werne"},{"name":"Wermelskirchen"},{"name":"Werl"},{"name":"Werdohl"},{"name":"Werder"},{"name":"Werdau"},{"name":"Wendlingen am Neckar"},{"name":"Wenden"},{"name":"Wendelstein"},{"name":"Weiterstadt"},{"name":"Weißwasser"},{"name":"Weißenfels"},{"name":"Weißenburg in Bayern"},{"name":"Weinstadt-Endersbach"},{"name":"Weinheim"},{"name":"Weingarten"},{"name":"Weimar"},{"name":"Weilheim"},{"name":"Weilerswist"},{"name":"Weil der Stadt"},{"name":"Weil am Rhein"},{"name":"Weiden"},{"name":"Weißensee"},{"name":"Wegberg"},{"name":"Weener"},{"name":"Wedel"},{"name":"Wedding"},{"name":"Wassenberg"},{"name":"Warstein"},{"name":"Warendorf"},{"name":"Waren"},{"name":"Wardenburg"},{"name":"Warburg"},{"name":"Wangen im Allgäu"},{"name":"Wandlitz"},{"name":"Waltrop"},{"name":"Walsrode"},{"name":"Wallenhorst"},{"name":"Waldshut-Tiengen"},{"name":"Waldkraiburg"},{"name":"Waldkirch"},{"name":"Waldbröl"},{"name":"Waiblingen"},{"name":"Waghäusel"},{"name":"Wadgassen"},{"name":"Wadern"},{"name":"Wachtberg"},{"name":"Vreden"},{"name":"Völklingen"},{"name":"Voerde"},{"name":"Vlotho"},{"name":"Vilshofen"},{"name":"Villingen-Schwenningen"},{"name":"Viersen"},{"name":"Viernheim"},{"name":"Versmold"},{"name":"Verl"},{"name":"Verden"},{"name":"Velbert"},{"name":"Vechta"},{"name":"Vechelde"},{"name":"Vaterstetten"},{"name":"Varel"},{"name":"Vaihingen an der Enz"},{"name":"Uetersen"},{"name":"Uslar"},{"name":"Unterschleißheim"},{"name":"Unterhaching"},{"name":"Unterkrozingen"},{"name":"Unna"},{"name":"Ulm"},{"name":"Uelzen"},{"name":"Überlingen"},{"name":"Übach-Palenberg"},{"name":"Tuttlingen"},{"name":"Tübingen"},{"name":"Trossingen"},{"name":"Troisdorf"},{"name":"Trier"},{"name":"Traunstein"},{"name":"Traunreut"},{"name":"Torgau"},{"name":"Tönisvorst"},{"name":"Tettnang"},{"name":"Templin"},{"name":"Tempelhof"},{"name":"Teltow"},{"name":"Telgte"},{"name":"Tegel"},{"name":"Taunusstein"},{"name":"Taufkirchen"},{"name":"Syke"},{"name":"Sundern"},{"name":"Sulzbach-Rosenberg"},{"name":"Sulzbach"},{"name":"Suhl"},{"name":"Stuttgart"},{"name":"Stuhr"},{"name":"Strausberg"},{"name":"Straubing"},{"name":"Stralsund"},{"name":"Straelen"},{"name":"Stolberg"},{"name":"Stockelsdorf"},{"name":"Stockach"},{"name":"Stendal"},{"name":"Stellingen"},{"name":"Steinhagen"},{"name":"Steinfurt"},{"name":"Steilshoop"},{"name":"Steglitz"},{"name":"Staßfurt"},{"name":"Starnberg"},{"name":"Stadtlohn"},{"name":"Stadthagen"},{"name":"Stadtallendorf"},{"name":"Stade"},{"name":"Staaken"},{"name":"Sprockhövel"},{"name":"Springe"},{"name":"Speyer"},{"name":"Spenge"},{"name":"Sonthofen"},{"name":"Sonneberg"},{"name":"Sondershausen"},{"name":"Sömmerda"},{"name":"Soltau"},{"name":"Solingen"},{"name":"Soest"},{"name":"Sinzig"},{"name":"Sinsheim"},{"name":"Singen"},{"name":"Sindelfingen"},{"name":"Simmerath"},{"name":"Sigmaringen"},{"name":"Siegen"},{"name":"Siegburg"},{"name":"Senftenberg"},{"name":"Senden"},{"name":"Senden"},{"name":"Selm"},{"name":"Seligenstadt"},{"name":"Selb"},{"name":"Sehnde"},{"name":"Seevetal"},{"name":"Seesen"},{"name":"Seelze"},{"name":"Schwetzingen"},{"name":"Schwerte"},{"name":"Schwerin"},{"name":"Schwelm"},{"name":"Schweinfurt"},{"name":"Schwedt (Oder)"},{"name":"Schwarzenberg"},{"name":"Schwanewede"},{"name":"Schwandorf in Bayern"},{"name":"Schwalmtal"},{"name":"Schwalmstadt"},{"name":"Schwalbach"},{"name":"Schwäbisch Hall"},{"name":"Schwäbisch Gmünd"},{"name":"Schwabach"},{"name":"Schrobenhausen"},{"name":"Schramberg"},{"name":"Schortens"},{"name":"Schorndorf"},{"name":"Schopfheim"},{"name":"Schöneberg"},{"name":"Schönebeck"},{"name":"Schneverdingen"},{"name":"Schneeberg"},{"name":"Schmelz"},{"name":"Schmargendorf"},{"name":"Schmallenberg"},{"name":"Schmalkalden"},{"name":"Schlüchtern"},{"name":"Schleswig"},{"name":"Schkeuditz"},{"name":"Schiffweiler"},{"name":"Schifferstadt"},{"name":"Saulgau"},{"name":"Sasel"},{"name":"Sarstedt"},{"name":"Sankt Wendel"},{"name":"Sankt Ingbert"},{"name":"Sankt Augustin"},{"name":"Sangerhausen"},{"name":"Salzwedel"},{"name":"Salzkotten"},{"name":"Saarlouis"},{"name":"Saarbrücken"},{"name":"Saalfeld"},{"name":"Rüsselsheim"},{"name":"Rummelsburg"},{"name":"Rudow"},{"name":"Rudolstadt"},{"name":"Rottweil"},{"name":"Rottenburg"},{"name":"Roth"},{"name":"Rotenburg"},{"name":"Rostock"},{"name":"Rösrath"},{"name":"Rosenheim"},{"name":"Ronnenberg"},{"name":"Rinteln"},{"name":"Rietberg"},{"name":"Riesa"},{"name":"Riegelsberg"},{"name":"Ribnitz-Damgarten"},{"name":"Rheinfelden (Baden)"},{"name":"Rheine"},{"name":"Rheinberg"},{"name":"Rheinbach"},{"name":"Rhede"},{"name":"Rheda-Wiedenbrück"},{"name":"Reutlingen"},{"name":"Renningen"},{"name":"Rendsburg"},{"name":"Remscheid"},{"name":"Remagen"},{"name":"Reinickendorf"},{"name":"Reinheim"},{"name":"Reinbek"},{"name":"Reichenbach/Vogtland"},{"name":"Regensburg"},{"name":"Rees"},{"name":"Recklinghausen"},{"name":"Ravensburg"},{"name":"Ratingen"},{"name":"Rathenow"},{"name":"Ratekau"},{"name":"Rastede"},{"name":"Rastatt"},{"name":"Rahden"},{"name":"Radolfzell am Bodensee"},{"name":"Radevormwald"},{"name":"Radebeul"},{"name":"Radeberg"},{"name":"Quickborn"},{"name":"Quedlinburg"},{"name":"Püttlingen"},{"name":"Pulheim"},{"name":"Puchheim"},{"name":"Prenzlauer Berg"},{"name":"Prenzlau"},{"name":"Preetz"},{"name":"Potsdam"},{"name":"Porta Westfalica"},{"name":"Poppenbüttel"},{"name":"Plettenberg"},{"name":"Plauen"},{"name":"Pirna"},{"name":"Pirmasens"},{"name":"Pinneberg"},{"name":"Pfungstadt"},{"name":"Pfullingen"},{"name":"Pforzheim"},{"name":"Pfaffenhofen an der Ilm"},{"name":"Petershagen"},{"name":"Penzberg"},{"name":"Peine"},{"name":"Passau"},{"name":"Pasing"},{"name":"Parchim"},{"name":"Papenburg"},{"name":"Pankow"},{"name":"Paderborn"},{"name":"Oyten"},{"name":"Overath"},{"name":"Ottweiler"},{"name":"Ottobrunn"},{"name":"Osterholz-Scharmbeck"},{"name":"Osnabrück"},{"name":"Oschersleben"},{"name":"Oschatz"},{"name":"Oranienburg"},{"name":"Opladen"},{"name":"Olsberg"},{"name":"Olpe"},{"name":"Oldenburg"},{"name":"Olching"},{"name":"Öhringen"},{"name":"Offenburg"},{"name":"Offenbach"},{"name":"Oerlinghausen"},{"name":"Oer-Erkenschwick"},{"name":"Oelde"},{"name":"Odenthal"},{"name":"Ochtrup"},{"name":"Oberursel"},{"name":"Obertshausen"},{"name":"Oberschöneweide"},{"name":"Ober-Ramstadt"},{"name":"Oberkirch"},{"name":"Oberhausen"},{"name":"Oberasbach"},{"name":"Nürtingen"},{"name":"Nürnberg"},{"name":"Nümbrecht"},{"name":"Nottuln"},{"name":"Northeim"},{"name":"Nördlingen"},{"name":"Nordhorn"},{"name":"Nordhausen"},{"name":"Norderstedt"},{"name":"Nordenham"},{"name":"Norden"},{"name":"Nippes"},{"name":"Nikolassee"},{"name":"Nienburg"},{"name":"Niederschönhausen"},{"name":"Niederkrüchten"},{"name":"Niederkassel"},{"name":"Nieder-Ingelheim"},{"name":"Nidderau"},{"name":"Nidda"},{"name":"Neu Wulmstorf"},{"name":"Neuwied"},{"name":"Neu-Ulm"},{"name":"Neustrelitz"},{"name":"Neustadt in Holstein"},{"name":"Neustadt bei Coburg"},{"name":"Neustadt"},{"name":"Neustadt am Rübenberge"},{"name":"Neue Neustadt"},{"name":"Neuss"},{"name":"Neuruppin"},{"name":"Neunkirchen"},{"name":"Neumünster"},{"name":"Neumarkt in der Oberpfalz"},{"name":"Neu Isenburg"},{"name":"Neufahrn bei Freising"},{"name":"Neuenhagen"},{"name":"Neuburg an der Donau"},{"name":"Neubrück"},{"name":"Neubrandenburg"},{"name":"Neu-Anspach"},{"name":"Nettetal"},{"name":"Netphen"},{"name":"Neckarsulm"},{"name":"Naumburg"},{"name":"Nauen"},{"name":"Nagold"},{"name":"Munster"},{"name":"Münster"},{"name":"Hannoversch Münden"},{"name":"Munich"},{"name":"Müllheim"},{"name":"Mülheim (Ruhr)"},{"name":"Mühlheim am Main"},{"name":"Stuttgart Mühlhausen"},{"name":"Mühlhausen"},{"name":"Mühldorf"},{"name":"Mühlacker"},{"name":"Much"},{"name":"Mössingen"},{"name":"Mosbach"},{"name":"Moosburg"},{"name":"Monheim am Rhein"},{"name":"Mönchengladbach"},{"name":"Mölln"},{"name":"Moers"},{"name":"Moabit"},{"name":"Mittweida"},{"name":"Minden"},{"name":"Michelstadt"},{"name":"Metzingen"},{"name":"Mettmann"},{"name":"Meschede"},{"name":"Merzig"},{"name":"Merseburg"},{"name":"Meppen"},{"name":"Menden"},{"name":"Memmingen"},{"name":"Melle"},{"name":"Meissen"},{"name":"Meiningen"},{"name":"Meinerzhagen"},{"name":"Meiderich"},{"name":"Meerbusch"},{"name":"Meerane"},{"name":"Meckenheim"},{"name":"Mechernich"},{"name":"Mayen"},{"name":"Marzahn"},{"name":"Marsberg"},{"name":"Marl"},{"name":"Marktredwitz"},{"name":"Marktoberdorf"},{"name":"Markkleeberg"},{"name":"Märkisches Viertel"},{"name":"Marienfelde"},{"name":"Mariendorf"},{"name":"Marburg an der Lahn"},{"name":"Marbach am Neckar"},{"name":"Mannheim"},{"name":"Mainz"},{"name":"Maintal"},{"name":"Mahlsdorf"},{"name":"Magdeburg"},{"name":"Lünen"},{"name":"Lüneburg"},{"name":"Ludwigshafen am Rhein"},{"name":"Ludwigsfelde"},{"name":"Ludwigsburg"},{"name":"Lüdinghausen"},{"name":"Lüdenscheid"},{"name":"Luckenwalde"},{"name":"Lübeck"},{"name":"Lübbenau"},{"name":"Lübbecke"},{"name":"Loxstedt"},{"name":"Losheim"},{"name":"Lörrach"},{"name":"Lohr am Main"},{"name":"Lohne"},{"name":"Löhne"},{"name":"Lohmar"},{"name":"Löbau"},{"name":"Lippstadt"},{"name":"Lingen"},{"name":"Lindlar"},{"name":"Lindau"},{"name":"Limburg an der Lahn"},{"name":"Limbach-Oberfrohna"},{"name":"Lilienthal"},{"name":"Lichterfelde"},{"name":"Lichtenrade"},{"name":"Lichtenfels"},{"name":"Lichtenberg"},{"name":"Leverkusen"},{"name":"Leutkirch im Allgäu"},{"name":"Leopoldshöhe"},{"name":"Leonberg"},{"name":"Lennestadt"},{"name":"Lengerich"},{"name":"Lemgo"},{"name":"Leipzig"},{"name":"Leinfelden-Echterdingen"},{"name":"Leimen"},{"name":"Leichlingen"},{"name":"Lehrte"},{"name":"Leer"},{"name":"Lebach"},{"name":"Laupheim"},{"name":"Lauf an der Pegnitz"},{"name":"Lauchhammer"},{"name":"Lankwitz"},{"name":"Langenhorn"},{"name":"Langenhagen"},{"name":"Langenfeld"},{"name":"Langen"},{"name":"Langen"},{"name":"Landshut"},{"name":"Landsberg am Lech"},{"name":"Landau in der Pfalz"},{"name":"Lampertheim"},{"name":"Lahr"},{"name":"Lahnstein"},{"name":"Lage"},{"name":"Laatzen"},{"name":"Bad Laasphe"},{"name":"Kürten"},{"name":"Künzelsau"},{"name":"Künzell"},{"name":"Kulmbach"},{"name":"Kronberg"},{"name":"Kronach"},{"name":"Kreuztal"},{"name":"Kreuzberg"},{"name":"Kreuzau"},{"name":"Krefeld"},{"name":"Köthen"},{"name":"Korschenbroich"},{"name":"Kornwestheim"},{"name":"Korntal"},{"name":"Korbach"},{"name":"Köpenick"},{"name":"Berlin Köpenick"},{"name":"Konz"},{"name":"Konstanz"},{"name":"Königs Wusterhausen"},{"name":"Königswinter"},{"name":"Königstein im Taunus"},{"name":"Königslutter am Elm"},{"name":"Königsbrunn"},{"name":"Köln"},{"name":"Kolbermoor"},{"name":"Koblenz"},{"name":"Kleve"},{"name":"Kleinmachnow"},{"name":"Kitzingen"},{"name":"Kirchlengern"},{"name":"Kirchheim unter Teck"},{"name":"Kirchhain"},{"name":"Kierspe"},{"name":"Kiel"},{"name":"Kevelaer"},{"name":"Kerpen"},{"name":"Kempten (Allgäu)"},{"name":"Kempen"},{"name":"Kelkheim (Taunus)"},{"name":"Kelheim"},{"name":"Kehl"},{"name":"Kaulsdorf"},{"name":"Kaufbeuren"},{"name":"Kassel"},{"name":"Karow"},{"name":"Karlstadt"},{"name":"Karlsruhe"},{"name":"Karlshorst"},{"name":"Karlsfeld"},{"name":"Karben"},{"name":"Kamp-Lintfort"},{"name":"Kamenz"},{"name":"Kamen"},{"name":"Kaltenkirchen"},{"name":"Kaiserslautern"},{"name":"Kaarst"},{"name":"Jülich"},{"name":"Jüchen"},{"name":"Johannisthal"},{"name":"Jena"},{"name":"Itzehoe"},{"name":"Isernhagen Farster Bauerschaft"},{"name":"Iserlohn"},{"name":"Ingolstadt"},{"name":"Ilmenau"},{"name":"Illingen"},{"name":"Illertissen"},{"name":"Idstein"},{"name":"Idar-Oberstein"},{"name":"Ibbenbüren"},{"name":"Husum"},{"name":"Hürth"},{"name":"Hünfeld"},{"name":"Hummelsbüttel"},{"name":"Humboldtkolonie"},{"name":"Hude"},{"name":"Hückeswagen"},{"name":"Hückelhoven"},{"name":"Hoyerswerda"},{"name":"Höxter"},{"name":"Hövelhof"},{"name":"Hörstel"},{"name":"Horb am Neckar"},{"name":"Homburg"},{"name":"Holzwickede"},{"name":"Holzminden"},{"name":"Holzkirchen"},{"name":"Hohenstein-Ernstthal"},{"name":"Hohen Neuendorf"},{"name":"Hofheim am Taunus"},{"name":"Hofgeismar"},{"name":"Hof"},{"name":"Hockenheim"},{"name":"Hochheim am Main"},{"name":"Hochfeld"},{"name":"Hille"},{"name":"Hildesheim"},{"name":"Hilden"},{"name":"Hilchenbach"},{"name":"Hiddenhausen"},{"name":"Heusweiler"},{"name":"Heusenstamm"},{"name":"Hettstedt"},{"name":"Hessisch Oldendorf"},{"name":"Herzogenrath"},{"name":"Herzogenaurach"},{"name":"Herten"},{"name":"Herrenberg"},{"name":"Herne"},{"name":"Hermsdorf"},{"name":"Herford"},{"name":"Herdecke"},{"name":"Herborn"},{"name":"Heppenheim an der Bergstrasse"},{"name":"Hennigsdorf"},{"name":"Hennef"},{"name":"Hemmingen"},{"name":"Hemer"},{"name":"Helmstedt"},{"name":"Hellersdorf"},{"name":"Heinsberg"},{"name":"Heilbad Heiligenstadt"},{"name":"Heiligensee"},{"name":"Heiligenhaus"},{"name":"Heilbronn"},{"name":"Heidenheim an der Brenz"},{"name":"Heidenau"},{"name":"Heidelberg"},{"name":"Heide"},{"name":"Hechingen"},{"name":"Hattingen"},{"name":"Hattersheim"},{"name":"Haßloch"},{"name":"Harsewinkel"},{"name":"Haren"},{"name":"Harburg"},{"name":"Hannover"},{"name":"Hanau am Main"},{"name":"Hamminkeln"},{"name":"Hamm"},{"name":"Hameln"},{"name":"Wandsbek"},{"name":"Marienthal"},{"name":"Hamburg-Mitte"},{"name":"Eimsbüttel"},{"name":"Altona"},{"name":"Hamburg"},{"name":"Halver"},{"name":"Haltern"},{"name":"Halstenbek"},{"name":"Halle"},{"name":"Halle (Saale)"},{"name":"Haldensleben I"},{"name":"Halberstadt"},{"name":"Hakenfelde"},{"name":"Haiger"},{"name":"Hagen"},{"name":"Haar"},{"name":"Haan"},{"name":"Gütersloh"},{"name":"Güstrow"},{"name":"Gunzenhausen"},{"name":"Günzburg"},{"name":"Gummersbach"},{"name":"Guben"},{"name":"Groß-Umstadt"},{"name":"Großostheim"},{"name":"Groß-Gerau"},{"name":"Großenhain"},{"name":"Gronau"},{"name":"Gröbenzell"},{"name":"Grimma"},{"name":"Griesheim"},{"name":"Grevenbroich"},{"name":"Greven"},{"name":"Greiz"},{"name":"Greifswald"},{"name":"Grefrath"},{"name":"Göttingen"},{"name":"Gotha"},{"name":"Goslar"},{"name":"Görlitz"},{"name":"Göppingen"},{"name":"Goch"},{"name":"Glinde"},{"name":"Glauchau"},{"name":"Gladbeck"},{"name":"Ginsheim-Gustavsburg"},{"name":"Gilching"},{"name":"Gifhorn"},{"name":"Gießen"},{"name":"Giengen an der Brenz"},{"name":"Gevelsberg"},{"name":"Gesundbrunnen"},{"name":"Geseke"},{"name":"Gescher"},{"name":"Gersthofen"},{"name":"Germersheim"},{"name":"Germering"},{"name":"Gerlingen"},{"name":"Geretsried"},{"name":"Gera"},{"name":"Georgsmarienhütte"},{"name":"Gelsenkirchen"},{"name":"Gelnhausen"},{"name":"Geldern"},{"name":"Geislingen an der Steige"},{"name":"Geilenkirchen"},{"name":"Geesthacht"},{"name":"Gauting"},{"name":"Garmisch-Partenkirchen"},{"name":"Garching bei München"},{"name":"Garbsen"},{"name":"Ganderkesee"},{"name":"Gaggenau"},{"name":"Fürth"},{"name":"Fürstenwalde"},{"name":"Fürstenfeldbruck"},{"name":"Fulda"},{"name":"Fröndenberg"},{"name":"Frohnau"},{"name":"Friesoythe"},{"name":"Friedrichshain"},{"name":"Friedrichshagen"},{"name":"Friedrichshafen"},{"name":"Friedrichsfelde"},{"name":"Friedrichsdorf"},{"name":"Friedenau"},{"name":"Friedberg"},{"name":"Friedberg"},{"name":"Freudenstadt"},{"name":"Freudenberg"},{"name":"Freital"},{"name":"Freising"},{"name":"Freilassing"},{"name":"Freiburg"},{"name":"Freiberg am Neckar"},{"name":"Freiberg"},{"name":"Frechen"},{"name":"Frankfurt am Main"},{"name":"Frankfurt (Oder)"},{"name":"Frankenthal"},{"name":"Frankenberg"},{"name":"Frankenberg"},{"name":"Forst"},{"name":"Forchheim"},{"name":"Flörsheim"},{"name":"Flensburg"},{"name":"Finsterwalde"},{"name":"Finnentrop"},{"name":"Stuttgart Feuerbach"},{"name":"Fellbach"},{"name":"Falkensee"},{"name":"Eutin"},{"name":"Euskirchen"},{"name":"Ettlingen"},{"name":"Esslingen"},{"name":"Essen"},{"name":"Espelkamp"},{"name":"Eschweiler"},{"name":"Eschwege"},{"name":"Eschborn"},{"name":"Erwitte"},{"name":"Erlangen"},{"name":"Erkrath"},{"name":"Erkelenz"},{"name":"Erfurt"},{"name":"Erftstadt"},{"name":"Erding"},{"name":"Eppingen"},{"name":"Eppelborn"},{"name":"Ennigerloh"},{"name":"Ennepetal"},{"name":"Enger"},{"name":"Engelskirchen"},{"name":"Emsdetten"},{"name":"Emmerich"},{"name":"Emmendingen"},{"name":"Emden"},{"name":"Eltville"},{"name":"Elsdorf"},{"name":"Elmshorn"},{"name":"Ellwangen"},{"name":"Eitorf"},{"name":"Eislingen"},{"name":"Eisenhüttenstadt"},{"name":"Eisenach"},{"name":"Einbeck"},{"name":"Eilenburg"},{"name":"Ehingen"},{"name":"Eggenstein-Leopoldshafen"},{"name":"Edewecht"},{"name":"Eckernförde"},{"name":"Eberswalde"},{"name":"Ebersbach an der Fils"},{"name":"Eberbach"},{"name":"Düsseldorf"},{"name":"Düren"},{"name":"Dülmen"},{"name":"Duisburg"},{"name":"Duderstadt"},{"name":"Dresden"},{"name":"Drensteinfurt"},{"name":"Dreieich"},{"name":"Dortmund"},{"name":"Dorsten"},{"name":"Dormagen"},{"name":"Donauwörth"},{"name":"Donaueschingen"},{"name":"Döbeln"},{"name":"Ditzingen"},{"name":"Dinslaken"},{"name":"Dingolfing"},{"name":"Dillingen an der Donau"},{"name":"Dillingen"},{"name":"Dillenburg"},{"name":"Dietzenbach"},{"name":"Diepholz"},{"name":"Dieburg"},{"name":"Deutz"},{"name":"Detmold"},{"name":"Dessau"},{"name":"Delmenhorst"},{"name":"Delitzsch"},{"name":"Delbrück"},{"name":"Deggendorf"},{"name":"Datteln"},{"name":"Darmstadt"},{"name":"Damme"},{"name":"Dahlem"},{"name":"Dachau"},{"name":"Cuxhaven"},{"name":"Crimmitschau"},{"name":"Crailsheim"},{"name":"Cottbus"},{"name":"Coswig"},{"name":"Coesfeld"},{"name":"Coburg"},{"name":"Cloppenburg"},{"name":"Clausthal-Zellerfeld"},{"name":"Chemnitz"},{"name":"Charlottenburg"},{"name":"Cham"},{"name":"Celle"},{"name":"Castrop-Rauxel"},{"name":"Calw"},{"name":"Buxtehude"},{"name":"Butzbach"},{"name":"Bürstadt"},{"name":"Burscheid"},{"name":"Burghausen"},{"name":"Burgdorf"},{"name":"Burg bei Magdeburg"},{"name":"Büren"},{"name":"Bünde"},{"name":"Bühl"},{"name":"Büdingen"},{"name":"Buckow"},{"name":"Bückeburg"},{"name":"Buchholz in der Nordheide"},{"name":"Französisch Buchholz"},{"name":"Buchen"},{"name":"Brühl"},{"name":"Brüggen"},{"name":"Bruckmühl"},{"name":"Bruchsal"},{"name":"Bruchköbel"},{"name":"Britz"},{"name":"Brilon"},{"name":"Bretten"},{"name":"Bremervörde"},{"name":"Bremerhaven"},{"name":"Bremen"},{"name":"Braunschweig"},{"name":"Brandenburg an der Havel"},{"name":"Bramsche"},{"name":"Brakel"},{"name":"Brake (Unterweser)"},{"name":"Brackenheim"},{"name":"Bottrop"},{"name":"Bornheim"},{"name":"Borna"},{"name":"Borken"},{"name":"Boppard"},{"name":"Bonn"},{"name":"Bönen"},{"name":"Bogenhausen"},{"name":"Bochum"},{"name":"Bocholt"},{"name":"Böblingen"},{"name":"Bobingen"},{"name":"Blomberg"},{"name":"Blieskastel"},{"name":"Blankenburg"},{"name":"Bitterfeld-Wolfen"},{"name":"Bingen am Rhein"},{"name":"Bietigheim-Bissingen"},{"name":"Biesdorf"},{"name":"Bielefeld"},{"name":"Biberach an der Riß"},{"name":"Bexbach"},{"name":"Beverungen"},{"name":"Bernburg"},{"name":"Bernau bei Berlin"},{"name":"Berlin"},{"name":"Bergneustadt"},{"name":"Bergkamen"},{"name":"Bergisch Gladbach"},{"name":"Bergheim"},{"name":"Bensheim"},{"name":"Bendorf"},{"name":"Bedburg"},{"name":"Beckum"},{"name":"Beckingen"},{"name":"Bayreuth"},{"name":"Bautzen"},{"name":"Baunatal"},{"name":"Baumschulenweg"},{"name":"Bassum"},{"name":"Bamberg"},{"name":"Balingen"},{"name":"Baiersbronn"},{"name":"Baesweiler"},{"name":"Bad Zwischenahn"},{"name":"Bad Wildungen"},{"name":"Bad Waldsee"},{"name":"Bad Vilbel"},{"name":"Bad Tölz"},{"name":"Bad Soden am Taunus"},{"name":"Bad Segeberg"},{"name":"Bad Schwartau"},{"name":"Bad Salzungen"},{"name":"Bad Salzuflen"},{"name":"Bad Säckingen"},{"name":"Bad Reichenhall"},{"name":"Bad Rappenau"},{"name":"Bad Pyrmont"},{"name":"Bad Oldesloe"},{"name":"Bad Oeynhausen"},{"name":"Bad Neustadt an der Saale"},{"name":"Bad Neuenahr-Ahrweiler"},{"name":"Bad Nauheim"},{"name":"Bad Münstereifel"},{"name":"Bad Münder am Deister"},{"name":"Bad Mergentheim"},{"name":"Bad Lippspringe"},{"name":"Bad Langensalza"},{"name":"Bad Kreuznach"},{"name":"Bad Kissingen"},{"name":"Bad Honnef"},{"name":"Bad Homburg vor der Höhe"},{"name":"Bad Hersfeld"},{"name":"Bad Harzburg"},{"name":"Bad Essen"},{"name":"Baden-Baden"},{"name":"Bad Dürkheim"},{"name":"Bad Driburg"},{"name":"Bad Berleburg"},{"name":"Bad Bentheim"},{"name":"Bad Aibling"},{"name":"Backnang"},{"name":"Babenhausen"},{"name":"Aurich"},{"name":"Augsburg"},{"name":"Auerbach"},{"name":"Aue"},{"name":"Attendorn"},{"name":"Aschersleben"},{"name":"Ascheberg"},{"name":"Aschaffenburg"},{"name":"Bad Arolsen"},{"name":"Arnstadt"},{"name":"Arnsberg"},{"name":"Apolda"},{"name":"Ansbach"},{"name":"Annaberg-Buchholz"},{"name":"Angermünde"},{"name":"Andernach"},{"name":"Amberg"},{"name":"Alzey"},{"name":"Alzenau in Unterfranken"},{"name":"Altglienicke"},{"name":"Altenburg"},{"name":"Altena"},{"name":"Altdorf"},{"name":"Alsfeld"},{"name":"Alsdorf"},{"name":"Alfter"},{"name":"Alfeld"},{"name":"Albstadt"},{"name":"Aichach"},{"name":"Ahrensburg"},{"name":"Ahlen"},{"name":"Ahaus"},{"name":"Adlershof"},{"name":"Achim"},{"name":"Achern"},{"name":"Aalen"},{"name":"Vellmar"},{"name":"Henstedt-Ulzburg"},{"name":"Aachen"},{"name":"Mörfelden-Walldorf"},{"name":"Riedstadt"},{"name":"Lauda-Königshofen"},{"name":"Filderstadt"},{"name":"Ostfildern"},{"name":"Rodgau"},{"name":"Gropiusstadt"},{"name":"Seeheim-Jugenheim"},{"name":"Charlottenburg-Nord"},{"name":"Mitte"},{"name":"Spremberg"},{"name":"Rheinstetten"},{"name":"Altstadt Sud"},{"name":"Altstadt Nord"},{"name":"Neuehrenfeld"},{"name":"Bilderstoeckchen"},{"name":"Stuttgart-Ost"},{"name":"Bochum-Hordel"},{"name":"St. Pauli"},{"name":"Eidelstedt"},{"name":"Halle Neustadt"},{"name":"Bergedorf"},{"name":"Spandau"},{"name":"Berlin Schöneberg"},{"name":"Berlin Treptow"},{"name":"Niederrad"},{"name":"Haselbachtal"},{"name":"Barmbek-Nord"},{"name":"Farmsen-Berne"},{"name":"Falkenhagener Feld"},{"name":"Neu-Hohenschönhausen"},{"name":"Alt-Hohenschönhausen"},{"name":"Fennpfuhl"},{"name":"Hamburg-Nord"},{"name":"Burg Unter-Falkenstein"},{"name":"Neustadt/Nord"},{"name":"Neustadt/Süd"},{"name":"Kalk"},{"name":"Mülheim"},{"name":"Gartenstadt"},{"name":"Tadjoura"},{"name":"Obock"},{"name":"Djibouti"},{"name":"Ḏânan"},{"name":"'Ali Sabieh"},{"name":"Viborg"},{"name":"Vejle"},{"name":"Vanløse"},{"name":"Taastrup"},{"name":"Svendborg"},{"name":"Stenløse"},{"name":"Sønderborg"},{"name":"Slagelse"},{"name":"Skive"},{"name":"Silkeborg"},{"name":"Roskilde"},{"name":"Rødovre"},{"name":"Ringsted"},{"name":"Randers"},{"name":"Odense"},{"name":"Nykøbing Falster"},{"name":"Nyborg"},{"name":"Næstved"},{"name":"Nørresundby"},{"name":"Lillerød"},{"name":"Korsør"},{"name":"Køge"},{"name":"Copenhagen"},{"name":"Kolding"},{"name":"Kalundborg"},{"name":"Ishøj"},{"name":"Hvidovre"},{"name":"Horsens"},{"name":"Hørsholm"},{"name":"Holstebro"},{"name":"Holbæk"},{"name":"Hjørring"},{"name":"Hillerød"},{"name":"Herning"},{"name":"Helsingør"},{"name":"Haderslev"},{"name":"Greve"},{"name":"Glostrup"},{"name":"Frederikshavn"},{"name":"Frederiksberg"},{"name":"Fredericia"},{"name":"Farum"},{"name":"Esbjerg"},{"name":"Charlottenlund"},{"name":"Birkerød"},{"name":"Ballerup"},{"name":"Århus"},{"name":"Aalborg"},{"name":"Albertslund"},{"name":"Aabenraa"},{"name":"Roseau"},{"name":"Villa Francisca"},{"name":"Villa Consuelo"},{"name":"Villa Bisonó"},{"name":"Villa Altagracia"},{"name":"Tamboril"},{"name":"Santo Domingo"},{"name":"Santiago de los Caballeros"},{"name":"Santa Cruz de El Seibo"},{"name":"Santa Cruz de Barahona"},{"name":"San Pedro de Macorís"},{"name":"San Juan de la Maguana"},{"name":"San José de Ocoa"},{"name":"San Francisco de Macorís"},{"name":"San Fernando de Monte Cristi"},{"name":"Puerto Plata"},{"name":"Salvaleón de Higüey"},{"name":"Salcedo"},{"name":"Sabaneta"},{"name":"Sabana Grande de Boyá"},{"name":"Río Grande"},{"name":"Quisqueya"},{"name":"Punta Cana"},{"name":"Neiba"},{"name":"Nagua"},{"name":"Monte Plata"},{"name":"Moca"},{"name":"Mao"},{"name":"Las Matas de Farfán"},{"name":"La Romana"},{"name":"Jarabacoa"},{"name":"Hato Mayor del Rey"},{"name":"Esperanza"},{"name":"Dajabón"},{"name":"Cotuí"},{"name":"Constanza"},{"name":"Concepción de La Vega"},{"name":"Ciudad Nueva"},{"name":"Bonao"},{"name":"Boca Chica"},{"name":"San Cristóbal"},{"name":"Bella Vista"},{"name":"Bayaguana"},{"name":"Baní"},{"name":"Bajos de Haina"},{"name":"Azua"},{"name":"Santo Domingo Oeste"},{"name":"Boumerdas"},{"name":"Zeribet el Oued"},{"name":"Zeralda"},{"name":"Zemoura"},{"name":"Touggourt"},{"name":"Tolga"},{"name":"Tlemcen"},{"name":"Tizi Rached"},{"name":"Tizi Ouzou"},{"name":"Tizi-n-Tleta"},{"name":"Tizi Gheniff"},{"name":"Tissemsilt"},{"name":"Tirmitine"},{"name":"Tipasa"},{"name":"Tindouf"},{"name":"Timizart"},{"name":"Timimoun"},{"name":"el hed"},{"name":"Tiaret"},{"name":"Theniet el Had"},{"name":"Thenia"},{"name":"Telerghma"},{"name":"Tébessa"},{"name":"Tebesbest"},{"name":"Tazoult-Lambese"},{"name":"Tamanrasset"},{"name":"Tamalous"},{"name":"Tadmaït"},{"name":"Sour el Ghozlane"},{"name":"Souma"},{"name":"Lardjem"},{"name":"Souk Ahras"},{"name":"Sougueur"},{"name":"Skikda"},{"name":"Sig"},{"name":"Sidi Okba"},{"name":"Sidi Moussa"},{"name":"Sidi Mérouane"},{"name":"Sidi Khaled"},{"name":"Sidi ech Chahmi"},{"name":"Sidi Bel Abbès"},{"name":"Sidi Amrane"},{"name":"Sidi Akkacha"},{"name":"Sidi Aïssa"},{"name":"Sidi Abdelli"},{"name":"Sfizef"},{"name":"Sétif"},{"name":"Sedrata"},{"name":"Seddouk"},{"name":"Sebdou"},{"name":"Saoula"},{"name":"Salah Bey"},{"name":"Saïda"},{"name":"Rouissat"},{"name":"Rouiba"},{"name":"Rouached"},{"name":"Robbah"},{"name":"Remchi"},{"name":"Relizane"},{"name":"Reguiba"},{"name":"Reghaïa"},{"name":"Reggane"},{"name":"Râs el Oued"},{"name":"Râs el Aïoun"},{"name":"Oum el Bouaghi"},{"name":"Ouled Mimoun"},{"name":"Oued Sly"},{"name":"Oued Rhiou"},{"name":"Oued Fodda"},{"name":"Oued el Alleug"},{"name":"Oued el Abtal"},{"name":"Ouargla"},{"name":"Oran"},{"name":"Nedroma"},{"name":"Naciria"},{"name":"M’Sila"},{"name":"Mouzaïa"},{"name":"Mostaganem"},{"name":"Mila"},{"name":"Metlili Chaamba"},{"name":"Messaad"},{"name":"Meskiana"},{"name":"Mers el Kebir"},{"name":"Merouana"},{"name":"Melouza"},{"name":"Mekla"},{"name":"Mehdia"},{"name":"Megarine"},{"name":"Meftah"},{"name":"Médéa"},{"name":"Mazouna"},{"name":"Mascara"},{"name":"Mansourah"},{"name":"Mansoûra"},{"name":"Makouda"},{"name":"L’Arbaa Naït Irathen"},{"name":"Larbaâ"},{"name":"Lakhdaria"},{"name":"Laghouat"},{"name":"Ksar el Boukhari"},{"name":"Ksar Chellala"},{"name":"Kolea"},{"name":"Khenchela"},{"name":"Khemis Miliana"},{"name":"Khemis el Khechna"},{"name":"Kerkera"},{"name":"Jijel"},{"name":"Djidiouia"},{"name":"Isser"},{"name":"I-n-Salah"},{"name":"Ighram"},{"name":"Hennaya"},{"name":"Héliopolis"},{"name":"Hassi Messaoud"},{"name":"Hammamet"},{"name":"Hammam Bou Hadjar"},{"name":"Hamma Bouziane"},{"name":"Hadjout"},{"name":"Guelma"},{"name":"Ghardaïa"},{"name":"Frenda"},{"name":"Freha"},{"name":"Feraoun"},{"name":"Es Senia"},{"name":"El Tarf"},{"name":"El Oued"},{"name":"El Malah"},{"name":"El Kseur"},{"name":"El Khroub"},{"name":"El Kala"},{"name":"El Idrissia"},{"name":"El Hadjira"},{"name":"El Hadjar"},{"name":"El Eulma"},{"name":"El Bayadh"},{"name":"El Attaf"},{"name":"Chlef"},{"name":"El Aouinet"},{"name":"El Amria"},{"name":"El Affroun"},{"name":"El Achir"},{"name":"El Abiodh Sidi Cheikh"},{"name":"El Abadia"},{"name":"Ech Chettia"},{"name":"Drean"},{"name":"Draa el Mizan"},{"name":"Draa Ben Khedda"},{"name":"Douera"},{"name":"Djelfa"},{"name":"Djamaa"},{"name":"Didouche Mourad"},{"name":"Dellys"},{"name":"Debila"},{"name":"Dar el Beïda"},{"name":"Dar Chioukh"},{"name":"Constantine"},{"name":"Chorfa"},{"name":"Chiffa"},{"name":"Chetouane"},{"name":"Cheria"},{"name":"Cheraga"},{"name":"Chemini"},{"name":"Chelghoum el Aïd"},{"name":"Chebli"},{"name":"Charef"},{"name":"Chabet el Ameur"},{"name":"Brezina"},{"name":"Bou Tlelis"},{"name":"Boumahra Ahmed"},{"name":"Boukadir"},{"name":"Bou Ismaïl"},{"name":"Bouïra"},{"name":"Bouinan"},{"name":"Bou Hanifia el Hamamat"},{"name":"Bougara"},{"name":"Bougaa"},{"name":"Boufarik"},{"name":"Boudouaou"},{"name":"Boudjima"},{"name":"Boû Arfa"},{"name":"Bordj Zemoura"},{"name":"Bordj Ghdir"},{"name":"Bordj el Kiffan"},{"name":"Bordj Bou Arreridj"},{"name":"Boghni"},{"name":"Blida"},{"name":"Biskra"},{"name":"Birkhadem"},{"name":"Birine"},{"name":"Bir el Djir"},{"name":"Bir el Ater"},{"name":"Besbes"},{"name":"Berrouaghia"},{"name":"Berriane"},{"name":"Berrahal"},{"name":"Bensekrane"},{"name":"Ben Mehidi"},{"name":"Beni Saf"},{"name":"Beni Mester"},{"name":"Beni Mered"},{"name":"Beni Douala"},{"name":"Beni Amrane"},{"name":"Bejaïa"},{"name":"Béchar"},{"name":"Batna"},{"name":"Barika"},{"name":"Barbacha"},{"name":"Baraki"},{"name":"Bab Ezzouar"},{"name":"Azzaba"},{"name":"Azazga"},{"name":"Arris"},{"name":"Arhribs"},{"name":"Arbatache"},{"name":"Aoulef"},{"name":"Annaba"},{"name":"Ammi Moussa"},{"name":"Amizour"},{"name":"Algiers"},{"name":"Akbou"},{"name":"Aïn Touta"},{"name":"Aïn Temouchent"},{"name":"Aïn Taya"},{"name":"Aïn Smara"},{"name":"Aïn Sefra"},{"name":"Aïn Oussera"},{"name":"’Aïn Merane"},{"name":"Aïn Kercha"},{"name":"Aïn Fakroun"},{"name":"’Aïn el Turk"},{"name":"’Aïn el Melh"},{"name":"’Aïn el Hammam"},{"name":"‘Aïn el Hadjel"},{"name":"Aïn el Bya"},{"name":"’Aïn el Berd"},{"name":"’Aïn el Bell"},{"name":"’Aïn Deheb"},{"name":"Aïn Defla"},{"name":"Aïn Bessem"},{"name":"’Aïn Benian"},{"name":"Aïn Beïda"},{"name":"Aïn Arnat"},{"name":"’Aïn Abid"},{"name":"Aflou"},{"name":"Adrar"},{"name":"Abou el Hassan"},{"name":"BABOR - VILLE"},{"name":"Zamora"},{"name":"Yaguachi Nuevo"},{"name":"Vinces"},{"name":"Ventanas"},{"name":"Velasco Ibarra"},{"name":"Tulcán"},{"name":"Tena"},{"name":"Sucre"},{"name":"Santo Domingo de los Colorados"},{"name":"Santa Rosa"},{"name":"Santa Elena"},{"name":"San Lorenzo de Esmeraldas"},{"name":"San Gabriel"},{"name":"Samborondón"},{"name":"Salinas"},{"name":"Rosa Zarate"},{"name":"Riobamba"},{"name":"Quito"},{"name":"Quevedo"},{"name":"Puyo"},{"name":"Pujilí"},{"name":"Puerto Francisco de Orellana"},{"name":"Portoviejo"},{"name":"Playas"},{"name":"Piñas"},{"name":"Pelileo"},{"name":"Pedro Carbo"},{"name":"Pasaje"},{"name":"Otavalo"},{"name":"Naranjito"},{"name":"Naranjal"},{"name":"Montecristi"},{"name":"Montalvo"},{"name":"Manta"},{"name":"Machala"},{"name":"Machachi"},{"name":"Macas"},{"name":"Loja"},{"name":"La Troncal"},{"name":"Latacunga"},{"name":"La Maná"},{"name":"La Libertad"},{"name":"Nueva Loja"},{"name":"Jipijapa"},{"name":"Ibarra"},{"name":"Huaquillas"},{"name":"Guayaquil"},{"name":"Guaranda"},{"name":"Gualaceo"},{"name":"Esmeraldas"},{"name":"El Triunfo"},{"name":"Eloy Alfaro"},{"name":"Cuenca"},{"name":"Chone"},{"name":"Cayambe"},{"name":"Catamayo"},{"name":"Cariamanga"},{"name":"Calceta"},{"name":"Boca Suno"},{"name":"Balzar"},{"name":"Bahía de Caráquez"},{"name":"Babahoyo"},{"name":"Azogues"},{"name":"Atuntaqui"},{"name":"Ambato"},{"name":"Tutamandahostel"},{"name":"Viljandi"},{"name":"Tartu"},{"name":"Tallinn"},{"name":"Sillamäe"},{"name":"Rakvere"},{"name":"Pärnu"},{"name":"Narva"},{"name":"Maardu"},{"name":"Kohtla-Järve"},{"name":"Ziftá"},{"name":"Toukh"},{"name":"Tanda"},{"name":"Ţāmiyah"},{"name":"Ţalkhā"},{"name":"Talā"},{"name":"Ţahţā"},{"name":"Sumusţā as Sulţānī"},{"name":"Sohag"},{"name":"Sīdī Sālim"},{"name":"Shirbīn"},{"name":"Shibīn al Qanāţir"},{"name":"Shibīn al Kawm"},{"name":"Samannūd"},{"name":"Samālūţ"},{"name":"Rosetta"},{"name":"Ras Gharib"},{"name":"Quwaysinā"},{"name":"Quţūr"},{"name":"Kousa"},{"name":"Qinā"},{"name":"Qalyūb"},{"name":"Naj‘ Ḩammādī"},{"name":"Minyat an Naşr"},{"name":"Minūf"},{"name":"Maţāy"},{"name":"Mashtūl as Sūq"},{"name":"Mersa Matruh"},{"name":"Manfalūţ"},{"name":"Mallawī"},{"name":"Madīnat Sittah Uktūbar"},{"name":"Kawm Umbū"},{"name":"Kawm Ḩamādah"},{"name":"Kafr Şaqr"},{"name":"Kafr az Zayyāt"},{"name":"Kafr ash Shaykh"},{"name":"Kafr ad Dawwār"},{"name":"Juhaynah"},{"name":"Jirjā"},{"name":"‘Izbat al Burj"},{"name":"Iţsā"},{"name":"Isnā"},{"name":"Idkū"},{"name":"Idfū"},{"name":"Ibshawāy"},{"name":"Ḩalwān"},{"name":"Hihyā"},{"name":"Ḩawsh ‘Īsá"},{"name":"Fuwwah"},{"name":"Farshūţ"},{"name":"Fāraskūr"},{"name":"Fāqūs"},{"name":"Damietta"},{"name":"Diyarb Najm"},{"name":"Disūq"},{"name":"Dishnā"},{"name":"Dikirnis"},{"name":"Dayrūţ"},{"name":"Dayr Mawās"},{"name":"Damanhūr"},{"name":"Būsh"},{"name":"Port Said"},{"name":"Būr Safājah"},{"name":"Bilqās"},{"name":"Bilbays"},{"name":"Basyūn"},{"name":"Banī Suwayf"},{"name":"Banī Mazār"},{"name":"Banhā"},{"name":"Zagazig"},{"name":"Awsīm"},{"name":"At Tall al Kabīr"},{"name":"Asyūţ"},{"name":"Aswan"},{"name":"Suez"},{"name":"Aş Şaff"},{"name":"Ash Shuhadā’"},{"name":"Ashmūn"},{"name":"Al Wāsiţah"},{"name":"Luxor"},{"name":"Al Qūşīyah"},{"name":"Al Quşayr"},{"name":"Al Qurayn"},{"name":"Al Qanāyāt"},{"name":"Al Qanāţir al Khayrīyah"},{"name":"Cairo"},{"name":"Al Minyā"},{"name":"Al Maţarīyah"},{"name":"Al Manzilah"},{"name":"Al Manşūrah"},{"name":"Al Manshāh"},{"name":"Al Maḩallah al Kubrá"},{"name":"Al Khārijah"},{"name":"Al Khānkah"},{"name":"Al Jīzah"},{"name":"Al Jamālīyah"},{"name":"Ismailia"},{"name":"Alexandria"},{"name":"Al Ibrāhīmīyah"},{"name":"Al Ḩawāmidīyah"},{"name":"Al Ḩāmūl"},{"name":"Hurghada"},{"name":"Al Fayyūm"},{"name":"Al Fashn"},{"name":"Al Bawīţī"},{"name":"Al Balyanā"},{"name":"Al Bājūr"},{"name":"Al Badārī"},{"name":"Al ‘Ayyāţ"},{"name":"Arish"},{"name":"Akhmīm"},{"name":"Ajā"},{"name":"Ad Dilinjāt"},{"name":"Abū Tīj"},{"name":"Abū Qurqāş"},{"name":"Abū Kabīr"},{"name":"Abū al Maţāmīr"},{"name":"Abnūb"},{"name":"Az Zarqā"},{"name":"Ain Sukhna"},{"name":"Smara"},{"name":"Laâyoune / El Aaiún"},{"name":"Dakhla"},{"name":"Massawa"},{"name":"Keren"},{"name":"Barentu"},{"name":"Asmara"},{"name":"Assab"},{"name":"Mendefera"},{"name":"Zubia"},{"name":"Zafra"},{"name":"Yecla"},{"name":"Villena"},{"name":"Villarrobledo"},{"name":"Vila-real"},{"name":"Villanueva de la Serena"},{"name":"Villajoyosa"},{"name":"Vícar"},{"name":"Vélez-Málaga"},{"name":"Valencia"},{"name":"Valdepeñas"},{"name":"Utrera"},{"name":"Ubrique"},{"name":"Úbeda"},{"name":"Totana"},{"name":"Torrox"},{"name":"Torrevieja"},{"name":"Torre-Pacheco"},{"name":"Torrent"},{"name":"Torremolinos"},{"name":"Tomelloso"},{"name":"Tomares"},{"name":"Toledo"},{"name":"Tías"},{"name":"Telde"},{"name":"Teguise"},{"name":"Tarifa"},{"name":"Talavera de la Reina"},{"name":"Tacoronte"},{"name":"Tavernes de la Valldigna"},{"name":"Sueca"},{"name":"Silla"},{"name":"Sevilla"},{"name":"San Vicent del Raspeig"},{"name":"Santomera"},{"name":"Santa Pola"},{"name":"Santa Lucía"},{"name":"Santafé"},{"name":"Santa Eulària des Riu"},{"name":"Santa Cruz de Tenerife"},{"name":"Santa Cruz de la Palma"},{"name":"Santa Brígida"},{"name":"San Roque"},{"name":"San Pedro del Pinatar"},{"name":"San Pedro de Alcántara"},{"name":"San Miguel De Abona"},{"name":"Sanlúcar de Barrameda"},{"name":"San Juan de Aznalfarache"},{"name":"San Juan de Alicante"},{"name":"San Javier"},{"name":"San Isidro"},{"name":"San Fernando"},{"name":"La Laguna"},{"name":"San Bartolomé de Tirajana"},{"name":"San Bartolomé"},{"name":"Sant Antoni de Portmany"},{"name":"Sagunto"},{"name":"Rota"},{"name":"Roquetas de Mar"},{"name":"Ronda"},{"name":"Rojales"},{"name":"Rincón de la Victoria"},{"name":"Ribarroja"},{"name":"Requena"},{"name":"Realejo Alto"},{"name":"Puçol"},{"name":"Puerto Real"},{"name":"Puertollano"},{"name":"Puerto del Rosario"},{"name":"Puerto de la Cruz"},{"name":"Puente-Genil"},{"name":"La Pobla de Vallbona"},{"name":"Priego de Córdoba"},{"name":"Pozoblanco"},{"name":"Pollença"},{"name":"Pilar de la Horadada"},{"name":"Picassent"},{"name":"Paterna"},{"name":"Palma"},{"name":"Palma del Río"},{"name":"Pájara"},{"name":"Paiporta"},{"name":"Osuna"},{"name":"Orihuela"},{"name":"Ontinyent"},{"name":"Onda"},{"name":"Oliva"},{"name":"Novelda"},{"name":"Níjar"},{"name":"Nerja"},{"name":"Navalmoral de la Mata"},{"name":"Murcia"},{"name":"Mula"},{"name":"Muchamiel"},{"name":"Motril"},{"name":"Morón de la Frontera"},{"name":"Montilla"},{"name":"Montijo"},{"name":"Moncada"},{"name":"Molina de Segura"},{"name":"Moguer"},{"name":"Mogán"},{"name":"Mislata"},{"name":"Mijas"},{"name":"Mérida"},{"name":"Melilla"},{"name":"Mazarrón"},{"name":"Maspalomas"},{"name":"Massamagrell"},{"name":"Martos"},{"name":"Marratxí"},{"name":"Marchena"},{"name":"Marbella"},{"name":"Maracena"},{"name":"Manzanares"},{"name":"Manises"},{"name":"Manacor"},{"name":"Málaga"},{"name":"Mairena del Aljarafe"},{"name":"Mairena del Alcor"},{"name":"Maó"},{"name":"Lucena"},{"name":"Los Palacios y Villafranca"},{"name":"Los Llanos de Aridane"},{"name":"Los Barrios"},{"name":"Los Alcázares"},{"name":"Lorca"},{"name":"Lora del Río"},{"name":"Loja"},{"name":"Llucmajor"},{"name":"Llíria"},{"name":"Linares"},{"name":"Lepe"},{"name":"Lebrija"},{"name":"La Unión"},{"name":"Las Torres de Cotillas"},{"name":"Las Palmas de Gran Canaria"},{"name":"La Solana"},{"name":"Las Cabezas de San Juan"},{"name":"La Roda"},{"name":"La Rinconada"},{"name":"La Orotava"},{"name":"La Oliva"},{"name":"la Nucia"},{"name":"La Línea de la Concepción"},{"name":"L'Eliana"},{"name":"La Carolina"},{"name":"Jumilla"},{"name":"Jerez de la Frontera"},{"name":"Javea"},{"name":"Xàtiva"},{"name":"Jaén"},{"name":"Isla Cristina"},{"name":"Ingenio"},{"name":"Inca"},{"name":"Icod de los Vinos"},{"name":"Ibiza"},{"name":"Ibi"},{"name":"Huércal-Overa"},{"name":"Huelva"},{"name":"Hellín"},{"name":"Güimar"},{"name":"Guía de Isora"},{"name":"Guardamar del Segura"},{"name":"Guadix"},{"name":"Granadilla de Abona"},{"name":"Granada"},{"name":"Gandia"},{"name":"Gáldar"},{"name":"Fuengirola"},{"name":"Felanitx"},{"name":"Estepona"},{"name":"El Viso del Alcor"},{"name":"El Puerto de Santa María"},{"name":"El Ejido"},{"name":"Elda"},{"name":"Elche"},{"name":"El Arahal"},{"name":"Écija"},{"name":"Dos Hermanas"},{"name":"Don Benito"},{"name":"Denia"},{"name":"Daimiel"},{"name":"Cullera"},{"name":"Quart de Poblet"},{"name":"Crevillente"},{"name":"Coria del Río"},{"name":"Córdoba"},{"name":"Conil de la Frontera"},{"name":"Coín"},{"name":"Ciudad Real"},{"name":"Cieza"},{"name":"Xirivella"},{"name":"Chipiona"},{"name":"Chiclana de la Frontera"},{"name":"Cehegín"},{"name":"Catarroja"},{"name":"Castilleja de la Cuesta"},{"name":"Castelló de la Plana"},{"name":"Cartaya"},{"name":"Cártama"},{"name":"Cartagena"},{"name":"Carmona"},{"name":"Carlet"},{"name":"Carcaixent"},{"name":"Caravaca"},{"name":"Candelaria"},{"name":"Campo de Criptana"},{"name":"Campiña"},{"name":"el Campello"},{"name":"Camas"},{"name":"Calvià"},{"name":"Calp"},{"name":"Callosa de Segura"},{"name":"Cadiz"},{"name":"Cáceres"},{"name":"Cabra"},{"name":"Burriana"},{"name":"Burjassot"},{"name":"Bormujos"},{"name":"Bétera"},{"name":"Berja"},{"name":"Benidorm"},{"name":"Benetússer"},{"name":"Benalmádena"},{"name":"Baza"},{"name":"Barbate de Franco"},{"name":"Bailén"},{"name":"Baeza"},{"name":"Baena"},{"name":"Badajoz"},{"name":"Ayamonte"},{"name":"Atarfe"},{"name":"Atamaría"},{"name":"Aspe"},{"name":"Arucas"},{"name":"Arrecife"},{"name":"Arona"},{"name":"Armilla"},{"name":"Arcos de la Frontera"},{"name":"Archena"},{"name":"Antequera"},{"name":"Andújar"},{"name":"Altea"},{"name":"Almuñécar"},{"name":"Almoradí"},{"name":"Almonte"},{"name":"Almería"},{"name":"Almendralejo"},{"name":"Almassora"},{"name":"Almansa"},{"name":"Aljaraque"},{"name":"Alicante"},{"name":"Alhaurín el Grande"},{"name":"Alhaurín de la Torre"},{"name":"Alhama de Murcia"},{"name":"Algemesí"},{"name":"Algeciras"},{"name":"Alfafar"},{"name":"Aldaia"},{"name":"Alcúdia"},{"name":"Alcoy"},{"name":"Alzira"},{"name":"Alcázar de San Juan"},{"name":"Alcantarilla"},{"name":"Alcalá la Real"},{"name":"Alcalá de Guadaira"},{"name":"Alboraya"},{"name":"Albolote"},{"name":"Albal"},{"name":"Albacete"},{"name":"Alaquàs"},{"name":"Agüimes"},{"name":"Águilas"},{"name":"Adra"},{"name":"Adeje"},{"name":"Groa de Murviedro"},{"name":"Zarautz"},{"name":"Zaragoza"},{"name":"Zamora"},{"name":"Viveiro"},{"name":"Gasteiz / Vitoria"},{"name":"Vinaròs"},{"name":"Villaviciosa de Odón"},{"name":"Villaverde"},{"name":"Villaquilambre"},{"name":"Vilanova i la Geltrú"},{"name":"Villanueva del Pardillo"},{"name":"Villanueva de la Cañada"},{"name":"Vilalba"},{"name":"Vilagarcía de Arousa"},{"name":"Vilafranca del Penedès"},{"name":"Vila-seca"},{"name":"Vilaseca"},{"name":"Viladecans"},{"name":"Vigo"},{"name":"Vic"},{"name":"Vicálvaro"},{"name":"El Vendrell"},{"name":"Valls"},{"name":"Valladolid"},{"name":"Valdemoro"},{"name":"Rivas-Vaciamadrid"},{"name":"Utebo"},{"name":"Tui"},{"name":"Tudela"},{"name":"Tortosa"},{"name":"Torrelodones"},{"name":"Torrelavega"},{"name":"Torrejón de Ardoz"},{"name":"Torredembarra"},{"name":"Tordera"},{"name":"Tolosa"},{"name":"Tetuán de las Victorias"},{"name":"Teruel"},{"name":"Teo"},{"name":"Tàrrega"},{"name":"Terrassa"},{"name":"Tarragona"},{"name":"Tarancón"},{"name":"Soria"},{"name":"Sitges"},{"name":"Sestao"},{"name":"Seseña"},{"name":"Segovia"},{"name":"Cerdanyola del Vallès"},{"name":"Sant Vicenç dels Horts"},{"name":"Barakaldo"},{"name":"Santurtzi"},{"name":"Sant Just Desvern"},{"name":"Santiago de Compostela"},{"name":"Santa Perpètua de Mogoda"},{"name":"Santander"},{"name":"Barberà del Vallès"},{"name":"Santa Coloma de Gramenet"},{"name":"San Sebastián de los Reyes"},{"name":"Donostia / San Sebastián"},{"name":"Sant Quirze del Vallès"},{"name":"Sant Pere de Ribes"},{"name":"San Martín de la Vega"},{"name":"San Lorenzo de El Escorial"},{"name":"Vilassar de Mar"},{"name":"Sant Joan Despí"},{"name":"Sanxenxo"},{"name":"San Fernando de Henares"},{"name":"Sant Feliu de Llobregat"},{"name":"Sant Feliu de Guíxols"},{"name":"Sant Cugat del Vallès"},{"name":"Sant Celoni"},{"name":"Sant Carles de la Ràpita"},{"name":"Sant Boi de Llobregat"},{"name":"Sant Andreu de Palomar"},{"name":"San Andrés del Rabanedo"},{"name":"Sant Andreu de la Barca"},{"name":"Sant Adrià de Besòs"},{"name":"Sama"},{"name":"Salt"},{"name":"Salou"},{"name":"Salamanca"},{"name":"Sabadell"},{"name":"Rubí"},{"name":"Roses"},{"name":"Ripollet"},{"name":"Ribeira"},{"name":"Reus"},{"name":"Errenteria"},{"name":"Redondela"},{"name":"Puente de Vallecas"},{"name":"Ponteareas"},{"name":"Premià de Mar"},{"name":"Pozuelo de Alarcón"},{"name":"Poio"},{"name":"Portugalete"},{"name":"Porriño"},{"name":"Pontevedra"},{"name":"Ponferrada"},{"name":"Plasencia"},{"name":"Pinto"},{"name":"Pineda de Mar"},{"name":"Parla"},{"name":"Parets del Vallès"},{"name":"Pamplona"},{"name":"Palencia"},{"name":"Palamós"},{"name":"Palafrugell"},{"name":"Oviedo"},{"name":"Oria"},{"name":"Ourense"},{"name":"Olot"},{"name":"Olesa de Montserrat"},{"name":"Oleiros"},{"name":"Nigrán"},{"name":"Navalcarnero"},{"name":"Narón"},{"name":"Mungia"},{"name":"Móstoles"},{"name":"Moratalaz"},{"name":"Monzón"},{"name":"Montornès del Vallès"},{"name":"Monforte de Lemos"},{"name":"Arrasate / Mondragón"},{"name":"Montcada i Reixac"},{"name":"Mollet del Vallès"},{"name":"Molins de Rei"},{"name":"Moaña"},{"name":"Miranda de Ebro"},{"name":"Mieres"},{"name":"Mejorada del Campo"},{"name":"Medina del Campo"},{"name":"Mataró"},{"name":"El Masnou"},{"name":"Martorell"},{"name":"Marín"},{"name":"Manresa"},{"name":"Manlleu"},{"name":"Malgrat de Mar"},{"name":"Majadahonda"},{"name":"Madrid"},{"name":"Lugo"},{"name":"Logroño"},{"name":"Lloret de Mar"},{"name":"Laudio / Llodio"},{"name":"Lleida"},{"name":"León"},{"name":"Leioa"},{"name":"Leganés"},{"name":"Las Rozas de Madrid"},{"name":"Lasarte"},{"name":"La Pineda"},{"name":"Lalín"},{"name":"Laguna de Duero"},{"name":"A Estrada"},{"name":"A Coruña"},{"name":"Irun"},{"name":"Illescas"},{"name":"Igualada"},{"name":"Humanes de Madrid"},{"name":"Huesca"},{"name":"L'Hospitalet de Llobregat"},{"name":"Hortaleza"},{"name":"Hernani"},{"name":"Gernika-Lumo"},{"name":"Getxo"},{"name":"Guadalajara"},{"name":"Granollers"},{"name":"Gràcia"},{"name":"Gijón"},{"name":"Getafe"},{"name":"Girona"},{"name":"Gavà"},{"name":"Galdakao"},{"name":"Galapagar"},{"name":"Hondarribia"},{"name":"Fuenlabrada"},{"name":"Figueras"},{"name":"Figueres"},{"name":"Esplugues de Llobregat"},{"name":"Esparreguera"},{"name":"Ermua"},{"name":"Erandio"},{"name":"El Prat de Llobregat"},{"name":"Ferrol"},{"name":"El Astillero"},{"name":"Ejea de los Caballeros"},{"name":"Eibar"},{"name":"Durango"},{"name":"Culleredo"},{"name":"Cuenca"},{"name":"Coslada"},{"name":"Cornellà de Llobregat"},{"name":"Colmenar Viejo"},{"name":"Collado-Villalba"},{"name":"Ciudad Lineal"},{"name":"Ciutadella"},{"name":"Ciempozuelos"},{"name":"Chamartín"},{"name":"Castro-Urdiales"},{"name":"Castelldefels"},{"name":"Castellar del Vallès"},{"name":"Cardedeu"},{"name":"Carballo"},{"name":"Canovelles"},{"name":"Cangas do Morrazo"},{"name":"Cambrils"},{"name":"Cambre"},{"name":"Camargo"},{"name":"Calella"},{"name":"Caldes de Montbui"},{"name":"Calatayud"},{"name":"Calahorra"},{"name":"Calafell"},{"name":"Burlata"},{"name":"Burgos"},{"name":"Boiro"},{"name":"Boadilla del Monte"},{"name":"Blanes"},{"name":"Bilbao"},{"name":"Bermeo"},{"name":"Berga"},{"name":"Benicàssim"},{"name":"Benicarló"},{"name":"Benavente"},{"name":"Béjar"},{"name":"Barcelona"},{"name":"Barbastro"},{"name":"Barañáin"},{"name":"Barajas de Madrid"},{"name":"Banyoles"},{"name":"Balaguer"},{"name":"Badalona"},{"name":"Azuqueca de Henares"},{"name":"Avilés"},{"name":"Ávila"},{"name":"Arteixo"},{"name":"Arganda"},{"name":"Aranjuez"},{"name":"Aranda de Duero"},{"name":"Amposta"},{"name":"Amorebieta"},{"name":"Amés"},{"name":"Algorta"},{"name":"Algete"},{"name":"Alcorcón"},{"name":"Alcobendas"},{"name":"Alcañiz"},{"name":"Alcalá de Henares"},{"name":"Nou Barris"},{"name":"Pinar de Chamartín"},{"name":"Playa del Ingles"},{"name":"Puerto del Carmen"},{"name":"Ceuta"},{"name":"Moncloa-Aravaca"},{"name":"Eixample"},{"name":"les Corts"},{"name":"Sarrià-Sant Gervasi"},{"name":"Horta-Guinardó"},{"name":"Sants-Montjuïc"},{"name":"Sant Martí"},{"name":"Ciutat Vella"},{"name":"Arganzuela"},{"name":"San Blas"},{"name":"Latina"},{"name":"Usera"},{"name":"Salamanca"},{"name":"Chamberí"},{"name":"Carabanchel"},{"name":"City Center"},{"name":"Retiro"},{"name":"l'Alfàs del Pi"},{"name":"Las Gabias"},{"name":"Delicias"},{"name":"Almozara"},{"name":"Montecanal"},{"name":"Oliver-Valdefierro"},{"name":"Santutxu"},{"name":"Los Realejos"},{"name":"Pasaia"},{"name":"Basauri"},{"name":"Llefià"},{"name":"Corvera de Asturias"},{"name":"Tres Cantos"},{"name":"Iturrama"},{"name":"Ermitagaña"},{"name":"Primer Ensanche"},{"name":"Segundo Ensanche"},{"name":"Fuencarral-El Pardo"},{"name":"Villa de Vallecas"},{"name":"Natahoyo"},{"name":"Ziway"},{"name":"Yirga ‘Alem"},{"name":"Yabēlo"},{"name":"Werota"},{"name":"Wenjī"},{"name":"Tippi"},{"name":"Shashemenē"},{"name":"Shambu"},{"name":"Shakīso"},{"name":"Sebeta"},{"name":"Robīt"},{"name":"Nejo"},{"name":"Nazrēt"},{"name":"Mojo"},{"name":"Metu"},{"name":"Metahāra"},{"name":"Mendī"},{"name":"Mekele"},{"name":"Maych’ew"},{"name":"Korem"},{"name":"K’olīto"},{"name":"Kibre Mengist"},{"name":"Kemisē"},{"name":"Kombolcha"},{"name":"Jinka"},{"name":"Jīma"},{"name":"Jijiga"},{"name":"Inda Silasē"},{"name":"Harar"},{"name":"Hāgere Hiywet"},{"name":"Gondar"},{"name":"Goba"},{"name":"Waliso"},{"name":"Ginir"},{"name":"Gimbi"},{"name":"Genet"},{"name":"Gelemso"},{"name":"Gebre Guracha"},{"name":"Gambēla"},{"name":"Finote Selam"},{"name":"Fichē"},{"name":"Felege Neway"},{"name":"Dubti"},{"name":"Dodola"},{"name":"Dire Dawa"},{"name":"Dīla"},{"name":"Desē"},{"name":"Dembī Dolo"},{"name":"Bishoftu"},{"name":"Debre Tabor"},{"name":"Debre Mark’os"},{"name":"Debre Birhan"},{"name":"Debark’"},{"name":"Butajīra"},{"name":"Burē"},{"name":"Bonga"},{"name":"Bodītī"},{"name":"Bichena"},{"name":"Bedēsa"},{"name":"Bedelē"},{"name":"Batī"},{"name":"Bako"},{"name":"Bahir Dar"},{"name":"Hawassa"},{"name":"Āsosa"},{"name":"Āsbe Teferī"},{"name":"Asaita"},{"name":"Āsasa"},{"name":"Āreka"},{"name":"Ārba Minch’"},{"name":"Axum"},{"name":"Hagere Maryam"},{"name":"Āgaro"},{"name":"Ādīs Zemen"},{"name":"Addis Ababa"},{"name":"Ādīgrat"},{"name":"Addiet Canna"},{"name":"Abomsa"},{"name":"Ylöjärvi"},{"name":"Vihti"},{"name":"Varkaus"},{"name":"Vantaa"},{"name":"Valkeakoski"},{"name":"Vaasa"},{"name":"Uusikaupunki"},{"name":"Tuusula"},{"name":"Turku"},{"name":"Tornio"},{"name":"Tampere"},{"name":"Siilinjärvi"},{"name":"Sibbo"},{"name":"Seinäjoki"},{"name":"Savonlinna"},{"name":"Salo"},{"name":"Rovaniemi"},{"name":"Riihimäki"},{"name":"Rauma"},{"name":"Raisio"},{"name":"Raahe"},{"name":"Pori"},{"name":"Pirkkala"},{"name":"Oulu"},{"name":"Nurmijärvi"},{"name":"Nokia"},{"name":"Mikkeli"},{"name":"Mäntsälä"},{"name":"Lovisa"},{"name":"Lohja"},{"name":"Lieto"},{"name":"Lempäälä"},{"name":"Laukaa"},{"name":"Lappeenranta"},{"name":"Lahti"},{"name":"Kirkkonummi"},{"name":"Kuusamo"},{"name":"Kuopio"},{"name":"Kouvola"},{"name":"Kotka"},{"name":"Korsholm"},{"name":"Kokkola"},{"name":"Kerava"},{"name":"Kemi"},{"name":"Karhula"},{"name":"Kangasala"},{"name":"Kajaani"},{"name":"Kaarina"},{"name":"Jyväskylä"},{"name":"Joensuu"},{"name":"Järvenpää"},{"name":"Janakkala"},{"name":"Jämsä"},{"name":"Jakobstad"},{"name":"Imatra"},{"name":"Iisalmi"},{"name":"Hyvinge"},{"name":"Hollola"},{"name":"Helsinki"},{"name":"Heinola"},{"name":"Haukipudas"},{"name":"Hamina"},{"name":"Hämeenlinna"},{"name":"Forssa"},{"name":"Espoo"},{"name":"Porvoo"},{"name":"Anjala"},{"name":"Länsi-Turunmaa"},{"name":"Suva"},{"name":"Nadi"},{"name":"Lautoka"},{"name":"Labasa"},{"name":"Stanley"},{"name":"Palikir - National Government Center"},{"name":"Tórshavn"},{"name":"Yerres"},{"name":"Wittenheim"},{"name":"Wattrelos"},{"name":"Wasquehal"},{"name":"Voiron"},{"name":"Vitry-sur-Seine"},{"name":"Vitry-le-François"},{"name":"Vitrolles"},{"name":"Vitré"},{"name":"Viry-Châtillon"},{"name":"Viroflay"},{"name":"Vincennes"},{"name":"Villiers-sur-Marne"},{"name":"Villiers-le-Bel"},{"name":"Villeurbanne"},{"name":"Villers-lès-Nancy"},{"name":"Villepinte"},{"name":"Villeparisis"},{"name":"Villeneuve-sur-Lot"},{"name":"Villeneuve-Saint-Georges"},{"name":"Villeneuve-le-Roi"},{"name":"Villeneuve-la-Garenne"},{"name":"Villenave-d’Ornon"},{"name":"Villemomble"},{"name":"Villejuif"},{"name":"Villefranche-sur-Saône"},{"name":"Villefontaine"},{"name":"Vigneux-sur-Seine"},{"name":"Vierzon"},{"name":"Vienne"},{"name":"Vichy"},{"name":"Vesoul"},{"name":"Vertou"},{"name":"Versailles"},{"name":"Verrières-le-Buisson"},{"name":"Vernon"},{"name":"Verneuil-sur-Seine"},{"name":"Verdun"},{"name":"Vénissieux"},{"name":"Vendôme"},{"name":"Vence"},{"name":"Vélizy-Villacoublay"},{"name":"Vauréal"},{"name":"Vaulx-en-Velin"},{"name":"Vanves"},{"name":"Vannes"},{"name":"Vandœuvre-lès-Nancy"},{"name":"Vallauris"},{"name":"Valenciennes"},{"name":"Valence"},{"name":"Tulle"},{"name":"Troyes"},{"name":"Tremblay-en-France"},{"name":"Trappes"},{"name":"Tours"},{"name":"Tournefeuille"},{"name":"Tourlaville"},{"name":"Tourcoing"},{"name":"Toulouse"},{"name":"Toulon"},{"name":"Toul"},{"name":"Torcy"},{"name":"Thonon-les-Bains"},{"name":"Thionville"},{"name":"Thiais"},{"name":"Tergnier"},{"name":"Taverny"},{"name":"Tassin-la-Demi-Lune"},{"name":"Tarbes"},{"name":"Talence"},{"name":"Suresnes"},{"name":"Sucy-en-Brie"},{"name":"Strasbourg"},{"name":"Stains"},{"name":"Sotteville-lès-Rouen"},{"name":"Sorgues"},{"name":"Soisy-sous-Montmorency"},{"name":"Soissons"},{"name":"Six-Fours-les-Plages"},{"name":"Sin-le-Noble"},{"name":"Seynod"},{"name":"Sèvres"},{"name":"Sevran"},{"name":"Sète"},{"name":"Sens"},{"name":"Senlis"},{"name":"Sélestat"},{"name":"Sedan"},{"name":"Schiltigheim"},{"name":"Sceaux"},{"name":"Savigny-sur-Orge"},{"name":"Savigny-le-Temple"},{"name":"Saumur"},{"name":"Sartrouville"},{"name":"Sarreguemines"},{"name":"Sarcelles"},{"name":"Saran"},{"name":"Sannois"},{"name":"Sanary-sur-Mer"},{"name":"Salon-de-Provence"},{"name":"Sallanches"},{"name":"Saint-Sébastien-sur-Loire"},{"name":"Saint-Raphaël"},{"name":"Saint-Quentin"},{"name":"Saint-Priest"},{"name":"Saint-Pol-sur-Mer"},{"name":"Saint-Pierre-des-Corps"},{"name":"Saint-Ouen-l’Aumône"},{"name":"Saint-Ouen"},{"name":"Saint-Omer"},{"name":"Saint-Nazaire"},{"name":"Saint-Michel-sur-Orge"},{"name":"Saint-Médard-en-Jalles"},{"name":"Saint-Maximin-la-Sainte-Baume"},{"name":"Saint-Maur-des-Fossés"},{"name":"Saint-Martin-d’Hères"},{"name":"Saint-Mandé"},{"name":"Saint-Malo"},{"name":"Saint-Louis"},{"name":"Saint-Lô"},{"name":"Saint-Leu-la-Forêt"},{"name":"Saint-Leu"},{"name":"Saint-Laurent-du-Var"},{"name":"Saint-Jean-de-la-Ruelle"},{"name":"Saint-Jean-de-Braye"},{"name":"Saint-Herblain"},{"name":"Saint-Gratien"},{"name":"Saint-Germain-en-Laye"},{"name":"Saint-Genis-Laval"},{"name":"Saint-Fons"},{"name":"Saint-Étienne-du-Rouvray"},{"name":"Saint-Étienne"},{"name":"Saintes"},{"name":"Sainte-Geneviève-des-Bois"},{"name":"Sainte-Foy-lès-Lyon"},{"name":"Saint-Égrève"},{"name":"Saint-Dizier"},{"name":"Saint-Dié-des-Vosges"},{"name":"Saint-Denis"},{"name":"Saint-Cyr-sur-Loire"},{"name":"Saint-Cyr-l’École"},{"name":"Saint-Cloud"},{"name":"Saint-Chamond"},{"name":"Saint-Brieuc"},{"name":"Saint-Avold"},{"name":"Saint-Avertin"},{"name":"Saint-Amand-les-Eaux"},{"name":"Rueil-Malmaison"},{"name":"Royan"},{"name":"Rouen"},{"name":"Roubaix"},{"name":"Rosny-sous-Bois"},{"name":"Ronchin"},{"name":"Romorantin-Lanthenay"},{"name":"Romans-sur-Isère"},{"name":"Romainville"},{"name":"Roissy-en-Brie"},{"name":"Rodez"},{"name":"Rochefort"},{"name":"Roanne"},{"name":"Ris-Orangis"},{"name":"Riom"},{"name":"Rillieux-la-Pape"},{"name":"Rezé"},{"name":"Rennes"},{"name":"Reims"},{"name":"Rambouillet"},{"name":"Quimper"},{"name":"Puteaux"},{"name":"Port-de-Bouc"},{"name":"Pontoise"},{"name":"Pontivy"},{"name":"Pontarlier"},{"name":"Pont-à-Mousson"},{"name":"Poitiers"},{"name":"Poissy"},{"name":"Ploemeur"},{"name":"Plaisir"},{"name":"Plaisance-du-Touch"},{"name":"Pierrefitte-sur-Seine"},{"name":"Pessac"},{"name":"Pertuis"},{"name":"Perpignan"},{"name":"Périgueux"},{"name":"Pau"},{"name":"Paris"},{"name":"Pantin"},{"name":"Pamiers"},{"name":"Palaiseau"},{"name":"Ozoir-la-Ferrière"},{"name":"Oyonnax"},{"name":"Outreau"},{"name":"Oullins"},{"name":"Osny"},{"name":"Orvault"},{"name":"Orsay"},{"name":"Orly"},{"name":"Orléans"},{"name":"Orange"},{"name":"Olivet"},{"name":"Octeville"},{"name":"Noyon"},{"name":"Noisy-le-Sec"},{"name":"Noisy-le-Grand"},{"name":"Noisiel"},{"name":"Nogent-sur-Oise"},{"name":"Nogent-sur-Marne"},{"name":"Niort"},{"name":"Nîmes"},{"name":"Nice"},{"name":"Nevers"},{"name":"Neuilly-sur-Seine"},{"name":"Neuilly-sur-Marne"},{"name":"Neuilly-Plaisance"},{"name":"Narbonne"},{"name":"Nantes"},{"name":"Nanterre"},{"name":"Nancy"},{"name":"Muret"},{"name":"Mulhouse"},{"name":"Moulins"},{"name":"Mougins"},{"name":"Morsang-sur-Orge"},{"name":"Morlaix"},{"name":"Mont-Saint-Aignan"},{"name":"Montrouge"},{"name":"Montreuil"},{"name":"Montpellier"},{"name":"Montmorency"},{"name":"Montluçon"},{"name":"Montivilliers"},{"name":"Montigny-lès-Metz"},{"name":"Montigny-lès-Cormeilles"},{"name":"Montigny-le-Bretonneux"},{"name":"Montgeron"},{"name":"Montfermeil"},{"name":"Montesson"},{"name":"Montereau-Fault-Yonne"},{"name":"Montélimar"},{"name":"Mont-de-Marsan"},{"name":"Montceau-les-Mines"},{"name":"Montbrison"},{"name":"Montbéliard"},{"name":"Montauban"},{"name":"Montargis"},{"name":"Mons-en-Barœul"},{"name":"Moissy-Cramayel"},{"name":"Mitry-Mory"},{"name":"Miramas"},{"name":"Millau"},{"name":"Meyzieu"},{"name":"Meylan"},{"name":"Meudon"},{"name":"Metz"},{"name":"Mérignac"},{"name":"Menton"},{"name":"Melun"},{"name":"Meaux"},{"name":"Mayenne"},{"name":"Maurepas"},{"name":"Mauguio"},{"name":"Maubeuge"},{"name":"Massy"},{"name":"Martigues"},{"name":"Marseille"},{"name":"Marmande"},{"name":"Marly-le-Roi"},{"name":"Marignane"},{"name":"Marcq-en-Barœul"},{"name":"Mantes-la-Ville"},{"name":"Mantes-la-Jolie"},{"name":"Manosque"},{"name":"Mandelieu-la-Napoule"},{"name":"Malakoff"},{"name":"Maisons-Laffitte"},{"name":"Maisons-Alfort"},{"name":"Mâcon"},{"name":"Lyon"},{"name":"Lunéville"},{"name":"Lunel"},{"name":"Lucé"},{"name":"Louviers"},{"name":"Lourdes"},{"name":"Lormont"},{"name":"Lorient"},{"name":"Loos"},{"name":"Lons-le-Saunier"},{"name":"Longjumeau"},{"name":"Lomme"},{"name":"Lognes"},{"name":"Livry-Gargan"},{"name":"L’Isle-sur-la-Sorgue"},{"name":"Lisieux"},{"name":"Lingolsheim"},{"name":"Limoges"},{"name":"Limeil-Brévannes"},{"name":"Limay"},{"name":"Lille"},{"name":"Liévin"},{"name":"Libourne"},{"name":"L'Haÿ-les-Roses"},{"name":"Le Vésinet"},{"name":"Levallois-Perret"},{"name":"Les Sables-d'Olonne"},{"name":"Les Pennes-Mirabeau"},{"name":"Les Pavillons-sous-Bois"},{"name":"Les Mureaux"},{"name":"Les Lilas"},{"name":"Les Herbiers"},{"name":"Les Clayes-sous-Bois"},{"name":"Le Puy-en-Velay"},{"name":"Le Pré-Saint-Gervais"},{"name":"Le Pontet"},{"name":"Le Plessis-Trévise"},{"name":"Le Plessis-Robinson"},{"name":"Le Petit-Quevilly"},{"name":"Le Perreux-sur-Marne"},{"name":"Le Pecq"},{"name":"Lens"},{"name":"Le Mée-sur-Seine"},{"name":"Le Mans"},{"name":"Le Kremlin-Bicêtre"},{"name":"Le Havre"},{"name":"Le Grand-Quevilly"},{"name":"Le Creusot"},{"name":"Le Chesnay"},{"name":"Le Cannet"},{"name":"Le Bouscat"},{"name":"Le Blanc-Mesnil"},{"name":"Laxou"},{"name":"La Valette-du-Var"},{"name":"Laval"},{"name":"Lattes"},{"name":"La Teste-de-Buch"},{"name":"La Seyne-sur-Mer"},{"name":"La Roche-sur-Yon"},{"name":"La Rochelle"},{"name":"Laon"},{"name":"Lannion"},{"name":"Lanester"},{"name":"Landerneau"},{"name":"Lambersart"},{"name":"La Madeleine"},{"name":"Lagny-sur-Marne"},{"name":"La Garenne-Colombes"},{"name":"La Garde"},{"name":"La Flèche"},{"name":"La Crau"},{"name":"La Courneuve"},{"name":"La Ciotat"},{"name":"La Chapelle-sur-Erdre"},{"name":"La Celle-Saint-Cloud"},{"name":"Jouy-le-Moutier"},{"name":"Joué-lés-Tours"},{"name":"Joinville-le-Pont"},{"name":"Ivry-sur-Seine"},{"name":"Istres"},{"name":"Issy-les-Moulineaux"},{"name":"Issoire"},{"name":"Illzach"},{"name":"Illkirch-Graffenstaden"},{"name":"Hyères"},{"name":"Houilles"},{"name":"Hérouville-Saint-Clair"},{"name":"Herblay"},{"name":"Hénin-Beaumont"},{"name":"Hem"},{"name":"Hazebrouck"},{"name":"Hayange"},{"name":"Hautmont"},{"name":"Yutz"},{"name":"Haubourdin"},{"name":"Halluin"},{"name":"Haguenau"},{"name":"Guyancourt"},{"name":"Gujan-Mestras"},{"name":"Guéret"},{"name":"Guérande"},{"name":"Grigny"},{"name":"Grenoble"},{"name":"Grasse"},{"name":"Grande-Synthe"},{"name":"Gradignan"},{"name":"Goussainville"},{"name":"Gonesse"},{"name":"Givors"},{"name":"Gif-sur-Yvette"},{"name":"Gien"},{"name":"Gentilly"},{"name":"Gennevilliers"},{"name":"Garges-lès-Gonesse"},{"name":"Gardanne"},{"name":"Garches"},{"name":"Gap"},{"name":"Gagny"},{"name":"Frontignan"},{"name":"Fresnes"},{"name":"Fréjus"},{"name":"Franconville"},{"name":"Fougères"},{"name":"Fos-sur-Mer"},{"name":"Forbach"},{"name":"Fontenay-sous-Bois"},{"name":"Fontenay-le-Comte"},{"name":"Fontenay-aux-Roses"},{"name":"Fontainebleau"},{"name":"Fontaine"},{"name":"Floirac"},{"name":"Fleury-les-Aubrais"},{"name":"Flers"},{"name":"Firminy"},{"name":"Fécamp"},{"name":"Faches-Thumesnil"},{"name":"Eysines"},{"name":"Évry"},{"name":"Évreux"},{"name":"Étampes"},{"name":"La Baule-Escoublac"},{"name":"Ermont"},{"name":"Éragny"},{"name":"Équeurdreville-Hainneville"},{"name":"Épinay-sur-Seine"},{"name":"Épinal"},{"name":"Épernay"},{"name":"Elbeuf"},{"name":"Élancourt"},{"name":"Écully"},{"name":"Échirolles"},{"name":"Eaubonne"},{"name":"Dunkerque"},{"name":"Dreux"},{"name":"Draveil"},{"name":"Drancy"},{"name":"Draguignan"},{"name":"Douarnenez"},{"name":"Douai"},{"name":"Domont"},{"name":"Dole"},{"name":"Dijon"},{"name":"Digne-les-Bains"},{"name":"Dieppe"},{"name":"Deuil-la-Barre"},{"name":"Denain"},{"name":"Décines-Charpieu"},{"name":"Dax"},{"name":"Dammarie-les-Lys"},{"name":"Cugnaux"},{"name":"Croix"},{"name":"Créteil"},{"name":"Crépy-en-Valois"},{"name":"Creil"},{"name":"Cran-Gevrier"},{"name":"Cournon-d’Auvergne"},{"name":"Courbevoie"},{"name":"Coulommiers"},{"name":"Couëron"},{"name":"Coudekerque-Branche"},{"name":"Cormeilles-en-Parisis"},{"name":"Corbeil-Essonnes"},{"name":"Conflans-Sainte-Honorine"},{"name":"Concarneau"},{"name":"Compiègne"},{"name":"Combs-la-Ville"},{"name":"Pontault-Combault"},{"name":"Colomiers"},{"name":"Colombes"},{"name":"Colmar"},{"name":"Cognac"},{"name":"Cluses"},{"name":"Clichy-sous-Bois"},{"name":"Clichy"},{"name":"Clermont-Ferrand"},{"name":"Clamart"},{"name":"Cholet"},{"name":"Choisy-le-Roi"},{"name":"Chilly-Mazarin"},{"name":"Chevilly-Larue"},{"name":"Cherbourg-Octeville"},{"name":"Chenôve"},{"name":"Chennevières-sur-Marne"},{"name":"Chelles"},{"name":"Chaville"},{"name":"Chaumont"},{"name":"Chatou"},{"name":"Châtillon"},{"name":"Châtenay-Malabry"},{"name":"Châtellerault"},{"name":"Château-Thierry"},{"name":"Châteauroux"},{"name":"Châteaudun"},{"name":"Chartres"},{"name":"Charleville-Mézières"},{"name":"Charenton-le-Pont"},{"name":"Champs-sur-Marne"},{"name":"Champigny-sur-Marne"},{"name":"Chambéry"},{"name":"Chamalières"},{"name":"Chalon-sur-Saône"},{"name":"Châlons-en-Champagne"},{"name":"Challans"},{"name":"Cestas"},{"name":"Cesson-Sévigné"},{"name":"Cergy"},{"name":"Cenon"},{"name":"Cavaillon"},{"name":"Castres"},{"name":"Castelnau-le-Lez"},{"name":"Carvin"},{"name":"Carrières-sous-Poissy"},{"name":"Carquefou"},{"name":"Carpentras"},{"name":"Carcassonne"},{"name":"Canteleu"},{"name":"Cannes"},{"name":"Cambrai"},{"name":"Caluire-et-Cuire"},{"name":"Calais"},{"name":"Cahors"},{"name":"Cagnes-sur-Mer"},{"name":"Caen"},{"name":"Cachan"},{"name":"Bry-sur-Marne"},{"name":"Brunoy"},{"name":"Bruay-la-Buissière"},{"name":"Bron"},{"name":"Brive-la-Gaillarde"},{"name":"Brignoles"},{"name":"Brie-Comte-Robert"},{"name":"Brétigny-sur-Orge"},{"name":"Brest"},{"name":"Bressuire"},{"name":"Bourgoin"},{"name":"Bourg-lès-Valence"},{"name":"Bourg-la-Reine"},{"name":"Bourges"},{"name":"Bourg-en-Bresse"},{"name":"Boulogne-sur-Mer"},{"name":"Boulogne-Billancourt"},{"name":"Bouguenais"},{"name":"Bordeaux"},{"name":"Bonneuil-sur-Marne"},{"name":"Bondy"},{"name":"Boissy-Saint-Léger"},{"name":"Bois-Colombes"},{"name":"Bobigny"},{"name":"Blois"},{"name":"Blanquefort"},{"name":"Blagnac"},{"name":"Bischheim"},{"name":"Biarritz"},{"name":"Bezons"},{"name":"Béziers"},{"name":"Béthune"},{"name":"Besançon"},{"name":"Bergerac"},{"name":"Berck"},{"name":"Berck-Plage"},{"name":"Belfort"},{"name":"Bègles"},{"name":"Beauvais"},{"name":"Beaune"},{"name":"Bayonne"},{"name":"Bayeux"},{"name":"Bastia"},{"name":"Bar-le-Duc"},{"name":"Balma"},{"name":"Bagnols-sur-Cèze"},{"name":"Bagnolet"},{"name":"Bagneux"},{"name":"Avon"},{"name":"Avion"},{"name":"Avignon"},{"name":"Auxerre"},{"name":"Autun"},{"name":"Aurillac"},{"name":"Aulnay-sous-Bois"},{"name":"Audincourt"},{"name":"Auch"},{"name":"Aubervilliers"},{"name":"Aubagne"},{"name":"Athis-Mons"},{"name":"Asnières-sur-Seine"},{"name":"Arras"},{"name":"Armentières"},{"name":"Arles"},{"name":"Argenteuil"},{"name":"Argentan"},{"name":"Arcueil"},{"name":"Antony"},{"name":"Antibes"},{"name":"Annonay"},{"name":"Annemasse"},{"name":"Annecy-le-Vieux"},{"name":"Annecy"},{"name":"Angoulême"},{"name":"Anglet"},{"name":"Angers"},{"name":"Amiens"},{"name":"Allauch"},{"name":"Alfortville"},{"name":"Alès"},{"name":"Alençon"},{"name":"Albi"},{"name":"Albertville"},{"name":"Ajaccio"},{"name":"Aix-les-Bains"},{"name":"Aix-en-Provence"},{"name":"Agen"},{"name":"Agde"},{"name":"Achères"},{"name":"Abbeville"},{"name":"Villeneuve-d'Ascq"},{"name":"Les Ulis"},{"name":"Bourgoin-Jallieu"},{"name":"Marseille 01"},{"name":"Marseille 02"},{"name":"Marseille 03"},{"name":"Marseille 04"},{"name":"Marseille 05"},{"name":"Marseille 06"},{"name":"Marseille 07"},{"name":"Marseille 08"},{"name":"Marseille 10"},{"name":"Marseille 09"},{"name":"Marseille 11"},{"name":"Marseille 12"},{"name":"Marseille 13"},{"name":"Marseille 14"},{"name":"Marseille 15"},{"name":"Marseille 16"},{"name":"La Defense"},{"name":"Saint-Quentin-en-Yvelines"},{"name":"Cergy-Pontoise"},{"name":"Tchibanga"},{"name":"Port-Gentil"},{"name":"Oyem"},{"name":"Mouila"},{"name":"Moanda"},{"name":"Libreville"},{"name":"Lambaréné"},{"name":"Koulamoutou"},{"name":"Franceville"},{"name":"York"},{"name":"Yeovil"},{"name":"Yeadon"},{"name":"Yate"},{"name":"Wrexham"},{"name":"Worthing"},{"name":"Worksop"},{"name":"Workington"},{"name":"Worcester"},{"name":"Woodford Green"},{"name":"Wombwell"},{"name":"Wolverhampton"},{"name":"Wokingham"},{"name":"Woking"},{"name":"Witney"},{"name":"Witham"},{"name":"Wishaw"},{"name":"Wisbech"},{"name":"Winsford"},{"name":"Windsor"},{"name":"Winchester"},{"name":"Wilmslow"},{"name":"Willenhall"},{"name":"Wigston Magna"},{"name":"Wigan"},{"name":"Widnes"},{"name":"Wickford"},{"name":"Whitstable"},{"name":"Whitley Bay"},{"name":"Whitehaven"},{"name":"Whitefield"},{"name":"Whickham"},{"name":"Weymouth"},{"name":"Weybridge"},{"name":"Weston-super-Mare"},{"name":"West Molesey"},{"name":"Westhoughton"},{"name":"West Bromwich"},{"name":"West Bridgford"},{"name":"Welwyn Garden City"},{"name":"Wellington"},{"name":"Wellingborough"},{"name":"Welling"},{"name":"Wednesfield"},{"name":"Wednesbury"},{"name":"Wath upon Dearne"},{"name":"Watford"},{"name":"Waterlooville"},{"name":"Washington"},{"name":"Warwick"},{"name":"Warrington"},{"name":"Warminster"},{"name":"Ware"},{"name":"Walton-on-Thames"},{"name":"Waltham Abbey"},{"name":"Walsall"},{"name":"Wallsend"},{"name":"Wallasey"},{"name":"Walkden"},{"name":"Wakefield"},{"name":"Urmston"},{"name":"Uckfield"},{"name":"Stowmarket"},{"name":"Stourport-on-Severn"},{"name":"Stourbridge"},{"name":"Stoke-on-Trent"},{"name":"Stockton-on-Tees"},{"name":"Stockport"},{"name":"Stirling"},{"name":"Stevenage"},{"name":"Staveley"},{"name":"Stamford"},{"name":"Stalybridge"},{"name":"Staines"},{"name":"Stafford"},{"name":"Spennymoor"},{"name":"Spalding"},{"name":"South Shields"},{"name":"Southsea"},{"name":"Southport"},{"name":"South Ockendon"},{"name":"Southend-on-Sea"},{"name":"South Elmsall"},{"name":"South Benfleet"},{"name":"Southampton"},{"name":"Southall"},{"name":"Solihull"},{"name":"Slough"},{"name":"Sleaford"},{"name":"Skelmersdale"},{"name":"Skegness"},{"name":"Sittingbourne"},{"name":"Shrewsbury"},{"name":"Shoreham-by-Sea"},{"name":"Shoreham"},{"name":"Shipley"},{"name":"Sheffield"},{"name":"Sevenoaks"},{"name":"Selby"},{"name":"Seaham"},{"name":"Seaford"},{"name":"Scunthorpe"},{"name":"Scarborough"},{"name":"Sandown"},{"name":"Sandbach"},{"name":"Salisbury"},{"name":"Salford"},{"name":"Sale"},{"name":"Saint Neots"},{"name":"St Helens"},{"name":"St Austell"},{"name":"Saint Andrews"},{"name":"St Albans"},{"name":"Ryton"},{"name":"Ryde"},{"name":"Rutherglen"},{"name":"Rushden"},{"name":"Runcorn"},{"name":"Ruislip"},{"name":"Rugeley"},{"name":"Rugby"},{"name":"Royton"},{"name":"Royal Tunbridge Wells"},{"name":"Rottingdean"},{"name":"Rotherham"},{"name":"Romsey"},{"name":"Rochford"},{"name":"Rochester"},{"name":"Rochdale"},{"name":"Risca"},{"name":"Ripon"},{"name":"Ripley"},{"name":"Rhyl"},{"name":"Rhondda"},{"name":"Renfrew"},{"name":"Reigate"},{"name":"Redhill"},{"name":"Redditch"},{"name":"Redcar"},{"name":"Reading"},{"name":"Rayleigh"},{"name":"Rawtenstall"},{"name":"Rawmarsh"},{"name":"Ramsgate"},{"name":"Ramsbottom"},{"name":"Purley"},{"name":"Pudsey"},{"name":"Prestwick"},{"name":"Prestwich"},{"name":"Preston"},{"name":"Prestatyn"},{"name":"Prescot"},{"name":"Poulton le Fylde"},{"name":"Potters Bar"},{"name":"Portsmouth"},{"name":"Portslade"},{"name":"Portishead"},{"name":"Porthcawl"},{"name":"Port Glasgow"},{"name":"Portadown"},{"name":"Poole"},{"name":"Pontypridd"},{"name":"Pontypool"},{"name":"Pontefract"},{"name":"Polmont"},{"name":"Plymstock"},{"name":"Plymouth"},{"name":"Pitsea"},{"name":"Pinner"},{"name":"Peterlee"},{"name":"Peterhead"},{"name":"Peterborough"},{"name":"Perth"},{"name":"Penzance"},{"name":"Penicuik"},{"name":"Penarth"},{"name":"Paisley"},{"name":"Paignton"},{"name":"Oxford"},{"name":"Oswestry"},{"name":"Ossett"},{"name":"Orpington"},{"name":"Ormskirk"},{"name":"Omagh"},{"name":"Oldham"},{"name":"Oadby"},{"name":"Nuneaton"},{"name":"Nottingham"},{"name":"Norwich"},{"name":"Northwich"},{"name":"North Shields"},{"name":"Northolt"},{"name":"Lancing"},{"name":"Northampton"},{"name":"Northallerton"},{"name":"Newtownards"},{"name":"Newtownabbey"},{"name":"Newton Mearns"},{"name":"Newton-le-Willows"},{"name":"Newton Aycliffe"},{"name":"Newton Abbot"},{"name":"Newry"},{"name":"Newquay"},{"name":"Newport Pagnell"},{"name":"Newport"},{"name":"Newport"},{"name":"New Milton"},{"name":"Newmarket"},{"name":"New Malden"},{"name":"Newcastle upon Tyne"},{"name":"Newcastle under Lyme"},{"name":"Newbury"},{"name":"Newburn"},{"name":"Newark on Trent"},{"name":"Nelson"},{"name":"Neath"},{"name":"Nailsea"},{"name":"Musselburgh"},{"name":"Motherwell"},{"name":"Morley"},{"name":"Moreton"},{"name":"Morecambe"},{"name":"Mitcham"},{"name":"Mirfield"},{"name":"Milton Keynes"},{"name":"Middleton"},{"name":"Middlesbrough"},{"name":"Mexborough"},{"name":"Merthyr Tydfil"},{"name":"Melton Mowbray"},{"name":"Marple"},{"name":"Marlow"},{"name":"Market Harborough"},{"name":"Margate"},{"name":"March"},{"name":"Mansfield Woodhouse"},{"name":"Mansfield"},{"name":"Mangotsfield"},{"name":"Manchester"},{"name":"Maltby"},{"name":"Maldon"},{"name":"Maidstone"},{"name":"Maidenhead"},{"name":"Maghull"},{"name":"Maesteg"},{"name":"Macclesfield"},{"name":"Luton"},{"name":"Lowestoft"},{"name":"Louth"},{"name":"Loughborough"},{"name":"Longfield"},{"name":"Long Eaton"},{"name":"Londonderry County Borough"},{"name":"Derry"},{"name":"City of London"},{"name":"London"},{"name":"Lofthouse"},{"name":"Llanelli"},{"name":"Llandudno"},{"name":"Livingston"},{"name":"Liverpool"},{"name":"Littlehampton"},{"name":"Litherland"},{"name":"Lisburn"},{"name":"Lincoln"},{"name":"Lichfield"},{"name":"Leyland"},{"name":"Lewes"},{"name":"Letchworth"},{"name":"Leighton Buzzard"},{"name":"Leigh"},{"name":"Leicester"},{"name":"Leek"},{"name":"Leeds"},{"name":"Leatherhead"},{"name":"Royal Leamington Spa"},{"name":"Larne"},{"name":"Larkhall"},{"name":"Lancaster"},{"name":"Kirkintilloch"},{"name":"Kirkcaldy"},{"name":"Kirkby in Ashfield"},{"name":"Kirkby"},{"name":"Kingswood"},{"name":"Kingswinford"},{"name":"Hull"},{"name":"King's Lynn"},{"name":"Kilwinning"},{"name":"Kilmarnock"},{"name":"Kidsgrove"},{"name":"Kidlington"},{"name":"Kidderminster"},{"name":"Keynsham"},{"name":"Kettering"},{"name":"Kenilworth"},{"name":"Kendal"},{"name":"Kempston"},{"name":"Keighley"},{"name":"Johnstone"},{"name":"Jarrow"},{"name":"Islington"},{"name":"Isleworth"},{"name":"Irvine"},{"name":"Coity"},{"name":"Cobham"},{"name":"Coatbridge"},{"name":"Coalville"},{"name":"Clydebank"},{"name":"Clydach"},{"name":"Clitheroe"},{"name":"Clevedon"},{"name":"Cleethorpes"},{"name":"Cleckheaton"},{"name":"Clacton-on-Sea"},{"name":"Cirencester"},{"name":"Christchurch"},{"name":"Chorley"},{"name":"Chislehurst"},{"name":"Chipping Sodbury"},{"name":"Chippenham"},{"name":"Chichester"},{"name":"Chester-le-Street"},{"name":"Chesterfield"},{"name":"Chester"},{"name":"Chessington"},{"name":"Cheshunt"},{"name":"Chesham"},{"name":"Cheltenham"},{"name":"Chelsea"},{"name":"Chelmsford"},{"name":"Cheadle Hulme"},{"name":"Chatham"},{"name":"Chapletown"},{"name":"Chalfont Saint Peter"},{"name":"Caterham"},{"name":"Castlereagh"},{"name":"Castleford"},{"name":"Carshalton"},{"name":"Carrickfergus"},{"name":"Carmarthen"},{"name":"Carlisle"},{"name":"Cardiff"},{"name":"Canterbury"},{"name":"Cannock"},{"name":"Cambridge"},{"name":"Camborne"},{"name":"Camberley"},{"name":"Caerphilly"},{"name":"Buxton"},{"name":"Bushey"},{"name":"Bury St Edmunds"},{"name":"Bury"},{"name":"Burton upon Trent"},{"name":"Burntwood"},{"name":"Burnley"},{"name":"Burnham-on-Sea"},{"name":"Burgess Hill"},{"name":"Buckley"},{"name":"Buckhaven"},{"name":"Brymbo"},{"name":"Brownhills"},{"name":"Bromsgrove"},{"name":"Broadstairs"},{"name":"Brixham"},{"name":"Briton Ferry"},{"name":"Bristol"},{"name":"Brighton"},{"name":"Brighouse"},{"name":"Brierley Hill"},{"name":"Bridlington"},{"name":"Bridgwater"},{"name":"Bridgend"},{"name":"Brentwood"},{"name":"Bredbury"},{"name":"Bramhall"},{"name":"Braintree"},{"name":"Bradford"},{"name":"Bracknell"},{"name":"Bournemouth"},{"name":"Boston"},{"name":"Borehamwood"},{"name":"Bootle"},{"name":"Bolton"},{"name":"Bognor Regis"},{"name":"Blyth"},{"name":"Bloxwich"},{"name":"Bletchley"},{"name":"Blackpool"},{"name":"Blackburn"},{"name":"Bishopstoke"},{"name":"Bishops Stortford"},{"name":"Bishopbriggs"},{"name":"Bishop Auckland"},{"name":"Birmingham"},{"name":"Birkenhead"},{"name":"Bingley"},{"name":"Billingham"},{"name":"Billericay"},{"name":"Biggleswade"},{"name":"Bideford"},{"name":"Biddulph"},{"name":"Bicester"},{"name":"Bexley"},{"name":"Bexhill-on-Sea"},{"name":"Beverley"},{"name":"Berwick-Upon-Tweed"},{"name":"Berkhamsted"},{"name":"Bentley"},{"name":"Belper"},{"name":"Bellshill"},{"name":"Belfast"},{"name":"Bedworth"},{"name":"Bedlington"},{"name":"Bedford"},{"name":"Beckenham"},{"name":"Bebington"},{"name":"Bearsden"},{"name":"Batley"},{"name":"Bathgate"},{"name":"Bath"},{"name":"Basingstoke"},{"name":"Basildon"},{"name":"Barry"},{"name":"Barrow in Furness"},{"name":"Barrhead"},{"name":"Barnstaple"},{"name":"Barnsley"},{"name":"Barnet"},{"name":"Barking"},{"name":"Banstead"},{"name":"Bangor"},{"name":"Bangor"},{"name":"Banbury"},{"name":"Banbridge"},{"name":"Ballymena"},{"name":"Baildon"},{"name":"Ayr"},{"name":"Aylesbury"},{"name":"Atherton"},{"name":"Ashton-under-Lyne"},{"name":"Ashton in Makerfield"},{"name":"Ashford"},{"name":"Ascot"},{"name":"Arnold"},{"name":"Arbroath"},{"name":"Antrim"},{"name":"Andover"},{"name":"Amersham"},{"name":"Altrincham"},{"name":"Alton"},{"name":"Alloa"},{"name":"Alfreton"},{"name":"Aldridge"},{"name":"Aldershot"},{"name":"Airdrie"},{"name":"Acton"},{"name":"Acocks Green"},{"name":"Accrington"},{"name":"Abingdon"},{"name":"Aberystwyth"},{"name":"Abergele"},{"name":"Aberdeen"},{"name":"Aberdare"},{"name":"Crosby"},{"name":"Blackwood"},{"name":"Neston"},{"name":"Camden Town"},{"name":"Telford"},{"name":"Craigavon"},{"name":"Bayswater"},{"name":"Yateley"},{"name":"Bowthorpe"},{"name":"Hedge End"},{"name":"Erskine"},{"name":"Hale"},{"name":"Amersham on the Hill"},{"name":"Battersea"},{"name":"South Croydon"},{"name":"Hornchurch"},{"name":"Surbiton"},{"name":"Ewell"},{"name":"Becontree"},{"name":"Brixton"},{"name":"Bethnal Green"},{"name":"Failsworth"},{"name":"Radcliffe"},{"name":"Heywood"},{"name":"Longsight"},{"name":"Heavitree"},{"name":"Ferndown"},{"name":"Canary Wharf"},{"name":"Lytham St Annes"},{"name":"Hadley Wood"},{"name":"Chapel Allerton"},{"name":"Blackheath"},{"name":"Kempston Hardwick"},{"name":"Mendip"},{"name":"Lower Earley"},{"name":"Bartley Green"},{"name":"Earlsfield"},{"name":"Letchworth Garden City"},{"name":"Shirley"},{"name":"Stanley"},{"name":"Rossendale"},{"name":"Thornton-Cleveleys"},{"name":"Deeside"},{"name":"High Peak"},{"name":"Hayling Island"},{"name":"Isle of Lewis"},{"name":"Shetland"},{"name":"Orkney"},{"name":"Holloway"},{"name":"Harringay"},{"name":"Saint George's"},{"name":"Zugdidi"},{"name":"Zestap’oni"},{"name":"Ts’khinvali"},{"name":"Tqvarch'eli"},{"name":"Telavi"},{"name":"Tbilisi"},{"name":"Sokhumi"},{"name":"Senak’i"},{"name":"Samtredia"},{"name":"Rust’avi"},{"name":"P’ot’i"},{"name":"Ozurgeti"},{"name":"Och’amch’ire"},{"name":"Marneuli"},{"name":"Kutaisi"},{"name":"Kobuleti"},{"name":"Khashuri"},{"name":"Gori"},{"name":"Batumi"},{"name":"Akhaltsikhe"},{"name":"Stantsiya Novyy Afon"},{"name":"Tsqaltubo"},{"name":"Saint-Laurent-du-Maroni"},{"name":"Rémire-Montjoly"},{"name":"Matoury"},{"name":"Kourou"},{"name":"Cayenne"},{"name":"Saint Peter Port"},{"name":"Yendi"},{"name":"Winneba"},{"name":"Wenchi"},{"name":"Wa"},{"name":"Teshi Old Town"},{"name":"Tema"},{"name":"Techiman"},{"name":"Tarkwa"},{"name":"Tamale"},{"name":"Takoradi"},{"name":"Tafo"},{"name":"Swedru"},{"name":"Sunyani"},{"name":"Suhum"},{"name":"Shama Junction"},{"name":"Sekondi-Takoradi"},{"name":"Savelugu"},{"name":"Saltpond"},{"name":"Salaga"},{"name":"Prestea"},{"name":"Kasoa"},{"name":"Akim Oda"},{"name":"Obuasi"},{"name":"Nungua"},{"name":"Nsawam"},{"name":"Nkawkaw"},{"name":"Navrongo"},{"name":"Mampong"},{"name":"Medina Estates"},{"name":"Kumasi"},{"name":"Kpandu"},{"name":"Konongo"},{"name":"Koforidua"},{"name":"Kintampo"},{"name":"Keta"},{"name":"Hohoe"},{"name":"Ho"},{"name":"Gbawe"},{"name":"Foso"},{"name":"Elmina"},{"name":"Ejura"},{"name":"Dunkwa"},{"name":"Dome"},{"name":"Cape Coast"},{"name":"Bolgatanga"},{"name":"Bibiani"},{"name":"Berekum"},{"name":"Begoro"},{"name":"Bawku"},{"name":"Axim"},{"name":"Asamankese"},{"name":"Apam"},{"name":"Anloga"},{"name":"Akwatia"},{"name":"Agogo"},{"name":"Achiaman"},{"name":"Accra"},{"name":"Aburi"},{"name":"Gibraltar"},{"name":"Nuuk"},{"name":"Sukuta"},{"name":"Lamin"},{"name":"Farafenni"},{"name":"Brikama"},{"name":"Banjul"},{"name":"Bakau"},{"name":"Tougué"},{"name":"Télimélé"},{"name":"Siguiri"},{"name":"Pita"},{"name":"Nzérékoré"},{"name":"Mamou"},{"name":"Macenta"},{"name":"Labé"},{"name":"Kissidougou"},{"name":"Kindia"},{"name":"Kankan"},{"name":"Kamsar"},{"name":"Gueckedou"},{"name":"Fria"},{"name":"Coyah"},{"name":"Conakry"},{"name":"Camayenne"},{"name":"Boké"},{"name":"Sainte-Rose"},{"name":"Sainte-Anne"},{"name":"Pointe-à-Pitre"},{"name":"Petit-Bourg"},{"name":"Les Abymes"},{"name":"Le Moule"},{"name":"Le Gosier"},{"name":"Capesterre-Belle-Eau"},{"name":"Basse-Terre"},{"name":"Baie-Mahault"},{"name":"Ebebiyin"},{"name":"Malabo"},{"name":"Bata"},{"name":"Voúla"},{"name":"Vólos"},{"name":"Výronas"},{"name":"Vári"},{"name":"Trípoli"},{"name":"Tríkala"},{"name":"Thívai"},{"name":"Spárti"},{"name":"Salamína"},{"name":"Rethymno"},{"name":"Préveza"},{"name":"Pýrgos"},{"name":"Piraeus"},{"name":"Petroúpolis"},{"name":"Peristéri"},{"name":"Pérama"},{"name":"Pátra"},{"name":"Palaió Fáliro"},{"name":"Níkaia"},{"name":"Néa Smýrni"},{"name":"Néa Mákri"},{"name":"Ílion"},{"name":"Néa Ionía"},{"name":"Néa Filadélfeia"},{"name":"Néa Erythraía"},{"name":"Moskháton"},{"name":"Mytilíni"},{"name":"Melíssia"},{"name":"Mégara"},{"name":"Artémida"},{"name":"Livadeiá"},{"name":"Lárisa"},{"name":"Lamía"},{"name":"Metamórfosi"},{"name":"Kos"},{"name":"Koropí"},{"name":"Kórinthos"},{"name":"Kifisiá"},{"name":"Cholargós"},{"name":"Chios"},{"name":"Chaniá"},{"name":"Chalkída"},{"name":"Khalándrion"},{"name":"Chaïdári"},{"name":"Keratsíni"},{"name":"Kardítsa"},{"name":"Kamaterón"},{"name":"Kallithéa"},{"name":"Kalamáta"},{"name":"Álimos"},{"name":"Kaisarianí"},{"name":"Irákleio"},{"name":"Irákleion"},{"name":"Ioánnina"},{"name":"Glyfáda"},{"name":"Galátsi"},{"name":"Ellinikó"},{"name":"Elefsína"},{"name":"Dhafní"},{"name":"Agios Dimitrios"},{"name":"Agía Varvára"},{"name":"Agía Paraskeví"},{"name":"Athens"},{"name":"Asprópyrgos"},{"name":"Argyroúpoli"},{"name":"Árta"},{"name":"Árgos"},{"name":"Áno Liósia"},{"name":"Maroúsi"},{"name":"Amaliáda"},{"name":"Acharnés"},{"name":"Aígio"},{"name":"Aigáleo"},{"name":"Agrínio"},{"name":"Ródos"},{"name":"Giannitsá"},{"name":"Xánthi"},{"name":"Véroia"},{"name":"Thessaloníki"},{"name":"Sykiés"},{"name":"Sérres"},{"name":"Ptolemaḯda"},{"name":"Políchni"},{"name":"Pylaía"},{"name":"Peraía"},{"name":"Panórama"},{"name":"Orestiáda"},{"name":"Oraiókastro"},{"name":"Náousa"},{"name":"Meneméni"},{"name":"Kozáni"},{"name":"Komotiní"},{"name":"Kilkís"},{"name":"Kavála"},{"name":"Kateríni"},{"name":"Kalamariá"},{"name":"Flórina"},{"name":"Édessa"},{"name":"Dráma"},{"name":"Alexandroúpoli"},{"name":"Corfu"},{"name":"Vrilissia"},{"name":"Gérakas"},{"name":"Ilioúpoli"},{"name":"Korydallós"},{"name":"Zográfos"},{"name":"Péfki"},{"name":"Ágioi Anárgyroi"},{"name":"Agios Ioannis Rentis"},{"name":"Néa Ionía"},{"name":"Grytviken"},{"name":"Zacapa"},{"name":"Villa Nueva"},{"name":"Villa Canales"},{"name":"Totonicapán"},{"name":"Tecpán Guatemala"},{"name":"Sumpango"},{"name":"Sololá"},{"name":"Santiago Sacatepéquez"},{"name":"Santiago Atitlán"},{"name":"Santa María de Jesús"},{"name":"Santa Lucía Cotzumalguapa"},{"name":"Santa Cruz del Quiché"},{"name":"Santa Catarina Pinula"},{"name":"San Pedro Sacatepéquez"},{"name":"San Pedro Ayampuc"},{"name":"San Pablo Jocopilas"},{"name":"San Marcos"},{"name":"San Lucas Sacatepéquez"},{"name":"San Juan Sacatepéquez"},{"name":"San José Pinula"},{"name":"San Francisco El Alto"},{"name":"San Cristóbal Verapaz"},{"name":"San Benito"},{"name":"Sanarate"},{"name":"San Andrés Itzapa"},{"name":"Salamá"},{"name":"Retalhuleu"},{"name":"Quetzaltenango"},{"name":"Puerto San José"},{"name":"Puerto Barrios"},{"name":"Tiquisate"},{"name":"Poptún"},{"name":"Petapa"},{"name":"Patzún"},{"name":"Patzicía"},{"name":"Panzós"},{"name":"Palín"},{"name":"Palencia"},{"name":"Ostuncalco"},{"name":"Nuevo San Carlos"},{"name":"Nebaj"},{"name":"Nahualá"},{"name":"Morales"},{"name":"Momostenango"},{"name":"Mixco"},{"name":"Mazatenango"},{"name":"La Gomera"},{"name":"La Esperanza"},{"name":"Jutiapa"},{"name":"Jocotenango"},{"name":"Jalapa"},{"name":"Jacaltenango"},{"name":"Huehuetenango"},{"name":"Gualán"},{"name":"Fraijanes"},{"name":"Flores"},{"name":"Esquipulas"},{"name":"Escuintla"},{"name":"El Tejar"},{"name":"El Palmar"},{"name":"El Estor"},{"name":"Cuilapa"},{"name":"Comitancillo"},{"name":"Comalapa"},{"name":"Colomba"},{"name":"Cobán"},{"name":"Coatepeque"},{"name":"Ciudad Vieja"},{"name":"Guatemala City"},{"name":"Chisec"},{"name":"Chiquimula"},{"name":"Chinautla"},{"name":"Chimaltenango"},{"name":"Chichicastenango"},{"name":"Chicacao"},{"name":"Cantel"},{"name":"Barberena"},{"name":"Asunción Mita"},{"name":"Antigua Guatemala"},{"name":"Amatitlán"},{"name":"Alotenango"},{"name":"Tamuning-Tumon-Harmon Village"},{"name":"Yigo Village"},{"name":"Guam Government House"},{"name":"Dededo Village"},{"name":"Hagåtña"},{"name":"Mangilao Village"},{"name":"Bissau"},{"name":"Bafatá"},{"name":"New Amsterdam"},{"name":"Linden"},{"name":"Georgetown"},{"name":"Tsuen Wan"},{"name":"Yuen Long Kau Hui"},{"name":"Tuen Mun"},{"name":"Tai Po"},{"name":"Sha Tin"},{"name":"Kowloon"},{"name":"Hong Kong"},{"name":"Puerto Cortez"},{"name":"Yoro"},{"name":"Villanueva"},{"name":"Tocoa"},{"name":"Tela"},{"name":"Tegucigalpa"},{"name":"Siguatepeque"},{"name":"Santa Rosa de Copán"},{"name":"Santa Bárbara"},{"name":"San Pedro Sula"},{"name":"San Lorenzo"},{"name":"Potrerillos"},{"name":"Olanchito"},{"name":"La Paz"},{"name":"La Lima"},{"name":"La Ceiba"},{"name":"Juticalpa"},{"name":"El Progreso"},{"name":"El Paraíso"},{"name":"Danlí"},{"name":"Comayagua"},{"name":"Cofradía"},{"name":"Ciudad Choluteca"},{"name":"Choloma"},{"name":"Zaprešić"},{"name":"Zagreb"},{"name":"Zadar"},{"name":"Vukovar"},{"name":"Virovitica"},{"name":"Vinkovci"},{"name":"Velika Gorica"},{"name":"Varaždin"},{"name":"Split"},{"name":"Solin"},{"name":"Slavonski Brod"},{"name":"Požega"},{"name":"Sisak"},{"name":"Šibenik"},{"name":"Sesvete"},{"name":"Samobor"},{"name":"Rijeka"},{"name":"Pula"},{"name":"Osijek"},{"name":"Koprivnica"},{"name":"Karlovac"},{"name":"Dubrovnik"},{"name":"Čakovec"},{"name":"Bjelovar"},{"name":"Zagreb- Stenjevec"},{"name":"Zagreb - Centar"},{"name":"Verrettes"},{"name":"Thomazeau"},{"name":"Saint-Raphaël"},{"name":"Saint-Marc"},{"name":"Port-de-Paix"},{"name":"Port-au-Prince"},{"name":"Tigwav"},{"name":"Pétionville"},{"name":"Miragoâne"},{"name":"Lenbe"},{"name":"Léogâne"},{"name":"Kenscoff"},{"name":"Jérémie"},{"name":"Jacmel"},{"name":"Hinche"},{"name":"Gressier"},{"name":"Grangwav"},{"name":"Gonayiv"},{"name":"Fond Parisien"},{"name":"Désarmes"},{"name":"Delmas 73"},{"name":"Croix des Bouquets"},{"name":"Les Cayes"},{"name":"Carrefour"},{"name":"Okap"},{"name":"Ti Port-de-Paix"},{"name":"Törökszentmiklós"},{"name":"Tiszaújváros"},{"name":"Szolnok"},{"name":"Szentes"},{"name":"Szeged"},{"name":"Szarvas"},{"name":"Sátoraljaújhely"},{"name":"Püspökladány"},{"name":"Ózd"},{"name":"Orosháza"},{"name":"Nyíregyháza"},{"name":"Miskolc"},{"name":"Mezőtúr"},{"name":"Mezőkövesd"},{"name":"Mátészalka"},{"name":"Makó"},{"name":"Kisvárda"},{"name":"Kazincbarcika"},{"name":"Karcag"},{"name":"Hódmezővásárhely"},{"name":"Hajdúszoboszló"},{"name":"Hajdúnánás"},{"name":"Hajdúböszörmény"},{"name":"Gyula"},{"name":"Gyomaendrőd"},{"name":"Eger"},{"name":"Debrecen"},{"name":"Csongrád"},{"name":"Berettyóújfalu"},{"name":"Békéscsaba"},{"name":"Békés"},{"name":"Balmazújváros"},{"name":"Abony"},{"name":"Zalaegerszeg"},{"name":"Veszprém"},{"name":"Vecsés"},{"name":"Várpalota"},{"name":"Vác"},{"name":"Tatabánya"},{"name":"Tata"},{"name":"Tapolca"},{"name":"Szombathely"},{"name":"Szigetszentmiklós"},{"name":"Szentendre"},{"name":"Szekszárd"},{"name":"Székesfehérvár"},{"name":"Százhalombatta"},{"name":"Sopron"},{"name":"Siófok"},{"name":"Sárvár"},{"name":"Salgótarján"},{"name":"Pécs"},{"name":"Parádsasvár"},{"name":"Pápa"},{"name":"Paks"},{"name":"Oroszlány"},{"name":"Nagykőrös"},{"name":"Nagykanizsa"},{"name":"Mosonmagyaróvár"},{"name":"Monor"},{"name":"Mohács"},{"name":"Komló"},{"name":"Komárom"},{"name":"Kiskunhalas"},{"name":"Kiskunfélegyháza"},{"name":"Kiskőrös"},{"name":"Keszthely"},{"name":"Kecskemét"},{"name":"Kaposvár"},{"name":"Kalocsa"},{"name":"Jászberény"},{"name":"Hatvan"},{"name":"Győr"},{"name":"Gyöngyös"},{"name":"Gyál"},{"name":"Gödöllő"},{"name":"Göd"},{"name":"Fót"},{"name":"Esztergom"},{"name":"Érd"},{"name":"Dunaújváros"},{"name":"Dunakeszi"},{"name":"Dunaharaszti"},{"name":"Dombóvár"},{"name":"Dabas"},{"name":"Cegléd"},{"name":"Budapest"},{"name":"Budaörs"},{"name":"Balassagyarmat"},{"name":"Baja"},{"name":"Ajka"},{"name":"Budapest XII. kerület"},{"name":"Budapest XI. kerület"},{"name":"Budapest IX. kerület"},{"name":"Budapest VIII. kerület"},{"name":"Budapest VII. kerület"},{"name":"Budapest VI. kerület"},{"name":"Budapest XIV. kerület"},{"name":"Budapest XIII. kerület"},{"name":"Budapest IV. kerület"},{"name":"Budapest XV. kerület"},{"name":"Budapest XVI. kerület"},{"name":"Budapest X. kerület"},{"name":"Budapest XIX. kerület"},{"name":"Budapest XVIII. kerület"},{"name":"Budapest XXIII. kerület"},{"name":"Budapest XXII. kerület"},{"name":"Budapest XXI. kerület"},{"name":"Budapest XX. kerület"},{"name":"Budapest XVII. kerület"},{"name":"Budapest III. kerület"},{"name":"Budapest II. kerület"},{"name":"Budapest I. kerület"},{"name":"Tongging"},{"name":"Teluk Nibung"},{"name":"Tebingtinggi"},{"name":"Tanjungtiram"},{"name":"Tanjungbalai"},{"name":"Sunggal"},{"name":"Stabat"},{"name":"Singkil"},{"name":"Sigli"},{"name":"Sibolga"},{"name":"Sabang"},{"name":"Reuleuet"},{"name":"Rantauprapat"},{"name":"Percut"},{"name":"Perbaungan"},{"name":"Pematangsiantar"},{"name":"Pangkalan Brandan"},{"name":"Padangsidempuan"},{"name":"Meulaboh"},{"name":"Medan"},{"name":"Lhokseumawe"},{"name":"Langsa"},{"name":"Labuhan Deli"},{"name":"Kisaran"},{"name":"Kabanjahe"},{"name":"Deli Tua"},{"name":"Bireun"},{"name":"Binjai"},{"name":"Berastagi"},{"name":"Belawan"},{"name":"Bandar"},{"name":"Banda Aceh"},{"name":"Yogyakarta"},{"name":"Wonosobo"},{"name":"Wonopringgo"},{"name":"Wongsorejo"},{"name":"Wiradesa"},{"name":"Weru"},{"name":"Weleri"},{"name":"Welahan"},{"name":"Wedi"},{"name":"Watampone"},{"name":"Wangon"},{"name":"Wanaraja"},{"name":"Waingapu"},{"name":"Ungaran"},{"name":"Makassar"},{"name":"Ubud"},{"name":"Tulungagung"},{"name":"Tulangan Utara"},{"name":"Tuban"},{"name":"Tual"},{"name":"Trucuk"},{"name":"Trenggalek"},{"name":"Tondano"},{"name":"Tomohon"},{"name":"Ternate"},{"name":"Terbanggi Besar"},{"name":"Tegal"},{"name":"Tayu"},{"name":"Tasikmalaya"},{"name":"Tarub"},{"name":"Tarakan"},{"name":"Tanjungpinang"},{"name":"Tanjung Pandan"},{"name":"Bandar Lampung"},{"name":"Tanjungagung"},{"name":"Tanggulangin"},{"name":"Tangerang"},{"name":"Tabanan"},{"name":"Surakarta"},{"name":"Surabaya"},{"name":"Sungai Raya"},{"name":"Sungai Penuh"},{"name":"Sungailiat"},{"name":"Sumenep"},{"name":"Sumedang Utara"},{"name":"Sumberpucung"},{"name":"Sumber"},{"name":"Sumbawa Besar"},{"name":"Sokaraja"},{"name":"Sukabumi"},{"name":"Srono"},{"name":"Srandakan"},{"name":"Sragen"},{"name":"Sorong"},{"name":"Soreang"},{"name":"Solok"},{"name":"Soko"},{"name":"Sofifi"},{"name":"Soe"},{"name":"Sleman"},{"name":"Slawi"},{"name":"Situbondo"},{"name":"Sinjai"},{"name":"Singosari"},{"name":"Singojuruh"},{"name":"Singkawang"},{"name":"Sengkang"},{"name":"Singaraja"},{"name":"Singaparna"},{"name":"Simpang"},{"name":"Sijunjung"},{"name":"Sidoarjo"},{"name":"Sidareja"},{"name":"Sewon"},{"name":"Serpong"},{"name":"Serang"},{"name":"Sepatan"},{"name":"Semarang"},{"name":"Selogiri"},{"name":"Sawangan"},{"name":"Sampit"},{"name":"Sampang"},{"name":"Samarinda"},{"name":"Salatiga"},{"name":"Ruteng"},{"name":"Rengasdengklok"},{"name":"Rembangan"},{"name":"Rantepao"},{"name":"Rangkasbitung"},{"name":"Randudongkal"},{"name":"Rajapolah"},{"name":"Purwokerto"},{"name":"Purwodadi"},{"name":"Purwakarta"},{"name":"Purbalingga"},{"name":"Pundong"},{"name":"Probolinggo"},{"name":"Prigen"},{"name":"Praya"},{"name":"Candi Prambanan"},{"name":"Poso"},{"name":"Pontianak"},{"name":"Ponorogo"},{"name":"Polewali"},{"name":"Plumbon"},{"name":"Petarukan"},{"name":"Prabumulih"},{"name":"Pemangkat"},{"name":"Pemalang"},{"name":"Pelabuhanratu"},{"name":"Pekanbaru"},{"name":"Pekalongan"},{"name":"Pecangaan"},{"name":"Payakumbuh"},{"name":"Pati"},{"name":"Pasuruan"},{"name":"Paseh"},{"name":"Pasarkemis"},{"name":"Parung"},{"name":"Pariaman"},{"name":"Parepare"},{"name":"Pare"},{"name":"Panji"},{"name":"Pangkalpinang"},{"name":"Pangkalanbuun"},{"name":"Pandeglang"},{"name":"Pandaan"},{"name":"Pandak"},{"name":"Panarukan"},{"name":"Pamulang"},{"name":"Pameungpeuk"},{"name":"Pamekasan"},{"name":"Pamanukan"},{"name":"Palu"},{"name":"Palopo"},{"name":"Palimanan"},{"name":"Palembang"},{"name":"Palangkaraya"},{"name":"Pakisaji"},{"name":"Pageralam"},{"name":"Padang"},{"name":"Paciran"},{"name":"Ngunut"},{"name":"Ngoro"},{"name":"Ngawi"},{"name":"Nganjuk"},{"name":"Negara"},{"name":"Nabire"},{"name":"Muntok"},{"name":"Muntilan"},{"name":"Muncar"},{"name":"Mranggen"},{"name":"Mojokerto"},{"name":"Mojoagung"},{"name":"Mlonggo"},{"name":"Metro"},{"name":"Mertoyudan"},{"name":"Melati"},{"name":"Maumere"},{"name":"Mataram"},{"name":"Martapura"},{"name":"Margasari"},{"name":"Margahayukencana"},{"name":"Manokwari"},{"name":"Manismata"},{"name":"Manggar"},{"name":"Mendaha"},{"name":"Manado"},{"name":"Malang"},{"name":"Majene"},{"name":"Majenang"},{"name":"Majalengka"},{"name":"Magelang"},{"name":"Madiun"},{"name":"Luwuk"},{"name":"Lumajang"},{"name":"Lubuklinggau"},{"name":"Loa Janan"},{"name":"Lembang"},{"name":"Lebaksiu"},{"name":"Lawang"},{"name":"Lasem"},{"name":"Lamongan"},{"name":"Lahat"},{"name":"Labuan Bajo"},{"name":"Labuan"},{"name":"Kutoarjo"},{"name":"Kuta"},{"name":"Kuningan"},{"name":"Kudus"},{"name":"Kuala Tungkal"},{"name":"Kualakapuas"},{"name":"Kroya"},{"name":"Krian"},{"name":"Kresek"},{"name":"Kraksaan"},{"name":"Kotabumi"},{"name":"Klungkung"},{"name":"Klaten"},{"name":"Klangenan"},{"name":"Kijang"},{"name":"Ketanggungan"},{"name":"Kertosono"},{"name":"Kepanjen"},{"name":"Kendari"},{"name":"Kencong"},{"name":"Kefamenanu"},{"name":"Kedungwuni"},{"name":"Kedungwaru"},{"name":"Kediri"},{"name":"Kebonarun"},{"name":"Kebomas"},{"name":"Kawalu"},{"name":"Katabu"},{"name":"Karangsembung"},{"name":"Karangasem"},{"name":"Karanganom"},{"name":"Karangampel"},{"name":"Kamal"},{"name":"Kalianget"},{"name":"Juwana"},{"name":"Jombang"},{"name":"Jogonalan"},{"name":"Jember"},{"name":"Jekulo"},{"name":"Jatiwangi"},{"name":"Jatiroto"},{"name":"Jatibarang"},{"name":"Jaten"},{"name":"Jambi City"},{"name":"Jakarta"},{"name":"Indramayu"},{"name":"Grogol"},{"name":"Gresik"},{"name":"Gorontalo"},{"name":"Gongdanglegi Kulon"},{"name":"Gombong"},{"name":"Godean"},{"name":"Genteng"},{"name":"Gedangan"},{"name":"Gebog"},{"name":"Gampengrejo"},{"name":"Gambiran Satu"},{"name":"Galesong"},{"name":"Ende"},{"name":"Dumai"},{"name":"Dukuhturi"},{"name":"Driyorejo"},{"name":"Dompu"},{"name":"Diwek"},{"name":"Depok"},{"name":"Depok"},{"name":"Denpasar"},{"name":"Demak"},{"name":"Delanggu"},{"name":"Dampit"},{"name":"Curup"},{"name":"Curug"},{"name":"Comal"},{"name":"Colomadu"},{"name":"Citeureup"},{"name":"Cirebon"},{"name":"Ciputat"},{"name":"Cimahi"},{"name":"Cileunyi"},{"name":"Cileungsir"},{"name":"Cikarang"},{"name":"Cikampek"},{"name":"Cicurug"},{"name":"Cibinong"},{"name":"Ciamis"},{"name":"Cepu"},{"name":"Ceper"},{"name":"Caringin"},{"name":"Ciampea"},{"name":"Bulakamba"},{"name":"Bukittinggi"},{"name":"Buduran"},{"name":"Buaran"},{"name":"Boyolangu"},{"name":"Boyolali"},{"name":"Bontang"},{"name":"Bondowoso"},{"name":"Bojonegoro"},{"name":"Bogor"},{"name":"Blora"},{"name":"Blitar"},{"name":"Bitung"},{"name":"Bima"},{"name":"Besuki"},{"name":"Bengkulu"},{"name":"Bekasi"},{"name":"Baturaja"},{"name":"Baturaden"},{"name":"Batu"},{"name":"Batang"},{"name":"Barabai"},{"name":"Banyuwangi"},{"name":"Banyumas"},{"name":"Bantul"},{"name":"Banjarmasin"},{"name":"Banjaran"},{"name":"Banjar"},{"name":"Banjar"},{"name":"Bangkalan"},{"name":"Bangil"},{"name":"Bandung"},{"name":"Bambanglipuro"},{"name":"Balung"},{"name":"Balikpapan"},{"name":"Balapulang"},{"name":"Balaipungut"},{"name":"Baki"},{"name":"Baekrajan"},{"name":"Babat"},{"name":"Atambua"},{"name":"Astanajapura"},{"name":"Arjawinangun"},{"name":"Amuntai"},{"name":"Ambon"},{"name":"Ambarawa"},{"name":"Amahai"},{"name":"Adiwerna"},{"name":"Padalarang"},{"name":"Ciranjang-hilir"},{"name":"Cikupa"},{"name":"Teluknaga"},{"name":"Wonosari"},{"name":"Gamping Lor"},{"name":"Kasihan"},{"name":"Ngemplak"},{"name":"Kartasura"},{"name":"Gatak"},{"name":"Kupang"},{"name":"Jayapura"},{"name":"Abepura"},{"name":"Seririt"},{"name":"City of Balikpapan"},{"name":"Pekan Bahapal"},{"name":"South Tangerang"},{"name":"Loch Garman"},{"name":"Waterford"},{"name":"Tralee"},{"name":"Tallaght"},{"name":"Swords"},{"name":"Sligo"},{"name":"Droichead Nua"},{"name":"Navan"},{"name":"Naas"},{"name":"An Muileann gCearr"},{"name":"Malahide"},{"name":"Lucan"},{"name":"Luimneach"},{"name":"Letterkenny"},{"name":"Leixlip"},{"name":"Kilkenny"},{"name":"Gaillimh"},{"name":"Finglas"},{"name":"Ennis"},{"name":"Dún Laoghaire"},{"name":"Dundalk"},{"name":"Dublin"},{"name":"Drogheda"},{"name":"Cork"},{"name":"Cluain Meala"},{"name":"Celbridge"},{"name":"Carlow"},{"name":"Blanchardstown"},{"name":"Balbriggan"},{"name":"Athlone"},{"name":"Sandyford"},{"name":"Donaghmede"},{"name":"Jerusalem"},{"name":"Safed"},{"name":"Yehud"},{"name":"Yavné"},{"name":"Yafo"},{"name":"Umm el Faḥm"},{"name":"Tirat Karmel"},{"name":"Tiberias"},{"name":"Tel Aviv"},{"name":"maalot Tarshīhā"},{"name":"Tamra"},{"name":"Sederot"},{"name":"Sakhnīn"},{"name":"Rosh Ha‘Ayin"},{"name":"Rishon LeẔiyyon"},{"name":"Ramla"},{"name":"Ramat HaSharon"},{"name":"Ramat Gan"},{"name":"Ra'anana"},{"name":"Qiryat Yam"},{"name":"Qiryat Shemona"},{"name":"Qiryat Moẕqin"},{"name":"Qiryat Gat"},{"name":"Qiryat Bialik"},{"name":"Qiryat Ata"},{"name":"Qalansuwa"},{"name":"Petaẖ Tiqwa"},{"name":"Or Yehuda"},{"name":"Ofaqim"},{"name":"Netivot"},{"name":"Netanya"},{"name":"Ness Ziona"},{"name":"Nesher"},{"name":"Nazareth"},{"name":"Nahariya"},{"name":"Migdal Ha‘Emeq"},{"name":"Mevo Betar"},{"name":"Maghār"},{"name":"Lod"},{"name":"Kfar Saba"},{"name":"Karmi’el"},{"name":"Kafr Qāsim"},{"name":"Kafr Mandā"},{"name":"Kafr Kannā"},{"name":"Judeida Makr"},{"name":"H̱olon"},{"name":"Hod HaSharon"},{"name":"Herzliyya"},{"name":"Haifa"},{"name":"H̱adera"},{"name":"Giv‘at Shemu’él"},{"name":"Giv‘atayim"},{"name":"Tirah"},{"name":"Eṭ Ṭaiyiba"},{"name":"Er Reina"},{"name":"Eilat"},{"name":"Dimona"},{"name":"Dāliyat el Karmil"},{"name":"Bet Shemesh"},{"name":"Bet She’an"},{"name":"Bené Beraq"},{"name":"Beersheba"},{"name":"Bat Yam"},{"name":"Ashqelon"},{"name":"Ashdod"},{"name":"‘Arad"},{"name":"‘Akko"},{"name":"‘Afula ‘Illit"},{"name":"Modiin"},{"name":"West Jerusalem"},{"name":"Modiin Ilit"},{"name":"Ariel"},{"name":"Douglas"},{"name":"Pūnch"},{"name":"Keelakarai"},{"name":"Zunheboto"},{"name":"Zamānia"},{"name":"Zaidpur"},{"name":"Zahirābād"},{"name":"Yeola"},{"name":"Yellāpur"},{"name":"Yellandu"},{"name":"Yelahanka"},{"name":"Yavatmāl"},{"name":"Yāval"},{"name":"Yanam"},{"name":"Yamunānagar"},{"name":"Yādgīr"},{"name":"Wokha"},{"name":"Wer"},{"name":"Wellington"},{"name":"Wazīrganj"},{"name":"Wāshīm"},{"name":"Warud"},{"name":"Warora"},{"name":"Wāris Alīganj"},{"name":"Wardha"},{"name":"Wārāseonī"},{"name":"Warangal"},{"name":"Wanparti"},{"name":"Wānkāner"},{"name":"Wani"},{"name":"Walajapet"},{"name":"Wai"},{"name":"Wādi"},{"name":"Vyāra"},{"name":"Vuyyūru"},{"name":"Vrindāvan"},{"name":"Vriddhāchalam"},{"name":"Vizianagaram"},{"name":"Vite"},{"name":"Visnagar"},{"name":"Visakhapatnam"},{"name":"Vīsāvadar"},{"name":"Virudunagar"},{"name":"Viravanallūr"},{"name":"Vīrarājendrapet"},{"name":"Virār"},{"name":"Vinukonda"},{"name":"Villupuram"},{"name":"Vikārābād"},{"name":"Vijayawada"},{"name":"Vijāpur"},{"name":"Vidisha"},{"name":"Vettūr"},{"name":"Vettaikkaranpudur"},{"name":"Vetapālem"},{"name":"Verāval"},{"name":"Vepagunta"},{"name":"Venkatagiri"},{"name":"Vemalwāda"},{"name":"Velur"},{"name":"Vellore"},{"name":"Vejalpur"},{"name":"Vedaraniyam"},{"name":"Vayalār"},{"name":"Vattalkundu"},{"name":"Vāsudevanallūr"},{"name":"Vasind"},{"name":"Vāsco Da Gāma"},{"name":"Vasa"},{"name":"Varkala"},{"name":"Varangaon"},{"name":"Varanasi"},{"name":"Vaniyambadi"},{"name":"Vandavāsi"},{"name":"Valsād"},{"name":"Valparai"},{"name":"Vallabh Vidyanagar"},{"name":"Valabhīpur"},{"name":"Vaikam"},{"name":"Vaijāpur"},{"name":"Vadodara"},{"name":"Vadnagar"},{"name":"Vadlapūdi"},{"name":"Vādippatti"},{"name":"Vadamadurai"},{"name":"Vadakku Valliyūr"},{"name":"Vāda"},{"name":"Uttiramerūr"},{"name":"Uttarkāshi"},{"name":"Uttamapālaiyam"},{"name":"Utraula"},{"name":"Usilampatti"},{"name":"Usehat"},{"name":"Uravakonda"},{"name":"Uran"},{"name":"Upleta"},{"name":"Uppal Kalan"},{"name":"Unnāo"},{"name":"Unjha"},{"name":"Unhel"},{"name":"Una"},{"name":"Una"},{"name":"Ūn"},{"name":"Un"},{"name":"Umreth"},{"name":"Umred"},{"name":"Umarkot"},{"name":"Umarkhed"},{"name":"Umaria"},{"name":"Umarga"},{"name":"Ullal"},{"name":"Ulhasnagar"},{"name":"Ujjain"},{"name":"Ujhāni"},{"name":"Udumalaippettai"},{"name":"Udipi"},{"name":"Udhampur"},{"name":"Udgīr"},{"name":"Udankudi"},{"name":"Udalguri"},{"name":"Udaipura"},{"name":"Udaipur"},{"name":"Udaipur"},{"name":"Udaipur"},{"name":"Ooty"},{"name":"Bara Uchāna"},{"name":"Turaiyūr"},{"name":"Tura"},{"name":"Tuni"},{"name":"Tūndla"},{"name":"Tumsar"},{"name":"Tumkūr"},{"name":"Tulsīpur"},{"name":"Tuljāpur"},{"name":"Tufānganj"},{"name":"Tuensang"},{"name":"Thiruvananthapuram"},{"name":"Trichūr"},{"name":"Tonk"},{"name":"Tondi"},{"name":"Tohāna"},{"name":"Todaraisingh"},{"name":"Todabhim"},{"name":"Titlāgarh"},{"name":"Titāgarh"},{"name":"Tisaiyanvilai"},{"name":"Tiruvottiyūr"},{"name":"Cheyyar"},{"name":"Tiruvannāmalai"},{"name":"Tiruvallur"},{"name":"Tiruvalla"},{"name":"Thiruthani"},{"name":"Tiruttangal"},{"name":"Tirur"},{"name":"Tiruppuvanam"},{"name":"Tiruppur"},{"name":"Tirupparangunram"},{"name":"Tirupati"},{"name":"Tirunelveli"},{"name":"Tirumala"},{"name":"Tirukkoyilur"},{"name":"Tiruchengode"},{"name":"Tiruchirappalli"},{"name":"Tiruchchendur"},{"name":"Tīrthahalli"},{"name":"Tiptūr"},{"name":"Tinsukia"},{"name":"Tinnanūr"},{"name":"Tindivanam"},{"name":"Tilhar"},{"name":"Tīkamgarh"},{"name":"Tijāra"},{"name":"Thoubāl"},{"name":"Thiruvarur"},{"name":"Thāsra"},{"name":"Tharād"},{"name":"Thanjāvūr"},{"name":"Thānesar"},{"name":"Thāne"},{"name":"Thāna Bhawan"},{"name":"Thān"},{"name":"Thākurganj"},{"name":"Thakurdwara"},{"name":"Tezpur"},{"name":"Terdāl"},{"name":"Teonthar"},{"name":"Thenkasi"},{"name":"Teni"},{"name":"Tellicherry"},{"name":"Telhāra"},{"name":"Tekkali"},{"name":"Tekkalakote"},{"name":"Tekāri"},{"name":"Tehri"},{"name":"Teghra"},{"name":"Tāsgaon"},{"name":"Tarn Tāran"},{"name":"Tarikere"},{"name":"Tharangambadi"},{"name":"Tārānagar"},{"name":"Tarāna"},{"name":"Tāramangalam"},{"name":"Tarakeswar"},{"name":"Tāoru"},{"name":"Tanuku"},{"name":"Tāndūr"},{"name":"Tānda"},{"name":"Tāndā"},{"name":"Tanakpur"},{"name":"Tamlūk"},{"name":"Talwāra"},{"name":"Talwandi Bhai"},{"name":"Taloda"},{"name":"Talipparamba"},{"name":"Tālīkota"},{"name":"Taleigao"},{"name":"Talegaon Dābhāde"},{"name":"Tālcher"},{"name":"Talāja"},{"name":"Tāki"},{"name":"Takhatpur"},{"name":"Takhatgarh"},{"name":"Tājpur"},{"name":"Tādpatri"},{"name":"Tādepallegūdem"},{"name":"Tādepalle"},{"name":"Suriāpet"},{"name":"Suriānwān"},{"name":"Surendranagar"},{"name":"Sūratgarh"},{"name":"Sūrat"},{"name":"Sūrandai"},{"name":"Sūrajgarh"},{"name":"Supaul"},{"name":"Sunel"},{"name":"Sundarnagar"},{"name":"Sundargarh"},{"name":"Sunām"},{"name":"Sulya"},{"name":"Sūlūru"},{"name":"Sulur"},{"name":"Sultanpur"},{"name":"Sultānpur"},{"name":"Suket"},{"name":"Sūjāngarh"},{"name":"Suār"},{"name":"Srivilliputhur"},{"name":"Srīvardhan"},{"name":"Srivaikuntam"},{"name":"Srīsailain"},{"name":"Srīrāmnagar"},{"name":"Srīperumbūdūr"},{"name":"Srīnivāspur"},{"name":"Srinagar"},{"name":"Srīnagar"},{"name":"Sri Mādhopur"},{"name":"Karanpur"},{"name":"Chicacole"},{"name":"Sri Dūngargarh"},{"name":"Soygaon"},{"name":"Soron"},{"name":"Soro"},{"name":"Sorada"},{"name":"Sopur"},{"name":"Sonīpat"},{"name":"Songadh"},{"name":"Sonepur"},{"name":"Sonāri"},{"name":"Sonāmukhi"},{"name":"Sompeta"},{"name":"Someshwar"},{"name":"Solan"},{"name":"Sojītra"},{"name":"Sojat"},{"name":"Sohna"},{"name":"Sohāgpur"},{"name":"Siwāna"},{"name":"Siwān"},{"name":"Sivakasi"},{"name":"Sivagiri"},{"name":"Sivagiri"},{"name":"Sivaganga"},{"name":"Siuri"},{"name":"Sitārganj"},{"name":"Sītāpur"},{"name":"Sītāmarhi"},{"name":"Siswā Bāzār"},{"name":"Sisauli"},{"name":"Sirūr"},{"name":"Sirumugai"},{"name":"Siruguppa"},{"name":"Sirsilla"},{"name":"Sirsi"},{"name":"Sirsi"},{"name":"Sirsāganj"},{"name":"Sirsa"},{"name":"Sironj"},{"name":"Sirohi"},{"name":"Sīrkāzhi"},{"name":"Sirhind"},{"name":"Sīra"},{"name":"Sinnar"},{"name":"Singur"},{"name":"Singarāyakonda"},{"name":"Singānallūr"},{"name":"Sindhnūr"},{"name":"Sindgi"},{"name":"Shimla"},{"name":"Simdega"},{"name":"Silvassa"},{"name":"Sillod"},{"name":"Silchar"},{"name":"Silao"},{"name":"Sīkar"},{"name":"Sikandra Rao"},{"name":"Sikandarpur"},{"name":"Sikandarābād"},{"name":"Sikka"},{"name":"Sijua"},{"name":"Sihorā"},{"name":"Sihor"},{"name":"Sidlaghatta"},{"name":"Sidhi"},{"name":"Sidhaulī"},{"name":"Siddipet"},{"name":"Siddhapur"},{"name":"Sibsāgar"},{"name":"Shyamnagar"},{"name":"Shujālpur"},{"name":"Shrīrangapattana"},{"name":"Shrīrāmpur"},{"name":"Shrīgonda"},{"name":"Shorāpur"},{"name":"Shoranūr"},{"name":"Sholinghur"},{"name":"Solāpur"},{"name":"Shivpuri"},{"name":"Shīshgarh"},{"name":"Shirpur"},{"name":"Shirhatti"},{"name":"Shirdi"},{"name":"Shimoga"},{"name":"Shillong"},{"name":"Shiliguri"},{"name":"Shikohābād"},{"name":"Shikārpūr"},{"name":"Shikārpur"},{"name":"Shiggaon"},{"name":"Shertallai"},{"name":"Sherkot"},{"name":"Sherghāti"},{"name":"Sheopur"},{"name":"Sheohar"},{"name":"Sheoganj"},{"name":"Shegaon"},{"name":"Shāntipur"},{"name":"Shamsābād"},{"name":"Shamsābād"},{"name":"Shāmli"},{"name":"Shāmgarh"},{"name":"Shājāpur"},{"name":"Sheikhpura"},{"name":"Shāhpura"},{"name":"Shāhpura"},{"name":"Shāhpur"},{"name":"Shāhpur"},{"name":"Shāhpur"},{"name":"Shāhpur"},{"name":"Shāhjānpur"},{"name":"Shāhi"},{"name":"Shāhganj"},{"name":"Shahdol"},{"name":"Shāhāda"},{"name":"Shāhābād"},{"name":"Shāhābād"},{"name":"Shāhābād"},{"name":"Shāhābād"},{"name":"Serchhīp"},{"name":"Seram"},{"name":"Seoni Mālwa"},{"name":"Seoni"},{"name":"Seondha"},{"name":"Seohāra"},{"name":"Sendhwa"},{"name":"Sehore"},{"name":"Secunderabad"},{"name":"Sāyla"},{"name":"Sawāi Mādhopur"},{"name":"Sāvda"},{"name":"Savanūr"},{"name":"Sāvantvādi"},{"name":"Sausar"},{"name":"Saundatti"},{"name":"Sathyamangalam"},{"name":"Sattur"},{"name":"Sattenapalle"},{"name":"Satna"},{"name":"Sātāra"},{"name":"Satānā"},{"name":"Sāsvad"},{"name":"Sarwār"},{"name":"Sarkhej"},{"name":"Sardulgarh"},{"name":"Sardhana"},{"name":"Sardārshahr"},{"name":"Sarauli"},{"name":"Sārangpur"},{"name":"Saraipali"},{"name":"Sarāi Mīr"},{"name":"Sarāi Ākil"},{"name":"Saoner"},{"name":"Sānkrāil"},{"name":"Sankeshwar"},{"name":"Sangrūr"},{"name":"Sāngola"},{"name":"Sangod"},{"name":"Sāngli"},{"name":"Sangariā"},{"name":"Sangāreddi"},{"name":"Sangamner"},{"name":"Sandūr"},{"name":"Sandīla"},{"name":"Sāndi"},{"name":"Sancoale"},{"name":"Sānchor"},{"name":"Sanāwad"},{"name":"Sanaur"},{"name":"Sānand"},{"name":"Samthar"},{"name":"Samrāla"},{"name":"Samdari"},{"name":"Sāmbhar"},{"name":"Sambhal"},{"name":"Sambalpur"},{"name":"Sāmba"},{"name":"Samāstipur"},{"name":"Sāmalkot"},{"name":"Samālkha"},{"name":"Sālūr"},{"name":"Sālūmbar"},{"name":"Salem"},{"name":"Salāya"},{"name":"Saktī"},{"name":"Sakleshpur"},{"name":"Saint Thomas Mount"},{"name":"Sainthia"},{"name":"Selu"},{"name":"Saiha"},{"name":"Saidpur"},{"name":"Sāhibganj"},{"name":"Sahāwar"},{"name":"Sahaswān"},{"name":"Sahaspur"},{"name":"Saharsa"},{"name":"Sahāranpur"},{"name":"Sagauli"},{"name":"Saugor"},{"name":"Sāgar"},{"name":"Safīpur"},{"name":"Safidon"},{"name":"Sādri"},{"name":"Sadāseopet"},{"name":"Sadalgi"},{"name":"Sadābād"},{"name":"Sabalgarh"},{"name":"Rusera"},{"name":"Rura"},{"name":"Ropar"},{"name":"Rūdarpur"},{"name":"Roorkee"},{"name":"Ron"},{"name":"Rohtak"},{"name":"Roha"},{"name":"Robertsonpet"},{"name":"Robertsganj"},{"name":"Risod"},{"name":"Rishra"},{"name":"Rishīkesh"},{"name":"Rīngas"},{"name":"Richha"},{"name":"Rewāri"},{"name":"Rewa"},{"name":"Revelganj"},{"name":"Repalle"},{"name":"Reoti"},{"name":"Renukūt"},{"name":"Renigunta"},{"name":"Remuna"},{"name":"Rehli"},{"name":"Rāzām"},{"name":"Rāybāg"},{"name":"Rāyadrug"},{"name":"Rāyachoti"},{"name":"Rāya"},{"name":"Raxaul"},{"name":"Rāwatsār"},{"name":"Rāwatbhāta"},{"name":"Rāver"},{"name":"Ratnagiri"},{"name":"Ratlām"},{"name":"Ratia"},{"name":"Rāth"},{"name":"Ratanpur"},{"name":"Ratangarh"},{"name":"Rasrā"},{"name":"Rasipuram"},{"name":"Rāpar"},{"name":"Rānīpur"},{"name":"Rānikhet"},{"name":"Rānīganj"},{"name":"Rānībennur"},{"name":"Rānia"},{"name":"Rangia"},{"name":"Rangāpāra"},{"name":"Ranchi"},{"name":"Rānāvāv"},{"name":"Rānāghāt"},{"name":"Rāmtek"},{"name":"Rampur Hat"},{"name":"Rāmpura"},{"name":"Rāmpura"},{"name":"Rāmpur"},{"name":"Rāmpur"},{"name":"Rāmnagar"},{"name":"Rāmnagar"},{"name":"Rāmnagar"},{"name":"Rāmjībanpur"},{"name":"Rāmgundam"},{"name":"Rāmgarh"},{"name":"Rāmgarh"},{"name":"Rāmganj Mandi"},{"name":"Rameswaram"},{"name":"Rāmāpuram"},{"name":"Ramanathapuram"},{"name":"Rāmanagaram"},{"name":"Rāmachandrapuram"},{"name":"Rājūra"},{"name":"Rājula"},{"name":"Rājsamand"},{"name":"Rājpura"},{"name":"Rajpur"},{"name":"Rajpur"},{"name":"Rājpīpla"},{"name":"Rāj-Nāndgaon"},{"name":"Rājmahal"},{"name":"Rājkot"},{"name":"Rājgurunagar"},{"name":"Rājgīr"},{"name":"Rājgarh"},{"name":"Rājgarh"},{"name":"Rājgarh"},{"name":"Rājgarh"},{"name":"Rajaori"},{"name":"Rajapalaiyam"},{"name":"Rājampet"},{"name":"Rājaldesar"},{"name":"Rājākhera"},{"name":"Rājahmundry"},{"name":"Rāisinghnagar"},{"name":"Raisen"},{"name":"Rāipur"},{"name":"Raipur"},{"name":"Raipur"},{"name":"Rāikot"},{"name":"Raigarh"},{"name":"Rāiganj"},{"name":"Rāichūr"},{"name":"Rāhuri"},{"name":"Rahimatpur"},{"name":"Rāhatgarh"},{"name":"Raghunathpur"},{"name":"Rāghogarh"},{"name":"Rafiganj"},{"name":"Raebareli"},{"name":"Rādhanpur"},{"name":"Rabkavi"},{"name":"Kollam"},{"name":"Kasba"},{"name":"Qādiān"},{"name":"Puttūr"},{"name":"Puttūr"},{"name":"Pushkar"},{"name":"Pusad"},{"name":"Purwā"},{"name":"Puruliya"},{"name":"Purnia"},{"name":"Pūrna"},{"name":"Puri"},{"name":"Pūranpur"},{"name":"Pupri"},{"name":"Punjai Puliyampatti"},{"name":"Punganūru"},{"name":"Pune"},{"name":"Pūndri"},{"name":"Punāsa"},{"name":"Punalūr"},{"name":"Pūnāhāna"},{"name":"Pulwama"},{"name":"Puliyangudi"},{"name":"Pulivendla"},{"name":"Pulgaon"},{"name":"Pukhrāyān"},{"name":"Pudukkottai"},{"name":"Proddatūr"},{"name":"Pratāpgarh"},{"name":"Port Blair"},{"name":"Porsa"},{"name":"Porbandar"},{"name":"Poonamalle"},{"name":"Ponnūru"},{"name":"Ponneri"},{"name":"Ponnāni"},{"name":"Puducherry"},{"name":"Ponda"},{"name":"Polūr"},{"name":"Pollachi"},{"name":"Polavaram"},{"name":"Polasara"},{"name":"Pokaran"},{"name":"Pithorāgarh"},{"name":"Pithāpuram"},{"name":"Piro"},{"name":"Piriyāpatna"},{"name":"Piravam"},{"name":"Pīpri"},{"name":"Pipraich"},{"name":"Pipili"},{"name":"Pīpār"},{"name":"Pinjaur"},{"name":"Pindwāra"},{"name":"Pināhat"},{"name":"Pimpri"},{"name":"Pilkhua"},{"name":"Pīlibhīt"},{"name":"Pilibangan"},{"name":"Pilāni"},{"name":"Pihānī"},{"name":"Phulpur"},{"name":"Phulera"},{"name":"Phulabāni"},{"name":"Phirangipuram"},{"name":"Phillaur"},{"name":"Phek"},{"name":"Phaphūnd"},{"name":"Phaltan"},{"name":"Phalodi"},{"name":"Phalauda"},{"name":"Phagwāra"},{"name":"Petlād"},{"name":"Perundurai"},{"name":"Perumpāvūr"},{"name":"Periyanayakkanpalaiyam"},{"name":"Periyakulam"},{"name":"Peravurani"},{"name":"Peranāmpattu"},{"name":"Perambalur"},{"name":"Penukonda"},{"name":"Penugonda"},{"name":"Pennāgaram"},{"name":"Pennādam"},{"name":"Pen"},{"name":"Pehowa"},{"name":"Peddāpuram"},{"name":"Peddapalli"},{"name":"Pedana"},{"name":"Payyannūr"},{"name":"Pawāyan"},{"name":"Pāvugada"},{"name":"Pauri"},{"name":"Pawni"},{"name":"Pātūr"},{"name":"Pattukkottai"},{"name":"Patti"},{"name":"Patnāgarh"},{"name":"Patna"},{"name":"Patiāla"},{"name":"Pāthri"},{"name":"Patharia"},{"name":"Pāthardih"},{"name":"Pāthardi"},{"name":"Pathānkot"},{"name":"Pathanāmthitta"},{"name":"Pathalgaon"},{"name":"Pataudi"},{"name":"Patancheru"},{"name":"Pātan"},{"name":"Patāmundai"},{"name":"Pāsighāt"},{"name":"Pasān"},{"name":"Parvatsar"},{"name":"Pārvatipuram"},{"name":"Partūr"},{"name":"Parola"},{"name":"Parli Vaijnāth"},{"name":"Parlākimidi"},{"name":"Pariyāpuram"},{"name":"Parīchhatgarh"},{"name":"Pārdi"},{"name":"Parbhani"},{"name":"Paravūr"},{"name":"Parāsia"},{"name":"Paramagudi"},{"name":"Parādīp Garh"},{"name":"Pāppinisshēri"},{"name":"Papanasam"},{"name":"Pāonta Sāhib"},{"name":"Panvel"},{"name":"Panruti"},{"name":"Panna"},{"name":"Panmana"},{"name":"Pānīpat"},{"name":"Pānihāti"},{"name":"Pandua"},{"name":"Pāndhurnā"},{"name":"Pandharpur"},{"name":"French Rocks"},{"name":"Panaji"},{"name":"Panāgar"},{"name":"Palwal"},{"name":"Pāloncha"},{"name":"Palani"},{"name":"Palmaner"},{"name":"Pallippatti"},{"name":"Pallikondai"},{"name":"Pallāvaram"},{"name":"Pallappatti"},{"name":"Palladam"},{"name":"Pālkonda"},{"name":"Pālitāna"},{"name":"Paliā Kalān"},{"name":"Pāli"},{"name":"Pāli"},{"name":"Palakkad"},{"name":"Pālghar"},{"name":"Palera"},{"name":"Palāsa"},{"name":"Pālanpur"},{"name":"Pālakollu"},{"name":"Pālakkodu"},{"name":"Pākaur"},{"name":"Pākāla"},{"name":"Paithan"},{"name":"Pahāsu"},{"name":"Padrauna"},{"name":"Padra"},{"name":"Padmanābhapuram"},{"name":"Padampur"},{"name":"Padampur"},{"name":"Padam"},{"name":"Pachperwa"},{"name":"Pāchora"},{"name":"Ottappālam"},{"name":"Osmanabad"},{"name":"Orai"},{"name":"Ongole"},{"name":"Okha"},{"name":"Ozar"},{"name":"Obra"},{"name":"Nūzvīd"},{"name":"Nūrpur"},{"name":"Nowrangapur"},{"name":"North Lakhimpur"},{"name":"North Guwāhāti"},{"name":"Nongstoin"},{"name":"Nokha"},{"name":"Nohar"},{"name":"Noāmundi"},{"name":"Nizāmābād"},{"name":"Nirmāli"},{"name":"Nirmal"},{"name":"Nipāni"},{"name":"Neem ka Thana"},{"name":"Nīmbāhera"},{"name":"Nimāparha"},{"name":"Nīmāj"},{"name":"Nīlokheri"},{"name":"Nīlēshwar"},{"name":"Nilanga"},{"name":"Nilakottai"},{"name":"Nīlgiri"},{"name":"Nihtaur"},{"name":"Nidadavole"},{"name":"Nichlaul"},{"name":"Neyyāttinkara"},{"name":"New Delhi"},{"name":"Neral"},{"name":"Nepānagar"},{"name":"Nellore"},{"name":"Nellikkuppam"},{"name":"Nelamangala"},{"name":"Nedumangād"},{"name":"Nāyudupeta"},{"name":"Nayāgarh"},{"name":"Nawāshahr"},{"name":"Nawalgarh"},{"name":"Niwai"},{"name":"Nawāda"},{"name":"Nawābganj"},{"name":"Nawābganj"},{"name":"Nawābganj"},{"name":"Nāwa"},{"name":"Navalgund"},{"name":"Navadwīp"},{"name":"Nautanwa"},{"name":"Naugachhia"},{"name":"Nattam"},{"name":"Nāthdwāra"},{"name":"Nasrullāhganj"},{"name":"Nāsriganj"},{"name":"Nāspur"},{"name":"Nasīrābād"},{"name":"Nashik"},{"name":"Narwar"},{"name":"Narwāna"},{"name":"Narsīpatnam"},{"name":"Narsinghgarh"},{"name":"Narsimhapur"},{"name":"Nārnaund"},{"name":"Nārnaul"},{"name":"Nargund"},{"name":"Naregal"},{"name":"Nārāyanpet"},{"name":"Narāyangarh"},{"name":"Nāravārikuppam"},{"name":"Naraura"},{"name":"Narauli"},{"name":"Narasaraopet"},{"name":"Narasapur"},{"name":"Narasannapeta"},{"name":"Naraini"},{"name":"Naraina"},{"name":"Napāsar"},{"name":"Nānpāra"},{"name":"Nanjangūd"},{"name":"Nāngloi Jāt"},{"name":"Nāngal Township"},{"name":"Nandyāl"},{"name":"Nandurbar"},{"name":"Nāndūra Buzurg"},{"name":"Nandikotkūr"},{"name":"Nandigāma"},{"name":"Nāndgaon"},{"name":"Nanded"},{"name":"Nanauta"},{"name":"Nāmrup"},{"name":"Nambiyūr"},{"name":"Nāmakkal"},{"name":"Nāmagiripettai"},{"name":"Nalhāti"},{"name":"Nalgonda"},{"name":"Naldurg"},{"name":"Nakūr"},{"name":"Naksalbāri"},{"name":"Nakodar"},{"name":"Najībābād"},{"name":"Nainwa"},{"name":"Nainpur"},{"name":"Naini Tāl"},{"name":"Naihāti"},{"name":"Nahorkatiya"},{"name":"Nāhan"},{"name":"Nagpur"},{"name":"Nāgod"},{"name":"Nagīna"},{"name":"Nāgercoil"},{"name":"Nagda"},{"name":"Nāgaur"},{"name":"Nāgar Karnūl"},{"name":"Nagari"},{"name":"Nagar"},{"name":"Nāgappattinam"},{"name":"Nāgamangala"},{"name":"Naduvannūr"},{"name":"Nadiād"},{"name":"Nādbai"},{"name":"Nādāpuram"},{"name":"Nabīnagar"},{"name":"Nābha"},{"name":"Mysore"},{"name":"Muzaffarpur"},{"name":"Muzaffarnagar"},{"name":"Mūvattupula"},{"name":"Muttupet"},{"name":"Mussoorie"},{"name":"Musiri"},{"name":"Mushābani"},{"name":"Murwāra"},{"name":"Murtajāpur"},{"name":"Murshidābād"},{"name":"Murlīganj"},{"name":"Morinda"},{"name":"Murbād"},{"name":"Murādnagar"},{"name":"Munnar"},{"name":"Monghyr"},{"name":"Mungeli"},{"name":"Mungaoli"},{"name":"Mūndwa"},{"name":"Mundra"},{"name":"Mundgod"},{"name":"Mundargi"},{"name":"Multai"},{"name":"Mūlki"},{"name":"Mulgund"},{"name":"Mulbāgal"},{"name":"Muluppilagadu"},{"name":"Mūl"},{"name":"Muktsar"},{"name":"Mukher"},{"name":"Mukeriān"},{"name":"Muhammadābād"},{"name":"Muhammadābād"},{"name":"Muhammadābād"},{"name":"Mughal Sarāi"},{"name":"Mudkhed"},{"name":"Mudhol"},{"name":"Mudgal"},{"name":"Muddebihāl"},{"name":"Mūdbidri"},{"name":"Mubārakpur"},{"name":"Mothīhāri"},{"name":"Morwa"},{"name":"Morsi"},{"name":"Morena"},{"name":"Morbi"},{"name":"Morār"},{"name":"Moram"},{"name":"Morādābād"},{"name":"Mon"},{"name":"Mokokchūng"},{"name":"Mokameh"},{"name":"Moirāng"},{"name":"Moga"},{"name":"Modāsa"},{"name":"Misrikh"},{"name":"Mirzāpur"},{"name":"Miriālgūda"},{"name":"Mīrganj"},{"name":"Mīrānpur Katra"},{"name":"Mīrānpur"},{"name":"Mīnjūr"},{"name":"Milak"},{"name":"Mihona"},{"name":"Mhāsvād"},{"name":"Mettur"},{"name":"Mettupalayam"},{"name":"Merta"},{"name":"Mendarda"},{"name":"Memāri"},{"name":"Melur"},{"name":"Mehndāwal"},{"name":"Mehekar"},{"name":"Meerut"},{"name":"Medinīpur"},{"name":"Medak"},{"name":"Mayiladuthurai"},{"name":"Mayāng Imphāl"},{"name":"Mawāna"},{"name":"Mavoor"},{"name":"Māvelikara"},{"name":"Maur"},{"name":"Mauganj"},{"name":"Maudaha"},{"name":"Mau Aimma"},{"name":"Mau"},{"name":"Mau"},{"name":"Mattanūr"},{"name":"Mathura"},{"name":"Mātābhānga"},{"name":"Masaurhi Buzurg"},{"name":"Marmagao"},{"name":"Mārkāpur"},{"name":"Mariāni"},{"name":"Mariāhu"},{"name":"Marhaura"},{"name":"Margherita"},{"name":"Marakkanam"},{"name":"Mārahra"},{"name":"Māpuca"},{"name":"Mānwat"},{"name":"Mānvi"},{"name":"Manthani"},{"name":"Mānsa"},{"name":"Mānsa"},{"name":"Manoharpur"},{"name":"Mannargudi"},{"name":"Mannārakkāt"},{"name":"Manmād"},{"name":"Mankāchar"},{"name":"Mājalgaon"},{"name":"Manjhanpur"},{"name":"Manjeri"},{"name":"Manihāri"},{"name":"Maniar"},{"name":"Mangrūl Pīr"},{"name":"Māngrol"},{"name":"Māngrol"},{"name":"Manglaur"},{"name":"Mangalore"},{"name":"Mangaldai"},{"name":"Mangalagiri"},{"name":"Maner"},{"name":"Mandya"},{"name":"Māndvi"},{"name":"Māndvi"},{"name":"Māndu"},{"name":"Mandsaur"},{"name":"Mandlā"},{"name":"Mandi"},{"name":"Mandāwar"},{"name":"Mandapeta"},{"name":"Mandapam"},{"name":"Māndalgarh"},{"name":"Māndal"},{"name":"Mancherāl"},{"name":"Manāwar"},{"name":"Mānāvadar"},{"name":"Manāsa"},{"name":"Manapparai"},{"name":"Manamadurai"},{"name":"Manali"},{"name":"Mālvan"},{"name":"Mālūr"},{"name":"Mālpura"},{"name":"Malpe"},{"name":"Mallasamudram"},{"name":"Malkāpur"},{"name":"Malakanagiri"},{"name":"Malīhābād"},{"name":"Māler Kotla"},{"name":"Mālegaon"},{"name":"Malavalli"},{"name":"Malaut"},{"name":"Malappuram"},{"name":"Mākum"},{"name":"Maksi"},{"name":"Makrāna"},{"name":"Mairwa"},{"name":"Mainpuri"},{"name":"Maināguri"},{"name":"Maihar"},{"name":"Mahwah"},{"name":"Mahudha"},{"name":"Maholi"},{"name":"Mahobā"},{"name":"Mahmudābād"},{"name":"Mahīshādal"},{"name":"Mahgawān"},{"name":"Maheshwar"},{"name":"Mahendragarh"},{"name":"Mahemdāvād"},{"name":"Mahē"},{"name":"Mahbūbnagar"},{"name":"Mahbūbābād"},{"name":"Mahāsamund"},{"name":"Mahārāganj"},{"name":"Mahārājgani"},{"name":"Maham"},{"name":"Mahālingpur"},{"name":"Mahād"},{"name":"Maghar"},{"name":"Māgadi"},{"name":"Madurāntakam"},{"name":"Madurai"},{"name":"Madukkūr"},{"name":"Madukkarai"},{"name":"Chennai"},{"name":"Madikeri"},{"name":"Madhyamgram"},{"name":"Madhupur"},{"name":"Maddagiri"},{"name":"Madhubani"},{"name":"Madhipura"},{"name":"Madgaon"},{"name":"Maddūr"},{"name":"Madanapalle"},{"name":"Machilīpatnam"},{"name":"Machhlīshahr"},{"name":"Māchhīwāra"},{"name":"Mācherla"},{"name":"Lunglei"},{"name":"Lūnāvāda"},{"name":"Ludhiāna"},{"name":"Lucknow"},{"name":"Luckeesarai"},{"name":"Losal"},{"name":"Loni"},{"name":"Lonavla"},{"name":"Lonār"},{"name":"Lohārdaga"},{"name":"Lingsugūr"},{"name":"Limbdi"},{"name":"Leteri"},{"name":"Leh"},{"name":"Lāwar Khās"},{"name":"Laungowāl"},{"name":"Latur"},{"name":"Lāthi"},{"name":"Lātehār"},{"name":"Lar"},{"name":"Lālsot"},{"name":"Lālpur"},{"name":"Lalitpur"},{"name":"Lalgudi"},{"name":"Lālgola"},{"name":"Lālganj"},{"name":"Lālganj"},{"name":"Lakshmeshwar"},{"name":"Laksar"},{"name":"Lakhyabad"},{"name":"Lakhnādon"},{"name":"Lakhīmpur"},{"name":"Lākheri"},{"name":"Lāharpur"},{"name":"Lahār"},{"name":"Lādwa"},{"name":"Lādnūn"},{"name":"Lachhmangarh Sīkar"},{"name":"Kuzhithurai"},{"name":"Koothanallur"},{"name":"Kuttampuzha"},{"name":"Kutiyāna"},{"name":"Kutiatodu"},{"name":"Kushtagi"},{"name":"Kurinjippādi"},{"name":"Kurduvādi"},{"name":"Kurandvād"},{"name":"Kuppam"},{"name":"Kunnamkulam"},{"name":"Kunnamangalam"},{"name":"Kunigal"},{"name":"Kundla"},{"name":"Kundgol"},{"name":"Kundarkhi"},{"name":"Kunda"},{"name":"Kumta"},{"name":"Kūmher"},{"name":"Kumhāri"},{"name":"Kumbhrāj"},{"name":"Kumbakonam"},{"name":"Kulu"},{"name":"Kulti"},{"name":"Kulpahār"},{"name":"Kulittalai"},{"name":"Kulgam"},{"name":"Kukshi"},{"name":"Kūkatpalli"},{"name":"Kuju"},{"name":"Kūdligi"},{"name":"Kudachi"},{"name":"Kuchera"},{"name":"Kuchāman"},{"name":"Kuchaiburi"},{"name":"Krishnarājpet"},{"name":"Krishnanagar"},{"name":"Krishnagiri"},{"name":"Kozhikode"},{"name":"Koynanagar"},{"name":"Kovvūr"},{"name":"Kovūr"},{"name":"Kovilpatti"},{"name":"Kottūru"},{"name":"Kottayam"},{"name":"Kottagūdem"},{"name":"Kotputli"},{"name":"Kotma"},{"name":"Kotdwāra"},{"name":"Kotapārh"},{"name":"Kotamangalam"},{"name":"Kotagiri"},{"name":"Kota"},{"name":"Kotā"},{"name":"Kosigi"},{"name":"Kosi"},{"name":"Kosamba"},{"name":"Korwai"},{"name":"Koregaon"},{"name":"Korba"},{"name":"Koratla"},{"name":"Korāput"},{"name":"Koppal"},{"name":"Kopargaon"},{"name":"Kopāganj"},{"name":"Konnūr"},{"name":"Konnagar"},{"name":"Kondapalle"},{"name":"Kondagaon"},{"name":"Konch"},{"name":"Konārka"},{"name":"Kolasib"},{"name":"Kollegāl"},{"name":"Kolhāpur"},{"name":"Kolāras"},{"name":"Kolār"},{"name":"Colachel"},{"name":"Kokrajhar"},{"name":"Kohima"},{"name":"Koelwār"},{"name":"Kodungallūr"},{"name":"Kodoli"},{"name":"Kodīnar"},{"name":"Kodarmā"},{"name":"Kodār"},{"name":"Kodaikānāl"},{"name":"Koch Bihār"},{"name":"Koāth"},{"name":"Kizhake Chālakudi"},{"name":"Kithor"},{"name":"Kishtwār"},{"name":"Kishangarh"},{"name":"Kishanganj"},{"name":"Kīratpur"},{"name":"Kiraoli"},{"name":"Kinwat"},{"name":"Kichha"},{"name":"Khūtār"},{"name":"Khurja"},{"name":"Khurda"},{"name":"Khurai"},{"name":"Khunti"},{"name":"Khuldābād"},{"name":"Khowai"},{"name":"Khopoli"},{"name":"Khirkiyān"},{"name":"Khilchipur"},{"name":"Khetri"},{"name":"Khetia"},{"name":"Kheri"},{"name":"Kherālu"},{"name":"Khekra"},{"name":"Khed Brahma"},{"name":"Kheda"},{"name":"Khātra"},{"name":"Khatīma"},{"name":"Khātegaon"},{"name":"Khatauli"},{"name":"Khārupatia"},{"name":"Kharsia"},{"name":"Kharkhauda"},{"name":"Khargone"},{"name":"Khardah"},{"name":"Kharar"},{"name":"Kharakvasla"},{"name":"Kharagpur"},{"name":"Kharagpur"},{"name":"Khāpa"},{"name":"Khanna"},{"name":"Khandwa"},{"name":"Khandela"},{"name":"Khānāpur"},{"name":"Khammam"},{"name":"Khāmgaon"},{"name":"Khambhāt"},{"name":"Khambhāliya"},{"name":"Khamaria"},{"name":"Khalīlābād"},{"name":"Khajurāho"},{"name":"Khairāgarh"},{"name":"Khairāgarh"},{"name":"Khairābād"},{"name":"Khair"},{"name":"Khagaul"},{"name":"Khagaria"},{"name":"Khadki"},{"name":"Khada"},{"name":"Khāchrod"},{"name":"Kesinga"},{"name":"Keshorai Pātan"},{"name":"Keshod"},{"name":"Kerūr"},{"name":"Kendrāparha"},{"name":"Kenda"},{"name":"Kemrī"},{"name":"Kekri"},{"name":"Kāyankulam"},{"name":"Kayalpattinam"},{"name":"Kawardha"},{"name":"Kāvali"},{"name":"Kattivākkam"},{"name":"Kattanam"},{"name":"Kātrās"},{"name":"Kātpādi"},{"name":"Kātoya"},{"name":"Kātol"},{"name":"Katihar"},{"name":"Kathua"},{"name":"Kāthor"},{"name":"Katghora"},{"name":"Katangi"},{"name":"Katangi"},{"name":"Kasrāwad"},{"name":"Kashipur"},{"name":"Kāsganj"},{"name":"Kāsaragod"},{"name":"Karwar"},{"name":"Karur"},{"name":"Kartārpur"},{"name":"Kārsiyāng"},{"name":"Karol Bāgh"},{"name":"Karnāl"},{"name":"Karmāla"},{"name":"Kārkala"},{"name":"Karjat"},{"name":"Karīmnagar"},{"name":"Karīmganj"},{"name":"Karhal"},{"name":"Karera"},{"name":"Kareli"},{"name":"Karauli"},{"name":"Kāranja"},{"name":"Karamsad"},{"name":"Kāramadai"},{"name":"Kāraikkudi"},{"name":"Kāraikāl"},{"name":"Karād"},{"name":"Kapūrthala"},{"name":"Kāpren"},{"name":"Kapadvanj"},{"name":"Kānth"},{"name":"Kantābānji"},{"name":"Kānt"},{"name":"Kanpur"},{"name":"Kannod"},{"name":"Kanniyākumāri"},{"name":"Kannauj"},{"name":"Kānnangād"},{"name":"Kannad"},{"name":"Kānker"},{"name":"Kānke"},{"name":"Kankauli"},{"name":"Kanigiri"},{"name":"Kangayam"},{"name":"Kandukūr"},{"name":"Kāndla"},{"name":"Kāndi"},{"name":"Kāndhla"},{"name":"Kānchipuram"},{"name":"Kanakapura"},{"name":"Kāmthi"},{"name":"Kampli"},{"name":"Cumbum"},{"name":"Kāmārhāti"},{"name":"Kāmāreddi"},{"name":"Kāman"},{"name":"Kamalganj"},{"name":"Kāmākhyānagar"},{"name":"Kalyani"},{"name":"Kalyān"},{"name":"Kalugumalai"},{"name":"Kālpi"},{"name":"Kalpetta"},{"name":"Kālol"},{"name":"Kālna"},{"name":"Kalmeshwar"},{"name":"Kallidaikurichchi"},{"name":"Kallakkurichchi"},{"name":"Kālka"},{"name":"Kāliyāganj"},{"name":"Kālimpong"},{"name":"Kalghatgi"},{"name":"Kālāvad"},{"name":"Kālānwāli"},{"name":"Kalānaur"},{"name":"Kalamnūri"},{"name":"Kalamb"},{"name":"Kalakkādu"},{"name":"Kakrāla"},{"name":"Kākori"},{"name":"Kākināda"},{"name":"Kakching"},{"name":"Kaithal"},{"name":"Kairāna"},{"name":"Kaimori"},{"name":"Kaimganj"},{"name":"Kailāshahar"},{"name":"Kailāras"},{"name":"Kaikalūr"},{"name":"Kāgal"},{"name":"Kadūr"},{"name":"Kadod"},{"name":"Kadiri"},{"name":"Kadi"},{"name":"Kadayanallur"},{"name":"Kānchrāpāra"},{"name":"Kachhwa"},{"name":"Kabrāi"},{"name":"Junnar"},{"name":"Jūnāgarh"},{"name":"Jūnāgadh"},{"name":"Jumri Tilaiyā"},{"name":"Jalandhar"},{"name":"Jugsālai"},{"name":"Jorhāt"},{"name":"Jora"},{"name":"Jolārpettai"},{"name":"Jogbani"},{"name":"Jodiya Bandar"},{"name":"Jodhpur"},{"name":"Jodhpur"},{"name":"Jintūr"},{"name":"Jīnd"},{"name":"Jhūsi"},{"name":"Jhunjhunūn"},{"name":"Jhinjhāna"},{"name":"Jhīnjhak"},{"name":"Jhārsuguda"},{"name":"Jharia"},{"name":"Jhārgrām"},{"name":"Jhānsi"},{"name":"Jhanjhārpur"},{"name":"Jhālu"},{"name":"Jhālrapātan"},{"name":"Jhalida"},{"name":"Jhālāwār"},{"name":"Jhajjar"},{"name":"Jhā Jhā"},{"name":"Jhābua"},{"name":"Jewar"},{"name":"Jevargi"},{"name":"Jetpur"},{"name":"Jeypore"},{"name":"Jaynagar"},{"name":"Jaynagar-Majilpur"},{"name":"Jayamkondacholapuram"},{"name":"Jāwad"},{"name":"Jaunpur"},{"name":"Jatāra"},{"name":"Jatani"},{"name":"Jaswantnagar"},{"name":"Jaspur"},{"name":"Jasidih"},{"name":"Jashpurnagar"},{"name":"Jasdan"},{"name":"Jarwal"},{"name":"Jaorā"},{"name":"Jānsath"},{"name":"Jānjgīr"},{"name":"Jangipur"},{"name":"Jangaon"},{"name":"Jandiāla"},{"name":"Jāmuria"},{"name":"Jamūī"},{"name":"Jāmtāra"},{"name":"Jamshedpur"},{"name":"Jāmnagar"},{"name":"Jammu"},{"name":"Jammalamadugu"},{"name":"Jamkhandi"},{"name":"Jambusar"},{"name":"Jamālpur"},{"name":"Jāmai"},{"name":"Jāmadoba"},{"name":"Jalpāiguri"},{"name":"Jalor"},{"name":"Jālna"},{"name":"Jalgaon Jamod"},{"name":"Jalgaon"},{"name":"Jaleshwar"},{"name":"Jalesar"},{"name":"Jālaun"},{"name":"Jalālpur"},{"name":"Jalālpur"},{"name":"Jalālī"},{"name":"Jalālābād"},{"name":"Jalālābad"},{"name":"Jalālābād"},{"name":"Jājpur"},{"name":"Jaito"},{"name":"Jaitāran"},{"name":"Jaisingpur"},{"name":"Jaisalmer"},{"name":"Jais"},{"name":"Jaipur"},{"name":"Jahāzpur"},{"name":"Jahāngīrābād"},{"name":"Jahānābād"},{"name":"Jagtiāl"},{"name":"Jagraon"},{"name":"Jaggayyapeta"},{"name":"Jagdīspur"},{"name":"Jagdīshpur"},{"name":"Jagdalpur"},{"name":"Jagatsinghapur"},{"name":"Jagalūr"},{"name":"Jagādhri"},{"name":"Jabalpur"},{"name":"Itimādpur"},{"name":"Itārsi"},{"name":"Itānagar"},{"name":"Islāmpur"},{"name":"Islāmpur"},{"name":"Islāmnagar"},{"name":"Irugūr"},{"name":"Irinjālakuda"},{"name":"Iringal"},{"name":"Ingrāj Bāzār"},{"name":"Indri"},{"name":"Indore"},{"name":"Indi"},{"name":"Indergarh"},{"name":"Indāpur"},{"name":"Imphal"},{"name":"Ilkal"},{"name":"Igatpuri"},{"name":"Idappadi"},{"name":"Ichchāpuram"},{"name":"Ichalkaranji"},{"name":"Hyderabad"},{"name":"Hadagalli"},{"name":"Husainābād"},{"name":"Hunsūr"},{"name":"Hungund"},{"name":"Hukeri"},{"name":"Hugli"},{"name":"Hubli"},{"name":"Howli"},{"name":"Hosūr"},{"name":"Hospet"},{"name":"Hoskote"},{"name":"Hoshangābād"},{"name":"Hosdurga"},{"name":"Honnāli"},{"name":"Honāvar"},{"name":"Homnābād"},{"name":"Hole Narsipur"},{"name":"Holalkere"},{"name":"Hojāi"},{"name":"Hodal"},{"name":"Hisuā"},{"name":"Hisar"},{"name":"Hiriyūr"},{"name":"Hirekerūr"},{"name":"Hīrākud"},{"name":"Hinjilikatu"},{"name":"Hingoli"},{"name":"Hinganghāt"},{"name":"Hindupur"},{"name":"Hindoria"},{"name":"Hindaun"},{"name":"Himatnagar"},{"name":"Hilsa"},{"name":"Hazārībāg"},{"name":"Hāveri"},{"name":"Hatta"},{"name":"Hāthras"},{"name":"Hastināpur"},{"name":"Hassan"},{"name":"Hāsimāra"},{"name":"Hasanpur"},{"name":"Harūr"},{"name":"Harsūd"},{"name":"Harpanahalli"},{"name":"Harpālpur"},{"name":"Hārij"},{"name":"Harihar"},{"name":"Haridwar"},{"name":"Hardoī"},{"name":"Harda Khās"},{"name":"Hāpur"},{"name":"Hāora"},{"name":"Hanumāngarh"},{"name":"Hānsi"},{"name":"Hāngal"},{"name":"Handiā"},{"name":"Hamīrpur"},{"name":"Hamīrpur"},{"name":"Halvad"},{"name":"Hālol"},{"name":"Haliyal"},{"name":"Hālīsahar"},{"name":"Haldwani"},{"name":"Haldaur"},{"name":"Hājo"},{"name":"Hājīpur"},{"name":"Hailākāndi"},{"name":"Hāflong"},{"name":"Hadgāon"},{"name":"Hābra"},{"name":"Gwalior"},{"name":"Guskhara"},{"name":"Guruvāyūr"},{"name":"Guru Har Sahāi"},{"name":"Gursarāi"},{"name":"Gursahāiganj"},{"name":"Gurmatkāl"},{"name":"Gurgaon"},{"name":"Gunupur"},{"name":"Guntūr"},{"name":"Guntakal Junction"},{"name":"Gunnaur"},{"name":"Gundlupet"},{"name":"Guna"},{"name":"Gummidipundi"},{"name":"Gumla"},{"name":"Gumia"},{"name":"Guledagudda"},{"name":"Gulbarga"},{"name":"Gulāothi"},{"name":"Gulābpura"},{"name":"Gūduvāncheri"},{"name":"Gūdūr"},{"name":"Gudiyatham"},{"name":"Gudivāda"},{"name":"Gudalur"},{"name":"Gubbi"},{"name":"Goyerkāta"},{"name":"Govardhan"},{"name":"Gosāba"},{"name":"Gorakhpur"},{"name":"Gorakhpur"},{"name":"Gobichettipalayam"},{"name":"Gopālganj"},{"name":"Gondiā"},{"name":"Gondal"},{"name":"Gondā City"},{"name":"Gomoh"},{"name":"Gola Gokarannāth"},{"name":"Golāghāt"},{"name":"Gokarna"},{"name":"Gokak"},{"name":"Gohāna"},{"name":"Gohadi"},{"name":"Godhra"},{"name":"Godda"},{"name":"Gobindpur"},{"name":"Gobārdānga"},{"name":"Goālpāra"},{"name":"Girīdīh"},{"name":"Gingee"},{"name":"Giddarbāha"},{"name":"Giddalūr"},{"name":"Ghugus"},{"name":"Ghoti Budrukh"},{"name":"Ghosī"},{"name":"Ghazīpur"},{"name":"Ghāziābād"},{"name":"Ghātsīla"},{"name":"Ghātanji"},{"name":"Ghātampur"},{"name":"Ghātāl"},{"name":"Gharaunda"},{"name":"Gevrai"},{"name":"Gaya"},{"name":"Gauripur"},{"name":"Goribidnūr"},{"name":"Guwahati"},{"name":"Garhwa"},{"name":"Garui"},{"name":"Gariadhar"},{"name":"Garhshankar"},{"name":"Garhmuktesar"},{"name":"Garhākota"},{"name":"Gannavaram"},{"name":"Gangtok"},{"name":"Gangolli"},{"name":"Gangoh"},{"name":"Gangāwati"},{"name":"Gangārāmpur"},{"name":"Gangāpur"},{"name":"Gangāpur"},{"name":"Gangāpur"},{"name":"Gangānagar"},{"name":"Gangākher"},{"name":"Ghandinagar"},{"name":"Gāndhīdhām"},{"name":"Gandevi"},{"name":"Gāndarbal"},{"name":"Gajraula"},{"name":"Gajendragarh"},{"name":"Gadwāl"},{"name":"Gadhinglaj"},{"name":"Gadhada"},{"name":"Gādarwāra"},{"name":"Gadag"},{"name":"Fort Gloster"},{"name":"Forbesganj"},{"name":"Fīrozpur Jhirka"},{"name":"Ferozepore"},{"name":"Fīrozābād"},{"name":"Ferokh"},{"name":"Fāzilka"},{"name":"Fatwa"},{"name":"Fatehpur Sīkri"},{"name":"Fatehpur"},{"name":"Fatehpur"},{"name":"Fatehpur"},{"name":"Fatehgarh Chūriān"},{"name":"Fatehganj West"},{"name":"Fatehābād"},{"name":"Fatehābād"},{"name":"Farrukhnagar"},{"name":"Farrukhābād"},{"name":"Farīdpur"},{"name":"Farīdkot"},{"name":"Farīdābād"},{"name":"Farakka"},{"name":"Fālākāta"},{"name":"Faizpur"},{"name":"Fyzābād"},{"name":"Etāwah"},{"name":"Erraguntla"},{"name":"Erode"},{"name":"Erāttupetta"},{"name":"Erandol"},{"name":"Emmiganūr"},{"name":"Ellore"},{"name":"Elūr"},{"name":"Ellenabad"},{"name":"Elamanchili"},{"name":"Egra"},{"name":"Dwārka"},{"name":"Durgapur"},{"name":"Durgāpur"},{"name":"Durg"},{"name":"Dūngarpur"},{"name":"Ganj Dundwāra"},{"name":"Dumraon"},{"name":"Dumra"},{"name":"Dumka"},{"name":"Dum Duma"},{"name":"Dam Dam"},{"name":"Duliāgaon"},{"name":"Dugda"},{"name":"Dubrājpur"},{"name":"Dornakal"},{"name":"Dorāha"},{"name":"Dongargarh"},{"name":"Dondaicha"},{"name":"Dombivli"},{"name":"Dod Ballāpur"},{"name":"Doda"},{"name":"Diu"},{"name":"Dīsa"},{"name":"Diphu"},{"name":"Dīnhāta"},{"name":"Dindori"},{"name":"Dindigul"},{"name":"Dīnānagar"},{"name":"Dimāpur"},{"name":"Digras"},{"name":"Dīglūr"},{"name":"Dighwāra"},{"name":"Digboi"},{"name":"Dīg"},{"name":"Dīdwāna"},{"name":"Dicholi"},{"name":"Dibrugarh"},{"name":"Dibai"},{"name":"Diamond Harbour"},{"name":"Dhūri"},{"name":"Dhupgāri"},{"name":"Dhuliān"},{"name":"Dhūlia"},{"name":"Dhuburi"},{"name":"Dhrol"},{"name":"Dhrāngadhra"},{"name":"Dhorāji"},{"name":"Dhone"},{"name":"Dholka"},{"name":"Dhing"},{"name":"Dhenkānāl"},{"name":"Dhekiajuli"},{"name":"Dhaurahra"},{"name":"Dhaulpur"},{"name":"Dhārūr"},{"name":"Dhāruhera"},{"name":"Dharmsāla"},{"name":"Dharmavaram"},{"name":"Dharmapuri"},{"name":"Dharmanagar"},{"name":"Dharmadam"},{"name":"Dharmābād"},{"name":"Dhāriwāl"},{"name":"Dhāri"},{"name":"Dharapuram"},{"name":"Dharangaon"},{"name":"Dharampur"},{"name":"Dhār"},{"name":"Dhanera"},{"name":"Dhandhuka"},{"name":"Dhanbād"},{"name":"Dhanaura"},{"name":"Dhanaula"},{"name":"Dhamtari"},{"name":"Dhāmpur"},{"name":"Dhāmnod"},{"name":"Dhāka"},{"name":"Dewas"},{"name":"Deoli"},{"name":"Devgarh"},{"name":"Devgadh Bāriya"},{"name":"Devarkonda"},{"name":"Devanhalli"},{"name":"Devakottai"},{"name":"Deūlgaon Rāja"},{"name":"Deshnoke"},{"name":"Depālpur"},{"name":"Deori Khās"},{"name":"Deoria"},{"name":"Deoraniān"},{"name":"Deoli"},{"name":"Deolāli"},{"name":"Deogarh"},{"name":"Deoband"},{"name":"Denkanikota"},{"name":"Delhi"},{"name":"Dehri"},{"name":"Dehra Dūn"},{"name":"Dausa"},{"name":"Daund"},{"name":"Daudnagar"},{"name":"Dattāpur"},{"name":"Datia"},{"name":"Dātāganj"},{"name":"Dasūya"},{"name":"Dāsna"},{"name":"Daryāpur"},{"name":"Dārwha"},{"name":"Dārjiling"},{"name":"Darbhanga"},{"name":"Dandeli"},{"name":"Dinapore"},{"name":"Damoh"},{"name":"Dāmnagar"},{"name":"Daman"},{"name":"Daltonganj"},{"name":"Dalsingh Sarai"},{"name":"Dalkola"},{"name":"Dākor"},{"name":"Dohad"},{"name":"Dahegām"},{"name":"Dāhānu"},{"name":"Dādri"},{"name":"Dabwāli"},{"name":"Dabra"},{"name":"Daboh"},{"name":"Dabhoi"},{"name":"Cuttack"},{"name":"Curchorem"},{"name":"Cuncolim"},{"name":"Cumbum"},{"name":"Cuddapah"},{"name":"Cuddalore"},{"name":"Coondapoor"},{"name":"Colonelganj"},{"name":"Colgong"},{"name":"Calangute"},{"name":"Coimbatore"},{"name":"Cochin"},{"name":"Clement Town"},{"name":"Chūru"},{"name":"Churāchāndpur"},{"name":"Chunār"},{"name":"Chotila"},{"name":"Chopda"},{"name":"Chodavaram"},{"name":"Rampachodavaram"},{"name":"Chittūr"},{"name":"Chittaurgarh"},{"name":"Chittaranjan"},{"name":"Chitradurga"},{"name":"Chītāpur"},{"name":"Chidawa"},{"name":"Chīrāla"},{"name":"Chīpurupalle"},{"name":"Chiplūn"},{"name":"Chintāmani"},{"name":"Chinna Salem"},{"name":"Chinnamanūr"},{"name":"Chincholi"},{"name":"Chillupār"},{"name":"Chilakalūrupet"},{"name":"Chikodi"},{"name":"Chiknāyakanhalli"},{"name":"Chikmagalūr"},{"name":"Chikhli"},{"name":"Chik Ballāpur"},{"name":"Chidambaram"},{"name":"Chicholi"},{"name":"Chhoti Sādri"},{"name":"Chhota Udepur"},{"name":"Chhindwāra"},{"name":"Chhibrāmau"},{"name":"Chhatarpur"},{"name":"Chhātāpur"},{"name":"Chhāta"},{"name":"Chharra"},{"name":"Chhaprauli"},{"name":"Chāpra"},{"name":"Chhāpar"},{"name":"Chhala"},{"name":"Chhabra"},{"name":"Chettipālaiyam"},{"name":"Chetput"},{"name":"Chennimalai"},{"name":"Chengannūr"},{"name":"Chengam"},{"name":"Chengalpattu"},{"name":"Chāvakkād"},{"name":"Chaksu"},{"name":"Chatrapur"},{"name":"Chatra"},{"name":"Chās"},{"name":"Charthāwal"},{"name":"Charkhi Dādri"},{"name":"Charkhāri"},{"name":"Chāpar"},{"name":"Channarāyapatna"},{"name":"Channapatna"},{"name":"Channagiri"},{"name":"Changanācheri"},{"name":"Chāndor"},{"name":"Chāndūr Bāzār"},{"name":"Chāndūr"},{"name":"Chāndur"},{"name":"Chānda"},{"name":"Chandrakona"},{"name":"Chāndpur"},{"name":"Chandigarh"},{"name":"Chanderi"},{"name":"Chanduasi"},{"name":"Chandauli"},{"name":"Chandannagar"},{"name":"Chānasma"},{"name":"Chamrajnagar"},{"name":"Chāmpa"},{"name":"Chamba"},{"name":"Challapalle"},{"name":"Challakere"},{"name":"Chālisgaon"},{"name":"Chalāla"},{"name":"Chakradharpur"},{"name":"Chaklāsi"},{"name":"Chākia"},{"name":"Chākan"},{"name":"Chāībāsa"},{"name":"Canning"},{"name":"Cannanore"},{"name":"Kolkata"},{"name":"Byādgi"},{"name":"Buxar"},{"name":"Burla"},{"name":"Burhar"},{"name":"Burhānpur"},{"name":"Būndu"},{"name":"Būndi"},{"name":"Buldāna"},{"name":"Bulandshahr"},{"name":"Budhlāda"},{"name":"Budhāna"},{"name":"Budaun"},{"name":"Brājarājnagar"},{"name":"Brahmapur"},{"name":"Botād"},{"name":"Borsad"},{"name":"Borivli"},{"name":"Bongaigaon"},{"name":"Mumbai"},{"name":"Bolpur"},{"name":"Bokāro"},{"name":"Bokajān"},{"name":"Boisar"},{"name":"Bodināyakkanūr"},{"name":"Buddh Gaya"},{"name":"Bodhan"},{"name":"Bobbili"},{"name":"Biswān"},{"name":"Bissāu"},{"name":"Bishnupur"},{"name":"Bisauli"},{"name":"Bīsalpur"},{"name":"Birūr"},{"name":"Bīrpur"},{"name":"Birmitrapur"},{"name":"Binka"},{"name":"Bindki"},{"name":"Etāwa"},{"name":"Bilthra"},{"name":"Bilsi"},{"name":"Bilsanda"},{"name":"Bilimora"},{"name":"Bilhaur"},{"name":"Bilgrām"},{"name":"Bilgi"},{"name":"Bīlāspur"},{"name":"Bilāspur"},{"name":"Bilāsipāra"},{"name":"Bilāri"},{"name":"Bilāra"},{"name":"Bikramganj"},{"name":"Bīkaner"},{"name":"Bijnor"},{"name":"Bijbiāra"},{"name":"Bijāwar"},{"name":"Bijapur"},{"name":"Bihār"},{"name":"Bihārīganj"},{"name":"Bidhūna"},{"name":"Bīdar"},{"name":"Biaora"},{"name":"Bhuvanagiri"},{"name":"Bhusāval"},{"name":"Bhūm"},{"name":"Bhuj"},{"name":"Bhudgaon"},{"name":"Bhubaneshwar"},{"name":"Bhuban"},{"name":"Bhor"},{"name":"Bhopal"},{"name":"Bhongīr"},{"name":"Bhongaon"},{"name":"Bhogpur"},{"name":"Bhiwāni"},{"name":"Bhiwandi"},{"name":"Bhitarwār"},{"name":"Bhīnmāl"},{"name":"Bhinga"},{"name":"Bhindār"},{"name":"Bhind"},{"name":"Bhīmunipatnam"},{"name":"Bhīmavaram"},{"name":"Bhīlwāra"},{"name":"Bhilai"},{"name":"Bhīkhi"},{"name":"Bhikangaon"},{"name":"Bhāyāvadar"},{"name":"Bhayandar"},{"name":"Bhawānipatna"},{"name":"Bhawānīgarh"},{"name":"Bhawāniganj"},{"name":"Bhāvnagar"},{"name":"Bhavāni"},{"name":"Bhattiprolu"},{"name":"Bhātpāra"},{"name":"Bhatkal"},{"name":"Bhatinda"},{"name":"Bhātāpāra"},{"name":"Bhasāwar"},{"name":"Bharwāri"},{"name":"Bharūch"},{"name":"Bharthana"},{"name":"Bharatpur"},{"name":"Bhānvad"},{"name":"Bhānpurī"},{"name":"Bhānpura"},{"name":"Bhanjanagar"},{"name":"Bhānder"},{"name":"Bhandāra"},{"name":"Bhālki"},{"name":"Bhaisa"},{"name":"Bhainsdehi"},{"name":"Bhāgalpur"},{"name":"Bhadreswar"},{"name":"Bhadrāvati"},{"name":"Bhadrakh"},{"name":"Bhadrāchalam"},{"name":"Bhādra"},{"name":"Bhadohi"},{"name":"Bhadaur"},{"name":"Bhādāsar"},{"name":"Bhachāu"},{"name":"Bhabhua"},{"name":"Beypore"},{"name":"Bewar"},{"name":"Betūl"},{"name":"Bettiah"},{"name":"Betamcherla"},{"name":"Beri Khās"},{"name":"Berasia"},{"name":"Beohāri"},{"name":"Bemetāra"},{"name":"Belūr"},{"name":"Belsand"},{"name":"Belonia"},{"name":"Bellary"},{"name":"Belgaum"},{"name":"Beldānga"},{"name":"Bela"},{"name":"Behror"},{"name":"Behat"},{"name":"Begusarai"},{"name":"Begūn"},{"name":"Begamganj"},{"name":"Bedi"},{"name":"Beāwar"},{"name":"Bāzpur"},{"name":"Bayāna"},{"name":"Bawāna"},{"name":"Bauda"},{"name":"Batāla"},{"name":"Baswa"},{"name":"Bāsudebpur"},{"name":"Bastī"},{"name":"Bāsoda"},{"name":"Basni"},{"name":"Basmat"},{"name":"Basi"},{"name":"Basi"},{"name":"Basi"},{"name":"Basavana Bāgevādi"},{"name":"Basavakalyān"},{"name":"Barwāni"},{"name":"Barwāla"},{"name":"Bāruni"},{"name":"Bāruipur"},{"name":"Bārsi"},{"name":"Barpeta"},{"name":"Barpāli"},{"name":"Barnāla"},{"name":"Bārmer"},{"name":"Barki Saria"},{"name":"Barka Kāna"},{"name":"Barjala"},{"name":"Bari Sādri"},{"name":"Bāri"},{"name":"Barhiya"},{"name":"Bārh"},{"name":"Bargi"},{"name":"Bargarh"},{"name":"Bareilly"},{"name":"Bārdoli"},{"name":"Barddhamān"},{"name":"Bar Bigha"},{"name":"Baraut"},{"name":"Barauli"},{"name":"Bārāsat"},{"name":"Bārāsat"},{"name":"Baranagar"},{"name":"Bārān"},{"name":"Bāramūla"},{"name":"Bārāmati"},{"name":"Bārākpur"},{"name":"Bāpatla"},{"name":"Banūr"},{"name":"Bantvāl"},{"name":"Bāntva"},{"name":"Bānswāra"},{"name":"Bānswāda"},{"name":"Bānsi"},{"name":"Bānsdīh"},{"name":"Bānsbāria"},{"name":"Bannūr"},{"name":"Banmankhi"},{"name":"Bānkura"},{"name":"Bānki"},{"name":"Bānka"},{"name":"Bāngarmau"},{"name":"Bangārapet"},{"name":"Bangaon"},{"name":"Bangaon"},{"name":"Banganapalle"},{"name":"Bengaluru"},{"name":"Banga"},{"name":"Bandipura"},{"name":"Bāndīkūi"},{"name":"Bānda"},{"name":"Banda"},{"name":"Banat"},{"name":"Bānapur"},{"name":"Bāmor Kalān"},{"name":"Bālurghāt"},{"name":"Bālugaon"},{"name":"Balrāmpur"},{"name":"Bālotra"},{"name":"Baloda Bāzār"},{"name":"Balod"},{"name":"Bāli"},{"name":"Ballālpur"},{"name":"Bāli"},{"name":"Balasore"},{"name":"Balarāmpur"},{"name":"Bālāpur"},{"name":"Balāngīr"},{"name":"Bālāghāt"},{"name":"Bālāchor"},{"name":"Bakhtiyārpur"},{"name":"Baj Baj"},{"name":"Bairāgnia"},{"name":"Byndoor"},{"name":"Bail-Hongal"},{"name":"Baihar"},{"name":"Baidyabāti"},{"name":"Bahraigh"},{"name":"Bahjoi"},{"name":"Baheri"},{"name":"Baharampur"},{"name":"Bahādurgarh"},{"name":"Bahādurganj"},{"name":"Bāh"},{"name":"Bagulā"},{"name":"Bāghpat"},{"name":"Bāghdogra"},{"name":"Bāgha Purāna"},{"name":"Bāgepalli"},{"name":"Bagasra"},{"name":"Bagar"},{"name":"Bagalkot"},{"name":"Bagaha"},{"name":"Bagaha"},{"name":"Badvel"},{"name":"Badūria"},{"name":"Badnāwar"},{"name":"Badlapur"},{"name":"Bādāmi"},{"name":"Badagara"},{"name":"Bada Barabīl"},{"name":"Bachhraon"},{"name":"Babrāla"},{"name":"Bābra"},{"name":"Babīna"},{"name":"Baberu"},{"name":"Bābai"},{"name":"Azamgarh"},{"name":"Ajodhya"},{"name":"Ayakudi"},{"name":"Avanigadda"},{"name":"Avinashi"},{"name":"Āvadi"},{"name":"Ausa"},{"name":"Aurangābād"},{"name":"Aurangabad"},{"name":"Auraiya"},{"name":"Aurād"},{"name":"Attur"},{"name":"Attingal"},{"name":"Attili"},{"name":"Atraulī"},{"name":"Atmakūr"},{"name":"Adirampattinam"},{"name":"Athni"},{"name":"Āthagarh"},{"name":"Atarra"},{"name":"Āsind"},{"name":"Āsika"},{"name":"Asifābād"},{"name":"Ashta"},{"name":"Ashta"},{"name":"Ashoknagar"},{"name":"Āsansol"},{"name":"Āsandh"},{"name":"Ārvi"},{"name":"Aruppukkottai"},{"name":"Arumuganeri"},{"name":"Arukutti"},{"name":"Arsikere"},{"name":"Āron"},{"name":"Arkalgūd"},{"name":"Ariyalūr"},{"name":"Arcot"},{"name":"Arāria"},{"name":"Arantāngi"},{"name":"Ārani"},{"name":"Ārangaon"},{"name":"Arang"},{"name":"Arāmbāgh"},{"name":"Arakkonam"},{"name":"Arrah"},{"name":"Aonla"},{"name":"Anūpshahr"},{"name":"Anūppur"},{"name":"Anūpgarh"},{"name":"Anta"},{"name":"Anshing"},{"name":"Annur"},{"name":"Annigeri"},{"name":"Ankleshwar"},{"name":"Anjār"},{"name":"Anjangaon"},{"name":"Anjad"},{"name":"Angul"},{"name":"Angamāli"},{"name":"Anekal"},{"name":"Andol"},{"name":"Anthiyur"},{"name":"Āndippatti"},{"name":"Anantnag"},{"name":"Anantapur"},{"name":"Anandpur"},{"name":"Ānand"},{"name":"Anakāpalle"},{"name":"Anaimalai"},{"name":"Amudālavalasa"},{"name":"Āmta"},{"name":"Amroli"},{"name":"Amroha"},{"name":"Amritsar"},{"name":"Amreli"},{"name":"Amrāvati"},{"name":"Amod"},{"name":"Āmli"},{"name":"Āmlāgora"},{"name":"Amla"},{"name":"Amet"},{"name":"Ambur"},{"name":"Ambikāpur"},{"name":"Ambattūr"},{"name":"Ambasamudram"},{"name":"Ambāla"},{"name":"Ambājogāi"},{"name":"Ambāh"},{"name":"Ambad"},{"name":"Amarpur"},{"name":"Amarpātan"},{"name":"Amarnāth"},{"name":"Amalner"},{"name":"Amalāpuram"},{"name":"Aluva"},{"name":"Alwar"},{"name":"Alot"},{"name":"Along"},{"name":"Alnāvar"},{"name":"Almora"},{"name":"Alleppey"},{"name":"Allahābād"},{"name":"Alīpur"},{"name":"Alīgarh"},{"name":"Alīganj"},{"name":"Alībāg"},{"name":"Ālangulam"},{"name":"Ālangāyam"},{"name":"Alandur"},{"name":"Alandi"},{"name":"Aland"},{"name":"Akot"},{"name":"Akola"},{"name":"Aklera"},{"name":"Akivīdu"},{"name":"Akbarpur"},{"name":"Akbarpur"},{"name":"Akaltara"},{"name":"Akalkot"},{"name":"Ajra"},{"name":"Ajnāla"},{"name":"Ajmer"},{"name":"Aizawl"},{"name":"Ahraura"},{"name":"Ahmadpur"},{"name":"Ahmadnagar"},{"name":"Ahmedabad"},{"name":"Āgra"},{"name":"Agartala"},{"name":"Agar"},{"name":"Afzalpur"},{"name":"Afzalgarh"},{"name":"Adūr"},{"name":"Adra"},{"name":"Ādoni"},{"name":"Ādilābād"},{"name":"Addanki"},{"name":"Achhnera"},{"name":"Achalpur"},{"name":"Ābu Road"},{"name":"Ābu"},{"name":"Abohar"},{"name":"Abhayāpuri"},{"name":"Contai"},{"name":"Haldia"},{"name":"Srirāmpur"},{"name":"Dumjor"},{"name":"Bankra"},{"name":"Chakapara"},{"name":"Mahiari"},{"name":"Dhulagari"},{"name":"Pānchla"},{"name":"Nangi"},{"name":"Pujali"},{"name":"Monoharpur"},{"name":"Nabagrām"},{"name":"Soyībug"},{"name":"Singāpur"},{"name":"Ghatkesar"},{"name":"Vijayapura"},{"name":"Ādampur"},{"name":"Porur"},{"name":"Madipakkam"},{"name":"Perungudi"},{"name":"Madambakkam"},{"name":"Powai"},{"name":"Navi Mumbai"},{"name":"Murudeshwara"},{"name":"Shivaji Nagar"},{"name":"Greater Noida"},{"name":"Mohali"},{"name":"Pithampur"},{"name":"Barbil"},{"name":"Airoli"},{"name":"Aluva"},{"name":"Kotkapura"},{"name":"Muvattupuzha"},{"name":"Perumbavoor"},{"name":"Vapi"},{"name":"Baddi"},{"name":"Noida"},{"name":"Bhiwadi"},{"name":"Mandideep"},{"name":"Singrauli"},{"name":"Birpara"},{"name":"Jaigaon"},{"name":"Akkarampalle"},{"name":"Bellampalli"},{"name":"Chemmumiahpet"},{"name":"Gaddi Annaram"},{"name":"Dasnapur"},{"name":"Kanuru"},{"name":"Lal Bahadur Nagar"},{"name":"Malkajgiri"},{"name":"Mandamarri"},{"name":"Chinnachowk"},{"name":"Kyathampalle"},{"name":"Gajuwaka"},{"name":"Manuguru"},{"name":"Kalyandurg"},{"name":"Ponnur"},{"name":"Quthbullapur"},{"name":"Ramanayyapeta"},{"name":"Palwancha"},{"name":"Barpeta Road"},{"name":"Sathupalli"},{"name":"Yanamalakuduru"},{"name":"Marigaon"},{"name":"Naharlagun"},{"name":"Serilingampalle"},{"name":"Silapathar"},{"name":"Lumding Railway Colony"},{"name":"Aistala"},{"name":"Ashoknagar Kalyangarh"},{"name":"Bahula"},{"name":"Bhawanipur"},{"name":"Zira"},{"name":"Ramagundam"},{"name":"Cherpulassery"},{"name":"Kirandul"},{"name":"Shiraguppi"},{"name":"V.S.K.Valasai (Dindigul-Dist.)"},{"name":"Neelankarai"},{"name":"Injambakkam"},{"name":"Kultali"},{"name":"Shahbazpur"},{"name":"Kumbalam"},{"name":"Aroor"},{"name":"Kadakkavoor"},{"name":"Kalavoor"},{"name":"Kalamassery"},{"name":"Cherthala"},{"name":"Zaxo"},{"name":"Umm Qaşr"},{"name":"Tozkhurmato"},{"name":"Tikrīt"},{"name":"Tallkayf"},{"name":"Sīnah"},{"name":"Sāmarrā’"},{"name":"Nāḩīyat Saddat al Hindīyah"},{"name":"Ruwāndiz"},{"name":"Rāwah"},{"name":"Al-Hamdaniya"},{"name":"Mandalī"},{"name":"Koysinceq"},{"name":"Kifrī"},{"name":"Kirkuk"},{"name":"Karbala"},{"name":"Erbil"},{"name":"Hīt"},{"name":"Ḩalabjah"},{"name":"Ḩadīthah"},{"name":"Dihok"},{"name":"Jamjamāl"},{"name":"Bayjī"},{"name":"Baqubah"},{"name":"Baynjiwayn"},{"name":"Balad"},{"name":"Baghdad"},{"name":"Az Zubayr"},{"name":"Aş Şuwayrah"},{"name":"As Sulaymānīyah"},{"name":"As Samawah"},{"name":"Nāḩiyat ash Shināfīyah"},{"name":"Ash Shaţrah"},{"name":"Ash Shāmīyah"},{"name":"Ar Ruţbah"},{"name":"Ar Rumaythah"},{"name":"Ramadi"},{"name":"‘Aqrah"},{"name":"An Nāşirīyah"},{"name":"Najaf"},{"name":"‘Anat al Qadīmah"},{"name":"Imam Qasim"},{"name":"Al Musayyib"},{"name":"Al Mishkhāb"},{"name":"Al Miqdādīyah"},{"name":"Al Mawşil al Jadīdah"},{"name":"Mosul"},{"name":"Al Kūt"},{"name":"Kufa"},{"name":"Khāliş"},{"name":"‘Alī al Gharbī"},{"name":"Al Hindīyah"},{"name":"Al Ḩillah"},{"name":"Al Ḩayy"},{"name":"Al Hārithah"},{"name":"Nahiyat Ghammas"},{"name":"Nāḩiyat al Fuhūd"},{"name":"Al Fāw"},{"name":"Al Fallūjah"},{"name":"Basrah"},{"name":"Al ‘Azīzīyah"},{"name":"Al ‘Amārah"},{"name":"‘Afak"},{"name":"Ad Dujayl"},{"name":"Ad Dīwānīyah"},{"name":"Abū Ghurayb"},{"name":"Al Başrah al Qadīmah"},{"name":"Sinjār"},{"name":"Āzādshahr"},{"name":"Kahrīz"},{"name":"Nūrābād"},{"name":"Īstgāh-e Rāh Āhan-e Garmsār"},{"name":"Qarchak"},{"name":"Shahre Jadide Andisheh"},{"name":"Khorramdarreh"},{"name":"Yasuj"},{"name":"Āzādshahr"},{"name":"Zarand"},{"name":"Zanjān"},{"name":"Yazd"},{"name":"Varāmīn"},{"name":"Torbat-e Ḩeydarīyeh"},{"name":"Tonekābon"},{"name":"Tehran"},{"name":"Hashtpar"},{"name":"Tākestān"},{"name":"Takāb"},{"name":"Taft"},{"name":"Tabriz"},{"name":"Tabas"},{"name":"Sonqor"},{"name":"Sirjan"},{"name":"Shūshtar"},{"name":"Shūsh"},{"name":"Shīrvān"},{"name":"Shiraz"},{"name":"Shahr-e Kord"},{"name":"Shahr-e Bābak"},{"name":"Shādegān"},{"name":"Semnān"},{"name":"Semīrom"},{"name":"Sāveh"},{"name":"Sari"},{"name":"Saqqez"},{"name":"Sanandaj"},{"name":"Salmās"},{"name":"Shāhīn Dezh"},{"name":"Sabzevar"},{"name":"Rūdsar"},{"name":"Robāţ Karīm"},{"name":"Rāvar"},{"name":"Rasht"},{"name":"Rāmshīr"},{"name":"Rāmhormoz"},{"name":"Rafsanjān"},{"name":"Qūchān"},{"name":"Qorveh"},{"name":"Qom"},{"name":"Qeshm"},{"name":"Qazvin"},{"name":"Qarah Ẕīā’ od Dīn"},{"name":"Farrokh Shahr"},{"name":"Qā’en"},{"name":"Sarpol-e Z̄ahāb"},{"name":"Pīshvā"},{"name":"Piranshahr"},{"name":"Pāveh"},{"name":"Pārsābād"},{"name":"Oshnavīyeh"},{"name":"Orūmīyeh"},{"name":"Omīdīyeh"},{"name":"Nūrābād"},{"name":"Nowshahr"},{"name":"Nīshābūr"},{"name":"Neyrīz"},{"name":"Nekā"},{"name":"Naz̧arābād"},{"name":"Naqadeh"},{"name":"Nahāvand"},{"name":"Mīnāb"},{"name":"Mīāndoāb"},{"name":"Meybod"},{"name":"Mahrīz"},{"name":"Masjed Soleymān"},{"name":"Bardsīr"},{"name":"Mashhad"},{"name":"Marand"},{"name":"Malāyer"},{"name":"Malārd"},{"name":"Mahābād"},{"name":"Langarūd"},{"name":"Kūhdasht"},{"name":"Kīsh"},{"name":"Khvoy"},{"name":"Khvānsār"},{"name":"Khorramshahr"},{"name":"Khorramabad"},{"name":"Khomeyn"},{"name":"Khalkhāl"},{"name":"Kermānshāh"},{"name":"Kerman"},{"name":"Kāzerūn"},{"name":"Kāshmar"},{"name":"Kāshān"},{"name":"Karaj"},{"name":"Kangāvar"},{"name":"Kāmyārān"},{"name":"Kalāleh"},{"name":"Jūybār"},{"name":"Javānrūd"},{"name":"Īlām"},{"name":"Harsīn"},{"name":"Hamadān"},{"name":"Gorgān"},{"name":"Gonbad-e Kāvūs"},{"name":"Gonābād"},{"name":"Golpāyegān"},{"name":"Gerāsh"},{"name":"Bandar-e Ganāveh"},{"name":"Fūman"},{"name":"Fīrūzābād"},{"name":"Fereydūnkenār"},{"name":"Fasā"},{"name":"Fārsān"},{"name":"Esfarāyen"},{"name":"Shahrud"},{"name":"Dogonbadan"},{"name":"Delījān"},{"name":"Dehlorān"},{"name":"Dehdasht"},{"name":"Sūsangerd"},{"name":"Darreh Shahr"},{"name":"Dārāb"},{"name":"Dāmghān"},{"name":"Damāvand"},{"name":"Chenārān"},{"name":"Chālūs"},{"name":"Bandar-e Būshehr"},{"name":"Būkān"},{"name":"Borūjerd"},{"name":"Borūjen"},{"name":"Borāzjān"},{"name":"Bojnūrd"},{"name":"Bīrjand"},{"name":"Bījār"},{"name":"Bonāb"},{"name":"Behshahr"},{"name":"Behbahān"},{"name":"Bāneh"},{"name":"Bandar-e Lengeh"},{"name":"Bandar-e Anzalī"},{"name":"Bandar ‘Abbās"},{"name":"Bam"},{"name":"Bahār"},{"name":"Bāfq"},{"name":"Bābolsar"},{"name":"Bābol"},{"name":"Aznā"},{"name":"Hashtrūd"},{"name":"Āstārā"},{"name":"Āstāneh-ye Ashrafīyeh"},{"name":"Asadābād"},{"name":"Ardestān"},{"name":"Ardakān"},{"name":"Ardabīl"},{"name":"Arāk"},{"name":"Āmol"},{"name":"Alvand"},{"name":"Shahrīār"},{"name":"Alīgūdarz"},{"name":"Aleshtar"},{"name":"Akbarābād"},{"name":"‘Ajab Shīr"},{"name":"Ahvaz"},{"name":"Ahar"},{"name":"Aghajari"},{"name":"Ābyek"},{"name":"Abhar"},{"name":"Ābdānān"},{"name":"Ābādeh"},{"name":"Abadan"},{"name":"Eqbālīyeh"},{"name":"Shāhreẕā"},{"name":"Rehnān"},{"name":"Qahderījān"},{"name":"Najafābād"},{"name":"Khomeynī Shahr"},{"name":"Kelīshād va Sūdarjān"},{"name":"Falāvarjān"},{"name":"Isfahan"},{"name":"Dowlatābād"},{"name":"Dorcheh Pīāz"},{"name":"Zābol"},{"name":"Zahedan"},{"name":"Torbat-e Jām"},{"name":"Tāybād"},{"name":"Sarakhs"},{"name":"Qaşr-e Qand"},{"name":"Khāsh"},{"name":"Īrānshahr"},{"name":"Chabahar"},{"name":"Mahdishahr"},{"name":"Pasragad Branch"},{"name":"Akureyri"},{"name":"Reykjavík"},{"name":"Kópavogur"},{"name":"Hafnarfjörður"},{"name":"Vittoria"},{"name":"Villabate"},{"name":"Vibo Valentia"},{"name":"Trapani"},{"name":"Termini Imerese"},{"name":"Siracusa"},{"name":"Sinnai"},{"name":"Siderno"},{"name":"Sestu"},{"name":"Selargius"},{"name":"Scordia"},{"name":"Scicli"},{"name":"Sciacca"},{"name":"San Giovanni la Punta"},{"name":"San Giovanni in Fiore"},{"name":"San Cataldo"},{"name":"Rossano Stazione"},{"name":"Rosolini"},{"name":"Ribera"},{"name":"Reggio Calabria"},{"name":"Ragusa"},{"name":"Quattromiglia"},{"name":"Quartu Sant'Elena"},{"name":"Pozzallo"},{"name":"Porto Empedocle"},{"name":"Piazza Armerina"},{"name":"Paternò"},{"name":"Partinico"},{"name":"Palmi"},{"name":"Palma di Montechiaro"},{"name":"Palermo"},{"name":"Palagonia"},{"name":"Pachino"},{"name":"Oristano"},{"name":"Noto"},{"name":"Niscemi"},{"name":"Nicastro-Sambiase"},{"name":"Monserrato"},{"name":"Monreale"},{"name":"Modica"},{"name":"Misterbianco"},{"name":"Misilmeri"},{"name":"Milazzo"},{"name":"Messina"},{"name":"Mazara del Vallo"},{"name":"Mascalucia"},{"name":"Marsala"},{"name":"Licata"},{"name":"Lentini"},{"name":"Iglesias"},{"name":"Gioia Tauro"},{"name":"Giarre"},{"name":"Gela"},{"name":"Floridia"},{"name":"Favara"},{"name":"Enna"},{"name":"Crotone"},{"name":"Cosenza"},{"name":"Comiso"},{"name":"Catanzaro"},{"name":"Catania"},{"name":"Castrovillari"},{"name":"Castelvetrano"},{"name":"Casarano"},{"name":"Carini"},{"name":"Carbonia"},{"name":"Canicattì"},{"name":"Caltanissetta"},{"name":"Caltagirone"},{"name":"Cagliari"},{"name":"Bronte"},{"name":"Biancavilla"},{"name":"Belpasso"},{"name":"Barcellona Pozzo di Gotto"},{"name":"Bagheria"},{"name":"Avola"},{"name":"Augusta"},{"name":"Assemini"},{"name":"Amato"},{"name":"Alcamo"},{"name":"Agrigento"},{"name":"Adrano"},{"name":"Acireale"},{"name":"Aci Catena"},{"name":"Aci Castello"},{"name":"Zola Predosa"},{"name":"Voghera"},{"name":"Vittorio Veneto"},{"name":"Viterbo"},{"name":"Vimodrone"},{"name":"Vimercate"},{"name":"Lancenigo-Villorba"},{"name":"Villaricca"},{"name":"Villafranca di Verona"},{"name":"Vignola"},{"name":"Vigevano"},{"name":"Vicenza"},{"name":"Viareggio"},{"name":"Verona"},{"name":"Vercelli"},{"name":"Ventimiglia"},{"name":"Venice"},{"name":"Venaria Reale"},{"name":"Velletri"},{"name":"Vasto"},{"name":"Varese"},{"name":"Valenzano"},{"name":"Valenza"},{"name":"Valdagno"},{"name":"Udine"},{"name":"Triggiano"},{"name":"Trieste"},{"name":"Trezzano sul Naviglio"},{"name":"Treviso"},{"name":"Treviglio"},{"name":"Trentola-Ducenta"},{"name":"Trento"},{"name":"Trecate"},{"name":"Trani"},{"name":"Tradate"},{"name":"Tortona"},{"name":"Torremaggiore"},{"name":"Torre del Greco"},{"name":"Torre Annunziata"},{"name":"Turin"},{"name":"Tolentino"},{"name":"Tivoli"},{"name":"Thiene"},{"name":"Terzigno"},{"name":"Terracina"},{"name":"Terni"},{"name":"Termoli"},{"name":"Terlizzi"},{"name":"Teramo"},{"name":"Taranto"},{"name":"Suzzara"},{"name":"Sulmona"},{"name":"Spoleto"},{"name":"Sora"},{"name":"Sondrio"},{"name":"Somma Vesuviana"},{"name":"Siena"},{"name":"Sezze"},{"name":"Seveso"},{"name":"Settimo Torinese"},{"name":"Sestri Levante"},{"name":"Sesto San Giovanni"},{"name":"Sesto Fiorentino"},{"name":"Seriate"},{"name":"Seregno"},{"name":"Senigallia"},{"name":"Senago"},{"name":"Segrate"},{"name":"Schio"},{"name":"Scandicci"},{"name":"Scafati"},{"name":"Savona"},{"name":"Savigliano"},{"name":"Sava"},{"name":"Sassuolo"},{"name":"Sassari"},{"name":"Sarzana"},{"name":"Saronno"},{"name":"Sarno"},{"name":"San Vito dei Normanni"},{"name":"Santeramo in Colle"},{"name":"Sant'Antonio Abate"},{"name":"Sant'Antimo"},{"name":"Sant'Anastasia"},{"name":"Santa Maria Capua Vetere"},{"name":"San Severo"},{"name":"San Sebastiano"},{"name":"San Salvo"},{"name":"San Remo"},{"name":"Sannicandro Garganico"},{"name":"San Miniato"},{"name":"San Miniato Basso"},{"name":"San Mauro Torinese"},{"name":"San Lazzaro"},{"name":"San Giuseppe Vesuviano"},{"name":"San Giuliano Milanese"},{"name":"San Giovanni Valdarno"},{"name":"San Giovanni Rotondo"},{"name":"San Giovanni Lupatoto"},{"name":"San Giovanni in Persiceto"},{"name":"San Giorgio a Cremano"},{"name":"San Donato Milanese"},{"name":"San Donà di Piave"},{"name":"San Bonifacio"},{"name":"San Benedetto del Tronto"},{"name":"Salsomaggiore Terme"},{"name":"Salerno"},{"name":"Sacile"},{"name":"Ruvo di Puglia"},{"name":"Rutigliano"},{"name":"Rozzano"},{"name":"Rovigo"},{"name":"Rovereto"},{"name":"Rosignano Solvay-Castiglioncello"},{"name":"Roseto degli Abruzzi"},{"name":"Romano di Lombardia"},{"name":"Rome"},{"name":"Rocca di Papa"},{"name":"Rivoli"},{"name":"Rimini"},{"name":"Rieti"},{"name":"Riccione"},{"name":"Rho"},{"name":"Reggio nell'Emilia"},{"name":"Ravenna"},{"name":"Rapallo"},{"name":"Qualiano"},{"name":"Putignano"},{"name":"Prato"},{"name":"Pozzuoli"},{"name":"Potenza"},{"name":"Porto Torres"},{"name":"Porto Sant'Elpidio"},{"name":"Porto San Giorgio"},{"name":"Portogruaro"},{"name":"Civitanova Marche"},{"name":"Portici"},{"name":"Pordenone"},{"name":"Pontedera"},{"name":"Pompei"},{"name":"Pomigliano d'Arco"},{"name":"Pomezia"},{"name":"Poggiomarino"},{"name":"Poggibonsi"},{"name":"Pistoia"},{"name":"Pisa"},{"name":"Piossasco"},{"name":"Piombino"},{"name":"Pioltello"},{"name":"Pinerolo"},{"name":"Pietrasanta"},{"name":"Piacenza"},{"name":"Pescara"},{"name":"Pesaro"},{"name":"Perugia"},{"name":"Pavia"},{"name":"Parma"},{"name":"Parabiago"},{"name":"Palo del Colle"},{"name":"Palazzolo sull'Oglio"},{"name":"Palagiano"},{"name":"Pagani"},{"name":"Padova"},{"name":"Paderno Dugnano"},{"name":"Ottaviano"},{"name":"Ostuni"},{"name":"Osimo"},{"name":"Orta Nova"},{"name":"Orbassano"},{"name":"Olbia"},{"name":"Oderzo"},{"name":"Nuoro"},{"name":"Novi Ligure"},{"name":"Novate Milanese"},{"name":"Novara"},{"name":"Nova Milanese"},{"name":"Nola"},{"name":"Noicattaro"},{"name":"Noci"},{"name":"Nocera Superiore"},{"name":"Nocera Inferiore"},{"name":"Nichelino"},{"name":"Nettuno"},{"name":"Nerviano"},{"name":"Nardò"},{"name":"Napoli"},{"name":"Mugnano di Napoli"},{"name":"Muggiò"},{"name":"Monza"},{"name":"Montichiari"},{"name":"Montevarchi"},{"name":"Montesilvano Marina"},{"name":"Monterotondo"},{"name":"Montemurlo"},{"name":"Montecchio Maggiore-Alte Ceccato"},{"name":"Montecatini-Terme"},{"name":"Montebelluna"},{"name":"Monopoli"},{"name":"Monfalcone"},{"name":"Mondragone"},{"name":"Mondovì"},{"name":"Moncalieri"},{"name":"Molfetta"},{"name":"Mola di Bari"},{"name":"Mogliano Veneto"},{"name":"Modugno"},{"name":"Modena"},{"name":"Mirano"},{"name":"Mirandola"},{"name":"Mira Taglio"},{"name":"Minturno"},{"name":"Milano"},{"name":"Mestre"},{"name":"Mesagne"},{"name":"Merano"},{"name":"Mentana"},{"name":"Melzo"},{"name":"Melito di Napoli"},{"name":"Melegnano"},{"name":"Meda"},{"name":"Matera"},{"name":"Massafra"},{"name":"Massa"},{"name":"Martina Franca"},{"name":"Marino"},{"name":"Marina di Carrara"},{"name":"Marigliano"},{"name":"Mariano Comense"},{"name":"Marcianise"},{"name":"Marano di Napoli"},{"name":"Mantova"},{"name":"Manfredonia"},{"name":"Manduria"},{"name":"Malnate"},{"name":"Magenta"},{"name":"Maddaloni"},{"name":"Macerata"},{"name":"Lugo"},{"name":"Lucera"},{"name":"Lucca"},{"name":"Lodi"},{"name":"Livorno"},{"name":"Lissone"},{"name":"Limbiate"},{"name":"Lido di Ostia"},{"name":"Lido"},{"name":"Legnano"},{"name":"Legnago"},{"name":"Lecco"},{"name":"Lecce"},{"name":"Latina"},{"name":"La Spezia"},{"name":"L'Aquila"},{"name":"Lanciano"},{"name":"Lainate"},{"name":"Ladispoli"},{"name":"Ivrea"},{"name":"Isernia"},{"name":"Ischia Porto"},{"name":"Ischia"},{"name":"Pallanza-Intra-Suna"},{"name":"Imperia"},{"name":"Imola"},{"name":"Jesi"},{"name":"Guidonia"},{"name":"Grumo Nevano"},{"name":"Grugliasco"},{"name":"Grottaglie"},{"name":"Grottaferrata"},{"name":"Grosseto"},{"name":"Gravina in Puglia"},{"name":"Gragnano"},{"name":"Gorizia"},{"name":"Gorgonzola"},{"name":"Giussano"},{"name":"Giulianova"},{"name":"Giugliano in Campania"},{"name":"Giovinazzo"},{"name":"Gioia del Colle"},{"name":"Ginosa"},{"name":"Ghedi"},{"name":"Genzano di Roma"},{"name":"Genoa"},{"name":"Garbagnate Milanese"},{"name":"Gallipoli"},{"name":"Gallarate"},{"name":"Galatina"},{"name":"Gaeta"},{"name":"Frosinone"},{"name":"Frattaminore"},{"name":"Frattamaggiore"},{"name":"Frascati"},{"name":"Francavilla Fontana"},{"name":"Francavilla al Mare"},{"name":"Fossano"},{"name":"Fornacelle"},{"name":"Formigine"},{"name":"Formia"},{"name":"Forlì"},{"name":"Forio"},{"name":"Fondi"},{"name":"Follonica"},{"name":"Foligno"},{"name":"Foggia"},{"name":"Fiumicino-Isola Sacra"},{"name":"Florence"},{"name":"Fiorano"},{"name":"Fidenza"},{"name":"Ferrara"},{"name":"Fermo"},{"name":"Fasano"},{"name":"Fano"},{"name":"Falconara Marittima"},{"name":"Faenza"},{"name":"Fabriano"},{"name":"Ercolano"},{"name":"Erba"},{"name":"Empoli"},{"name":"Eboli"},{"name":"Domodossola"},{"name":"Desio"},{"name":"Desenzano del Garda"},{"name":"Dalmine"},{"name":"Cusano Milanino"},{"name":"Cuneo"},{"name":"Cremona"},{"name":"Crema"},{"name":"Corsico"},{"name":"Correggio"},{"name":"Cornaredo"},{"name":"Cormano"},{"name":"Cordenons"},{"name":"Corato"},{"name":"Copertino"},{"name":"Conversano"},{"name":"Conegliano"},{"name":"Como"},{"name":"Cologno Monzese"},{"name":"Collegno"},{"name":"Colleferro"},{"name":"Colle di Val d'Elsa"},{"name":"Civitavecchia"},{"name":"Città di Castello"},{"name":"Cisterna di Latina"},{"name":"Ciriè"},{"name":"Cinisello Balsamo"},{"name":"Ciampino"},{"name":"Chivasso"},{"name":"Chioggia"},{"name":"Chieti"},{"name":"Chieri"},{"name":"Chiavari"},{"name":"Chiari"},{"name":"Cesenatico"},{"name":"Cesena"},{"name":"Cesano Maderno"},{"name":"Cervia"},{"name":"Cerveteri"},{"name":"Cernusco sul Naviglio"},{"name":"Cerignola"},{"name":"Cercola"},{"name":"Cento"},{"name":"Ceglie Messapica"},{"name":"Cecina"},{"name":"Cava Dè Tirreni"},{"name":"Cattolica"},{"name":"Castiglione delle Stiviere"},{"name":"Castel Volturno"},{"name":"Castel Maggiore"},{"name":"Castellammare di Stabia"},{"name":"Castelfranco Veneto"},{"name":"Castelfranco Emilia"},{"name":"Cassino"},{"name":"Cassano d'Adda"},{"name":"Casoria"},{"name":"Caserta"},{"name":"Cascina"},{"name":"Casamassima"},{"name":"Casalnuovo di Napoli"},{"name":"Casale Monferrato"},{"name":"Casalecchio di Reno"},{"name":"Casal di Principe"},{"name":"Carrara"},{"name":"Carpi Centro"},{"name":"Carmagnola"},{"name":"Cardito"},{"name":"Carate Brianza"},{"name":"Capua"},{"name":"Capannori"},{"name":"Cantù"},{"name":"Canosa di Puglia"},{"name":"Campobasso"},{"name":"Campi Bisenzio"},{"name":"Camaiore"},{"name":"Caivano"},{"name":"Busto Arsizio"},{"name":"Bussolengo"},{"name":"Brusciano"},{"name":"Brugherio"},{"name":"Brindisi"},{"name":"Bresso"},{"name":"Bressanone"},{"name":"Brescia"},{"name":"Bra"},{"name":"Bovisio-Masciago"},{"name":"Boscoreale"},{"name":"Borgomanero"},{"name":"Bolzano"},{"name":"Bologna"},{"name":"Bollate"},{"name":"Bitonto"},{"name":"Bisceglie"},{"name":"Biella"},{"name":"Bergamo"},{"name":"Benevento"},{"name":"Belluno"},{"name":"Battipaglia"},{"name":"Bastia umbra"},{"name":"Bassano del Grappa"},{"name":"Barletta"},{"name":"Bari"},{"name":"Bareggio"},{"name":"Bagnoli"},{"name":"Bacoli"},{"name":"Avezzano"},{"name":"Aversa"},{"name":"Avellino"},{"name":"Asti"},{"name":"Ascoli Piceno"},{"name":"Arzignano"},{"name":"Arzano"},{"name":"Ariccia"},{"name":"Arezzo"},{"name":"Arese"},{"name":"Ardea"},{"name":"Arcore"},{"name":"Aprilia"},{"name":"Aosta"},{"name":"Anzio"},{"name":"Angri"},{"name":"Andria"},{"name":"Ancona"},{"name":"Altamura"},{"name":"Alpignano"},{"name":"Alghero"},{"name":"Alessandria"},{"name":"Albignasego"},{"name":"Albenga"},{"name":"Albano Laziale"},{"name":"Alba"},{"name":"Agropoli"},{"name":"Afragola"},{"name":"Adelfia"},{"name":"Acqui Terme"},{"name":"Acquaviva delle Fonti"},{"name":"Acilia-Castel Fusano-Ostia Antica"},{"name":"Acerra"},{"name":"Abbiategrasso"},{"name":"Abano Terme"},{"name":"Spinea-Orgnano"},{"name":"Verbania"},{"name":"Lumezzane"},{"name":"Guidonia Montecelio"},{"name":"Lamezia Terme"},{"name":"Caronno Pertusella"},{"name":"Cassano Magnago"},{"name":"San Felice A Cancello"},{"name":"San Nicola la Strada"},{"name":"Quarto"},{"name":"Orta di Atella"},{"name":"Casavatore"},{"name":"Volla"},{"name":"Gravina di Catania"},{"name":"Cesano Boscone"},{"name":"Tor Lupara"},{"name":"Torvaianica"},{"name":"Bellaria-Igea Marina"},{"name":"Villanova"},{"name":"Marina di Ardea-Tor San Lorenzo"},{"name":"San Paolo"},{"name":"Monterusciello"},{"name":"Romano Banco"},{"name":"Casa Santa"},{"name":"Arpino"},{"name":"Paolo VI"},{"name":"Corigliano Scalo"},{"name":"Saint Helier"},{"name":"Spanish Town"},{"name":"Savanna-la-Mar"},{"name":"Portmore"},{"name":"Old Harbour"},{"name":"New Kingston"},{"name":"Montego Bay"},{"name":"May Pen"},{"name":"Mandeville"},{"name":"Linstead"},{"name":"Kingston"},{"name":"Half Way Tree"},{"name":"Wādī as Sīr"},{"name":"Umm as Summāq"},{"name":"Saḩāb"},{"name":"Mādabā"},{"name":"Ma'an"},{"name":"Kurayyimah"},{"name":"Judita"},{"name":"Jarash"},{"name":"‘Izrā"},{"name":"Irbid"},{"name":"Zarqa"},{"name":"Aydūn"},{"name":"Aţ Ţafīlah"},{"name":"As Salţ"},{"name":"Safi"},{"name":"Ar Ramthā"},{"name":"‘Anjarah"},{"name":"Amman"},{"name":"Al Quwaysimah"},{"name":"Mafraq"},{"name":"Qīr Moāv"},{"name":"Al Jubayhah"},{"name":"Aqaba"},{"name":"‘Ajlūn"},{"name":"Karak City"},{"name":"Russeifa"},{"name":"Shingū"},{"name":"Atsugi"},{"name":"Akashi"},{"name":"Zushi"},{"name":"Zama"},{"name":"Yuza"},{"name":"Gero"},{"name":"Yukuhashi"},{"name":"Yūki"},{"name":"Yugawara"},{"name":"Yoshikawa"},{"name":"Yoshii"},{"name":"Yoshida-kasugachō"},{"name":"Yorii"},{"name":"Yono"},{"name":"Yonago"},{"name":"Yokosuka"},{"name":"Yokohama"},{"name":"Yokkaichi"},{"name":"Youkaichi"},{"name":"Yawata"},{"name":"Yatsushiro"},{"name":"Yatsuomachi-higashikumisaka"},{"name":"Yasugichō"},{"name":"Yashiro"},{"name":"Yashio-shi"},{"name":"Yao"},{"name":"Yanai"},{"name":"Yanagawa"},{"name":"Yamazakichō-nakabirose"},{"name":"Yamaguchi"},{"name":"Yamaga"},{"name":"Yaizu"},{"name":"Yaita"},{"name":"Wakimachi"},{"name":"Utsunomiya"},{"name":"Uto"},{"name":"Usuki"},{"name":"Ushibuka"},{"name":"Ureshinomachi-shimojuku"},{"name":"Urayasu"},{"name":"Uozu"},{"name":"Umi"},{"name":"Ujiie"},{"name":"Uji"},{"name":"Uenohara"},{"name":"Ueno-ebisumachi"},{"name":"Ueki"},{"name":"Ueda"},{"name":"Ube"},{"name":"Tsuyama"},{"name":"Tsushima"},{"name":"Tsurusaki"},{"name":"Tsuruoka"},{"name":"Tsurugi-asahimachi"},{"name":"Tsuruga"},{"name":"Tsuma"},{"name":"Tsukumiura"},{"name":"Tsukawaki"},{"name":"Tsubata"},{"name":"Tsubame"},{"name":"Tsu"},{"name":"Toyota"},{"name":"Toyoshina"},{"name":"Toyooka"},{"name":"Toyonaka"},{"name":"Toyokawa"},{"name":"Toyohashi"},{"name":"Toyohama"},{"name":"Toyama"},{"name":"Tottori"},{"name":"Tosu"},{"name":"Tonoshō"},{"name":"Tondabayashichō"},{"name":"Tomioka"},{"name":"Tomigusuku"},{"name":"Tokyo"},{"name":"Tokuyama"},{"name":"Tokushima"},{"name":"Tokorozawa"},{"name":"Tokoname"},{"name":"Toki"},{"name":"Tōkamachi"},{"name":"Togitsu"},{"name":"Tochio-honchō"},{"name":"Tochigi"},{"name":"Toba"},{"name":"Tenri"},{"name":"Tennō"},{"name":"Tawaramoto"},{"name":"Tatsuno"},{"name":"Tatsunochō-tominaga"},{"name":"Tateyama"},{"name":"Tatebayashi"},{"name":"Tarumizu"},{"name":"Tarui"},{"name":"Tanushimarumachi-toyoki"},{"name":"Tanuma"},{"name":"Nishi-Tokyo-shi"},{"name":"Tanashichō"},{"name":"Tanabe"},{"name":"Tanabe"},{"name":"Tamano"},{"name":"Tamana"},{"name":"Tamamura"},{"name":"Taketoyo"},{"name":"Takeochō-takeo"},{"name":"Takehara"},{"name":"Takefu"},{"name":"Takedamachi"},{"name":"Takayama"},{"name":"Takatsuki"},{"name":"Takasaki"},{"name":"Takarazuka"},{"name":"Takaoka"},{"name":"Takanabe"},{"name":"Takamatsu"},{"name":"Takaishi"},{"name":"Takahashi"},{"name":"Takahama"},{"name":"Bungo-Takada-shi"},{"name":"Tajimi"},{"name":"Tahara"},{"name":"Tagawa"},{"name":"Tadotsu"},{"name":"Suzuka"},{"name":"Suzaka"},{"name":"Suwa"},{"name":"Susaki"},{"name":"Sumoto"},{"name":"Sukumo"},{"name":"Suita"},{"name":"Suibara"},{"name":"Sugito"},{"name":"Sueyoshichō-ninokata"},{"name":"Sōka"},{"name":"Sōja"},{"name":"Sobue"},{"name":"Shōbu"},{"name":"Shōbara"},{"name":"Shizuoka"},{"name":"Shirone"},{"name":"Shiraoka"},{"name":"Shirahamachō-usazakiminami"},{"name":"Shiozawa"},{"name":"Shiojiri"},{"name":"Shinshiro"},{"name":"Shin’ichi"},{"name":"Shingū"},{"name":"Shimonoseki"},{"name":"Shimodate"},{"name":"Shimoda"},{"name":"Minato"},{"name":"Nishishinminato"},{"name":"Shimada"},{"name":"Shimabara"},{"name":"Shiki"},{"name":"Shido"},{"name":"Shibushi"},{"name":"Shibukawa"},{"name":"Shibata"},{"name":"Seto"},{"name":"Setakamachi-takayanagi"},{"name":"Satsumasendai"},{"name":"Satte"},{"name":"Sasebo"},{"name":"Sasayama"},{"name":"Sasaguri"},{"name":"Sano"},{"name":"Sanjō"},{"name":"Sandachō"},{"name":"Sakurai"},{"name":"Saku"},{"name":"Sakata"},{"name":"Sakaiminato"},{"name":"Sakaidechō"},{"name":"Sakai-nakajima"},{"name":"Sakai"},{"name":"Sakai"},{"name":"Sakado"},{"name":"Saiki"},{"name":"Sagara"},{"name":"Saga"},{"name":"Sabae"},{"name":"Ryūō"},{"name":"Ryōtsu-minato"},{"name":"Ōzu"},{"name":"Oyama"},{"name":"Ōyama"},{"name":"Owase"},{"name":"Ōtsuki"},{"name":"Ōtsu"},{"name":"Ōtake"},{"name":"Ōta"},{"name":"Osaka"},{"name":"Onomichi"},{"name":"Onoda"},{"name":"Ono"},{"name":"Ono"},{"name":"Ōno-hara"},{"name":"Ōmuta"},{"name":"Ōmura"},{"name":"Ōme"},{"name":"Ōmamachō-ōmama"},{"name":"Ōmachi"},{"name":"Ōkuchi-shinohara"},{"name":"Okegawa"},{"name":"Okazaki"},{"name":"Okayama"},{"name":"Okaya"},{"name":"Ōkawa"},{"name":"Ojiya"},{"name":"Ōita"},{"name":"Ōiso"},{"name":"Ōi"},{"name":"Ogōri-shimogō"},{"name":"Ogawa"},{"name":"Ōgaki"},{"name":"Odawara"},{"name":"Ōdachō-ōda"},{"name":"Ōbu"},{"name":"Obita"},{"name":"Obama"},{"name":"Nyūzen"},{"name":"Numazu"},{"name":"Numata"},{"name":"Nonoichi"},{"name":"Nōgata"},{"name":"Noda"},{"name":"Nobeoka"},{"name":"Nishiwaki"},{"name":"Nishio"},{"name":"Nishinoomote"},{"name":"Nishinomiya-hama"},{"name":"Nirasaki"},{"name":"Ninomiya"},{"name":"Nikkō"},{"name":"Niitsu-honchō"},{"name":"Niimi"},{"name":"Niihama"},{"name":"Niigata"},{"name":"Nichinan"},{"name":"Naze"},{"name":"Narutochō-mitsuishi"},{"name":"Nara-shi"},{"name":"Nanao"},{"name":"Namerikawa"},{"name":"Nakatsugawa"},{"name":"Nakatsu"},{"name":"Nakanojōmachi"},{"name":"Nakano"},{"name":"Nakamura"},{"name":"Nakama"},{"name":"Naha"},{"name":"Nagoya"},{"name":"Nago"},{"name":"Nagasaki"},{"name":"Nagareyama"},{"name":"Nagaoka"},{"name":"Nagano"},{"name":"Nagahama"},{"name":"Nabari"},{"name":"Musashino"},{"name":"Muroto-misakicho"},{"name":"Muramatsu"},{"name":"Murakami"},{"name":"Mukō"},{"name":"Muikamachi"},{"name":"Morohongō"},{"name":"Moriyama"},{"name":"Moriguchi"},{"name":"Mori"},{"name":"Mizunami"},{"name":"Miyoshi"},{"name":"Miyazu"},{"name":"Miyazaki"},{"name":"Miyakonojō"},{"name":"Miyata"},{"name":"Mitsuke"},{"name":"Mitsukaidō"},{"name":"Mitake"},{"name":"Mitaka-shi"},{"name":"Mishima"},{"name":"Mino"},{"name":"Mino"},{"name":"Minamirinkan"},{"name":"Minamata"},{"name":"Minakuchichō-matoba"},{"name":"Mikuni"},{"name":"Miki"},{"name":"Mihara"},{"name":"Mibu"},{"name":"Menuma"},{"name":"Matsutō"},{"name":"Matsumoto"},{"name":"Matsue"},{"name":"Matsudo"},{"name":"Matsubase"},{"name":"Matsubara"},{"name":"Masuda"},{"name":"Maruoka"},{"name":"Kamimaruko"},{"name":"Marugame"},{"name":"Makurazaki"},{"name":"Maki"},{"name":"Maizuru"},{"name":"Maebashi"},{"name":"Maebaru-chūō"},{"name":"Machida"},{"name":"Kyoto"},{"name":"Kushikino"},{"name":"Kusatsu"},{"name":"Kurume"},{"name":"Kuroda"},{"name":"Kurihashi"},{"name":"Kure"},{"name":"Kurayoshi"},{"name":"Kurashiki"},{"name":"Kumamoto"},{"name":"Kumagaya"},{"name":"Kukichūō"},{"name":"Kudamatsu"},{"name":"Kozakai-chō"},{"name":"Koshigaya"},{"name":"Kosai-shi"},{"name":"Kōnosu"},{"name":"Kōnan"},{"name":"Komoro"},{"name":"Komono"},{"name":"Komatsushimachō"},{"name":"Komatsu"},{"name":"Komaki"},{"name":"Kokubunji"},{"name":"Kokubu-matsuki"},{"name":"Koga"},{"name":"Koga"},{"name":"Kōfu"},{"name":"Kodamachō-kodamaminami"},{"name":"Kochi"},{"name":"Kobe"},{"name":"Kobayashi"},{"name":"Kitsuki"},{"name":"Kitakyushu"},{"name":"Kitakata"},{"name":"Kitahama"},{"name":"Kishiwada"},{"name":"Kisarazu"},{"name":"Kisai"},{"name":"Kiryū"},{"name":"Kikuchi"},{"name":"Kazo"},{"name":"Kawasaki"},{"name":"Kawasaki"},{"name":"Kawanishi"},{"name":"Kawaguchi"},{"name":"Kawagoe"},{"name":"Katsuyama"},{"name":"Kasukabe"},{"name":"Kasugai"},{"name":"Kashiwazaki"},{"name":"Kashiwa"},{"name":"Kashima"},{"name":"Kashihara-shi"},{"name":"Kashihara"},{"name":"Kaseda-shirakame"},{"name":"Kasaoka"},{"name":"Kasamatsuchō"},{"name":"Kariya"},{"name":"Karatsu"},{"name":"Kanzakimachi-kanzaki"},{"name":"Kanuma"},{"name":"Kanoya"},{"name":"Kan’onjichō"},{"name":"Kannabechō-yahiro"},{"name":"Kanie"},{"name":"Kanekomachi"},{"name":"Kanda"},{"name":"Kanazawa"},{"name":"Kanaya"},{"name":"Kamojimachō-jōgejima"},{"name":"Kamogatachō-kamogata"},{"name":"Kamo"},{"name":"Kamirenjaku"},{"name":"Kaminokawa"},{"name":"Kamiichi"},{"name":"Kameyama"},{"name":"Kameoka"},{"name":"Kameda-honchō"},{"name":"Kamakura"},{"name":"Kakogawachō-honmachi"},{"name":"Kakegawa"},{"name":"Kakamigahara"},{"name":"Kashima-shi"},{"name":"Kajiki"},{"name":"Kaizuka"},{"name":"Kainan"},{"name":"Kagoshima"},{"name":"Kadoma"},{"name":"Izumo"},{"name":"Izumiōtsu"},{"name":"Izumi"},{"name":"Izumi"},{"name":"Iwatsuki"},{"name":"Iwata"},{"name":"Iwakura"},{"name":"Iwakuni"},{"name":"Iwai"},{"name":"Iwade"},{"name":"Itsukaichi"},{"name":"Itoman"},{"name":"Itoigawa"},{"name":"Itō"},{"name":"Itami"},{"name":"Ishiki"},{"name":"Ishikawa"},{"name":"Ishii"},{"name":"Ishige"},{"name":"Ishigaki"},{"name":"Isesaki"},{"name":"Isehara"},{"name":"Ise"},{"name":"Isawa"},{"name":"Isahaya"},{"name":"Inuyama"},{"name":"Ino"},{"name":"Innoshima"},{"name":"Inazawa"},{"name":"Ina"},{"name":"Imarichō-kō"},{"name":"Imaichi"},{"name":"Ikoma"},{"name":"Ikeda"},{"name":"Ikedachō"},{"name":"Ijūin"},{"name":"Iizuka"},{"name":"Iiyama"},{"name":"Iida"},{"name":"Ichinomiya"},{"name":"Ibusuki"},{"name":"Ibaraki"},{"name":"Ibara"},{"name":"Hotaka"},{"name":"Honjō"},{"name":"Hondo"},{"name":"Hōfu"},{"name":"Hitoyoshi"},{"name":"Hita"},{"name":"Hisai-motomachi"},{"name":"Hiroshima"},{"name":"Hiratsuka"},{"name":"Hiratachō"},{"name":"Hirara"},{"name":"Hirakata"},{"name":"Hirado"},{"name":"Hino"},{"name":"Hino"},{"name":"Himimachi"},{"name":"Himeji"},{"name":"Hikone"},{"name":"Hiji"},{"name":"Hekinan"},{"name":"Hayama"},{"name":"Hatsukaichi"},{"name":"Hatogaya-honchō"},{"name":"Hashimoto"},{"name":"Hanyū"},{"name":"Hannō"},{"name":"Handa"},{"name":"Hamanoichi"},{"name":"Hamamatsu"},{"name":"Hamakita"},{"name":"Hamada"},{"name":"Hakui"},{"name":"Haibara-akanedai"},{"name":"Hagi"},{"name":"Katsuren-haebaru"},{"name":"Hadano"},{"name":"Hachiōji"},{"name":"Ōmihachiman"},{"name":"Gyōda"},{"name":"Gushikawa"},{"name":"Gōtsuchō"},{"name":"Gotenba"},{"name":"Gosen"},{"name":"Gose"},{"name":"Gojō"},{"name":"Gōdo"},{"name":"Gobō"},{"name":"Ginowan"},{"name":"Gifu-shi"},{"name":"Gamagōri"},{"name":"Futtsu"},{"name":"Honchō"},{"name":"Fukuyama"},{"name":"Fukuroi"},{"name":"Fukura"},{"name":"Fukuoka"},{"name":"Fukumitsu"},{"name":"Nishifukuma"},{"name":"Fukui-shi"},{"name":"Fukuechō"},{"name":"Fukuchiyama"},{"name":"Fukiage-fujimi"},{"name":"Fukayachō"},{"name":"Fujisawa"},{"name":"Fujioka"},{"name":"Fujioka"},{"name":"Fujinomiya"},{"name":"Fujieda"},{"name":"Fuji"},{"name":"Fuchūchō"},{"name":"Enzan"},{"name":"Daitōchō"},{"name":"Chōfugaoka"},{"name":"Chiryū"},{"name":"Chino"},{"name":"Chikushino-shi"},{"name":"Chigasaki"},{"name":"Chichibu"},{"name":"Chatan"},{"name":"Beppu"},{"name":"Ayabe"},{"name":"Atami"},{"name":"Ashiya"},{"name":"Ashikaga"},{"name":"Arai"},{"name":"Annaka"},{"name":"Anjō"},{"name":"Anan"},{"name":"Amagi"},{"name":"Amagasaki"},{"name":"Akune"},{"name":"Kariya"},{"name":"Aki"},{"name":"Aioi"},{"name":"Ageoshimo"},{"name":"Okinawa"},{"name":"Kushima"},{"name":"Hikari"},{"name":"Nagato"},{"name":"Hasuda"},{"name":"Kamifukuoka"},{"name":"Sayama"},{"name":"Fussa"},{"name":"Asaka"},{"name":"Wako"},{"name":"Shimotoda"},{"name":"Kimitsu"},{"name":"Miura"},{"name":"Wakayama"},{"name":"Iyo"},{"name":"Uwajima"},{"name":"Saijō"},{"name":"Ōzu"},{"name":"Matsuyama"},{"name":"Masaki-chō"},{"name":"Kawanoechō"},{"name":"Hōjō"},{"name":"Yuzawa"},{"name":"Yotsukaidō"},{"name":"Yonezawa"},{"name":"Yokotemachi"},{"name":"Yōkaichiba"},{"name":"Yanagawamachi-saiwaichō"},{"name":"Yamoto"},{"name":"Yamagata"},{"name":"Yamada"},{"name":"Yachimata"},{"name":"Watari"},{"name":"Wakuya"},{"name":"Ushiku"},{"name":"Tsukuba"},{"name":"Toride"},{"name":"Tōno"},{"name":"Tomobe"},{"name":"Tomiya"},{"name":"Tōgane"},{"name":"Tendō"},{"name":"Takahata"},{"name":"Takahagi"},{"name":"Sukagawa"},{"name":"Shizukuishi"},{"name":"Shisui"},{"name":"Shiroishi"},{"name":"Shiroi"},{"name":"Shiogama"},{"name":"Shinjō"},{"name":"Sendai"},{"name":"Sawara"},{"name":"Sakura"},{"name":"Sagae"},{"name":"Ryūgasaki"},{"name":"Rifu"},{"name":"Ōtsuchi"},{"name":"Ōtawara"},{"name":"Ōmiya"},{"name":"Omigawa"},{"name":"Ōmagari"},{"name":"Okunoya"},{"name":"Ōkawara"},{"name":"Ōhara"},{"name":"Ōfunato"},{"name":"Obanazawa"},{"name":"Ōarai"},{"name":"Ōami"},{"name":"Nihommatsu"},{"name":"Narutō"},{"name":"Narita"},{"name":"Namie"},{"name":"Naka"},{"name":"Nagai"},{"name":"Motomiya"},{"name":"Motegi"},{"name":"Moriya"},{"name":"Morioka"},{"name":"Mooka"},{"name":"Mobara"},{"name":"Mizusawa"},{"name":"Miyako"},{"name":"Mito"},{"name":"Miharu"},{"name":"Matsushima"},{"name":"Mashiko"},{"name":"Marumori"},{"name":"Makabe"},{"name":"Kuroiso"},{"name":"Kōriyama"},{"name":"Kogota"},{"name":"Kitakami"},{"name":"Kitaibaraki"},{"name":"Kamogawa"},{"name":"Katsuura"},{"name":"Katsuta"},{"name":"Katori-shi"},{"name":"Kasama"},{"name":"Karasuyama"},{"name":"Kaminoyama"},{"name":"Kamaishi"},{"name":"Kakuda"},{"name":"Iwase"},{"name":"Iwanuma"},{"name":"Iwaki"},{"name":"Itako"},{"name":"Ishioka"},{"name":"Ishinomaki"},{"name":"Ishikawa"},{"name":"Inawashiro"},{"name":"Ichinoseki"},{"name":"Ichihara"},{"name":"Hobaramachi"},{"name":"Hitachi"},{"name":"Higashine"},{"name":"Hasaki"},{"name":"Hanamaki"},{"name":"Furukawa"},{"name":"Funehikimachi-funehiki"},{"name":"Funaishikawa"},{"name":"Fukushima"},{"name":"Fujishiro"},{"name":"Edosaki"},{"name":"Daigo"},{"name":"Chiba"},{"name":"Asahi"},{"name":"Ami"},{"name":"Akita"},{"name":"Abiko"},{"name":"Akitashi"},{"name":"Bihoro"},{"name":"Wakkanai"},{"name":"Tomakomai"},{"name":"Tōbetsu"},{"name":"Mutsu"},{"name":"Takikawa"},{"name":"Takanosu"},{"name":"Sunagawa"},{"name":"Shizunai-furukawachō"},{"name":"Shiraoi"},{"name":"Shimo-furano"},{"name":"Shibetsu"},{"name":"Sapporo"},{"name":"Rumoi"},{"name":"Otofuke"},{"name":"Otaru"},{"name":"Ōdate"},{"name":"Obihiro"},{"name":"Noshiro"},{"name":"Nemuro"},{"name":"Nayoro"},{"name":"Nanae"},{"name":"Namioka"},{"name":"Muroran"},{"name":"Mombetsu"},{"name":"Misawa"},{"name":"Yoichi"},{"name":"Makubetsu"},{"name":"Kushiro"},{"name":"Kuroishi"},{"name":"Shimokizukuri"},{"name":"Kitami"},{"name":"Kamiiso"},{"name":"Iwanai"},{"name":"Iwamizawa"},{"name":"Ishikari"},{"name":"Ichinohe"},{"name":"Kitahiroshima"},{"name":"Hirosaki"},{"name":"Hanawa"},{"name":"Hakodate"},{"name":"Hachinohe"},{"name":"Fukagawa"},{"name":"Ebetsu"},{"name":"Date"},{"name":"Chitose"},{"name":"Bibai"},{"name":"Ashibetsu"},{"name":"Asahikawa"},{"name":"Aomorishi"},{"name":"Abashiri"},{"name":"Goshogawara"},{"name":"Aso"},{"name":"Nanto-shi"},{"name":"Kawage"},{"name":"Neyagawa"},{"name":"Hitachi-Naka"},{"name":"Inashiki"},{"name":"Ōnojō"},{"name":"Minokamo"},{"name":"Gujō"},{"name":"Jōetsu"},{"name":"Saitama"},{"name":"Higashimurayama-shi"},{"name":"Fujikawaguchiko"},{"name":"Dazaifu"},{"name":"Kamigyō-ku"},{"name":"Buzen"},{"name":"Sendai"},{"name":"Webuye"},{"name":"Wajir"},{"name":"Voi"},{"name":"Thika"},{"name":"Rongai"},{"name":"Pumwani"},{"name":"Nyeri"},{"name":"Nyahururu"},{"name":"Narok"},{"name":"Nanyuki"},{"name":"Nakuru"},{"name":"Naivasha"},{"name":"Nairobi"},{"name":"Mumias"},{"name":"Muhoroni"},{"name":"Moyale"},{"name":"Mombasa"},{"name":"Molo"},{"name":"Migori"},{"name":"Meru"},{"name":"Mbale"},{"name":"Marsabit"},{"name":"Maralal"},{"name":"Mandera"},{"name":"Malindi"},{"name":"Makueni"},{"name":"Machakos"},{"name":"Lugulu"},{"name":"Lodwar"},{"name":"Lamu"},{"name":"Kitui"},{"name":"Kitale"},{"name":"Kisumu"},{"name":"Kisii"},{"name":"Kilifi"},{"name":"Kiambu"},{"name":"Keruguya"},{"name":"Kericho"},{"name":"Karuri"},{"name":"Kapenguria"},{"name":"Kakamega"},{"name":"Kabarnet"},{"name":"Isiolo"},{"name":"Homa Bay"},{"name":"Garissa"},{"name":"Embu"},{"name":"Eldoret"},{"name":"Busia"},{"name":"Bungoma"},{"name":"Athi River"},{"name":"Siaya"},{"name":"Ol Kalou"},{"name":"Suluktu"},{"name":"Isfana"},{"name":"Balykchy"},{"name":"Tokmok"},{"name":"Tash-Kumyr"},{"name":"Talas"},{"name":"Kyzyl-Suu"},{"name":"Uzgen"},{"name":"Osh"},{"name":"Naryn"},{"name":"Kyzyl-Kyya"},{"name":"Kara Suu"},{"name":"Karakol"},{"name":"Kara-Balta"},{"name":"Kant"},{"name":"Jalal-Abad"},{"name":"Iradan"},{"name":"Cholpon-Ata"},{"name":"Bishkek"},{"name":"Bazar-Korgon"},{"name":"At-Bashi"},{"name":"Toktogul"},{"name":"Osh City"},{"name":"Phnom Penh"},{"name":"Ta Khmau"},{"name":"Takeo"},{"name":"Svay Rieng"},{"name":"Stung Treng"},{"name":"Sisŏphŏn"},{"name":"Siem Reap"},{"name":"Prey Veng"},{"name":"Pursat"},{"name":"Phumĭ Véal Srê"},{"name":"Sâmraông"},{"name":"Tbêng Méanchey"},{"name":"Paôy Pêt"},{"name":"Pailin"},{"name":"Lumphăt"},{"name":"Koh Kong"},{"name":"Kratié"},{"name":"Kampot"},{"name":"Kampong Thom"},{"name":"Kampong Speu"},{"name":"Sihanoukville"},{"name":"Kampong Chhnang"},{"name":"Kampong Cham"},{"name":"Ban Lŭng"},{"name":"Battambang"},{"name":"Smach Mean Chey"},{"name":"Tarawa"},{"name":"Moutsamoudou"},{"name":"Moroni"},{"name":"Basseterre"},{"name":"Yŏnan-ŭp"},{"name":"Wŏnsan"},{"name":"T’ongch’ŏn-ŭp"},{"name":"Sŭngho 1-tong"},{"name":"Sunan"},{"name":"Songnim"},{"name":"Sil-li"},{"name":"Sinmak"},{"name":"Sinanju"},{"name":"Sariwŏn"},{"name":"Samho-rodongjagu"},{"name":"Pyongyang"},{"name":"P’yŏngsŏng"},{"name":"Ongjin"},{"name":"Namp’o"},{"name":"Kusŏng"},{"name":"Kujang-ŭp"},{"name":"Kowŏn-ŭp"},{"name":"Kosan"},{"name":"Kangdong-ŭp"},{"name":"Kaesŏng"},{"name":"Hwangju-ŭp"},{"name":"Hŭngnam"},{"name":"Hŭkkyo-ri"},{"name":"Hoeyang"},{"name":"Hamhŭng"},{"name":"Haeju"},{"name":"Chunghwa"},{"name":"Chŏngju"},{"name":"Changyŏn"},{"name":"Chaeryŏng-ŭp"},{"name":"Ayang-ni"},{"name":"Anju"},{"name":"Anbyŏn-ŭp"},{"name":"Anak"},{"name":"Yuktae-dong"},{"name":"Ŭiju"},{"name":"Sŏnbong"},{"name":"Sinŭiju"},{"name":"Sakchu-ŭp"},{"name":"Yŏnggwang-ŭp"},{"name":"Onsŏng"},{"name":"Nanam"},{"name":"Namyang-dong"},{"name":"Najin"},{"name":"Musan-ŭp"},{"name":"Kyŏngsŏng"},{"name":"Kilju"},{"name":"Kapsan-ŭp"},{"name":"Kanggye-si"},{"name":"Iwŏn-ŭp"},{"name":"Hyesan-dong"},{"name":"Hyesan-si"},{"name":"Hongwŏn"},{"name":"Hoeryŏng"},{"name":"Chongjin"},{"name":"Aoji-ri"},{"name":"Heung-hai"},{"name":"Enjitsu"},{"name":"Neietsu"},{"name":"Eisen"},{"name":"Reiko"},{"name":"Yŏng-dong"},{"name":"Eisen"},{"name":"Yeoju"},{"name":"Yesan"},{"name":"Yangsan"},{"name":"Yangp'yŏng"},{"name":"Yangju"},{"name":"Yanggu"},{"name":"Wŏnju"},{"name":"Wanju"},{"name":"Waegwan"},{"name":"Ulsan"},{"name":"Uijeongbu-si"},{"name":"Tangjin"},{"name":"Taesal-li"},{"name":"Daejeon"},{"name":"Daegu"},{"name":"Taisen-ri"},{"name":"T’aebaek"},{"name":"Suwon-si"},{"name":"Suncheon"},{"name":"Seoul"},{"name":"Suisan"},{"name":"Jenzan"},{"name":"Seonghwan"},{"name":"Sokcho"},{"name":"Sangju"},{"name":"Santyoku"},{"name":"Fuyo"},{"name":"Busan"},{"name":"Bucheon-si"},{"name":"Puan"},{"name":"Beolgyo"},{"name":"Pohang"},{"name":"Osan"},{"name":"Asan"},{"name":"Okcheon"},{"name":"Kosong"},{"name":"Nonsan"},{"name":"Nangen"},{"name":"Naju"},{"name":"Munsan"},{"name":"Mungyeong"},{"name":"Muan"},{"name":"Moppo"},{"name":"Miryang"},{"name":"Gyeongsan-si"},{"name":"Kyonju"},{"name":"Kwangyang"},{"name":"Gwangju"},{"name":"Gwangju"},{"name":"Kurye"},{"name":"Guri-si"},{"name":"Kunwi"},{"name":"Kunsan"},{"name":"Kinzan"},{"name":"Gumi"},{"name":"Goyang-si"},{"name":"Goseong"},{"name":"Gongju"},{"name":"Kyosai"},{"name":"Koesan"},{"name":"Koch'ang"},{"name":"Kimje"},{"name":"Kimhae"},{"name":"Gimcheon"},{"name":"Gijang"},{"name":"Gapyeong"},{"name":"Kang-neung"},{"name":"Ganghwa-gun"},{"name":"Iksan"},{"name":"Incheon"},{"name":"Imsil"},{"name":"Icheon-si"},{"name":"Hwasun"},{"name":"Hwaseong-si"},{"name":"Hwacheon"},{"name":"Hongsung"},{"name":"Hongch’ŏn"},{"name":"Hayang"},{"name":"Haenam"},{"name":"Chuncheon"},{"name":"Jeonju"},{"name":"Cheongsong gun"},{"name":"Cheongju-si"},{"name":"Cheonan"},{"name":"Chinju"},{"name":"Chinch'ŏn"},{"name":"Jinan-gun"},{"name":"Jeju City"},{"name":"Changwon"},{"name":"Changsu"},{"name":"Anyang-si"},{"name":"Anseong"},{"name":"Ansan-si"},{"name":"Andong"},{"name":"Gaigeturi"},{"name":"Sinhyeon"},{"name":"Yeosu"},{"name":"Yŏnmu"},{"name":"Tonghae"},{"name":"Pubal"},{"name":"Seongnam-si"},{"name":"Hanam"},{"name":"Hwado"},{"name":"Namyangju"},{"name":"Ungsang"},{"name":"Wabu"},{"name":"Naesŏ"},{"name":"Hwawŏn"},{"name":"Kwangmyŏng"},{"name":"Sinan"},{"name":"Seogwipo"},{"name":"Changnyeong"},{"name":"Janūb as Surrah"},{"name":"Ḩawallī"},{"name":"Bayān"},{"name":"As Sālimīyah"},{"name":"Ar Rumaythīyah"},{"name":"Ar Riqqah"},{"name":"Al Manqaf"},{"name":"Al Mahbūlah"},{"name":"Kuwait City"},{"name":"Al Jahrā’"},{"name":"Al Faḩāḩīl"},{"name":"Al Finţās"},{"name":"Al Farwānīyah"},{"name":"Al Aḩmadī"},{"name":"Ad Dasmah"},{"name":"Salwá"},{"name":"Ar Rābiyah"},{"name":"Şabāḩ as Sālim"},{"name":"George Town"},{"name":"Zhanaozen"},{"name":"Shalqar"},{"name":"Shalkar"},{"name":"Oral"},{"name":"Kandyagash"},{"name":"Qulsary"},{"name":"Khromtau"},{"name":"Karagandy"},{"name":"Embi"},{"name":"Balyqshy"},{"name":"Atyrau"},{"name":"Aqtöbe"},{"name":"Aktau"},{"name":"Aqsay"},{"name":"Zyryanovsk"},{"name":"Zhosaly"},{"name":"Zhezqazghan"},{"name":"Dzhetygara"},{"name":"Zhangatas"},{"name":"Ayteke Bi"},{"name":"Taraz"},{"name":"Zaysan"},{"name":"Yanykurgan"},{"name":"Vannovka"},{"name":"Ush-Tyube"},{"name":"Turkestan"},{"name":"Temirtau"},{"name":"Tekeli"},{"name":"Tasböget"},{"name":"Talghar"},{"name":"Taldykorgan"},{"name":"Taldyqorghan"},{"name":"Shymkent"},{"name":"Chu"},{"name":"Shemonaīkha"},{"name":"Shchūchīnsk"},{"name":"Semey"},{"name":"Saryaghash"},{"name":"Sarkand"},{"name":"Sorang"},{"name":"Rudnyy"},{"name":"Kyzylorda"},{"name":"Kostanay"},{"name":"Karatau"},{"name":"Kapshagay"},{"name":"Petropavl"},{"name":"Pavlodar"},{"name":"Zharkent"},{"name":"Ust-Kamenogorsk"},{"name":"Sarykemer"},{"name":"Merke"},{"name":"Makīnsk"},{"name":"Lisakovsk"},{"name":"Baykonyr"},{"name":"Ridder"},{"name":"Lenger"},{"name":"Kokshetau"},{"name":"Kentau"},{"name":"Esik"},{"name":"Georgīevka"},{"name":"Aksu"},{"name":"Otegen Batyra"},{"name":"Ekibastuz"},{"name":"Shīeli"},{"name":"Shardara"},{"name":"Burunday"},{"name":"Aksu"},{"name":"Balqash"},{"name":"Ayagoz"},{"name":"Atbasar"},{"name":"Arys"},{"name":"Arkalyk"},{"name":"Aral"},{"name":"Astana"},{"name":"Almaty"},{"name":"Akkol’"},{"name":"Abay"},{"name":"Stepnogorsk"},{"name":"Kyzyl-Orda"},{"name":"Vientiane"},{"name":"Xam Nua"},{"name":"Savannakhét"},{"name":"Pakxé"},{"name":"Muang Xay"},{"name":"Vangviang"},{"name":"Muang Phônsavan"},{"name":"Muang Pakxan"},{"name":"Thakhèk"},{"name":"Luang Prabang"},{"name":"Ban Houakhoua"},{"name":"Phonsavan"},{"name":"Zahlé"},{"name":"Tripoli"},{"name":"Tyre"},{"name":"Sidon"},{"name":"Ra’s Bayrūt"},{"name":"Djounie"},{"name":"Jbaïl"},{"name":"Habboûch"},{"name":"Bcharré"},{"name":"Beirut"},{"name":"Baalbek"},{"name":"En Nâqoûra"},{"name":"Nabatîyé et Tahta"},{"name":"Castries"},{"name":"Vaduz"},{"name":"Welisara"},{"name":"Weligama"},{"name":"Wattala"},{"name":"Vavuniya"},{"name":"Valvedditturai"},{"name":"Trincomalee"},{"name":"Ratnapura"},{"name":"Puttalam"},{"name":"Point Pedro"},{"name":"Pita Kotte"},{"name":"Peliyagoda"},{"name":"Panadura"},{"name":"Nuwara Eliya"},{"name":"Negombo"},{"name":"Mulleriyawa"},{"name":"Dehiwala-Mount Lavinia"},{"name":"Moratuwa"},{"name":"Matara"},{"name":"Maharagama"},{"name":"Kurunegala"},{"name":"Sri Jayewardenepura Kotte"},{"name":"Kotikawatta"},{"name":"Kolonnawa"},{"name":"Kelaniya"},{"name":"Katunayaka"},{"name":"Kandy"},{"name":"Kandana"},{"name":"Kalutara"},{"name":"Kalmunai"},{"name":"Jaffna"},{"name":"Ja Ela"},{"name":"Homagama"},{"name":"Hendala"},{"name":"Hatton"},{"name":"Hanwella Ihala"},{"name":"Gampola"},{"name":"Galle"},{"name":"Galkissa"},{"name":"Eravur Town"},{"name":"Dambulla"},{"name":"Colombo"},{"name":"Chilaw"},{"name":"Beruwala"},{"name":"Bentota"},{"name":"Batticaloa"},{"name":"Battaramulla South"},{"name":"Badulla"},{"name":"Anuradhapura"},{"name":"Ampara"},{"name":"Ambalangoda"},{"name":"Shanjeev Home"},{"name":"Mount Lavinia"},{"name":"Zwedru"},{"name":"New Yekepa"},{"name":"Voinjama"},{"name":"Monrovia"},{"name":"Kakata"},{"name":"Harper"},{"name":"Greenville"},{"name":"Gbarnga"},{"name":"Buchanan"},{"name":"Bensonville"},{"name":"Quthing"},{"name":"Qacha’s Nek"},{"name":"Mohale’s Hoek"},{"name":"Maseru"},{"name":"Maputsoe"},{"name":"Mafeteng"},{"name":"Leribe"},{"name":"Butha-Buthe"},{"name":"Visaginas"},{"name":"Vilnius"},{"name":"Utena"},{"name":"Ukmerge"},{"name":"Telsiai"},{"name":"Taurage"},{"name":"Silute"},{"name":"Šiauliai"},{"name":"Rokiškis"},{"name":"Radviliskis"},{"name":"Plunge"},{"name":"Panevėžys"},{"name":"Palanga"},{"name":"Fabijoniškės"},{"name":"Mazeikiai"},{"name":"Marijampolė"},{"name":"Kretinga"},{"name":"Klaipėda"},{"name":"Kėdainiai"},{"name":"Kaunas"},{"name":"Jonava"},{"name":"Gargždai"},{"name":"Druskininkai"},{"name":"Alytus"},{"name":"Aleksotas"},{"name":"Dainava (Kaunas)"},{"name":"Šilainiai"},{"name":"Eiguliai"},{"name":"Pašilaičiai"},{"name":"Pilaitė"},{"name":"Justiniškės"},{"name":"Šeškinė"},{"name":"Lazdynai"},{"name":"Vilkpėdė"},{"name":"Naujamiestis"},{"name":"Luxembourg"},{"name":"Esch-sur-Alzette"},{"name":"Dudelange"},{"name":"Valmiera"},{"name":"Ventspils"},{"name":"Vec-Liepāja"},{"name":"Tukums"},{"name":"Salaspils"},{"name":"Riga"},{"name":"Rēzekne"},{"name":"Ogre"},{"name":"Liepāja"},{"name":"Jūrmala"},{"name":"Jelgava"},{"name":"Jēkabpils"},{"name":"Daugavpils"},{"name":"Cēsis"},{"name":"Tobruk"},{"name":"Sulūq"},{"name":"Darnah"},{"name":"Benghazi"},{"name":"Az Zuwaytīnah"},{"name":"At Tāj"},{"name":"Tūkrah"},{"name":"Al Qubbah"},{"name":"Al Marj"},{"name":"Al Jawf"},{"name":"Al Bayḑā’"},{"name":"Al Abyār"},{"name":"Ajdabiya"},{"name":"Zuwārah"},{"name":"Zliten"},{"name":"Zalţan"},{"name":"Yafran"},{"name":"Waddān"},{"name":"Tarhuna"},{"name":"Tripoli"},{"name":"Tagiura"},{"name":"Sirte"},{"name":"Şurmān"},{"name":"Şabrātah"},{"name":"Sabhā"},{"name":"Nālūt"},{"name":"Murzuq"},{"name":"Mizdah"},{"name":"Mişrātah"},{"name":"Masallātah"},{"name":"Hūn"},{"name":"Zawiya"},{"name":"Ghat"},{"name":"Gharyan"},{"name":"Brak"},{"name":"Banī Walīd"},{"name":"Az Zintān"},{"name":"Az Zāwīyah"},{"name":"Awbārī"},{"name":"Al Khums"},{"name":"Al Jadīd"},{"name":"Zaïo"},{"name":"Zagora"},{"name":"Youssoufia"},{"name":"Tiznit"},{"name":"Tirhanimîne"},{"name":"Tinghir"},{"name":"Tiflet"},{"name":"Tétouan"},{"name":"Taza"},{"name":"Taroudant"},{"name":"Taourirt"},{"name":"Taounate"},{"name":"Tan-Tan"},{"name":"Tangier"},{"name":"Tahla"},{"name":"Souq Larb’a al Gharb"},{"name":"Sidi Yahia El Gharb"},{"name":"Sidi Slimane"},{"name":"Sidi Qacem"},{"name":"Sidi Ifni"},{"name":"Sidi Bennour"},{"name":"Settat"},{"name":"Sefrou"},{"name":"Sale"},{"name":"Safi"},{"name":"Rabat"},{"name":"Oulad Teïma"},{"name":"Oujda"},{"name":"Oued Zem"},{"name":"Ouezzane"},{"name":"Ouarzazat"},{"name":"Nador"},{"name":"Mohammedia"},{"name":"Midelt"},{"name":"Meknès"},{"name":"Mechraa Bel Ksiri"},{"name":"Martil"},{"name":"Marrakesh"},{"name":"Larache"},{"name":"Ksar El Kebir"},{"name":"Khouribga"},{"name":"Khenifra"},{"name":"Kenitra"},{"name":"Kasba Tadla"},{"name":"Jerada"},{"name":"Imzoûrene"},{"name":"Guercif"},{"name":"Guelmim"},{"name":"Fkih Ben Salah"},{"name":"Fès al Bali"},{"name":"Fes"},{"name":"Essaouira"},{"name":"El Jadida"},{"name":"El Hajeb"},{"name":"El Aïoun"},{"name":"Chefchaouene"},{"name":"Casablanca"},{"name":"Bouznika"},{"name":"Berkane"},{"name":"Beni Mellal"},{"name":"Berrechid"},{"name":"Azrou"},{"name":"Azemmour"},{"name":"Asilah"},{"name":"Khemisset"},{"name":"Al Hoceïma"},{"name":"Ahfir"},{"name":"Agadir"},{"name":"Skhirate"},{"name":"Boujniba"},{"name":"Dakhla"},{"name":"Monte-Carlo"},{"name":"Monaco"},{"name":"Edineţ"},{"name":"Ungheni"},{"name":"Tiraspolul"},{"name":"Straşeni"},{"name":"Bilicenii Vechi"},{"name":"Soroca"},{"name":"Slobozia"},{"name":"Rîbniţa"},{"name":"Orhei"},{"name":"Hînceşti"},{"name":"Căuşeni"},{"name":"Floreşti"},{"name":"Dubăsari"},{"name":"Drochia"},{"name":"Comrat"},{"name":"Chişinău"},{"name":"Ceadîr-Lunga"},{"name":"Cahul"},{"name":"Bender"},{"name":"Bălţi"},{"name":"Podgorica"},{"name":"Pljevlja"},{"name":"Nikšić"},{"name":"Herceg-Novi"},{"name":"Cetinje"},{"name":"Budva"},{"name":"Bijelo Polje"},{"name":"Bar"},{"name":"Marigot"},{"name":"Toamasina"},{"name":"Vondrozo"},{"name":"Vohipaho"},{"name":"Vohibinany"},{"name":"Vavatenina"},{"name":"Vangaindrano"},{"name":"Tsiroanomandidy"},{"name":"Tsiombe"},{"name":"Tsaratanana"},{"name":"Toliara"},{"name":"Fort Dauphin"},{"name":"Soavinandriana"},{"name":"Soanindrariny"},{"name":"Soanierana Ivongo"},{"name":"Sitampiky"},{"name":"Sambava"},{"name":"Sakaraha"},{"name":"Sahavato"},{"name":"Sadabe"},{"name":"Nosy Varika"},{"name":"Morondava"},{"name":"Moramanga"},{"name":"Miandrivazo"},{"name":"Miandrarivo"},{"name":"Marovoay"},{"name":"Marolambo"},{"name":"Maroantsetra"},{"name":"Manjakandriana"},{"name":"Mananjary"},{"name":"Mananara"},{"name":"Manakara"},{"name":"Maintirano"},{"name":"Mahanoro"},{"name":"Mahajanga"},{"name":"Maevatanana"},{"name":"Ikongo"},{"name":"Ikalamavony"},{"name":"Ihosy"},{"name":"Ifanadiana"},{"name":"Fianarantsoa"},{"name":"Fenoarivo Be"},{"name":"Fenoarivo Atsinanana"},{"name":"Faratsiho"},{"name":"Farafangana"},{"name":"Fandriana"},{"name":"Betioky"},{"name":"Betafo"},{"name":"Beroroha"},{"name":"Belo sur Tsiribihina"},{"name":"Beloha"},{"name":"Bealanana"},{"name":"Arivonimamo"},{"name":"Antsohimbondrona"},{"name":"Antsohihy"},{"name":"Antsiranana"},{"name":"Antsirabe"},{"name":"Antanifotsy"},{"name":"Antananarivo"},{"name":"Antalaha"},{"name":"Ankazondandy"},{"name":"Ankazobe"},{"name":"Ankazoabo"},{"name":"Anjozorobe"},{"name":"Hell-Ville"},{"name":"Andilamena"},{"name":"Andapa"},{"name":"Ampasimanolotra"},{"name":"Amparafaravola"},{"name":"Ampanihy"},{"name":"Ampahana"},{"name":"Ambovombe"},{"name":"Ambositra"},{"name":"Ambohitrolomahitsy"},{"name":"Amboasary"},{"name":"Amboanjo"},{"name":"Ambilobe"},{"name":"Ambatondrazaka"},{"name":"Ambatolampy"},{"name":"Ambatofinandrahana"},{"name":"Ambato Boeny"},{"name":"Ambarakaraka"},{"name":"Ambanja"},{"name":"Ambalavao"},{"name":"Alarobia"},{"name":"Majuro"},{"name":"RMI Capitol"},{"name":"Желино"},{"name":"Vinica"},{"name":"Veles"},{"name":"Tetovo"},{"name":"Теарце"},{"name":"Студеничани"},{"name":"Strumica"},{"name":"Struga"},{"name":"Shtip"},{"name":"Skopje"},{"name":"Сарај"},{"name":"Ресен"},{"name":"Радовиш"},{"name":"Prilep"},{"name":"Ohrid"},{"name":"Неготино"},{"name":"Negotino"},{"name":"Липково"},{"name":"Kumanovo"},{"name":"Крива Паланка"},{"name":"Kochani"},{"name":"Kičevo"},{"name":"Kavadarci"},{"name":"Kamenjane"},{"name":"Gostivar"},{"name":"Gevgelija"},{"name":"Delcevo"},{"name":"Debar"},{"name":"Brvenica"},{"name":"Bogovinje"},{"name":"Bitola"},{"name":"Šuto Orizare"},{"name":"Butel"},{"name":"Čair"},{"name":"Ilinden"},{"name":"Kisela Voda"},{"name":"Centar Župa"},{"name":"Yorosso"},{"name":"Timbuktu"},{"name":"Sikasso"},{"name":"Ségou"},{"name":"San"},{"name":"Sagalo"},{"name":"Mopti"},{"name":"Markala"},{"name":"Koutiala"},{"name":"Koulikoro"},{"name":"Kolokani"},{"name":"Kayes"},{"name":"Kati"},{"name":"Kangaba"},{"name":"Gao"},{"name":"Djénné"},{"name":"Bougouni"},{"name":"Banamba"},{"name":"Bamako"},{"name":"Bafoulabé"},{"name":"Yenangyaung"},{"name":"Nyaungdon"},{"name":"Yamethin"},{"name":"Wakema"},{"name":"Twante"},{"name":"Taungoo"},{"name":"Thongwa"},{"name":"Thayetmyo"},{"name":"Thaton"},{"name":"Tharyarwady"},{"name":"Thanatpin"},{"name":"Thanatpin"},{"name":"Dawei"},{"name":"Taunggyi"},{"name":"Taungdwingyi"},{"name":"Syriam"},{"name":"Sittwe"},{"name":"Shwebo"},{"name":"Sagaing"},{"name":"Yangon"},{"name":"Pyu"},{"name":"Pyinmana"},{"name":"Pyay"},{"name":"Pyapon"},{"name":"Bago"},{"name":"Paungde"},{"name":"Pakokku"},{"name":"Hpa-an"},{"name":"Nyaunglebin"},{"name":"Myitkyina"},{"name":"Myingyan"},{"name":"Myawadi"},{"name":"Myanaung"},{"name":"Mudon"},{"name":"Mawlamyinegyunn"},{"name":"Mawlamyine"},{"name":"Monywa"},{"name":"Mogok"},{"name":"Minbu"},{"name":"Myeik"},{"name":"Meiktila"},{"name":"Pyin Oo Lwin"},{"name":"Mawlaik"},{"name":"Maubin"},{"name":"Martaban"},{"name":"Mandalay"},{"name":"Magway"},{"name":"Loikaw"},{"name":"Letpandan"},{"name":"Lashio"},{"name":"Kyaukse"},{"name":"Kyaikto"},{"name":"Kyaiklat"},{"name":"Kyaikkami"},{"name":"Kayan"},{"name":"Kanbe"},{"name":"Hinthada"},{"name":"Hakha"},{"name":"Chauk"},{"name":"Bogale"},{"name":"Bhamo"},{"name":"Pathein"},{"name":"Myaydo"},{"name":"Nay Pyi Taw"},{"name":"Uliastay"},{"name":"Ulaangom"},{"name":"Ölgiy"},{"name":"Khovd"},{"name":"Altai"},{"name":"Ulan Bator"},{"name":"Sühbaatar"},{"name":"Murun-kuren"},{"name":"Mandalgovi"},{"name":"Hovd"},{"name":"Erdenet"},{"name":"Dzüünharaa"},{"name":"Darhan"},{"name":"Dalandzadgad"},{"name":"Saynshand"},{"name":"Bulgan"},{"name":"Bayanhongor"},{"name":"Bayanhongor"},{"name":"Baruun-Urt"},{"name":"Arvayheer"},{"name":"Зуунмод"},{"name":"Macau"},{"name":"Saipan"},{"name":"Saint-Joseph"},{"name":"Sainte-Marie"},{"name":"Petite Rivière Salée"},{"name":"Le Robert"},{"name":"Le Lamentin"},{"name":"Le François"},{"name":"La Trinité"},{"name":"Fort-de-France"},{"name":"Ducos"},{"name":"Zouerate"},{"name":"Tékane"},{"name":"Sélibaby"},{"name":"Rosso"},{"name":"Nouakchott"},{"name":"Nouâdhibou"},{"name":"Néma"},{"name":"Kiffa"},{"name":"Kaédi"},{"name":"Atar"},{"name":"Aleg"},{"name":"Plymouth"},{"name":"Brades"},{"name":"Żabbar"},{"name":"Valletta"},{"name":"Qormi"},{"name":"Mosta"},{"name":"Birkirkara"},{"name":"Vacoas"},{"name":"Triolet"},{"name":"Saint Pierre"},{"name":"Quatre Bornes"},{"name":"Port Louis"},{"name":"Mahébourg"},{"name":"Goodlands"},{"name":"Curepipe"},{"name":"Centre de Flacq"},{"name":"Bel Air Rivière Sèche"},{"name":"Le Hochet"},{"name":"Male"},{"name":"Karonga"},{"name":"Zomba"},{"name":"Salima"},{"name":"Rumphi"},{"name":"Nsanje"},{"name":"Nkhotakota"},{"name":"Mzuzu"},{"name":"Mzimba"},{"name":"Mulanje"},{"name":"Mchinji"},{"name":"Mangochi"},{"name":"Liwonde"},{"name":"Lilongwe"},{"name":"Kasungu"},{"name":"Dedza"},{"name":"Blantyre"},{"name":"Balaka"},{"name":"Gustavo A. Madero"},{"name":"San Fernando"},{"name":"Zumpango"},{"name":"Zumpango del Río"},{"name":"Zacualtipán"},{"name":"Zacatlán"},{"name":"Zacatepec"},{"name":"Yecapixtla"},{"name":"Yautepec"},{"name":"Xoxocotla"},{"name":"Xonacatlán"},{"name":"Xochitepec"},{"name":"Xochimilco"},{"name":"Xicotepec de Juárez"},{"name":"Xico"},{"name":"San Miguel Xico Viejo"},{"name":"Álvaro Obregón"},{"name":"Villahermosa"},{"name":"Gustavo A. Madero"},{"name":"Villa Cuauhtémoc Otzolotepec"},{"name":"Veracruz"},{"name":"Venustiano Carranza"},{"name":"Valle Hermoso"},{"name":"Valladolid"},{"name":"Uman"},{"name":"Tuxtla Gutiérrez"},{"name":"Tuxpan de Rodríguez Cano"},{"name":"Tultitlán"},{"name":"Tultepec"},{"name":"Tulancingo"},{"name":"Tula de Allende"},{"name":"Toluca"},{"name":"Tlazcalancingo"},{"name":"Tlaquiltenango"},{"name":"Tlapa de Comonfort"},{"name":"Tlapacoyan"},{"name":"Tlalpan"},{"name":"Tlalnepantla"},{"name":"Tlahuac"},{"name":"Tizimín"},{"name":"Tizayuca"},{"name":"Tixtla de Guerrero"},{"name":"Ticul"},{"name":"Santiago Tíanguistenco"},{"name":"Tezontepec de Aldama"},{"name":"Teziutlan"},{"name":"Texcoco de Mora"},{"name":"Tequixquiac"},{"name":"Tequisquiapan"},{"name":"Cuautitlán Izcalli"},{"name":"Tepoztlán"},{"name":"Tepotzotlán"},{"name":"Tepeji de Ocampo"},{"name":"Tepeaca"},{"name":"Tepatlaxco de Hidalgo"},{"name":"Teoloyucan"},{"name":"Tenosique de Pino Suárez"},{"name":"Tenango de Arista"},{"name":"Temixco"},{"name":"Temapache"},{"name":"Teloloapan"},{"name":"Tecax"},{"name":"Tehuacán"},{"name":"Tecamachalco"},{"name":"Teapa"},{"name":"Taxco de Alarcón"},{"name":"Tapachula"},{"name":"Tantoyuca"},{"name":"Tampico"},{"name":"Tamazunchale"},{"name":"Santo Domingo Tehuantepec"},{"name":"Santiago Tuxtla"},{"name":"Santiago Pinotepa Nacional"},{"name":"Santiago Tulantepec"},{"name":"Moyotzingo"},{"name":"Santa María Chimalhuacán"},{"name":"Santa Cruz Xoxocotlán"},{"name":"Tecamac de Felipe Villanueva"},{"name":"Chiautempan"},{"name":"San Salvador El Seco"},{"name":"San Salvador Atenco"},{"name":"San Pablo de las Salinas"},{"name":"San Pablo Autopan"},{"name":"San Miguel Zinacantepec"},{"name":"Coatlinchán"},{"name":"San Mateo Atenco"},{"name":"San Martin Texmelucan de Labastida"},{"name":"Teolocholco"},{"name":"Teotihuacán de Arista"},{"name":"San Juan del Río"},{"name":"Tuxtepec"},{"name":"San Francisco Acuautla"},{"name":"Sanctorum"},{"name":"San Cristóbal de las Casas"},{"name":"San Andres Tuxtla"},{"name":"Salina Cruz"},{"name":"Río Verde"},{"name":"Río Bravo"},{"name":"Río Blanco"},{"name":"Reynosa"},{"name":"Puerto Escondido"},{"name":"Puente de Ixtla"},{"name":"Puebla"},{"name":"Progreso de Alvaro Obregon"},{"name":"Progreso de Castro"},{"name":"Poza Rica de Hidalgo"},{"name":"Polanco"},{"name":"Playa del Carmen"},{"name":"Pijijiapan"},{"name":"Peto"},{"name":"Perote"},{"name":"Paraiso"},{"name":"Papantla de Olarte"},{"name":"Pánuco"},{"name":"Palmarito Tochapán"},{"name":"Palenque"},{"name":"Pachuca de Soto"},{"name":"Ozumba de Alzate"},{"name":"Oxkutzkab"},{"name":"Orizaba"},{"name":"Ometepec"},{"name":"Ocozocoautla de Espinosa"},{"name":"Ocoyoacac"},{"name":"Ocosingo"},{"name":"Oaxaca de Juárez"},{"name":"Nuevo Laredo"},{"name":"Nogales"},{"name":"Nicolás Romero"},{"name":"Naucalpan de Juárez"},{"name":"Naranjos"},{"name":"Villa Nanchital"},{"name":"Motul"},{"name":"Motozintla"},{"name":"Montemorelos"},{"name":"Santiago Momoxpan"},{"name":"Mixquiahuala de Juarez"},{"name":"Misantla"},{"name":"Miramar"},{"name":"Minatitlan"},{"name":"Milpa Alta"},{"name":"Miahuatlán de Porfirio Díaz"},{"name":"Metepec"},{"name":"Mérida"},{"name":"Matías Romero"},{"name":"Heroica Matamoros"},{"name":"Martínez de la Torre"},{"name":"Mapastepec"},{"name":"Malinaltepec"},{"name":"Magdalena Contreras"},{"name":"Macuspana"},{"name":"Reyes Acozac"},{"name":"Los Reyes La Paz"},{"name":"Linares"},{"name":"Lerma de Villada"},{"name":"Lerdo de Tejada"},{"name":"Las Margaritas"},{"name":"Las Choapas"},{"name":"La Isla"},{"name":"Kanasín"},{"name":"Juchitán de Zaragoza"},{"name":"Jojutla"},{"name":"Jiutepec"},{"name":"Jalpa de Méndez"},{"name":"Xalapa de Enríquez"},{"name":"Izúcar de Matamoros"},{"name":"San Jerónimo Ixtepec"},{"name":"Ixtapan de la Sal"},{"name":"Ixtapaluca"},{"name":"Iztapalapa"},{"name":"Ixtac Zoquitlán"},{"name":"Iztacalco"},{"name":"Ixmiquilpan"},{"name":"Iguala de la Independencia"},{"name":"Hunucmá"},{"name":"Huixtla"},{"name":"Huitzuco de los Figueroa"},{"name":"Huimanguillo"},{"name":"Huejutla de Reyes"},{"name":"Huejotzingo"},{"name":"Huauchinango"},{"name":"Huatusco de Chicuellar"},{"name":"Ciudad de Huajuapan de León"},{"name":"Frontera Comalapa"},{"name":"Frontera"},{"name":"Fortín de las Flores"},{"name":"Felipe Carrillo Puerto"},{"name":"Escárcega"},{"name":"Emiliano Zapata"},{"name":"Emiliano Zapata"},{"name":"Ciudad Mante"},{"name":"Ecatepec"},{"name":"Cunduacán"},{"name":"Cuernavaca"},{"name":"Cuautlancingo"},{"name":"Cuautla Morelos"},{"name":"Cuautitlán"},{"name":"Cuautepec de Hinojosa"},{"name":"Cuajimalpa"},{"name":"San Miguel de Cozumel"},{"name":"Coyotepec"},{"name":"Coyoacán"},{"name":"Cosoleacaque"},{"name":"Cosamaloapan de Carpio"},{"name":"Córdoba"},{"name":"San Bernardino Contla"},{"name":"Comitán"},{"name":"Comalcalco"},{"name":"Coatzintla"},{"name":"Coatzacoalcos"},{"name":"Coatepec"},{"name":"Coacalco"},{"name":"Ciudad Victoria"},{"name":"Ciudad Valles"},{"name":"Ciudad Serdán"},{"name":"Ciudad Sahagun"},{"name":"Ciudad Nezahualcoyotl"},{"name":"Ciudad Miguel Alemán"},{"name":"Ciudad Mendoza"},{"name":"Ciudad Madero"},{"name":"Ciudad Fernández"},{"name":"Mexico City"},{"name":"Ciudad del Carmen"},{"name":"Cintalapa de Figueroa"},{"name":"Cholula"},{"name":"Chilpancingo de los Bravos"},{"name":"Chilapa de Alvarez"},{"name":"Chignahuapan"},{"name":"Chiconcuac"},{"name":"San Vicente Chicoloapan"},{"name":"Chichén-Itzá"},{"name":"Chiautla"},{"name":"Chiapa de Corzo"},{"name":"Chetumal"},{"name":"Champotón"},{"name":"Chalco de Díaz Covarrubias"},{"name":"Cerro Azul"},{"name":"Catemaco"},{"name":"Carlos A. Carrillo"},{"name":"Cardenas"},{"name":"Cárdenas"},{"name":"Capulhuac"},{"name":"Cancún"},{"name":"Campeche"},{"name":"Calpulalpan"},{"name":"Cadereyta"},{"name":"Berriozábal"},{"name":"Banderilla"},{"name":"Azcapotzalco"},{"name":"Axochiapan"},{"name":"Atlixco"},{"name":"Atlacomulco"},{"name":"Ciudad López Mateos"},{"name":"Apizaco"},{"name":"Apan"},{"name":"Amozoc de Mota"},{"name":"Amecameca"},{"name":"Heroica Alvarado"},{"name":"Altotonga"},{"name":"Altepexi"},{"name":"Altamira"},{"name":"Allende"},{"name":"Álamo"},{"name":"Ajalpan"},{"name":"Agua Dulce"},{"name":"Actopan"},{"name":"Acayucan"},{"name":"Acatzingo de Hidalgo"},{"name":"Acatlán de Osorio"},{"name":"Acapulco de Juárez"},{"name":"Acajete"},{"name":"San Antonio de la Cal"},{"name":"Hidalgo"},{"name":"Río de Teapa"},{"name":"Huamantla"},{"name":"Zacatelco"},{"name":"Tlaxcala de Xicohtencatl"},{"name":"Papalotla"},{"name":"Vicente Guerrero"},{"name":"Tonalá"},{"name":"Arriaga"},{"name":"San Andrés Cholula"},{"name":"Tampico"},{"name":"Alto Lucero"},{"name":"San Mateo Otzacatipan"},{"name":"Santa María Totoltepec"},{"name":"San Lorenzo Acopilco"},{"name":"Benito Juarez"},{"name":"Venustiano Carranza"},{"name":"Miguel Hidalgo"},{"name":"Cuauhtémoc"},{"name":"Huixquilucan"},{"name":"Melchor Ocampo"},{"name":"Huilango"},{"name":"Santiago Teyahualco"},{"name":"Ojo de Agua"},{"name":"Buenavista"},{"name":"Miguel Alemán (La Doce)"},{"name":"Leyva Solano"},{"name":"Cihuatlán"},{"name":"Guadalupe Victoria"},{"name":"Ixtapa-Zihuatanejo"},{"name":"Zapotlanejo"},{"name":"Zapotiltic"},{"name":"Zapopan"},{"name":"Zamora"},{"name":"Zacoalco de Torres"},{"name":"Zacatecas"},{"name":"Zacapú"},{"name":"Yuriria"},{"name":"Yurécuaro"},{"name":"Villagrán"},{"name":"Ciudad Frontera"},{"name":"García"},{"name":"Ciudad de Villa de Álvarez"},{"name":"Valle de Santiago"},{"name":"Valle de Bravo"},{"name":"Uruapan"},{"name":"Uriangato"},{"name":"Tuxpan"},{"name":"Torreon"},{"name":"Tonalá"},{"name":"Tlaquepaque"},{"name":"Tlajomulco de Zúñiga"},{"name":"Tijuana"},{"name":"Tesistán"},{"name":"Tequila"},{"name":"Tepic"},{"name":"Tepatitlán de Morelos"},{"name":"Tepalcatepec"},{"name":"Teocaltiche"},{"name":"Tejupilco de Hidalgo"},{"name":"Tecoman"},{"name":"Tecate"},{"name":"Tangancícuaro de Arista"},{"name":"Tamazula de Gordiano"},{"name":"Tala"},{"name":"Tacámbaro de Codallos"},{"name":"Sombrerete"},{"name":"Soledad Díez Gutiérrez"},{"name":"Silao"},{"name":"Sayula"},{"name":"Santiago Papasquiaro"},{"name":"Santiago Ixcuintla"},{"name":"Santiago"},{"name":"Santa Rosa Jauregui"},{"name":"Santa Catarina"},{"name":"Santa Anita"},{"name":"San Sebastián el Grande"},{"name":"San Pedro"},{"name":"San Nicolás de los Garza"},{"name":"San Miguel el Alto"},{"name":"San Miguel de Papasquiaro"},{"name":"San Miguel de Allende"},{"name":"San Luis Río Colorado"},{"name":"San Luis Potosí"},{"name":"San Luis de la Paz"},{"name":"San Luis de la Paz"},{"name":"Cabo San Lucas"},{"name":"San Juan de los Lagos"},{"name":"San José Iturbide"},{"name":"San José del Cabo"},{"name":"San Francisco del Rincón"},{"name":"San Felipe"},{"name":"San Felipe"},{"name":"San Buenaventura"},{"name":"Nicolás R Casillas"},{"name":"Salvatierra"},{"name":"Saltillo"},{"name":"Salamanca"},{"name":"Sahuayo de Morelos"},{"name":"Sabinas Hidalgo"},{"name":"Ciudad Sabinas"},{"name":"Rosarito"},{"name":"Romita"},{"name":"Río Grande"},{"name":"Rincón de Romos"},{"name":"Ramos Arizpe"},{"name":"Santiago de Querétaro"},{"name":"Puruándiro"},{"name":"Puerto Vallarta"},{"name":"Puerto Peñasco"},{"name":"Piedras Negras"},{"name":"Petatlán"},{"name":"Pénjamo"},{"name":"Pátzcuaro"},{"name":"Parras de la Fuente"},{"name":"Paracho de Verduzco"},{"name":"Palau"},{"name":"Ojinaga"},{"name":"Ocotlán"},{"name":"Nuevo México"},{"name":"Nuevo Casas Grandes"},{"name":"Nueva Rosita"},{"name":"Nueva Italia de Ruiz"},{"name":"Nochistlán"},{"name":"Navolato"},{"name":"Navojoa"},{"name":"Nava"},{"name":"Moroleón"},{"name":"Morelia"},{"name":"Monterrey"},{"name":"Monclova"},{"name":"Mexicali"},{"name":"Pedro Meoqui"},{"name":"Melchor Múzquiz"},{"name":"Medina"},{"name":"Mazatlán"},{"name":"Matehuala"},{"name":"Matamoros"},{"name":"Marfil"},{"name":"Maravatío"},{"name":"Manzanillo"},{"name":"Rodolfo Sánchez Taboada"},{"name":"Magdalena de Kino"},{"name":"San Pedro Madera"},{"name":"Los Mochis"},{"name":"Loreto"},{"name":"León"},{"name":"Las Pintas de Arriba"},{"name":"La Piedad Cavadas"},{"name":"La Paz"},{"name":"La Orilla"},{"name":"Lagos de Moreno"},{"name":"La Cruz"},{"name":"La Barca"},{"name":"Santa Cruz de Juventino Rosas"},{"name":"Jocotepec"},{"name":"Jiquílpan de Juárez"},{"name":"Jiménez"},{"name":"Jesús María"},{"name":"Jerez de García Salinas"},{"name":"Jaral del Progreso"},{"name":"Jamay"},{"name":"Jalostotitlán"},{"name":"Ixtlán del Río"},{"name":"Ixtapa"},{"name":"Irapuato"},{"name":"Huetamo de Núñez"},{"name":"Huatabampo"},{"name":"Hidalgo del Parral"},{"name":"Heróica Zitácuaro"},{"name":"Nogales"},{"name":"Heroica Caborca"},{"name":"Hermosillo"},{"name":"Heroica Guaymas"},{"name":"Guasave"},{"name":"Guanajuato"},{"name":"Guamúchil"},{"name":"Guadalupe"},{"name":"Guadalupe"},{"name":"Guadalajara"},{"name":"Gomez Palacio"},{"name":"Juan Jose Rios"},{"name":"General Escobedo"},{"name":"Garza García"},{"name":"Fresnillo"},{"name":"Escuinapa de Hidalgo"},{"name":"Ensenada"},{"name":"Encarnación de Díaz"},{"name":"Empalme"},{"name":"Pueblo Nuevo"},{"name":"El Salto"},{"name":"El Pueblito"},{"name":"El Grullo"},{"name":"Victoria de Durango"},{"name":"Culiacán"},{"name":"Cuauhtémoc"},{"name":"Villa de Costa Rica"},{"name":"Cortazar"},{"name":"Compostela"},{"name":"Comonfort"},{"name":"Colima"},{"name":"Ciudad Obregón"},{"name":"Ciudad Lerdo"},{"name":"Ciudad Juárez"},{"name":"Ciudad Hidalgo"},{"name":"Ciudad Guzmán"},{"name":"Ciudad Delicias"},{"name":"Ciudad Constitución"},{"name":"Ciudad Camargo"},{"name":"Ciudad Anáhuac"},{"name":"Ciudad Altamirano"},{"name":"Ciudad Acuña"},{"name":"Chihuahua"},{"name":"Chapala"},{"name":"Celaya"},{"name":"Castaños"},{"name":"Cananea"},{"name":"Villa Juárez"},{"name":"Calvillo"},{"name":"Víctor Rosales"},{"name":"Autlán de Navarro"},{"name":"Atoyac de Álvarez"},{"name":"Atotonilco el Alto"},{"name":"Armeria"},{"name":"Arcelia"},{"name":"Arandas"},{"name":"Apodaca"},{"name":"Apatzingán"},{"name":"Apaseo el Grande"},{"name":"Apaseo el Alto"},{"name":"Ameca"},{"name":"Allende"},{"name":"Allende"},{"name":"Aguascalientes"},{"name":"Agua Prieta"},{"name":"Acaponeta"},{"name":"Acámbaro"},{"name":"Abasolo"},{"name":"Anáhuac"},{"name":"Dolores Hidalgo Cuna de la Independencia Nacional"},{"name":"Guacamayas"},{"name":"Ciudad Lázaro Cárdenas"},{"name":"Colonia del Valle"},{"name":"Colonia Lindavista"},{"name":"Colonia Nativitas"},{"name":"Las Delicias"},{"name":"San Pedro Garza Garcia"},{"name":"Soledad de Graciano Sánchez"},{"name":"Manzanillo"},{"name":"Naucalpan de Juárez"},{"name":"Hacienda Santa Fe"},{"name":"Fuentes del Valle"},{"name":"San Salvador Tizatlalli"},{"name":"Jardines de la Silla (Jardines)"},{"name":"San Buenaventura"},{"name":"Colonia Santa Teresa"},{"name":"San Jerónimo Cuatro Vientos"},{"name":"San Martín Azcatepec"},{"name":"Fraccionamiento Real Palmas"},{"name":"Pórticos de San Antonio"},{"name":"San Isidro"},{"name":"Centro Familiar la Soledad"},{"name":"San José Guadalupe Otzacatipan"},{"name":"Las Pintitas"},{"name":"Emiliano Zapata"},{"name":"San Antonio Tecómitl"},{"name":"Licenciado Benito Juárez (Campo Gobierno)"},{"name":"Teotihuacán de Arista"},{"name":"Jesús del Monte"},{"name":"San Jorge Pueblo Nuevo"},{"name":"Manuel Ojinaga"},{"name":"Terrazas del Valle"},{"name":"La Ermita"},{"name":"Lomas del Sur"},{"name":"Parque Industrial Ciudad Mitras"},{"name":"Mitras Poniente"},{"name":"Villa del Prado 2da Sección"},{"name":"Tres de Mayo"},{"name":"Don Antonio"},{"name":"Heroica Ciudad de Tlaxiaco"},{"name":"Ciudad de Huitzuco"},{"name":"Casa Blanca"},{"name":"La Providencia Siglo XXI"},{"name":"Ampliación San Mateo (Colonia Solidaridad)"},{"name":"Fraccionamiento Ciudad Olmeca"},{"name":"San Rafael Tlanalapan"},{"name":"Tecámac de Felipe Villanueva"},{"name":"Venceremos"},{"name":"Alborada Jaltenco"},{"name":"Crucecita"},{"name":"Padang Mat Sirat"},{"name":"Kuah"},{"name":"Jerantut"},{"name":"Raub"},{"name":"Batu Pahat"},{"name":"Parit Raja"},{"name":"Pekan Nenas"},{"name":"Pontian Kechil"},{"name":"Kampung Pasir Gudang Baru"},{"name":"Kota Tinggi"},{"name":"Taman Senai"},{"name":"Kulai"},{"name":"Skudai"},{"name":"Johor Bahru"},{"name":"Kluang"},{"name":"Yong Peng"},{"name":"Mersing"},{"name":"Segamat"},{"name":"Tangkak"},{"name":"Muar"},{"name":"Bakri"},{"name":"Labis"},{"name":"Kuala Selangor"},{"name":"Batang Berjuntai"},{"name":"Batu Arang"},{"name":"Shah Alam"},{"name":"Klang"},{"name":"Cukai"},{"name":"Kuala Lipis"},{"name":"Papar"},{"name":"Kota Kinabalu"},{"name":"Donggongon"},{"name":"Putatan"},{"name":"Kinarut"},{"name":"Ranau"},{"name":"Semporna"},{"name":"Victoria"},{"name":"Beaufort"},{"name":"Lahad Datu"},{"name":"Sandakan"},{"name":"Keningau"},{"name":"Tawau"},{"name":"Paka"},{"name":"Kertih"},{"name":"Kulim"},{"name":"Bagan Serai"},{"name":"Bedong"},{"name":"Simpang Empat"},{"name":"Taiping"},{"name":"Kuala Kangsar"},{"name":"Ipoh"},{"name":"Gua Musang"},{"name":"Kuala Terengganu"},{"name":"Marang"},{"name":"Tampin"},{"name":"Alor Gajah"},{"name":"Kampung Ayer Keroh"},{"name":"Sungai Udang"},{"name":"Malacca"},{"name":"Banting"},{"name":"Jenjarum"},{"name":"Semenyih"},{"name":"Seremban"},{"name":"Port Dickson"},{"name":"Sepang"},{"name":"Bahau"},{"name":"Kuala Pilah"},{"name":"Pekan"},{"name":"Mentekab"},{"name":"Temerluh"},{"name":"Butterworth"},{"name":"Perai"},{"name":"Bukit Mertajam"},{"name":"Nibong Tebal"},{"name":"Parit Buntar"},{"name":"Tasek Glugor"},{"name":"George Town"},{"name":"Serendah"},{"name":"Rawang"},{"name":"Petaling Jaya"},{"name":"Kuala Lumpur"},{"name":"Sabak Bernam"},{"name":"Sungai Besar"},{"name":"Kuantan"},{"name":"Batu Gajah"},{"name":"Kampar"},{"name":"Tapah Road"},{"name":"Bidur"},{"name":"Lumut"},{"name":"Teluk Intan"},{"name":"Gurun"},{"name":"Sungai Petani"},{"name":"Kepala Batas"},{"name":"Tanah Merah"},{"name":"Kuching"},{"name":"Simanggang"},{"name":"Sarikei"},{"name":"Sibu"},{"name":"Kangar"},{"name":"Jitra"},{"name":"Kuala Kedah"},{"name":"Alor Setar"},{"name":"Pasir Mas"},{"name":"Kota Bharu"},{"name":"Kudat"},{"name":"Kapit"},{"name":"Bintulu"},{"name":"Limbang"},{"name":"Miri"},{"name":"Ulu Tiram"},{"name":"Tanjung Tokong"},{"name":"Tanjung Sepat"},{"name":"Permatang Kuching"},{"name":"Peringat"},{"name":"Ladang Seri Kundang"},{"name":"Pantai Remis"},{"name":"Kuang"},{"name":"Klebang Besar"},{"name":"Kampung Tanjung Karang"},{"name":"Kampung Sungai Ara"},{"name":"Kampung Simpang Renggam"},{"name":"Kampong Pangkal Kalong"},{"name":"Kampong Masjid Tanah"},{"name":"Kampong Kadok"},{"name":"Kampong Dungun"},{"name":"Kampung Bukit Baharu"},{"name":"Kampung Baru Subang"},{"name":"Kampung Baharu Nilai"},{"name":"Kampong Baharu Balakong"},{"name":"Kampung Ayer Molek"},{"name":"Bukit Rambai"},{"name":"Bentong Town"},{"name":"Batu Berendam"},{"name":"Putrajaya"},{"name":"Bandar Labuan"},{"name":"Subang Jaya"},{"name":"Putra Heights"},{"name":"Pantai Cenang"},{"name":"Xai-Xai"},{"name":"Dondo"},{"name":"Macia"},{"name":"Tete"},{"name":"Ressano Garcia"},{"name":"Quelimane"},{"name":"Pemba"},{"name":"Nampula"},{"name":"Nacala"},{"name":"Montepuez"},{"name":"Mocímboa"},{"name":"Ilha de Moçambique"},{"name":"Maxixe"},{"name":"Matola"},{"name":"Maputo"},{"name":"Manjacaze"},{"name":"Lichinga"},{"name":"Inhambane"},{"name":"Cuamba"},{"name":"Chokwé"},{"name":"Chimoio"},{"name":"Chibuto"},{"name":"Beira"},{"name":"António Enes"},{"name":"Mutuáli"},{"name":"Katima Mulilo"},{"name":"Windhoek"},{"name":"Swakopmund"},{"name":"Rundu"},{"name":"Rehoboth"},{"name":"Otjiwarongo"},{"name":"Oshakati"},{"name":"Okahandja"},{"name":"Lüderitz"},{"name":"Keetmanshoop"},{"name":"Grootfontein"},{"name":"Gobabis"},{"name":"Walvis Bay"},{"name":"Nouméa"},{"name":"Mont-Dore"},{"name":"Dumbéa"},{"name":"Birni N Konni"},{"name":"Zinder"},{"name":"Tillabéri"},{"name":"Tibiri"},{"name":"Tessaoua"},{"name":"Téra"},{"name":"Tanout"},{"name":"Tahoua"},{"name":"Niamey"},{"name":"Nguigmi"},{"name":"Mirriah"},{"name":"Mayahi"},{"name":"Matamey"},{"name":"Maradi"},{"name":"Magaria"},{"name":"Madaoua"},{"name":"Illéla"},{"name":"Gaya"},{"name":"Dosso"},{"name":"Dogondoutchi"},{"name":"Diffa"},{"name":"Dakoro"},{"name":"Ayorou"},{"name":"Alaghsas"},{"name":"Agadez"},{"name":"Kingston"},{"name":"Zuru"},{"name":"Zungeru"},{"name":"Zaria"},{"name":"Yola"},{"name":"Yenagoa"},{"name":"Wukari"},{"name":"Wudil"},{"name":"Warri"},{"name":"Wamba"},{"name":"Uyo"},{"name":"Uromi"},{"name":"Umuahia"},{"name":"Ughelli"},{"name":"Ugep"},{"name":"Uga"},{"name":"Ubiaja"},{"name":"Tegina"},{"name":"Tambuwal"},{"name":"Talata Mafara"},{"name":"Takum"},{"name":"Suleja"},{"name":"Sokoto"},{"name":"Soba"},{"name":"Saki"},{"name":"Shagamu"},{"name":"Sapele"},{"name":"Rijau"},{"name":"Rano"},{"name":"Potiskum"},{"name":"Port Harcourt"},{"name":"Pindiga"},{"name":"Patigi"},{"name":"Pankshin"},{"name":"Ozubulu"},{"name":"Oyo"},{"name":"Oyan"},{"name":"Owo"},{"name":"Owerri"},{"name":"Otukpa"},{"name":"Otan Ayegbaju"},{"name":"Osogbo"},{"name":"Orita Eruwa"},{"name":"Onitsha"},{"name":"Ondo"},{"name":"Olupona"},{"name":"Okuta"},{"name":"Okrika"},{"name":"Okigwe"},{"name":"Okene"},{"name":"Oke Mesi"},{"name":"Oke Ila"},{"name":"Ohafia-Ifigh"},{"name":"Ogwashi-Uku"},{"name":"Oguta"},{"name":"Ogoja"},{"name":"Ogaminana"},{"name":"Offa"},{"name":"Ode"},{"name":"Obudu"},{"name":"Obonoma"},{"name":"Numan"},{"name":"Nsukka"},{"name":"Nnewi"},{"name":"Nkwerre"},{"name":"Nkpor"},{"name":"Nguru"},{"name":"Nasarawa"},{"name":"Nafada"},{"name":"Mubi"},{"name":"Moriki"},{"name":"Monguno"},{"name":"Mokwa"},{"name":"Modakeke"},{"name":"Minna"},{"name":"Marte"},{"name":"Malumfashi"},{"name":"Makurdi"},{"name":"Makoko"},{"name":"Maiduguri"},{"name":"Magumeri"},{"name":"Lokoja"},{"name":"Lere"},{"name":"Lapai"},{"name":"Lalupon"},{"name":"Lagos"},{"name":"Lafiagi"},{"name":"Lafia"},{"name":"Kwale"},{"name":"Kumo"},{"name":"Kumagunnam"},{"name":"Kukawa"},{"name":"Kuje"},{"name":"Kontagora"},{"name":"Kiyawa"},{"name":"Kisi"},{"name":"Keffi"},{"name":"Kaura Namoda"},{"name":"Katsina-Ala"},{"name":"Katsina"},{"name":"Kari"},{"name":"Kano"},{"name":"Kamba"},{"name":"Kaiama"},{"name":"Kagoro"},{"name":"Kafanchan"},{"name":"Kaduna"},{"name":"Kachia"},{"name":"Kabba"},{"name":"Jos"},{"name":"Jimeta"},{"name":"Jega"},{"name":"Jebba"},{"name":"Jalingo"},{"name":"Iwo"},{"name":"Itu"},{"name":"Isieke"},{"name":"Ise-Ekiti"},{"name":"Isanlu-Itedoijowa"},{"name":"Ipoti"},{"name":"Iperu"},{"name":"Inisa"},{"name":"Ilorin"},{"name":"Ilobu"},{"name":"Illela"},{"name":"Ilesa"},{"name":"Ilaro"},{"name":"Ila Orangun"},{"name":"Ikot Ekpene"},{"name":"Ikom"},{"name":"Ikirun"},{"name":"Ikire"},{"name":"Ikere-Ekiti"},{"name":"Ikeja"},{"name":"Ijero-Ekiti"},{"name":"Ijebu-Ode"},{"name":"Ijebu-Jesa"},{"name":"Ijebu-Igbo"},{"name":"Ihiala"},{"name":"Igede-Ekiti"},{"name":"Igbo-Ukwu"},{"name":"Igbor"},{"name":"Igbo-Ora"},{"name":"Igboho"},{"name":"Igbeti"},{"name":"Igbara-Odo"},{"name":"Ifo"},{"name":"Idanre"},{"name":"Idah"},{"name":"Ibi"},{"name":"Ibeto"},{"name":"Ibadan"},{"name":"Hadejia"},{"name":"Gwoza"},{"name":"Gwarzo"},{"name":"Gwaram"},{"name":"Gwadabawa"},{"name":"Gusau"},{"name":"Gummi"},{"name":"Gumel"},{"name":"Gombi"},{"name":"Gombe"},{"name":"Gembu"},{"name":"Geidam"},{"name":"Gbongan"},{"name":"Gaya"},{"name":"Gashua"},{"name":"Garko"},{"name":"Ganye"},{"name":"Gamboru"},{"name":"Funtua"},{"name":"Fiditi"},{"name":"Ezza-Ohu"},{"name":"Esuk Oron"},{"name":"Epe"},{"name":"Enugu-Ukwu"},{"name":"Enugu-Ezike"},{"name":"Enugu"},{"name":"Emure-Ekiti"},{"name":"Elele"},{"name":"Ekpoma"},{"name":"Eket"},{"name":"Ejigbo"},{"name":"Eha Amufu"},{"name":"Egbe"},{"name":"Effon Alaiye"},{"name":"Effium"},{"name":"Ebute Ikorodu"},{"name":"Dutsen Wai"},{"name":"Dutse"},{"name":"Dukku"},{"name":"Doma"},{"name":"Dikwa"},{"name":"Deba"},{"name":"Daura"},{"name":"Daura"},{"name":"Darazo"},{"name":"Damboa"},{"name":"Damaturu"},{"name":"Calabar"},{"name":"Burutu"},{"name":"Bukuru"},{"name":"Buguma"},{"name":"Bonny"},{"name":"Bode Saadu"},{"name":"Biu"},{"name":"Birnin Kudu"},{"name":"Birnin Kebbi"},{"name":"Sofo-Birnin-Gwari"},{"name":"Billiri"},{"name":"Bida"},{"name":"Benin City"},{"name":"Bende"},{"name":"Beli"},{"name":"Bauchi"},{"name":"Baro"},{"name":"Bama"},{"name":"Badagry"},{"name":"Babana"},{"name":"Azare"},{"name":"Awka"},{"name":"Awgu"},{"name":"Auchi"},{"name":"Asaba"},{"name":"Argungu"},{"name":"Aramoko-Ekiti"},{"name":"Apomu"},{"name":"Anchau"},{"name":"Amaigbo"},{"name":"Akwanga"},{"name":"Akure"},{"name":"Aku"},{"name":"Ajaokuta"},{"name":"Agulu"},{"name":"Agbor"},{"name":"Afikpo"},{"name":"Ado Odo"},{"name":"Ado-Ekiti"},{"name":"Abuja"},{"name":"Abeokuta"},{"name":"Abakaliki"},{"name":"Aba"},{"name":"Degema Hulk"},{"name":"Tipitapa"},{"name":"Somoto"},{"name":"Somotillo"},{"name":"Siuna"},{"name":"San Rafael del Sur"},{"name":"San Marcos"},{"name":"Rivas"},{"name":"Río Blanco"},{"name":"Rama"},{"name":"Puerto Cabezas"},{"name":"Ocotal"},{"name":"Nueva Guinea"},{"name":"Nandaime"},{"name":"Nagarote"},{"name":"Matagalpa"},{"name":"Masaya"},{"name":"Masatepe"},{"name":"Managua"},{"name":"León"},{"name":"La Paz Centro"},{"name":"Juigalpa"},{"name":"Jinotepe"},{"name":"Jinotega"},{"name":"Jalapa"},{"name":"Granada"},{"name":"Estelí"},{"name":"El Viejo"},{"name":"El Crucero"},{"name":"Diriamba"},{"name":"Corinto"},{"name":"Chinandega"},{"name":"Chichigalpa"},{"name":"Camoapa"},{"name":"Boaco"},{"name":"Bluefields"},{"name":"Ciudad Sandino"},{"name":"Zwolle"},{"name":"Zwijndrecht"},{"name":"Zutphen"},{"name":"Zundert"},{"name":"Zoetermeer"},{"name":"Zevenaar"},{"name":"Zeist"},{"name":"Zeewolde"},{"name":"Zandvoort"},{"name":"Zaltbommel"},{"name":"Zaanstad"},{"name":"Zaandam"},{"name":"Wolvega"},{"name":"Woerden"},{"name":"Woensdrecht"},{"name":"Wisch"},{"name":"Winterswijk"},{"name":"Winschoten"},{"name":"Wijk bij Duurstede"},{"name":"Wijchen"},{"name":"Wierden"},{"name":"Westervoort"},{"name":"Werkendam"},{"name":"Weesp"},{"name":"Weert"},{"name":"Wassenaar"},{"name":"Wageningen"},{"name":"Waddinxveen"},{"name":"Waalwijk"},{"name":"Waalre"},{"name":"Vught"},{"name":"Voorst"},{"name":"Voorschoten"},{"name":"Voorhout"},{"name":"Voorburg"},{"name":"Volendam"},{"name":"Vlissingen"},{"name":"Vlagtwedde"},{"name":"Vlaardingen"},{"name":"Vianen"},{"name":"Venray"},{"name":"Venlo"},{"name":"Velsen-Zuid"},{"name":"Velp"},{"name":"Veldhoven"},{"name":"Veghel"},{"name":"Veere"},{"name":"Veenendaal"},{"name":"Veendam"},{"name":"Valkenswaard"},{"name":"Utrecht"},{"name":"Urk"},{"name":"Uithoorn"},{"name":"Uden"},{"name":"Tubbergen"},{"name":"Tongelre"},{"name":"Tilburg"},{"name":"Tiel"},{"name":"Terneuzen"},{"name":"Tegelen"},{"name":"Steenwijk"},{"name":"Steenbergen"},{"name":"Staphorst"},{"name":"Stadskanaal"},{"name":"Spijkenisse"},{"name":"Someren"},{"name":"Soest"},{"name":"Sneek"},{"name":"Sliedrecht"},{"name":"Sittard"},{"name":"Sint-Oedenrode"},{"name":"'s-Hertogenbosch"},{"name":"'s-Gravenzande"},{"name":"The Hague"},{"name":"Schijndel"},{"name":"Schiedam"},{"name":"Scheveningen"},{"name":"Schagen"},{"name":"Rucphen"},{"name":"Rotterdam"},{"name":"Roosendaal"},{"name":"Roermond"},{"name":"Rijswijk"},{"name":"Ridderkerk"},{"name":"Rhoon"},{"name":"Rhenen"},{"name":"Raalte"},{"name":"Putten"},{"name":"Purmerend"},{"name":"Pijnacker"},{"name":"Papendrecht"},{"name":"Oud-Beijerland"},{"name":"Oss"},{"name":"Oosterhout"},{"name":"Oldenzaal"},{"name":"Oldebroek"},{"name":"Oisterwijk"},{"name":"Oegstgeest"},{"name":"Nuth"},{"name":"Nunspeet"},{"name":"Nuenen"},{"name":"Noordwijkerhout"},{"name":"Noordwijk-Binnen"},{"name":"Nijmegen"},{"name":"Nijkerk"},{"name":"Nieuwegein"},{"name":"Nederweert"},{"name":"Naarden"},{"name":"Naaldwijk"},{"name":"Mijdrecht"},{"name":"Middelharnis"},{"name":"Middelburg"},{"name":"Meppel"},{"name":"Meerssen"},{"name":"Medemblik"},{"name":"Maastricht"},{"name":"Maassluis"},{"name":"Maarssen"},{"name":"Losser"},{"name":"Loon op Zand"},{"name":"Lisse"},{"name":"Lindenholt"},{"name":"Lichtenvoorde"},{"name":"Leusden"},{"name":"Lelystad"},{"name":"Leiderdorp"},{"name":"Leiden"},{"name":"Leeuwarden"},{"name":"Leerdam"},{"name":"Leek"},{"name":"Krimpen aan den IJssel"},{"name":"Korrewegwijk"},{"name":"Kerkrade"},{"name":"Katwijk aan Zee"},{"name":"Kampen"},{"name":"IJsselstein"},{"name":"Huizen"},{"name":"Houten"},{"name":"Horst"},{"name":"Hoorn"},{"name":"Hoogezand"},{"name":"Hoogeveen"},{"name":"Hoofddorp"},{"name":"Hoge Vucht"},{"name":"Hoensbroek"},{"name":"Hilversum"},{"name":"Hilvarenbeek"},{"name":"Hillegom"},{"name":"Heusden"},{"name":"Hengelo"},{"name":"Hendrik-Ido-Ambacht"},{"name":"Helmond"},{"name":"Hellevoetsluis"},{"name":"Heiloo"},{"name":"Heesch"},{"name":"Heerlen"},{"name":"Heerhugowaard"},{"name":"Heerenveen"},{"name":"Heerde"},{"name":"Heemstede"},{"name":"Heemskerk"},{"name":"Harlingen"},{"name":"Harenkarspel"},{"name":"Haren"},{"name":"Harderwijk"},{"name":"Hardenberg"},{"name":"Haarlem"},{"name":"Haaksbergen"},{"name":"Groningen"},{"name":"Groesbeek"},{"name":"Gouda"},{"name":"Gorinchem"},{"name":"Goirle"},{"name":"Goes"},{"name":"Gennep"},{"name":"Gendringen"},{"name":"Geldrop"},{"name":"Geldermalsen"},{"name":"Geertruidenberg"},{"name":"Ermelo"},{"name":"Epe"},{"name":"Enschede"},{"name":"Enkhuizen"},{"name":"Emmen"},{"name":"Emmeloord"},{"name":"Elst"},{"name":"Elburg"},{"name":"Eindhoven"},{"name":"Eibergen"},{"name":"Eersel"},{"name":"Ede"},{"name":"Duiven"},{"name":"Druten"},{"name":"Dronten"},{"name":"Drimmelen"},{"name":"Driebergen-Rijsenburg"},{"name":"Drachten"},{"name":"Dordrecht"},{"name":"Dongen"},{"name":"Doetinchem"},{"name":"Diemen"},{"name":"Deventer"},{"name":"Den Helder"},{"name":"Delfzijl"},{"name":"Delft"},{"name":"Delfshaven"},{"name":"De Bilt"},{"name":"Dalfsen"},{"name":"Culemborg"},{"name":"Cuijk"},{"name":"Cranendonck"},{"name":"Castricum"},{"name":"Capelle aan den IJssel"},{"name":"Bussum"},{"name":"Bunschoten"},{"name":"Brunssum"},{"name":"Brummen"},{"name":"Broek op Langedijk"},{"name":"Broek in Waterland"},{"name":"Breda"},{"name":"Boxtel"},{"name":"Boskoop"},{"name":"Borssele"},{"name":"Borne"},{"name":"Born"},{"name":"Borger"},{"name":"Bodegraven"},{"name":"Bloemendaal"},{"name":"Bladel"},{"name":"Beverwijk"},{"name":"Beuningen"},{"name":"Best"},{"name":"Bergschenhoek"},{"name":"Bergeijk"},{"name":"Bergen op Zoom"},{"name":"Benthuizen"},{"name":"Beek"},{"name":"Barneveld"},{"name":"Barendrecht"},{"name":"Baarn"},{"name":"Asten"},{"name":"Assen"},{"name":"Arnhem"},{"name":"Apeldoorn"},{"name":"Anloo"},{"name":"Amsterdam"},{"name":"Amstelveen"},{"name":"Amersfoort"},{"name":"Alphen aan den Rijn"},{"name":"Almere Stad"},{"name":"Almelo"},{"name":"Alkmaar"},{"name":"Alblasserdam"},{"name":"Aalten"},{"name":"Aalsmeer"},{"name":"Amsterdam-Zuidoost"},{"name":"Berkel en Rodenrijs"},{"name":"Ypenburg"},{"name":"Trondheim"},{"name":"Tromsø"},{"name":"Tønsberg"},{"name":"Steinkjer"},{"name":"Stavanger"},{"name":"Skien"},{"name":"Sarpsborg"},{"name":"Sandnes"},{"name":"Sandefjord"},{"name":"Porsgrunn"},{"name":"Oslo"},{"name":"Moss"},{"name":"Molde"},{"name":"Mo i Rana"},{"name":"Lillehammer"},{"name":"Larvik"},{"name":"Kristiansund"},{"name":"Kristiansand"},{"name":"Kongsberg"},{"name":"Horten"},{"name":"Haugesund"},{"name":"Harstad"},{"name":"Hamar"},{"name":"Halden"},{"name":"Gjøvik"},{"name":"Fredrikstad"},{"name":"Drammen"},{"name":"Bodø"},{"name":"Bergen"},{"name":"Arendal"},{"name":"Ålesund"},{"name":"Askøy"},{"name":"Ytrebygda"},{"name":"Wāling"},{"name":"Tulsīpur"},{"name":"Tīkāpur"},{"name":"Tānsen"},{"name":"Sirāhā"},{"name":"Rājbirāj"},{"name":"Pokhara"},{"name":"Pātan"},{"name":"Panauti̇̄"},{"name":"Malangwa"},{"name":"Mahendranagar"},{"name":"Lahān"},{"name":"Kirtipur"},{"name":"Khāndbāri"},{"name":"Kathmandu"},{"name":"Janakpur"},{"name":"Jaleswar"},{"name":"Ithari"},{"name":"Ilām"},{"name":"Hetauda"},{"name":"Gulariyā"},{"name":"Gaur"},{"name":"Dharān Bāzār"},{"name":"Dhankutā"},{"name":"Dhangarhi"},{"name":"Dārchulā"},{"name":"Dailekh"},{"name":"Dadeldhurā"},{"name":"Butwāl"},{"name":"Bīrganj"},{"name":"Birātnagar"},{"name":"Bharatpur"},{"name":"Bhairāhawā"},{"name":"Bhadrapur"},{"name":"Banepā"},{"name":"Bāglung"},{"name":"Birendranagar"},{"name":"Dipayal"},{"name":"Nepalgunj"},{"name":"Yaren"},{"name":"Alofi"},{"name":"Wellington"},{"name":"Wanganui"},{"name":"Timaru"},{"name":"Taupo"},{"name":"Pukekohe East"},{"name":"Porirua"},{"name":"Paraparaumu"},{"name":"Palmerston North"},{"name":"North Shore"},{"name":"New Plymouth"},{"name":"Nelson"},{"name":"Napier"},{"name":"Manukau City"},{"name":"Mangere"},{"name":"Lower Hutt"},{"name":"Invercargill"},{"name":"Hastings"},{"name":"Hamilton"},{"name":"Dunedin"},{"name":"Christchurch"},{"name":"Auckland"},{"name":"Levin"},{"name":"Gisborne"},{"name":"Masterton"},{"name":"Tauranga"},{"name":"Papakura"},{"name":"Whakatane"},{"name":"Ashburton"},{"name":"Whangarei"},{"name":"Cambridge"},{"name":"Rotorua"},{"name":"Blenheim"},{"name":"Upper Hutt"},{"name":"Taradale"},{"name":"Waitakere"},{"name":"Sur"},{"name":"Sohar"},{"name":"Sufālat Samā’il"},{"name":"Shināş"},{"name":"Şalālah"},{"name":"Şaḩam"},{"name":"Nizwá"},{"name":"Muscat"},{"name":"Khasab"},{"name":"Izkī"},{"name":"‘Ibrī"},{"name":"Ibrā’"},{"name":"Bidbid"},{"name":"Bawshar"},{"name":"Barkā’"},{"name":"Bahlā’"},{"name":"Badīyah"},{"name":"As Suwayq"},{"name":"Seeb"},{"name":"Rustaq"},{"name":"Al Liwā’"},{"name":"Al Khābūrah"},{"name":"Al Buraymī"},{"name":"Ādam"},{"name":"Yanqul"},{"name":"Vista Alegre"},{"name":"Veracruz"},{"name":"Tocumen"},{"name":"Santiago de Veraguas"},{"name":"San Miguelito"},{"name":"Puerto Armuelles"},{"name":"Pedregal"},{"name":"Panamá"},{"name":"Pacora"},{"name":"Nuevo Arraiján"},{"name":"Las Cumbres"},{"name":"La Concepción"},{"name":"La Chorrera"},{"name":"La Cabima"},{"name":"David"},{"name":"Colón"},{"name":"Chitré"},{"name":"Chilibre"},{"name":"Chepo"},{"name":"Changuinola"},{"name":"Cativá"},{"name":"Arraiján"},{"name":"Alcalde Díaz"},{"name":"Aguadulce"},{"name":"Yurimaguas"},{"name":"Virú"},{"name":"Uchiza"},{"name":"Tumbes"},{"name":"Trujillo"},{"name":"Tocache"},{"name":"Tingo María"},{"name":"Tambo Grande"},{"name":"Talara"},{"name":"Sullana"},{"name":"Sechura"},{"name":"Santiago de Cao"},{"name":"San Pedro de Lloc"},{"name":"Saña"},{"name":"Rioja"},{"name":"Querecotillo"},{"name":"Pucallpa"},{"name":"Piura"},{"name":"Pimentel"},{"name":"Picsi"},{"name":"Paita"},{"name":"Paiján"},{"name":"Pacasmayo"},{"name":"Moyobamba"},{"name":"Monsefú"},{"name":"Moche"},{"name":"Marcavelica"},{"name":"La Unión"},{"name":"Laredo"},{"name":"La Peca"},{"name":"Lambayeque"},{"name":"Juanjuí"},{"name":"Jaén"},{"name":"Iquitos"},{"name":"Huaraz"},{"name":"Huánuco"},{"name":"Huamachuco"},{"name":"Guadalupe"},{"name":"Ferreñafe"},{"name":"Coishco"},{"name":"Chulucanas"},{"name":"Chongoyape"},{"name":"Chocope"},{"name":"Chimbote"},{"name":"Chiclayo"},{"name":"Chepén"},{"name":"Chachapoyas"},{"name":"Catacaos"},{"name":"Cajamarca"},{"name":"Bellavista"},{"name":"Bagua Grande"},{"name":"La Breita"},{"name":"Zarumilla"},{"name":"Yunguyo"},{"name":"Yanacancha"},{"name":"Tarma"},{"name":"Tambopata"},{"name":"Tacna"},{"name":"Santiago de Surco"},{"name":"Sicuani"},{"name":"Satipo"},{"name":"San Vicente de Cañete"},{"name":"Santa Ana"},{"name":"San Isidro"},{"name":"San Clemente"},{"name":"Puno"},{"name":"Puerto Maldonado"},{"name":"Pisco"},{"name":"Paramonga"},{"name":"Nuevo Imperial"},{"name":"Nazca"},{"name":"Moquegua"},{"name":"Mollendo"},{"name":"Minas de Marcona"},{"name":"Mala"},{"name":"Lima"},{"name":"La Oroya"},{"name":"Junín"},{"name":"Juliaca"},{"name":"Jauja"},{"name":"Imperial"},{"name":"Ilo"},{"name":"Ilave"},{"name":"Ica"},{"name":"Huaura"},{"name":"Huarmey"},{"name":"Huaral"},{"name":"Huanta"},{"name":"Huancayo"},{"name":"Huancavelica"},{"name":"Hualmay"},{"name":"Huacho"},{"name":"Cusco"},{"name":"Chosica"},{"name":"Chincha Alta"},{"name":"Chaupimarca"},{"name":"Chancay"},{"name":"Cerro de Pasco"},{"name":"Camaná"},{"name":"Callao"},{"name":"Barranca"},{"name":"Ayaviri"},{"name":"Ayacucho"},{"name":"Arequipa"},{"name":"Andahuaylas"},{"name":"Abancay"},{"name":"La Rinconada"},{"name":"Punaauia"},{"name":"Papeete"},{"name":"Faaa"},{"name":"Wewak"},{"name":"Port Moresby"},{"name":"Popondetta"},{"name":"Mount Hagen"},{"name":"Mendi"},{"name":"Madang"},{"name":"Lae"},{"name":"Kokopo"},{"name":"Kimbe"},{"name":"Goroka"},{"name":"Daru"},{"name":"Bulolo"},{"name":"Arawa"},{"name":"Zamboanga"},{"name":"Wao"},{"name":"Virac"},{"name":"Vigan"},{"name":"Victorias"},{"name":"Victoria"},{"name":"Veruela"},{"name":"Valencia"},{"name":"Urdaneta"},{"name":"Ualog"},{"name":"Tupi"},{"name":"Tuguegarao City"},{"name":"Trento"},{"name":"Toledo"},{"name":"Tiwi"},{"name":"Ternate"},{"name":"Teresa"},{"name":"Telabastagan"},{"name":"Taytay"},{"name":"Tayabas"},{"name":"Tarlac City"},{"name":"Tanza"},{"name":"Tanjay"},{"name":"Tangub"},{"name":"Tandag"},{"name":"Tanay"},{"name":"Tanauan"},{"name":"Tanauan"},{"name":"Taloc"},{"name":"Talisay"},{"name":"Talisay"},{"name":"Talisay"},{"name":"Talavera"},{"name":"Talacogon"},{"name":"Tagum"},{"name":"Taguig"},{"name":"Tagudin"},{"name":"Tagoloan"},{"name":"Tagbilaran City"},{"name":"Tagas"},{"name":"Tacurong"},{"name":"Tabuk"},{"name":"Tabaco"},{"name":"Taal"},{"name":"Surigao"},{"name":"Surallah"},{"name":"Subic"},{"name":"Suay"},{"name":"Sorsogon"},{"name":"Solano"},{"name":"Solana"},{"name":"Sitangkai"},{"name":"Sipalay"},{"name":"Silang"},{"name":"Sibulan"},{"name":"Sexmoan"},{"name":"Sebu"},{"name":"Sariaya"},{"name":"San Vicente"},{"name":"Santo Tomas"},{"name":"Santol"},{"name":"Santiago"},{"name":"Santa Rosa"},{"name":"Santa Maria"},{"name":"Santa Maria"},{"name":"Santa Cruz"},{"name":"Santa Cruz"},{"name":"Santa Cruz"},{"name":"Santa Catalina"},{"name":"Santa Barbara"},{"name":"Santa Ana"},{"name":"San Simon"},{"name":"San Pedro"},{"name":"San Pascual"},{"name":"San Pablo"},{"name":"San Nicolas"},{"name":"San Narciso"},{"name":"San Miguel"},{"name":"San Miguel"},{"name":"San Mateo"},{"name":"San Mateo"},{"name":"San Mariano"},{"name":"San Marcelino"},{"name":"San Luis"},{"name":"San Leonardo"},{"name":"San Juan"},{"name":"San Jose del Monte"},{"name":"San Jose"},{"name":"San Jose"},{"name":"San Ildefonso"},{"name":"San Francisco"},{"name":"Aurora"},{"name":"San Francisco"},{"name":"San Fernando"},{"name":"San Fernando"},{"name":"San Fernando"},{"name":"San Antonio"},{"name":"San Antonio"},{"name":"San Antonio"},{"name":"Sampaloc"},{"name":"Samal"},{"name":"Samal"},{"name":"Sagay"},{"name":"Sablayan"},{"name":"Roxas"},{"name":"Roxas City"},{"name":"Roxas"},{"name":"Romblon"},{"name":"Rizal"},{"name":"Recodo"},{"name":"Ramos"},{"name":"Ramon"},{"name":"Quiapo"},{"name":"Quezon City"},{"name":"Quezon"},{"name":"Quezon"},{"name":"Pulupandan"},{"name":"Pulong Santa Cruz"},{"name":"Pulilan"},{"name":"Puerto Princesa"},{"name":"Port Area"},{"name":"Porac"},{"name":"Polomolok"},{"name":"Polangui"},{"name":"Plaridel"},{"name":"Pio"},{"name":"Pinamungahan"},{"name":"Pinamalayan"},{"name":"Pililla"},{"name":"Pilar"},{"name":"Pila"},{"name":"Peñaranda"},{"name":"Patuto"},{"name":"Passi"},{"name":"Parang"},{"name":"Paraiso"},{"name":"Papaya"},{"name":"Paombong"},{"name":"Pantubig"},{"name":"Paniqui"},{"name":"Pangil"},{"name":"Pandi"},{"name":"Pandacaqui"},{"name":"Panalanoy"},{"name":"Panabo"},{"name":"Palo"},{"name":"Palayan City"},{"name":"Pagbilao"},{"name":"Pagaluñgan"},{"name":"Pagadian"},{"name":"Paete"},{"name":"Pacol"},{"name":"Ozamiz City"},{"name":"Oroquieta"},{"name":"Ormoc"},{"name":"Orion"},{"name":"Orani"},{"name":"Olongapo"},{"name":"Obando"},{"name":"Noveleta"},{"name":"Norzagaray"},{"name":"New Corella"},{"name":"Nasugbu"},{"name":"Narra"},{"name":"Naic"},{"name":"Nagcarlan"},{"name":"Naga"},{"name":"Naga"},{"name":"Nabunturan"},{"name":"Nabua"},{"name":"Muricay"},{"name":"Murcia"},{"name":"Muñoz"},{"name":"Morong"},{"name":"Morong"},{"name":"Rodriguez"},{"name":"Monkayo"},{"name":"Molave"},{"name":"Minglanilla"},{"name":"Midsayap"},{"name":"Meycauayan"},{"name":"Mexico"},{"name":"Mercedes"},{"name":"Mendez-Nuñez"},{"name":"Mauban"},{"name":"Mati"},{"name":"Masinloc"},{"name":"Masbate"},{"name":"Masantol"},{"name":"Mariveles"},{"name":"Marilao"},{"name":"Mariano"},{"name":"Marawi City"},{"name":"Maramag"},{"name":"Maragondon"},{"name":"Mantampay"},{"name":"Mansilingan"},{"name":"Mansalay"},{"name":"Manolo Fortich"},{"name":"Manila"},{"name":"Manibaug Pasig"},{"name":"Mangaldan"},{"name":"Mandaue City"},{"name":"Mandaluyong City"},{"name":"Mankayan"},{"name":"Manay"},{"name":"Manapla"},{"name":"Manaoag"},{"name":"Mamburao"},{"name":"Mamatid"},{"name":"Malvar"},{"name":"Maluso"},{"name":"Maluñgun"},{"name":"Malolos"},{"name":"Malita"},{"name":"Malilipot"},{"name":"Malaybalay"},{"name":"Malapatan"},{"name":"Malanday"},{"name":"Malabanban Norte"},{"name":"Makati City"},{"name":"Mahayag"},{"name":"Magsaysay"},{"name":"Magarao"},{"name":"Maganoy"},{"name":"Magalang"},{"name":"Mabalacat City"},{"name":"Maasin"},{"name":"Maao"},{"name":"Lupon"},{"name":"Lumbang"},{"name":"Lucena"},{"name":"Lucban"},{"name":"Lubao"},{"name":"Los Baños"},{"name":"Lopez"},{"name":"Loma de Gato"},{"name":"Loboc"},{"name":"Lipa City"},{"name":"Lingayen"},{"name":"Limay"},{"name":"Liloan"},{"name":"Lilio"},{"name":"Libon"},{"name":"Libertad"},{"name":"Legaspi"},{"name":"Laur"},{"name":"La Trinidad"},{"name":"Lapu-Lapu City"},{"name":"La Paz"},{"name":"Laoang"},{"name":"Laoag"},{"name":"Lala"},{"name":"Laguilayan"},{"name":"La Castellana"},{"name":"La Carlota"},{"name":"Labo"},{"name":"Koronadal"},{"name":"Kidapawan"},{"name":"Kawit"},{"name":"Kalibo (poblacion)"},{"name":"Kabankalan"},{"name":"Kabacan"},{"name":"Jose Pañganiban"},{"name":"Jolo"},{"name":"Jasaan"},{"name":"Jalajala"},{"name":"Jagna"},{"name":"Jaen"},{"name":"Itogon"},{"name":"Isulan"},{"name":"Isabela"},{"name":"City of Isabela"},{"name":"Irosin"},{"name":"Iriga City"},{"name":"Ipil"},{"name":"Indang"},{"name":"Imus"},{"name":"Iloilo"},{"name":"Iligan City"},{"name":"Ilagan"},{"name":"Iba"},{"name":"Hinigaran"},{"name":"Himamaylan"},{"name":"Hermosa"},{"name":"Hagonoy"},{"name":"Guyong"},{"name":"Gumaca"},{"name":"Guiset East"},{"name":"Guimba"},{"name":"Guihulñgan"},{"name":"Guiguinto"},{"name":"Goa"},{"name":"Glan"},{"name":"Gerona"},{"name":"General Trias"},{"name":"General Tinio"},{"name":"General Santos"},{"name":"General Mamerto Natividad"},{"name":"Gapan"},{"name":"Escalante"},{"name":"Saravia"},{"name":"Dumaguete"},{"name":"Don Carlos"},{"name":"Domalanoan"},{"name":"Dologon"},{"name":"Dipolog"},{"name":"Dinalupihan"},{"name":"Digos"},{"name":"Diadi"},{"name":"Del Pilar"},{"name":"Davao"},{"name":"Dasmariñas"},{"name":"Dapitan"},{"name":"Danao"},{"name":"Danao"},{"name":"Daet"},{"name":"Cuenca"},{"name":"Cotabato"},{"name":"Cordova"},{"name":"Consolacion"},{"name":"Concepcion"},{"name":"Concepcion Ibaba"},{"name":"Compostela"},{"name":"Compostela"},{"name":"Cebu City"},{"name":"Cavite City"},{"name":"Catbalogan"},{"name":"Catarman"},{"name":"Catanauan"},{"name":"Castillejos"},{"name":"Carmona"},{"name":"Cogan"},{"name":"Carigara"},{"name":"Cardona"},{"name":"Carcar"},{"name":"Capas"},{"name":"Canlaon"},{"name":"Candelaria"},{"name":"Candaba"},{"name":"Camiling"},{"name":"Calumpit"},{"name":"Calumpang"},{"name":"Calbayog City"},{"name":"Calauan"},{"name":"Calauag"},{"name":"Calatagan"},{"name":"Calasiao"},{"name":"Calapan"},{"name":"Calamba"},{"name":"Calaca"},{"name":"Calabanga"},{"name":"Cainta"},{"name":"Cagayan de Oro"},{"name":"Cadiz"},{"name":"Cabiao"},{"name":"Cabayangan"},{"name":"Cabanatuan City"},{"name":"Cabagan"},{"name":"Cabadbaran"},{"name":"Butuan"},{"name":"Bustos"},{"name":"Boroon"},{"name":"Burgos"},{"name":"Bunawan"},{"name":"Buluan"},{"name":"Bulaon"},{"name":"Bulan"},{"name":"Bulacan"},{"name":"Buhi"},{"name":"Bugo"},{"name":"Buenavista"},{"name":"Budta"},{"name":"Botolan"},{"name":"Borongan"},{"name":"Bongao"},{"name":"Bongabon"},{"name":"Bogo"},{"name":"Bocaue"},{"name":"Bislig"},{"name":"Binonga"},{"name":"Binmaley"},{"name":"Binangonan"},{"name":"Binalbagan"},{"name":"Bignay Uno"},{"name":"Bayugan"},{"name":"Bayombong"},{"name":"Baybay"},{"name":"Bayawan"},{"name":"Bayambang"},{"name":"Bay"},{"name":"Bauang"},{"name":"Bauan"},{"name":"Bato"},{"name":"Batangas"},{"name":"Batac City"},{"name":"Baras"},{"name":"Bantayan"},{"name":"Bansalan"},{"name":"Bañga"},{"name":"Banaybanay"},{"name":"Bambang"},{"name":"Baliuag"},{"name":"Balayan"},{"name":"Balanga"},{"name":"Balamban"},{"name":"Balagtas"},{"name":"Bais"},{"name":"Bah-Bah"},{"name":"Baguio"},{"name":"Bago City"},{"name":"Baggabag B"},{"name":"Bacoor"},{"name":"Bacolod City"},{"name":"Babo-Pangulo"},{"name":"Baao"},{"name":"Atimonan"},{"name":"Asia"},{"name":"Aringay"},{"name":"Arayat"},{"name":"Aparri"},{"name":"Apalit"},{"name":"Antipolo"},{"name":"Angono"},{"name":"Angeles City"},{"name":"Angat"},{"name":"Amadeo"},{"name":"Alicia"},{"name":"Aliaga"},{"name":"Alaminos"},{"name":"Alabel"},{"name":"Agoo"},{"name":"Abuyog"},{"name":"Abucay"},{"name":"Bagong Pagasa"},{"name":"Malingao"},{"name":"Pasig City"},{"name":"Pandan"},{"name":"Apas"},{"name":"Chuhar Jamāli"},{"name":"Rāwala Kot"},{"name":"Pīr jo Goth"},{"name":"Khairpur"},{"name":"Zhob"},{"name":"Zaida"},{"name":"Zāhir Pīr"},{"name":"Zafarwāl"},{"name":"Yazman"},{"name":"Wazīrābād"},{"name":"Warburton"},{"name":"Wārāh"},{"name":"Vihāri"},{"name":"Utmānzai"},{"name":"Uthal"},{"name":"Usta Muhammad"},{"name":"Umarkot"},{"name":"Ubauro"},{"name":"Turbat"},{"name":"Topi"},{"name":"Toba Tek Singh"},{"name":"Thul"},{"name":"Thatta"},{"name":"Thāru Shāh"},{"name":"Taunsa"},{"name":"Tānk"},{"name":"Tangi"},{"name":"Tando Muhammad Khān"},{"name":"Tando Jām"},{"name":"Tando Allāhyār"},{"name":"Tando Ādam"},{"name":"Tāndliānwāla"},{"name":"Talhār"},{"name":"Talamba"},{"name":"Talagang"},{"name":"Tāl"},{"name":"Swābi"},{"name":"Surkhpur"},{"name":"Sukkur"},{"name":"Sukheke Mandi"},{"name":"Sodhra"},{"name":"Sīta Road"},{"name":"Sinjhoro"},{"name":"Sillānwāli"},{"name":"Sibi"},{"name":"Sialkot"},{"name":"Shujāābād"},{"name":"Shorko"},{"name":"Shikārpur"},{"name":"Sheikhupura"},{"name":"Sharqpur"},{"name":"Shakargarr"},{"name":"Shahr Sultān"},{"name":"Shāhpur Chākar"},{"name":"Shahkot"},{"name":"Shāhdādpur"},{"name":"Shāhdādkot"},{"name":"Shabqadar"},{"name":"Sehwān"},{"name":"Sargodha"},{"name":"Sarāi Sidhu"},{"name":"Sarāi Naurang"},{"name":"Sarāi Ālamgīr"},{"name":"Sangla Hill"},{"name":"Sānghar"},{"name":"Sambriāl"},{"name":"Sakrand"},{"name":"Sāhīwāl"},{"name":"Sahiwal"},{"name":"Sādiqābād"},{"name":"Rohri"},{"name":"Renāla Khurd"},{"name":"Rawalpindi"},{"name":"Ratodero"},{"name":"Rānīpur"},{"name":"Rājanpur"},{"name":"Rāja Jang"},{"name":"Rāiwind"},{"name":"Rādhan"},{"name":"Rabwāh"},{"name":"Quetta"},{"name":"Kambar"},{"name":"Qādirpur Rān"},{"name":"Pishin"},{"name":"Pīr Mahal"},{"name":"Pindi Gheb"},{"name":"Pindi Bhattiān"},{"name":"Pind Dādan Khān"},{"name":"Phālia"},{"name":"Peshawar"},{"name":"Pattoki"},{"name":"Pasrūr"},{"name":"Pasni"},{"name":"Pāno Āqil"},{"name":"Pākpattan"},{"name":"Pahārpur"},{"name":"Pad Īdan"},{"name":"Pabbi"},{"name":"Okāra"},{"name":"Nushki"},{"name":"Nawābshāh"},{"name":"Naushahro Fīroz"},{"name":"Naushahra Virkān"},{"name":"Naudero"},{"name":"Nasīrābād"},{"name":"Nārowāl"},{"name":"Nārang"},{"name":"Naukot"},{"name":"Nankāna Sāhib"},{"name":"Muzaffargarh"},{"name":"Muzaffarābād"},{"name":"Mustafābād"},{"name":"Murree"},{"name":"Murīdke"},{"name":"Multān"},{"name":"Moro"},{"name":"Mithi"},{"name":"Mitha Tiwāna"},{"name":"Mīrpur Māthelo"},{"name":"Mirpur Khas"},{"name":"Mingora"},{"name":"Minchinābād"},{"name":"Miānwāli"},{"name":"Miān Channūn"},{"name":"Mehrābpur"},{"name":"Mehar"},{"name":"Mātli"},{"name":"Matiāri"},{"name":"Mastung"},{"name":"Mardan"},{"name":"Mānsehra"},{"name":"Mangla"},{"name":"Mandi Bahāuddīn"},{"name":"Mānānwāla"},{"name":"Māmu Kānjan"},{"name":"Malir Cantonment"},{"name":"Malakwāl"},{"name":"Mailsi"},{"name":"Mach"},{"name":"Loralai"},{"name":"Lodhrān"},{"name":"Layyah"},{"name":"Lārkāna"},{"name":"Lāliān"},{"name":"Lāla Mūsa"},{"name":"Lakki Marwat"},{"name":"Lahore"},{"name":"Ladhewāla Warāich"},{"name":"Lāchi"},{"name":"Kunri"},{"name":"Kunjāh"},{"name":"Kundiān"},{"name":"Kulāchi"},{"name":"Kot Samāba"},{"name":"Kotri"},{"name":"Kot Rādha Kishan"},{"name":"Kot Mūmin"},{"name":"Kot Malik"},{"name":"Kotli Lohārān"},{"name":"Kotli"},{"name":"Kot Ghulām Muhammad"},{"name":"Kot Diji"},{"name":"Kot Addu"},{"name":"Kohāt"},{"name":"Khushāb"},{"name":"Khurriānwāla"},{"name":"Khewra"},{"name":"Khāriān"},{"name":"Khārān"},{"name":"Khānpur"},{"name":"Khānpur"},{"name":"Khāngarh"},{"name":"Khāngāh Dogrān"},{"name":"Khalābat"},{"name":"Khairpur Nathan Shāh"},{"name":"Khairpur"},{"name":"Khairpur"},{"name":"Kasūr"},{"name":"Kashmor"},{"name":"Karor"},{"name":"Karachi"},{"name":"Kanganpur"},{"name":"Kandiāro"},{"name":"Kandhkot"},{"name":"Kāmra"},{"name":"Kamoke"},{"name":"Kamīr"},{"name":"Kamar Mushāni"},{"name":"Kamālia"},{"name":"Kalūr Kot"},{"name":"Kallar Kahār"},{"name":"Kāleke Mandi"},{"name":"Kalāt"},{"name":"Kālābāgh"},{"name":"Kahūta"},{"name":"Kohror Pakka"},{"name":"Kāhna"},{"name":"Kabīrwāla"},{"name":"Johi"},{"name":"Jīwani"},{"name":"Jhumra"},{"name":"Jhol"},{"name":"Jhelum"},{"name":"Jhawāriān"},{"name":"Jhang Sadr"},{"name":"Jauharābād"},{"name":"Jatoi Shimāli"},{"name":"Jarānwāla"},{"name":"Jand"},{"name":"Jāmpur"},{"name":"Jalālpur Pīrwāla"},{"name":"Jalālpur"},{"name":"Jahāniān Shāh"},{"name":"Jacobābād"},{"name":"Islamabad"},{"name":"Hyderabad"},{"name":"Hujra"},{"name":"Hingorja"},{"name":"Hazro"},{"name":"Haveliān"},{"name":"Haveli"},{"name":"Hāsilpur"},{"name":"Hasan Abdāl"},{"name":"Haru Zbad"},{"name":"Harnoli"},{"name":"Harīpur"},{"name":"Hangu"},{"name":"Hāla"},{"name":"Hāfizābād"},{"name":"Hadāli"},{"name":"Gwadar"},{"name":"Gujrāt"},{"name":"Gujrānwāla"},{"name":"Gūjar Khān"},{"name":"Gojra"},{"name":"Ghotki"},{"name":"Ghauspur"},{"name":"Ghāro"},{"name":"Garh Mahārāja"},{"name":"Gambat"},{"name":"Fort Abbās"},{"name":"Fazalpur"},{"name":"Chak Two Hundred Forty-Nine TDA"},{"name":"Faruka"},{"name":"Faqīrwāli"},{"name":"Faisalābād"},{"name":"Eminābād"},{"name":"Dunyāpur"},{"name":"Dunga Bunga"},{"name":"Dullewāla"},{"name":"Dīr"},{"name":"Dīpālpur"},{"name":"Dinga"},{"name":"Dijkot"},{"name":"Digri"},{"name":"Dhoro Naro"},{"name":"Dhanot"},{"name":"Dera Ismāīl Khān"},{"name":"Dera Ghazi Khan"},{"name":"Dera Bugti"},{"name":"Daur"},{"name":"Dāūd Khel"},{"name":"Daska"},{"name":"Darya Khān"},{"name":"Dājal"},{"name":"Dadu"},{"name":"Dādhar"},{"name":"Chūniān"},{"name":"Chūhar Kāna"},{"name":"Chor"},{"name":"Choa Saidān Shāh"},{"name":"Chishtiān Mandi"},{"name":"Chiniot"},{"name":"Chīchāwatni"},{"name":"Chawinda"},{"name":"Charsadda"},{"name":"Chaman"},{"name":"Chakwāl"},{"name":"Chak Āzam Saffo"},{"name":"Būrewāla"},{"name":"Bhopālwāla"},{"name":"Bhit Shāh"},{"name":"Bhimbar"},{"name":"Bhera"},{"name":"Bhawāna"},{"name":"Bhān"},{"name":"Bhalwāl"},{"name":"Bhakkar"},{"name":"Bhāi Pheru"},{"name":"Bela"},{"name":"Bat Khela"},{"name":"Basīrpur"},{"name":"Bannu"},{"name":"Bahāwalpur"},{"name":"Bahāwalnagar"},{"name":"Badīn"},{"name":"Baddomalhi"},{"name":"Attock City"},{"name":"Ārifwāla"},{"name":"Amangarh"},{"name":"Alīpur"},{"name":"Akora"},{"name":"Ahmadpur East"},{"name":"Abbottābād"},{"name":"Bahāwalnagar"},{"name":"Nowshera Cantonment"},{"name":"Ahmadpur Siāl"},{"name":"New Bādāh"},{"name":"Tando Ghulām Ali"},{"name":"Sethārja Old"},{"name":"Risālpur"},{"name":"Malakwal City"},{"name":"Żyrardów"},{"name":"Żoliborz"},{"name":"Zielonka"},{"name":"Zamość"},{"name":"Zambrów"},{"name":"Ząbki"},{"name":"Wyszków"},{"name":"Wołomin"},{"name":"Wola"},{"name":"Włochy"},{"name":"Wieliczka"},{"name":"Wesoła"},{"name":"Wawer"},{"name":"Warsaw"},{"name":"Ursus"},{"name":"Tomaszów Mazowiecki"},{"name":"Tomaszów Lubelski"},{"name":"Tarnów"},{"name":"Tarnobrzeg"},{"name":"Targówek"},{"name":"Szczytno"},{"name":"Świdnik"},{"name":"Suwałki"},{"name":"Sulejówek"},{"name":"Staszów"},{"name":"Starachowice"},{"name":"Stalowa Wola"},{"name":"Śródmieście"},{"name":"Sokołów Podlaski"},{"name":"Sokółka"},{"name":"Sochaczew"},{"name":"Skierniewice"},{"name":"Skarżysko-Kamienna"},{"name":"Siemiatycze"},{"name":"Siedlce"},{"name":"Sanok"},{"name":"Sandomierz"},{"name":"Rzeszów"},{"name":"Ropczyce"},{"name":"Rembertów"},{"name":"Rawa Mazowiecka"},{"name":"Radzyń Podlaski"},{"name":"Radom"},{"name":"Pułtusk"},{"name":"Puławy"},{"name":"Przeworsk"},{"name":"Przemyśl"},{"name":"Przasnysz"},{"name":"Pruszków"},{"name":"Płońsk"},{"name":"Pisz"},{"name":"Pionki"},{"name":"Piastów"},{"name":"Piaseczno"},{"name":"Otwock"},{"name":"Ostrów Mazowiecka"},{"name":"Ostrowiec Świętokrzyski"},{"name":"Ostrołęka"},{"name":"Opoczno"},{"name":"Olsztyn"},{"name":"Olecko"},{"name":"Ochota"},{"name":"Nowy Targ"},{"name":"Nowy Sącz"},{"name":"Nowy Dwór Mazowiecki"},{"name":"Nisko"},{"name":"Mrągowo"},{"name":"Mokotów"},{"name":"Mława"},{"name":"Mińsk Mazowiecki"},{"name":"Milanówek"},{"name":"Mielec"},{"name":"Międzyrzec Podlaski"},{"name":"Marki"},{"name":"Łuków"},{"name":"Lublin"},{"name":"Lubartów"},{"name":"Łomża"},{"name":"Łomianki"},{"name":"Lidzbark Warmiński"},{"name":"Legionowo"},{"name":"Łęczna"},{"name":"Łapy"},{"name":"Łańcut"},{"name":"Krosno"},{"name":"Krasnystaw"},{"name":"Kraśnik"},{"name":"Kozienice"},{"name":"Konstancin-Jeziorna"},{"name":"Końskie"},{"name":"Kobyłka"},{"name":"Kielce"},{"name":"Kętrzyn"},{"name":"Kabaty"},{"name":"Józefów"},{"name":"Jędrzejów"},{"name":"Jasło"},{"name":"Jarosław"},{"name":"Hrubieszów"},{"name":"Hajnówka"},{"name":"Grodzisk Mazowiecki"},{"name":"Grajewo"},{"name":"Gorlice"},{"name":"Giżycko"},{"name":"Gierłoż"},{"name":"Garwolin"},{"name":"Ełk"},{"name":"Działdowo"},{"name":"Dęblin"},{"name":"Dębica"},{"name":"Ciechanów"},{"name":"Chełm"},{"name":"Busko-Zdrój"},{"name":"Brzesko"},{"name":"Bochnia"},{"name":"Biłgoraj"},{"name":"Bielsk Podlaski"},{"name":"Bielany"},{"name":"Białystok"},{"name":"Białołeka"},{"name":"Biała Podlaska"},{"name":"Bemowo"},{"name":"Bartoszyce"},{"name":"Augustów"},{"name":"Żywiec"},{"name":"Żory"},{"name":"Złotów"},{"name":"Złotoryja"},{"name":"Zielona Góra"},{"name":"Zgorzelec"},{"name":"Zgierz"},{"name":"Zduńska Wola"},{"name":"Zawiercie"},{"name":"Żary"},{"name":"Zakopane"},{"name":"Żagań"},{"name":"Zabrze"},{"name":"Ząbkowice Śląskie"},{"name":"Września"},{"name":"Wrocław"},{"name":"Wodzisław Śląski"},{"name":"Włocławek"},{"name":"Wieluń"},{"name":"Wejherowo"},{"name":"Wałcz"},{"name":"Wałbrzych"},{"name":"Wągrowiec"},{"name":"Wadowice"},{"name":"Ustroń"},{"name":"Ustka"},{"name":"Tychy"},{"name":"Turek"},{"name":"Trzebinia"},{"name":"Trzcianka"},{"name":"Toruń"},{"name":"Tczew"},{"name":"Tarnowskie Góry"},{"name":"Szczecinek"},{"name":"Szczecin"},{"name":"Szamotuły"},{"name":"Świnoujście"},{"name":"Świętochłowice"},{"name":"Świebodzin"},{"name":"Świecie"},{"name":"Świebodzice"},{"name":"Świdwin"},{"name":"Świdnica"},{"name":"Swarzędz"},{"name":"Sulechów"},{"name":"Strzelce Opolskie"},{"name":"Strzegom"},{"name":"Starogard Gdański"},{"name":"Stargard Szczeciński"},{"name":"Środa Wielkopolska"},{"name":"Śrem"},{"name":"Sosnowiec"},{"name":"Sopot"},{"name":"Solec Kujawski"},{"name":"Słupsk"},{"name":"Słubice"},{"name":"Skawina"},{"name":"Sierpc"},{"name":"Sieradz"},{"name":"Siemianowice Śląskie"},{"name":"Rypin"},{"name":"Rydułtowy"},{"name":"Rybnik"},{"name":"Rumia"},{"name":"Ruda Śląska"},{"name":"Reda"},{"name":"Rawicz"},{"name":"Radzionków"},{"name":"Radomsko"},{"name":"Radlin"},{"name":"Racibórz"},{"name":"Pyskowice"},{"name":"Pszczyna"},{"name":"Pruszcz Gdański"},{"name":"Prudnik"},{"name":"Poznań"},{"name":"Polkowice"},{"name":"Police"},{"name":"Płock"},{"name":"Pleszew"},{"name":"Piotrków Trybunalski"},{"name":"Piła"},{"name":"Piekary Śląskie"},{"name":"Pabianice"},{"name":"Ozorków"},{"name":"Oświęcim"},{"name":"Ostrów Wielkopolski"},{"name":"Ostróda"},{"name":"Orzesze"},{"name":"Opole"},{"name":"Olkusz"},{"name":"Oleśnica"},{"name":"Oława"},{"name":"Oborniki"},{"name":"Nysa"},{"name":"Nowy Tomyśl"},{"name":"Nowogard"},{"name":"Nowa Sól"},{"name":"Nowa Ruda"},{"name":"Namysłów"},{"name":"Nakło nad Notecią"},{"name":"Myszków"},{"name":"Mysłowice"},{"name":"Myślenice"},{"name":"Mikołów"},{"name":"Międzyrzecz"},{"name":"Malbork"},{"name":"Luboń"},{"name":"Lubliniec"},{"name":"Lubin"},{"name":"Lubań"},{"name":"Łowicz"},{"name":"Łódź"},{"name":"Libiąż"},{"name":"Leszno"},{"name":"Legnica"},{"name":"Lędziny"},{"name":"Łęczyca"},{"name":"Lębork"},{"name":"Łaziska Górne"},{"name":"Łask"},{"name":"Kwidzyn"},{"name":"Kutno"},{"name":"Krotoszyn"},{"name":"Krapkowice"},{"name":"Kraków"},{"name":"Koszalin"},{"name":"Kostrzyn nad Odrą"},{"name":"Kościerzyna"},{"name":"Kościan"},{"name":"Konstantynów Łódzki"},{"name":"Konin"},{"name":"Kołobrzeg"},{"name":"Koło"},{"name":"Knurów"},{"name":"Kluczbork"},{"name":"Kłodzko"},{"name":"Kęty"},{"name":"Kędzierzyn-Koźle"},{"name":"Katowice"},{"name":"Kartuzy"},{"name":"Kamienna Góra"},{"name":"Kalisz"},{"name":"Jelenia Góra"},{"name":"Jelcz"},{"name":"Jaworzno"},{"name":"Jawor"},{"name":"Jastrzębie Zdrój"},{"name":"Jarocin"},{"name":"Inowrocław"},{"name":"Iława"},{"name":"Gubin"},{"name":"Gryfino"},{"name":"Gryfice"},{"name":"Grudziądz"},{"name":"Gostynin"},{"name":"Gostyń"},{"name":"Gorzów Wielkopolski"},{"name":"Goleniów"},{"name":"Gniezno"},{"name":"Głuchołazy"},{"name":"Głowno"},{"name":"Głogów"},{"name":"Gliwice"},{"name":"Gdynia"},{"name":"Gdańsk"},{"name":"Fordon"},{"name":"Elbląg"},{"name":"Dzierżoniów"},{"name":"Dąbrowa Górnicza"},{"name":"Częstochowa"},{"name":"Czerwionka-Leszczyny"},{"name":"Czeladź"},{"name":"Czechowice-Dziedzice"},{"name":"Cieszyn"},{"name":"Chrzanów"},{"name":"Choszczno"},{"name":"Chorzów"},{"name":"Chojnice"},{"name":"Chodzież"},{"name":"Chełmża"},{"name":"Chełmno"},{"name":"Bytów"},{"name":"Bytom"},{"name":"Bydgoszcz"},{"name":"Brzeg"},{"name":"Brodnica"},{"name":"Braniewo"},{"name":"Bolesławiec"},{"name":"Boguszów-Gorce"},{"name":"Bogatynia"},{"name":"Bieruń"},{"name":"Bielsko-Biala"},{"name":"Bielawa"},{"name":"Białogard"},{"name":"Bełchatów"},{"name":"Będzin"},{"name":"Andrychów"},{"name":"Aleksandrów Łódzki"},{"name":"Ursynów"},{"name":"Praga Północ"},{"name":"Praga Południe"},{"name":"Jelcz Laskowice"},{"name":"Saint-Pierre"},{"name":"Adamstown"},{"name":"Aguadilla"},{"name":"Arecibo"},{"name":"Barceloneta"},{"name":"Bayamón"},{"name":"Caguas"},{"name":"Candelaria"},{"name":"Carolina"},{"name":"Cataño"},{"name":"Cayey"},{"name":"Fajardo"},{"name":"Guayama"},{"name":"Guaynabo"},{"name":"Humacao"},{"name":"Levittown"},{"name":"Manatí"},{"name":"Mayagüez"},{"name":"Ponce"},{"name":"San Juan"},{"name":"Trujillo Alto"},{"name":"Vega Baja"},{"name":"Yauco"},{"name":"Rafaḩ"},{"name":"An Nuşayrāt"},{"name":"Khān Yūnis"},{"name":"Jabālyā"},{"name":"Gaza"},{"name":"Dayr al Balaḩ"},{"name":"Bayt Lāhyā"},{"name":"Bayt Ḩānūn"},{"name":"Banī Suhaylā"},{"name":"Al Burayj"},{"name":"‘Abasān al Kabīrah"},{"name":"Yuta"},{"name":"Ţūlkarm"},{"name":"Ţūbās"},{"name":"Sa‘īr"},{"name":"Ramallah"},{"name":"Qalqīlyah"},{"name":"Qabāţīyah"},{"name":"Nablus"},{"name":"Janīn"},{"name":"Idhnā"},{"name":"Ḩalḩūl"},{"name":"Dūrā"},{"name":"Bethlehem"},{"name":"Bayt Jālā"},{"name":"Banī Na‘īm"},{"name":"Balāţah"},{"name":"Az̧ Z̧āhirīyah"},{"name":"As Samū‘"},{"name":"Ar Rām wa Ḑāḩiyat al Barīd"},{"name":"Jericho"},{"name":"Al Yāmūn"},{"name":"Hebron"},{"name":"Al Bīrah"},{"name":"Al ‘Ayzarīyah"},{"name":"Old City"},{"name":"Al Qarārah"},{"name":"Az Zuwāydah"},{"name":"East Jerusalem"},{"name":"Vila Franca de Xira"},{"name":"Vialonga"},{"name":"Torres Vedras"},{"name":"Tomar"},{"name":"Sintra"},{"name":"Sesimbra"},{"name":"Setúbal"},{"name":"São João da Talha"},{"name":"São Domingos de Rana"},{"name":"Santarém"},{"name":"Santa Iria da Azóia"},{"name":"Sacavém"},{"name":"Rio de Mouro"},{"name":"Ramada"},{"name":"Queluz"},{"name":"Quarteira"},{"name":"Póvoa de Santa Iria"},{"name":"Portimão"},{"name":"Portalegre"},{"name":"Pontinha"},{"name":"Pombal"},{"name":"Pinhal Novo"},{"name":"Piedade"},{"name":"Peniche"},{"name":"Parede"},{"name":"Palmela"},{"name":"Paço de Arcos"},{"name":"Olhão"},{"name":"Odivelas"},{"name":"Montijo"},{"name":"Monte Estoril"},{"name":"Monsanto"},{"name":"Moita"},{"name":"Marinha Grande"},{"name":"Loures"},{"name":"Loulé"},{"name":"Lisbon"},{"name":"Linda-a-Velha"},{"name":"Leiria"},{"name":"Laranjeiro"},{"name":"Lagos"},{"name":"Funchal"},{"name":"Faro"},{"name":"Évora"},{"name":"Estoril"},{"name":"Entroncamento"},{"name":"Corroios"},{"name":"Charneca"},{"name":"Castelo Branco"},{"name":"Cascais"},{"name":"Carnaxide"},{"name":"Carcavelos"},{"name":"Caparica"},{"name":"Camarate"},{"name":"Câmara de Lobos"},{"name":"Caldas da Rainha"},{"name":"Cacém"},{"name":"Belas"},{"name":"Beja"},{"name":"Barreiro"},{"name":"Arrentela"},{"name":"Amora"},{"name":"Amadora"},{"name":"Almada"},{"name":"Algés"},{"name":"Alcabideche"},{"name":"Albufeira"},{"name":"Viseu"},{"name":"Vila Real"},{"name":"Vilar de Andorinho"},{"name":"Vila Nova de Gaia"},{"name":"Vila do Conde"},{"name":"Viana do Castelo"},{"name":"Valongo"},{"name":"Sequeira"},{"name":"Senhora da Hora"},{"name":"São Pedro da Cova"},{"name":"São Mamede de Infesta"},{"name":"São João da Madeira"},{"name":"Rio Tinto"},{"name":"Póvoa de Varzim"},{"name":"Porto"},{"name":"Ponte de Lima"},{"name":"Pedroso"},{"name":"Ovar"},{"name":"Oliveira do Douro"},{"name":"Monção"},{"name":"Matosinhos"},{"name":"Maia"},{"name":"Leça do Bailio"},{"name":"Leça da Palmeira"},{"name":"Ílhavo"},{"name":"Guimarães"},{"name":"Guarda"},{"name":"Gondomar"},{"name":"Feira"},{"name":"Fânzeres"},{"name":"Fafe"},{"name":"Esposende"},{"name":"Esposende"},{"name":"Ermesinde"},{"name":"Custoias"},{"name":"Covilhã"},{"name":"Coimbra"},{"name":"Canidelo"},{"name":"Bragança"},{"name":"Braga"},{"name":"Bougado"},{"name":"Barcelos"},{"name":"Baguim do Monte"},{"name":"Aveiro"},{"name":"Águas Santas"},{"name":"Ponta Delgada"},{"name":"Melekeok"},{"name":"Villarrica"},{"name":"Villa Hayes"},{"name":"Villa Elisa"},{"name":"San Lorenzo"},{"name":"San Juan Bautista"},{"name":"San Antonio"},{"name":"Presidente Franco"},{"name":"Pilar"},{"name":"Pedro Juan Caballero"},{"name":"Nemby"},{"name":"Limpio"},{"name":"Lambaré"},{"name":"Itauguá"},{"name":"Itá"},{"name":"Fernando de la Mora"},{"name":"Encarnación"},{"name":"Coronel Oviedo"},{"name":"Concepción"},{"name":"Colonia Mariano Roque Alonso"},{"name":"Ciudad del Este"},{"name":"Capiatá"},{"name":"Caazapá"},{"name":"Caaguazú"},{"name":"Caacupé"},{"name":"Asunción"},{"name":"Umm Şalāl Muḩammad"},{"name":"Ar Rayyān"},{"name":"Al Wakrah"},{"name":"Al Khawr"},{"name":"Doha"},{"name":"Saint-Pierre"},{"name":"Saint-Paul"},{"name":"Saint-Louis"},{"name":"Saint-Leu"},{"name":"Saint-Joseph"},{"name":"Sainte-Suzanne"},{"name":"Sainte-Marie"},{"name":"Saint-Denis"},{"name":"Saint-Benoît"},{"name":"Saint-André"},{"name":"Le Tampon"},{"name":"Le Port"},{"name":"La Possession"},{"name":"Piton Saint-Leu"},{"name":"Zimnicea"},{"name":"Zărnești"},{"name":"Zalău"},{"name":"Vulcan"},{"name":"Voluntari"},{"name":"Vişeu de Sus"},{"name":"Vatra Dornei"},{"name":"Vaslui"},{"name":"Urziceni"},{"name":"Turnu Măgurele"},{"name":"Turda"},{"name":"Tulcea"},{"name":"Târnăveni"},{"name":"Târgu Secuiesc"},{"name":"Târgu Neamţ"},{"name":"Târgu-Mureş"},{"name":"Târgu Jiu"},{"name":"Târgovişte"},{"name":"Timişoara"},{"name":"Tecuci"},{"name":"Suceava"},{"name":"Slatina"},{"name":"Şimleu Silvaniei"},{"name":"Sighetu Marmaţiei"},{"name":"Sibiu"},{"name":"Sfântu-Gheorghe"},{"name":"Sebeş"},{"name":"Satu Mare"},{"name":"Salonta"},{"name":"Săcele"},{"name":"Roșiorii de Vede"},{"name":"Roman"},{"name":"Râşnov"},{"name":"Râmnicu Vâlcea"},{"name":"Râmnicu Sărat"},{"name":"Reşiţa"},{"name":"Reghin-Sat"},{"name":"Rădăuți"},{"name":"Popeşti-Leordeni"},{"name":"Ploieşti"},{"name":"Piteşti"},{"name":"Piatra Neamţ"},{"name":"Petroşani"},{"name":"Petrila"},{"name":"Pantelimon"},{"name":"Orăştie"},{"name":"Oradea"},{"name":"Olteniţa"},{"name":"Odorheiu Secuiesc"},{"name":"Ocna Mureş"},{"name":"Năvodari"},{"name":"Motru"},{"name":"Moreni"},{"name":"Moineşti"},{"name":"Mizil"},{"name":"Miercurea-Ciuc"},{"name":"Mediaş"},{"name":"Medgidia"},{"name":"Mangalia"},{"name":"Lupeni"},{"name":"Lugoj"},{"name":"Luduş"},{"name":"Iaşi"},{"name":"Huşi"},{"name":"Hunedoara"},{"name":"Gura Humorului"},{"name":"Giurgiu"},{"name":"Gherla"},{"name":"Gheorgheni"},{"name":"Galaţi"},{"name":"Găeşti"},{"name":"Focșani"},{"name":"Filiaşi"},{"name":"Fetești-Gară"},{"name":"Feteşti"},{"name":"Fălticeni"},{"name":"Făgăraș"},{"name":"Drobeta-Turnu Severin"},{"name":"Drăgăşani"},{"name":"Dorohoi"},{"name":"Deva"},{"name":"Dej"},{"name":"Curtea de Argeş"},{"name":"Cugir"},{"name":"Craiova"},{"name":"Corabia"},{"name":"Constanţa"},{"name":"Comăneşti"},{"name":"Codlea"},{"name":"Cluj-Napoca"},{"name":"Cisnădie"},{"name":"Câmpulung Moldovenesc"},{"name":"Câmpina"},{"name":"Câmpia Turzii"},{"name":"Cernavodă"},{"name":"Carei"},{"name":"Caransebeş"},{"name":"Caracal"},{"name":"Calafat"},{"name":"Buzău"},{"name":"Buhuşi"},{"name":"Buftea"},{"name":"Bucharest"},{"name":"Breaza"},{"name":"Braşov"},{"name":"Brăila"},{"name":"Brad"},{"name":"Botoşani"},{"name":"Borşa"},{"name":"Bocşa"},{"name":"Blaj"},{"name":"Bistriţa"},{"name":"Bârlad"},{"name":"Balş"},{"name":"Băileşti"},{"name":"Băicoi"},{"name":"Baia Sprie"},{"name":"Baia Mare"},{"name":"Bacău"},{"name":"Arad"},{"name":"Alexandria"},{"name":"Alba Iulia"},{"name":"Aiud"},{"name":"Adjud"},{"name":"Baia Mare"},{"name":"Paşcani"},{"name":"Mioveni"},{"name":"Sighișoara"},{"name":"Slobozia"},{"name":"Sector 1"},{"name":"Sector 2"},{"name":"Sector 3"},{"name":"Sector 4"},{"name":"Sector 5"},{"name":"Sector 6"},{"name":"Zrenjanin"},{"name":"Zemun"},{"name":"Zaječar"},{"name":"Vršac"},{"name":"Vranje"},{"name":"Trstenik"},{"name":"Stara Pazova"},{"name":"Sremčica"},{"name":"Smederevska Palanka"},{"name":"Smederevo"},{"name":"Senta"},{"name":"Prokuplje"},{"name":"Požarevac"},{"name":"Pirot"},{"name":"Pančevo"},{"name":"Obrenovac"},{"name":"Novi Pazar"},{"name":"Nova Pazova"},{"name":"Niš"},{"name":"Negotin"},{"name":"Leskovac"},{"name":"Lazarevac"},{"name":"Kruševac"},{"name":"Kraljevo"},{"name":"Kragujevac"},{"name":"Kikinda"},{"name":"Jagodina"},{"name":"Inđija"},{"name":"Gornji Milanovac"},{"name":"Ćuprija"},{"name":"Čačak"},{"name":"Bor"},{"name":"Belgrade"},{"name":"Bečej"},{"name":"Aranđelovac"},{"name":"Vrbas"},{"name":"Valjevo"},{"name":"Užice"},{"name":"Subotica"},{"name":"Sremska Mitrovica"},{"name":"Sombor"},{"name":"Šabac"},{"name":"Ruma"},{"name":"Novi Sad"},{"name":"Bačka Topola"},{"name":"Bačka Palanka"},{"name":"Apatin"},{"name":"Knjazevac"},{"name":"Udomlya"},{"name":"Sosnovka"},{"name":"Sasovo"},{"name":"Zyuzino"},{"name":"Zyablikovo"},{"name":"Zverevo"},{"name":"Zvenigorod"},{"name":"Zlatoust"},{"name":"Zimovniki"},{"name":"Zhulebino"},{"name":"Zhukovskiy"},{"name":"Zhukovka"},{"name":"Zhirnovsk"},{"name":"Zhigulevsk"},{"name":"Zherdevka"},{"name":"Zheleznovodsk"},{"name":"Zheleznogorsk"},{"name":"Zheleznodorozhnyy"},{"name":"Zernograd"},{"name":"Zelenokumsk"},{"name":"Zelenograd"},{"name":"Zelenodolsk"},{"name":"Zelenchukskaya"},{"name":"Zavolzh’ye"},{"name":"Zarechnyy"},{"name":"Zaraysk"},{"name":"Zapolyarnyy"},{"name":"Zamoskvorech’ye"},{"name":"Zainsk"},{"name":"Yur’yev-Pol’skiy"},{"name":"Yoshkar-Ola"},{"name":"Yeysk"},{"name":"Yessentukskaya"},{"name":"Yessentuki"},{"name":"Yershov"},{"name":"Yemva"},{"name":"Yelizavetinskaya"},{"name":"Yelets"},{"name":"Yelan’"},{"name":"Yelabuga"},{"name":"Yegor’yevsk"},{"name":"Yegorlykskaya"},{"name":"Yefremov"},{"name":"Yasnyy"},{"name":"Yasnogorsk"},{"name":"Yasenevo"},{"name":"Yartsevo"},{"name":"Yaroslavl"},{"name":"Yaransk"},{"name":"Yanaul"},{"name":"Yagry"},{"name":"Yablonovskiy"},{"name":"Vyshniy Volochëk"},{"name":"Vyselki"},{"name":"Vyksa"},{"name":"Vykhino-Zhulebino"},{"name":"Vyborg"},{"name":"Vyazniki"},{"name":"Vyaz’ma"},{"name":"Vyatskiye Polyany"},{"name":"Vsevolozhsk"},{"name":"Votkinsk"},{"name":"Vostryakovo"},{"name":"Vostryakovo"},{"name":"Voskresensk"},{"name":"Voronezh"},{"name":"Altuf’yevskiy"},{"name":"Vorob’yovo"},{"name":"Volzhskiy"},{"name":"Volzhsk"},{"name":"Vol’sk"},{"name":"Volokolamsk"},{"name":"Vologda"},{"name":"Volkhov"},{"name":"Nagornyy"},{"name":"Volgorechensk"},{"name":"Volgograd"},{"name":"Volgodonsk"},{"name":"Vnukovo"},{"name":"Novovladykino"},{"name":"Vladimir"},{"name":"Vladikavkaz"},{"name":"Vidnoye"},{"name":"Vichuga"},{"name":"Veshnyaki"},{"name":"Vereshchagino"},{"name":"Venëv"},{"name":"Vel’sk"},{"name":"Velikiy Ustyug"},{"name":"Velikiye Luki"},{"name":"Vatutino"},{"name":"Valuyki"},{"name":"Valday"},{"name":"Vagonoremont"},{"name":"Uzlovaya"},{"name":"Uvarovo"},{"name":"Uva"},{"name":"Ust’-Labinsk"},{"name":"Ust’-Katav"},{"name":"Ust’-Dzheguta"},{"name":"Usman’"},{"name":"Uryupinsk"},{"name":"Urus-Martan"},{"name":"Uritsk"},{"name":"Unecha"},{"name":"Ulyanovsk"},{"name":"Ukhta"},{"name":"Uglich"},{"name":"Ufa"},{"name":"Uchkeken"},{"name":"Uchaly"},{"name":"Uchaly"},{"name":"Tyrnyauz"},{"name":"Tver"},{"name":"Tuymazy"},{"name":"Tutayev"},{"name":"Tula"},{"name":"Tuchkovo"},{"name":"Tuapse"},{"name":"Tsimlyansk"},{"name":"Trubchevsk"},{"name":"Troparëvo"},{"name":"Troitskaya"},{"name":"Troitsk"},{"name":"Tosno"},{"name":"Torzhok"},{"name":"Tomilino"},{"name":"Tol’yatti"},{"name":"Timashëvsk"},{"name":"Tikhvin"},{"name":"Tikhoretsk"},{"name":"Teykovo"},{"name":"Terek"},{"name":"Tyoply Stan"},{"name":"Temryuk"},{"name":"Tekstil’shchiki"},{"name":"Tbilisskaya"},{"name":"Tambov"},{"name":"Agidel’"},{"name":"Taganrog"},{"name":"Taganskiy"},{"name":"Syzran’"},{"name":"Syktyvkar"},{"name":"Svobody"},{"name":"Sviblovo"},{"name":"Svetogorsk"},{"name":"Svetlyy"},{"name":"Svetlograd"},{"name":"Suvorovskaya"},{"name":"Suvorov"},{"name":"Surovikino"},{"name":"Surkhakhi"},{"name":"Sukhinichi"},{"name":"Stupino"},{"name":"Strunino"},{"name":"Stroitel’"},{"name":"Strogino"},{"name":"Sterlitamak"},{"name":"Stavropol’"},{"name":"Staryy Oskol"},{"name":"Staroshcherbinovskaya"},{"name":"Starominskaya"},{"name":"Starodub"},{"name":"Staraya Russa"},{"name":"Staraya Kupavna"},{"name":"Staraya Derevnya"},{"name":"Sovetsk"},{"name":"Sovetsk"},{"name":"Sosnovyy Bor"},{"name":"Sosnovaya Polyana"},{"name":"Sosnogorsk"},{"name":"Sortavala"},{"name":"Sorochinsk"},{"name":"Solntsevo"},{"name":"Solnechnogorsk"},{"name":"Sol’-Iletsk"},{"name":"Solikamsk"},{"name":"Sokol’niki"},{"name":"Sokol"},{"name":"Sokol"},{"name":"Sofrino"},{"name":"Sochi"},{"name":"Sobinka"},{"name":"Smolensk"},{"name":"Slobodskoy"},{"name":"Slobodka"},{"name":"Slavyansk-na-Kubani"},{"name":"Slantsy"},{"name":"Skopin"},{"name":"Skhodnya"},{"name":"Sim"},{"name":"Sibay"},{"name":"Shuya"},{"name":"Shushary"},{"name":"Shumerlya"},{"name":"Mikhaylovsk"},{"name":"Shilovo"},{"name":"Sheksna"},{"name":"Shebekino"},{"name":"Shchukino"},{"name":"Shchigry"},{"name":"Shcherbinka"},{"name":"Shchelkovo"},{"name":"Shchëkino"},{"name":"Shatura"},{"name":"Shar’ya"},{"name":"Shali"},{"name":"Shakhun’ya"},{"name":"Shakhty"},{"name":"Severskaya"},{"name":"Severo-Zadonsk"},{"name":"Severoural’sk"},{"name":"Severomorsk"},{"name":"Severodvinsk"},{"name":"Severnyy"},{"name":"Setun’"},{"name":"Sestroretsk"},{"name":"Sertolovo"},{"name":"Serpukhov"},{"name":"Sergiyev Posad"},{"name":"Sergach"},{"name":"Serdobsk"},{"name":"Semiluki"},{"name":"Semikarakorsk"},{"name":"Semënovskoye"},{"name":"Semënov"},{"name":"Sel’tso"},{"name":"Segezha"},{"name":"Satka"},{"name":"Sarov"},{"name":"Saratov"},{"name":"Sarapul"},{"name":"Saransk"},{"name":"Saraktash"},{"name":"Saint Petersburg"},{"name":"Samara"},{"name":"Sal’sk"},{"name":"Salavat"},{"name":"Safonovo"},{"name":"Rzhev"},{"name":"Rybnoye"},{"name":"Rybinsk"},{"name":"Rybatskoye"},{"name":"Ryazhsk"},{"name":"Ryazan’"},{"name":"Ruzayevka"},{"name":"Rublëvo"},{"name":"Rtishchevo"},{"name":"Rostov-na-Donu"},{"name":"Rostov"},{"name":"Rostokino"},{"name":"Rossosh’"},{"name":"Rossosh’"},{"name":"Roslavl’"},{"name":"Roshal’"},{"name":"Rodniki"},{"name":"Revda"},{"name":"Reutov"},{"name":"Razumnoye"},{"name":"Rayevskiy"},{"name":"Rasskazovo"},{"name":"Ramenki"},{"name":"Pyatigorsk"},{"name":"Pushkino"},{"name":"Pushkin"},{"name":"Pushchino"},{"name":"Pugachev"},{"name":"Pskov"},{"name":"Protvino"},{"name":"Proletarsk"},{"name":"Prokhladnyy"},{"name":"Priyutovo"},{"name":"Privolzhskiy"},{"name":"Privolzhsk"},{"name":"Priozërsk"},{"name":"Primorsko-Akhtarsk"},{"name":"Pridonskoy"},{"name":"Povorino"},{"name":"Kotlovka"},{"name":"Annino"},{"name":"Polyarnyye Zori"},{"name":"Polyarnyy"},{"name":"Pokrovskoye-Streshnëvo"},{"name":"Pokrov"},{"name":"Pokhvistnevo"},{"name":"Podporozh’ye"},{"name":"Podol’sk"},{"name":"Pochep"},{"name":"Ryazanskiy"},{"name":"Plavsk"},{"name":"Pikalëvo"},{"name":"Petushki"},{"name":"Petrozavodsk"},{"name":"Petrovskaya"},{"name":"Petrovsk"},{"name":"Petrodvorets"},{"name":"Peterhof"},{"name":"Pestovo"},{"name":"Pervoural’sk"},{"name":"Perovo"},{"name":"Perm"},{"name":"Pereslavl’-Zalesskiy"},{"name":"Novo-Peredelkino"},{"name":"Penza"},{"name":"Pechora"},{"name":"Pavlovskiy Posad"},{"name":"Pavlovskaya"},{"name":"Pavlovsk"},{"name":"Pavlovsk"},{"name":"Pashkovskiy"},{"name":"Pallasovka"},{"name":"Ozëry"},{"name":"Ozerki"},{"name":"Otradnyy"},{"name":"Otradnoye"},{"name":"Otradnoye"},{"name":"Otradnaya"},{"name":"Ostrov"},{"name":"Ostrogozhsk"},{"name":"Ostashkov"},{"name":"Ostankinskiy"},{"name":"Osa"},{"name":"Orsk"},{"name":"Orlovskiy"},{"name":"Orenburg"},{"name":"Orël"},{"name":"Orekhovo-Zuyevo"},{"name":"Orekhovo-Borisovo Severnoye"},{"name":"Ordzhonikidzevskaya"},{"name":"Onega"},{"name":"Omutninsk"},{"name":"Olenegorsk"},{"name":"Tsotsin-Yurt"},{"name":"Oktyabr’skiy"},{"name":"Odintsovo"},{"name":"Ochër"},{"name":"Ochakovo-Matveyevskoye"},{"name":"Obninsk"},{"name":"Nytva"},{"name":"Nyandoma"},{"name":"Nurlat"},{"name":"Novyy Oskol"},{"name":"Novyye Kuz’minki"},{"name":"Novyye Cherëmushki"},{"name":"Novozybkov"},{"name":"Novovoronezh"},{"name":"Novouzensk"},{"name":"Novoul’yanovsk"},{"name":"Novotroitsk"},{"name":"Novotitarovskaya"},{"name":"Novoshakhtinsk"},{"name":"Novorossiysk"},{"name":"Novopokrovskaya"},{"name":"Novopavlovsk"},{"name":"Novomoskovsk"},{"name":"Novomichurinsk"},{"name":"Novokuz’minki"},{"name":"Novokuybyshevsk"},{"name":"Novokubansk"},{"name":"Novokhovrino"},{"name":"Novogireyevo"},{"name":"Novodvinsk"},{"name":"Novocherkassk"},{"name":"Novocheboksarsk"},{"name":"Novoanninskiy"},{"name":"Novoaleksandrovsk"},{"name":"Velikiy Novgorod"},{"name":"Novaya Usman’"},{"name":"Novaya Derevnya"},{"name":"Noginsk"},{"name":"Nizhnyaya Tura"},{"name":"Nizhniy Tagil"},{"name":"Nizhniy Novgorod"},{"name":"Nizhniy Lomov"},{"name":"Nizhnekamsk"},{"name":"Nikulino"},{"name":"Nikol’skoye"},{"name":"Nikol’skoye"},{"name":"Nikol’sk"},{"name":"Nikolayevsk"},{"name":"Nikel’"},{"name":"Nezlobnaya"},{"name":"Nevinnomyssk"},{"name":"Nevel’"},{"name":"Nesterovskaya"},{"name":"Nerekhta"},{"name":"Nelidovo"},{"name":"Neftekamsk"},{"name":"Neftegorsk"},{"name":"Nazran’"},{"name":"Navashino"},{"name":"Nar'yan-Mar"},{"name":"Nartkala"},{"name":"Naro-Fominsk"},{"name":"Nal’chik"},{"name":"Nakhabino"},{"name":"Naberezhnyye Chelny"},{"name":"Mytishchi"},{"name":"Murom"},{"name":"Murmansk"},{"name":"Mtsensk"},{"name":"Mozhga"},{"name":"Mozhaysk"},{"name":"Mozdok"},{"name":"Mostovskoy"},{"name":"Moscow"},{"name":"Morshansk"},{"name":"Morozovsk"},{"name":"Monino"},{"name":"Monchegorsk"},{"name":"Mirnyy"},{"name":"Mineralnye Vody"},{"name":"Millerovo"},{"name":"Mikhaylovka"},{"name":"Mikhalkovo"},{"name":"Michurinsk"},{"name":"Metallostroy"},{"name":"Menzelinsk"},{"name":"Mendeleyevsk"},{"name":"Meleuz"},{"name":"Melenki"},{"name":"Medvezh’yegorsk"},{"name":"Medvedovskaya"},{"name":"Medvedevo"},{"name":"Mednogorsk"},{"name":"Maykop"},{"name":"Matveyevskoye"},{"name":"Marks"},{"name":"Mar’ino"},{"name":"Mar’ina Roshcha"},{"name":"Manturovo"},{"name":"Yaroslavskiy"},{"name":"Maloyaroslavets"},{"name":"Malgobek"},{"name":"Malakhovka"},{"name":"Makhachkala"},{"name":"Magnitogorsk"},{"name":"Lyudinovo"},{"name":"Lyublino"},{"name":"Lyubertsy"},{"name":"Lytkarino"},{"name":"Lys’va"},{"name":"Lyskovo"},{"name":"Luzhniki"},{"name":"Lukhovitsy"},{"name":"Luga"},{"name":"Losino-Petrovskiy"},{"name":"Lomonosov"},{"name":"Lodeynoye Pole"},{"name":"Lobnya"},{"name":"Livny"},{"name":"Liski"},{"name":"Lipetsk"},{"name":"Likino-Dulevo"},{"name":"Likhobory"},{"name":"Lianozovo"},{"name":"L’govskiy"},{"name":"Levoberezhnaya"},{"name":"Komendantsky aerodrom"},{"name":"Lermontov"},{"name":"Leonovo"},{"name":"Leninskiye Gory"},{"name":"Leninsk"},{"name":"Leninogorsk"},{"name":"Tsaritsyno"},{"name":"Leningradskaya"},{"name":"Yubileyny"},{"name":"Lefortovo"},{"name":"Lebedyan’"},{"name":"Lazarevskoye"},{"name":"Lakinsk"},{"name":"Labinsk"},{"name":"Dugulubgey"},{"name":"Kuznetsk"},{"name":"Kuz’minki"},{"name":"Kuvandyk"},{"name":"Kuskovo"},{"name":"Kushva"},{"name":"Kushchëvskaya"},{"name":"Kusa"},{"name":"Kur’yanovo"},{"name":"Kursk"},{"name":"Kurovskoye"},{"name":"Kurganinsk"},{"name":"Kurchatov"},{"name":"Kurchaloy"},{"name":"Kupchino"},{"name":"Kungur"},{"name":"Kumertau"},{"name":"Kulebaki"},{"name":"Kukmor"},{"name":"Kudymkar"},{"name":"Kudepsta"},{"name":"Kubinka"},{"name":"Kstovo"},{"name":"Krymsk"},{"name":"Kropotkin"},{"name":"Kronshtadt"},{"name":"Krasnyy Sulin"},{"name":"Biryulëvo Zapadnoye"},{"name":"Krasnoye Selo"},{"name":"Krasnovishersk"},{"name":"Krasnoufimsk"},{"name":"Krasnokamsk"},{"name":"Krasnogvardeyskoye"},{"name":"Krasnogorsk"},{"name":"Krasnodar"},{"name":"Krasnoarmeyskaya"},{"name":"Krasnoarmeysk"},{"name":"Krasnoarmeysk"},{"name":"Presnenskiy"},{"name":"Koz’modem’yansk"},{"name":"Kozhukhovo"},{"name":"Kozeyevo"},{"name":"Kozel’sk"},{"name":"Kovylkino"},{"name":"Kovrov"},{"name":"Kovdor"},{"name":"Kotovsk"},{"name":"Kotovo"},{"name":"Kotlas"},{"name":"Kotel’nikovo"},{"name":"Kotel’niki"},{"name":"Kotel’nich"},{"name":"Kostroma"},{"name":"Kostomuksha"},{"name":"Kosaya Gora"},{"name":"Koryazhma"},{"name":"Korenovsk"},{"name":"Konstantinovsk"},{"name":"Kondrovo"},{"name":"Kondopoga"},{"name":"Konakovo"},{"name":"Kommunar"},{"name":"Kolpino"},{"name":"Kolomyagi"},{"name":"Kolomna"},{"name":"Kolomenskoye"},{"name":"Kol’chugino"},{"name":"Kokhma"},{"name":"Klintsy"},{"name":"Klin"},{"name":"Klimovsk"},{"name":"Kizlyar"},{"name":"Kizilyurt"},{"name":"Kizel"},{"name":"Kislovodsk"},{"name":"Kirzhach"},{"name":"Kirsanov"},{"name":"Kirovsk"},{"name":"Kirovsk"},{"name":"Kirovo-Chepetsk"},{"name":"Kirov"},{"name":"Kirov"},{"name":"Kirishi"},{"name":"Kireyevsk"},{"name":"Kingisepp"},{"name":"Kineshma"},{"name":"Kinel’-Cherkassy"},{"name":"Kinel’"},{"name":"Kimry"},{"name":"Kimovsk"},{"name":"Khot'kovo"},{"name":"Khosta"},{"name":"Khoroshëvo-Mnevniki"},{"name":"Kholmskiy"},{"name":"Khimki"},{"name":"Khasavyurt"},{"name":"Kharabali"},{"name":"Khadyzhensk"},{"name":"Kazan"},{"name":"Katav-Ivanovsk"},{"name":"Kastanayevo"},{"name":"Kaspiysk"},{"name":"Kasimov"},{"name":"Kashira"},{"name":"Kashin"},{"name":"Karachev"},{"name":"Karachayevsk"},{"name":"Karabulak"},{"name":"Karabanovo"},{"name":"Kapotnya"},{"name":"Kantyshevo"},{"name":"Kanevskaya"},{"name":"Kandalaksha"},{"name":"Kanash"},{"name":"Kamyzyak"},{"name":"Kamyshin"},{"name":"Kamensk-Shakhtinskiy"},{"name":"Kaluga"},{"name":"Kalininsk"},{"name":"Korolev"},{"name":"Kaliningrad"},{"name":"Kalach-na-Donu"},{"name":"Kalach"},{"name":"Kachkanar"},{"name":"Kabanovo"},{"name":"Izobil’nyy"},{"name":"Izmaylovo"},{"name":"Izhevsk"},{"name":"Izberbash"},{"name":"Ivanteyevka"},{"name":"Ivanovskoye"},{"name":"Ivanovo"},{"name":"Istra"},{"name":"Ishimbay"},{"name":"Ipatovo"},{"name":"Inza"},{"name":"Inozemtsevo"},{"name":"Il’skiy"},{"name":"Igra"},{"name":"Gus’-Khrustal’nyy"},{"name":"Gusev"},{"name":"Gul’kevichi"},{"name":"Gukovo"},{"name":"Gudermes"},{"name":"Gubkin"},{"name":"Gubakha"},{"name":"Gryazovets"},{"name":"Gryazi"},{"name":"Groznyy"},{"name":"Gribanovskiy"},{"name":"Grazhdanka"},{"name":"Goryachiy Klyuch"},{"name":"Goryachevodskiy"},{"name":"Gorodishche"},{"name":"Gorodets"},{"name":"Gorelovo"},{"name":"Gol’yanovo"},{"name":"Golitsyno"},{"name":"Glazov"},{"name":"Giaginskaya"},{"name":"Georgiyevsk"},{"name":"Gelendzhik"},{"name":"Gay"},{"name":"Gavrilov-Yam"},{"name":"Gatchina"},{"name":"Galich"},{"name":"Gagarin"},{"name":"Furmanov"},{"name":"Fryazino"},{"name":"Fryazevo"},{"name":"Frolovo"},{"name":"Fili"},{"name":"Ezhva"},{"name":"Engel’s"},{"name":"Enem"},{"name":"Elista"},{"name":"Elektrougli"},{"name":"Elektrostal’"},{"name":"Elektrogorsk"},{"name":"Ekazhevo"},{"name":"Dzerzhinskiy"},{"name":"Dzerzhinsk"},{"name":"Dyurtyuli"},{"name":"Dyat’kovo"},{"name":"Dubovka"},{"name":"Dubna"},{"name":"Dorogomilovo"},{"name":"Donskoye"},{"name":"Donskoy"},{"name":"Donetsk"},{"name":"Domodedovo"},{"name":"Dolgoprudnyy"},{"name":"Dobryanka"},{"name":"Dmitrov"},{"name":"Divnoye"},{"name":"Dinskaya"},{"name":"Dimitrovgrad"},{"name":"Desnogorsk"},{"name":"Derbent"},{"name":"Zapadnoye Degunino"},{"name":"Dedovsk"},{"name":"Davydkovo"},{"name":"Davlekanovo"},{"name":"Dankov"},{"name":"Danilov"},{"name":"Dagestanskiye Ogni"},{"name":"Dachnoye"},{"name":"Chusovoy"},{"name":"Chudovo"},{"name":"Chistopol’"},{"name":"Chishmy"},{"name":"Chernyanka"},{"name":"Chernyakhovsk"},{"name":"Chernushka"},{"name":"Chernogolovka"},{"name":"Cherkessk"},{"name":"Cherepovets"},{"name":"Cherëmushki"},{"name":"Chekhov"},{"name":"Chegem"},{"name":"Cheboksary"},{"name":"Chaykovskiy"},{"name":"Chapayevsk"},{"name":"Buzuluk"},{"name":"Buynaksk"},{"name":"Buy"},{"name":"Buturlinovka"},{"name":"Businovo"},{"name":"Buinsk"},{"name":"Buguruslan"},{"name":"Bugul’ma"},{"name":"Budënnovsk"},{"name":"Bryukhovetskaya"},{"name":"Bryansk"},{"name":"Bronnitsy"},{"name":"Brateyevo"},{"name":"Borovichi"},{"name":"Borisoglebsk"},{"name":"Bor"},{"name":"Bol’shaya Setun’"},{"name":"Bologoye"},{"name":"Boksitogorsk"},{"name":"Boguchar"},{"name":"Bogorodskoye"},{"name":"Bogorodsk"},{"name":"Bogoroditsk"},{"name":"Bobrov"},{"name":"Blagoveshchensk"},{"name":"Blagodarnyy"},{"name":"Biryulëvo"},{"name":"Birsk"},{"name":"Bibirevo"},{"name":"Bezhetsk"},{"name":"Bezenchuk"},{"name":"Beslan"},{"name":"Berezniki"},{"name":"Beloretsk"},{"name":"Belorechensk"},{"name":"Beloozërskiy"},{"name":"Belgorod"},{"name":"Belëv"},{"name":"Belebey"},{"name":"Belaya Kalitva"},{"name":"Belaya Glina"},{"name":"Baymak"},{"name":"Bavly"},{"name":"Bataysk"},{"name":"Barysh"},{"name":"Balezino"},{"name":"Balashov"},{"name":"Balashikha"},{"name":"Balakovo"},{"name":"Novaya Balakhna"},{"name":"Balabanovo"},{"name":"Baksan"},{"name":"Bakal"},{"name":"Bagayevskaya"},{"name":"Babushkin"},{"name":"Azov"},{"name":"Avtury"},{"name":"Avtovo"},{"name":"Atkarsk"},{"name":"Astrakhan"},{"name":"Asha"},{"name":"Arzgir"},{"name":"Arzamas"},{"name":"Arsk"},{"name":"Armavir"},{"name":"Arkhangel’sk"},{"name":"Argun"},{"name":"Ardon"},{"name":"Apsheronsk"},{"name":"Aprelevka"},{"name":"Apatity"},{"name":"Anna"},{"name":"Andreyevskoye"},{"name":"Anapa"},{"name":"Amin’yevo"},{"name":"Al’met’yevsk"},{"name":"Aleksin"},{"name":"Alekseyevka"},{"name":"Alekseyevka"},{"name":"Aleksandrovskoye"},{"name":"Aleksandrovsk"},{"name":"Aleksandrov"},{"name":"Alatyr’"},{"name":"Levoberezhnyy"},{"name":"Aksay"},{"name":"Akhtyrskiy"},{"name":"Akhtubinsk"},{"name":"Agryz"},{"name":"Afipskiy"},{"name":"Adler"},{"name":"Achkhoy-Martan"},{"name":"Abinsk"},{"name":"Abdulino"},{"name":"Vasil’yevo"},{"name":"Ryl’sk"},{"name":"Neftekumsk"},{"name":"Alagir"},{"name":"Persianovka"},{"name":"Annino"},{"name":"Dagomys"},{"name":"Pavlovo"},{"name":"Belidzhi"},{"name":"Lesnoy"},{"name":"Trëkhgornyy"},{"name":"Mirnyy"},{"name":"Znamensk"},{"name":"Zarechnyy"},{"name":"Kochubeyevskoye"},{"name":"Vnukovo"},{"name":"Moskovskiy"},{"name":"Usinsk"},{"name":"Obukhovo"},{"name":"Staryy Malgobek"},{"name":"Zavodoukovsk"},{"name":"Zarinsk"},{"name":"Zarechnyy"},{"name":"Yuzhnyy"},{"name":"Yuzhnoural’sk"},{"name":"Yurga"},{"name":"Yeniseysk"},{"name":"Yemanzhelinsk"},{"name":"Yekaterinburg"},{"name":"Yashkino"},{"name":"Yarovoye"},{"name":"Yalutorovsk"},{"name":"Vorkuta"},{"name":"Vorgashor"},{"name":"Verkhnyaya Salda"},{"name":"Verkhnyaya Pyshma"},{"name":"Verkhniy Ufaley"},{"name":"Uzhur"},{"name":"Zelenogorsk"},{"name":"Uray"},{"name":"Tyumen"},{"name":"Turinsk"},{"name":"Troitsk"},{"name":"Topki"},{"name":"Tomsk"},{"name":"Toguchin"},{"name":"Tobol’sk"},{"name":"Tayshet"},{"name":"Tayga"},{"name":"Tavda"},{"name":"Tatarsk"},{"name":"Tashtagol"},{"name":"Tarko-Sale"},{"name":"Tara"},{"name":"Talnakh"},{"name":"Tal’menka"},{"name":"Talitsa"},{"name":"Talitsa"},{"name":"Sysert’"},{"name":"Suzun"},{"name":"Surgut"},{"name":"Sukhoy Log"},{"name":"Strezhevoy"},{"name":"Sredneuralsk"},{"name":"Sovetskiy"},{"name":"Sosnovoborsk"},{"name":"Slavgorod"},{"name":"Shushenskoye"},{"name":"Shumikha"},{"name":"Sharypovo"},{"name":"Shadrinsk"},{"name":"Serov"},{"name":"Sayanogorsk"},{"name":"Salekhard"},{"name":"Rubtsovsk"},{"name":"Rezh"},{"name":"Reftinskiy"},{"name":"Promyshlennaya"},{"name":"Prokop’yevsk"},{"name":"Poykovskiy"},{"name":"Polysayevo"},{"name":"Polevskoy"},{"name":"Plast"},{"name":"Osinniki"},{"name":"Omsk"},{"name":"Ob’"},{"name":"Nyagan"},{"name":"Noyabrsk"},{"name":"Novyy Urengoy"},{"name":"Novosilikatnyy"},{"name":"Novosibirsk"},{"name":"Novokuznetsk"},{"name":"Novoaltaysk"},{"name":"Norilsk"},{"name":"Nizhnyaya Salda"},{"name":"Nizhnevartovsk"},{"name":"Nizhneudinsk"},{"name":"Nev’yansk"},{"name":"Nefteyugansk"},{"name":"Nazarovo"},{"name":"Nadym"},{"name":"Myski"},{"name":"Minusinsk"},{"name":"Miass"},{"name":"Mezhdurechensk"},{"name":"Megion"},{"name":"Mayma"},{"name":"Mariinsk"},{"name":"Linëvo"},{"name":"Lesosibirsk"},{"name":"Leninsk-Kuznetsky"},{"name":"Labytnangi"},{"name":"Kyzyl"},{"name":"Kyshtym"},{"name":"Kuybyshev"},{"name":"Kurtamysh"},{"name":"Kurgan"},{"name":"Kupino"},{"name":"Kulunda"},{"name":"Krasnoyarsk"},{"name":"Krasnoural’sk"},{"name":"Krasnotur’insk"},{"name":"Krasnoobsk"},{"name":"Korkino"},{"name":"Kopeysk"},{"name":"Yugorsk"},{"name":"Kolpashevo"},{"name":"Kodinsk"},{"name":"Kochenëvo"},{"name":"Kiselëvsk"},{"name":"Kirovgrad"},{"name":"Khanty-Mansiysk"},{"name":"Kemerovo"},{"name":"Kedrovka"},{"name":"Kayyerkan"},{"name":"Kataysk"},{"name":"Kasli"},{"name":"Kartaly"},{"name":"Karpinsk"},{"name":"Karasuk"},{"name":"Karabash"},{"name":"Kansk"},{"name":"Kamyshlov"},{"name":"Kamensk-Ural’skiy"},{"name":"Kamen’-na-Obi"},{"name":"Kaltan"},{"name":"Kalachinsk"},{"name":"Ivdel’"},{"name":"Iskitim"},{"name":"Ishim"},{"name":"Irbit"},{"name":"Ilanskiy"},{"name":"Gur’yevsk"},{"name":"Gornyak"},{"name":"Gorno-Altaysk"},{"name":"Dudinka"},{"name":"Divnogorsk"},{"name":"Degtyarsk"},{"name":"Chunskiy"},{"name":"Chernogorsk"},{"name":"Cherepanovo"},{"name":"Chelyabinsk"},{"name":"Chebarkul’"},{"name":"Borovskiy"},{"name":"Borodino"},{"name":"Bolotnoye"},{"name":"Bogotol"},{"name":"Bogdanovich"},{"name":"Biysk"},{"name":"Beryozovsky"},{"name":"Berëzovskiy"},{"name":"Berëzovka"},{"name":"Berdsk"},{"name":"Beloyarskiy"},{"name":"Belovo"},{"name":"Barnaul"},{"name":"Barabinsk"},{"name":"Asino"},{"name":"Asbest"},{"name":"Artëmovskiy"},{"name":"Aramil"},{"name":"Anzhero-Sudzhensk"},{"name":"Aleysk"},{"name":"Alapayevsk"},{"name":"Akademgorodok"},{"name":"Achinsk"},{"name":"Abaza"},{"name":"Abakan"},{"name":"Snezhinsk"},{"name":"Ozersk"},{"name":"Zheleznogorsk"},{"name":"Novoural’sk"},{"name":"Seversk"},{"name":"Gubkinskiy"},{"name":"Raduzhny"},{"name":"Muravlenko"},{"name":"Lyantor"},{"name":"Zima"},{"name":"Zheleznogorsk-Ilimskiy"},{"name":"Zeya"},{"name":"Yakutsk"},{"name":"Vyazemskiy"},{"name":"Vrangel’"},{"name":"Vladivostok"},{"name":"Vikhorevka"},{"name":"Ust’-Kut"},{"name":"Ust’-Ilimsk"},{"name":"Ussuriysk"},{"name":"Usol’ye-Sibirskoye"},{"name":"Ulan-Ude"},{"name":"Udachny"},{"name":"Tynda"},{"name":"Tulun"},{"name":"Trudovoye"},{"name":"Fokino"},{"name":"Svobodnyy"},{"name":"Spassk-Dal’niy"},{"name":"Slyudyanka"},{"name":"Shimanovsk"},{"name":"Shelekhov"},{"name":"Severobaykal’sk"},{"name":"Raychikhinsk"},{"name":"Petrovsk-Zabaykal’skiy"},{"name":"Partizansk"},{"name":"Neryungri"},{"name":"Nerchinsk"},{"name":"Nakhodka"},{"name":"Mirny"},{"name":"Luchegorsk"},{"name":"Lesozavodsk"},{"name":"Lensk"},{"name":"Kyakhta"},{"name":"Krasnokamensk"},{"name":"Komsomolsk-on-Amur"},{"name":"Khabarovsk"},{"name":"Kavalerovo"},{"name":"Irkutsk"},{"name":"Gusinoozyorsk"},{"name":"Dal’nerechensk"},{"name":"Chita"},{"name":"Cheremkhovo"},{"name":"Borzya"},{"name":"Bol’shoy Kamen’"},{"name":"Bodaybo"},{"name":"Blagoveshchensk"},{"name":"Birobidzhan"},{"name":"Bikin"},{"name":"Belogorsk"},{"name":"Baykal’sk"},{"name":"Aykhal"},{"name":"Artëm"},{"name":"Arsen’yev"},{"name":"Angarsk"},{"name":"Amursk"},{"name":"Aldan"},{"name":"Dal'negorsk"},{"name":"Bratsk"},{"name":"Sayansk"},{"name":"Khabarovsk Vtoroy"},{"name":"Markova"},{"name":"Vilyuchinsk"},{"name":"Yuzhno-Sakhalinsk"},{"name":"Yelizovo"},{"name":"Vanino"},{"name":"Sovetskaya Gavan’"},{"name":"Poronaysk"},{"name":"Petropavlovsk-Kamchatsky"},{"name":"Okha"},{"name":"Nikolayevsk-on-Amure"},{"name":"Nevel’sk"},{"name":"Magadan"},{"name":"Korsakov"},{"name":"Kholmsk"},{"name":"Baltiysk"},{"name":"Isakogorka"},{"name":"Krasnoznamensk"},{"name":"Chertanovo Yuzhnoye"},{"name":"Zagor’ye"},{"name":"Orekhovo-Borisovo"},{"name":"Metrogorodok"},{"name":"Kogalym"},{"name":"Pyt-Yakh"},{"name":"Langepas"},{"name":"Lesnoy"},{"name":"Zarya"},{"name":"Raduzhnyy"},{"name":"Nizhnesortymskiy"},{"name":"Pokachi"},{"name":"Izluchinsk"},{"name":"Kurortnyy"},{"name":"Chernaya Rechka"},{"name":"Untolovo"},{"name":"Petrogradka"},{"name":"Vasyl'evsky Ostrov"},{"name":"Parnas"},{"name":"Kalininskiy"},{"name":"Krasnogvargeisky"},{"name":"Admiralteisky"},{"name":"Krestovskiy ostrov"},{"name":"Akademicheskoe"},{"name":"Finlyandskiy"},{"name":"Centralniy"},{"name":"Svetlanovskiy"},{"name":"Sampsonievskiy"},{"name":"Vostochnoe Degunino"},{"name":"Rwamagana"},{"name":"Musanze"},{"name":"Nzega"},{"name":"Kigali"},{"name":"Kibuye"},{"name":"Kibungo"},{"name":"Gitarama"},{"name":"Cyangugu"},{"name":"Gisenyi"},{"name":"Byumba"},{"name":"Butare"},{"name":"Yanbu"},{"name":"Umm Lajj"},{"name":"Ţurayf"},{"name":"Turabah"},{"name":"Tārūt"},{"name":"Tabuk"},{"name":"Ţubarjal"},{"name":"Sulţānah"},{"name":"Sayhāt"},{"name":"Şāmitah"},{"name":"Sakakah"},{"name":"Şafwá"},{"name":"Şabyā"},{"name":"Raḩīmah"},{"name":"Rābigh"},{"name":"Qal‘at Bīshah"},{"name":"Najrān"},{"name":"Mecca"},{"name":"Khamis Mushait"},{"name":"Jizan"},{"name":"Jeddah"},{"name":"Ha'il"},{"name":"Duba"},{"name":"Buraydah"},{"name":"Abqaiq"},{"name":"Badr Ḩunayn"},{"name":"Az Zulfi"},{"name":"Dhahran"},{"name":"Aţ Ţaraf"},{"name":"Ta’if"},{"name":"As Sulayyil"},{"name":"Riyadh"},{"name":"Ar Rass"},{"name":"‘Ar‘ar"},{"name":"An Nimāş"},{"name":"Qurayyat"},{"name":"Al Wajh"},{"name":"Al ‘Ulá"},{"name":"Al Qayşūmah"},{"name":"Al Qaţīf"},{"name":"Al Munayzilah"},{"name":"Al Mubarraz"},{"name":"Al Mithnab"},{"name":"Medina"},{"name":"Khobar"},{"name":"Al Khafjī"},{"name":"Al Jumūm"},{"name":"Al Jubayl"},{"name":"Al Hufūf"},{"name":"Al Bukayrīyah"},{"name":"Al Baţţālīyah"},{"name":"Al Bāḩah"},{"name":"‘Afīf"},{"name":"Ad Dilam"},{"name":"Ad Dawādimī"},{"name":"Dammam"},{"name":"Abū ‘Arīsh"},{"name":"Abha"},{"name":"Ash Shafā"},{"name":"Unaizah"},{"name":"Honiara"},{"name":"Victoria"},{"name":"Zalingei"},{"name":"Wad Medani"},{"name":"Umm Ruwaba"},{"name":"Omdurman"},{"name":"Tokār"},{"name":"Tandaltī"},{"name":"Singa"},{"name":"Shendi"},{"name":"Sawākin"},{"name":"Sinnar"},{"name":"Rabak"},{"name":"Maiurno"},{"name":"Kosti"},{"name":"Kuraymah"},{"name":"Kināna"},{"name":"Kassala"},{"name":"Kadugli"},{"name":"Doka"},{"name":"Dilling"},{"name":"Port Sudan"},{"name":"Berber"},{"name":"Bārah"},{"name":"Atbara"},{"name":"As Sūkī"},{"name":"Ar Ruseris"},{"name":"Ar Rahad"},{"name":"An Nuhūd"},{"name":"El Obeid"},{"name":"Al Qiţena"},{"name":"Al Qadarif"},{"name":"Al Mijlad"},{"name":"Al Manāqil"},{"name":"Khartoum"},{"name":"Geneina"},{"name":"Al Hilāliyya"},{"name":"Al Ḩawātah"},{"name":"Al Hasaheisa"},{"name":"El Fasher"},{"name":"El Bauga"},{"name":"Ad Douiem"},{"name":"El Daein"},{"name":"Ad Dindar"},{"name":"Ed Damer"},{"name":"Ad-Damazin"},{"name":"Abū Zabad"},{"name":"Abu Jibeha"},{"name":"Umeå"},{"name":"Skellefteå"},{"name":"Piteå"},{"name":"Luleå"},{"name":"Kiruna"},{"name":"Boden"},{"name":"Ystad"},{"name":"Visby"},{"name":"Växjö"},{"name":"Västervik"},{"name":"Västerås"},{"name":"Värnamo"},{"name":"Varberg"},{"name":"Vänersborg"},{"name":"Vallentuna"},{"name":"Uppsala"},{"name":"Upplands Väsby"},{"name":"Uddevalla"},{"name":"Tumba"},{"name":"Tullinge"},{"name":"Trollhättan"},{"name":"Trelleborg"},{"name":"Täby"},{"name":"Sundsvall"},{"name":"Sundbyberg"},{"name":"Stockholm"},{"name":"Solna"},{"name":"Sollentuna"},{"name":"Södertälje"},{"name":"Skövde"},{"name":"Skara"},{"name":"Sandviken"},{"name":"Råsunda"},{"name":"Partille"},{"name":"Östersund"},{"name":"Östermalm"},{"name":"Oskarshamn"},{"name":"Örnsköldsvik"},{"name":"Örebro"},{"name":"Nyköping"},{"name":"Norrtälje"},{"name":"Norrköping"},{"name":"Nässjö"},{"name":"Nacka"},{"name":"Motala"},{"name":"Mölndal"},{"name":"Märsta"},{"name":"Malmö"},{"name":"Lund"},{"name":"Linköping"},{"name":"Lidköping"},{"name":"Lidingö"},{"name":"Lerum"},{"name":"Landskrona"},{"name":"Kungsbacka"},{"name":"Kungälv"},{"name":"Kristinehamn"},{"name":"Kristianstad"},{"name":"Köping"},{"name":"Katrineholm"},{"name":"Karlstad"},{"name":"Karlskrona"},{"name":"Karlskoga"},{"name":"Karlshamn"},{"name":"Kalmar"},{"name":"Jönköping"},{"name":"Jakobsberg"},{"name":"Huskvarna"},{"name":"Huddinge"},{"name":"Helsingborg"},{"name":"Hässleholm"},{"name":"Härnösand"},{"name":"Haninge"},{"name":"Halmstad"},{"name":"Göteborg"},{"name":"Gävle"},{"name":"Gamla Uppsala"},{"name":"Falun"},{"name":"Falköping"},{"name":"Falkenberg"},{"name":"Eslöv"},{"name":"Eskilstuna"},{"name":"Enköping"},{"name":"Bromma"},{"name":"Borlänge"},{"name":"Borås"},{"name":"Boo"},{"name":"Årsta"},{"name":"Ängelholm"},{"name":"Alingsås"},{"name":"Åkersberga"},{"name":"Majorna"},{"name":"Singapore"},{"name":"Jamestown"},{"name":"Trbovlje"},{"name":"Velenje"},{"name":"Ptuj"},{"name":"Novo Mesto"},{"name":"Maribor"},{"name":"Ljubljana"},{"name":"Kranj"},{"name":"Koper"},{"name":"Celje"},{"name":"Longyearbyen"},{"name":"Vranov nad Topľou"},{"name":"Trebišov"},{"name":"Stará Ľubovňa"},{"name":"Spišská Nová Ves"},{"name":"Snina"},{"name":"Rožňava"},{"name":"Rimavská Sobota"},{"name":"Prešov"},{"name":"Poprad"},{"name":"Michalovce"},{"name":"Košice"},{"name":"Kežmarok"},{"name":"Humenné"},{"name":"Bardejov"},{"name":"Zvolen"},{"name":"Zlaté Moravce"},{"name":"Žilina"},{"name":"Žiar nad Hronom"},{"name":"Trnava"},{"name":"Trenčín"},{"name":"Skalica"},{"name":"Senica"},{"name":"Sellye"},{"name":"Ružomberok"},{"name":"Púchov"},{"name":"Prievidza"},{"name":"Považská Bystrica"},{"name":"Piešťany"},{"name":"Pezinok"},{"name":"Partizánske"},{"name":"Nové Zámky"},{"name":"Nové Mesto nad Váhom"},{"name":"Nitra"},{"name":"Martin"},{"name":"Malacky"},{"name":"Lučenec"},{"name":"Liptovský Mikuláš"},{"name":"Levice"},{"name":"Kysucké Nové Mesto"},{"name":"Komárno"},{"name":"Hlohovec"},{"name":"Handlová"},{"name":"Galanta"},{"name":"Dunajská Streda"},{"name":"Dubnica nad Váhom"},{"name":"Dolný Kubín"},{"name":"Detva"},{"name":"Čadca"},{"name":"Brezno"},{"name":"Bratislava"},{"name":"Banská Bystrica"},{"name":"Bánovce nad Bebravou"},{"name":"Waterloo"},{"name":"Segbwema"},{"name":"Port Loko"},{"name":"Makeni"},{"name":"Lunsar"},{"name":"Koidu"},{"name":"Kenema"},{"name":"Kabala"},{"name":"Freetown"},{"name":"Bo"},{"name":"San Marino"},{"name":"Ziguinchor"},{"name":"Vélingara"},{"name":"Touba"},{"name":"Tiébo"},{"name":"Thiès Nones"},{"name":"Tambacounda"},{"name":"Sédhiou"},{"name":"Saint-Louis"},{"name":"Richard-Toll"},{"name":"Pout"},{"name":"Pourham"},{"name":"Pikine"},{"name":"Nioro du Rip"},{"name":"Nguékhokh"},{"name":"Ndibène Dahra"},{"name":"Mékhé"},{"name":"Mbaké"},{"name":"Matam"},{"name":"Louga"},{"name":"Kolda"},{"name":"Kédougou"},{"name":"Kayar"},{"name":"Kaolack"},{"name":"Kaffrine"},{"name":"Joal-Fadiout"},{"name":"Guinguinéo"},{"name":"Dara"},{"name":"Dakar"},{"name":"Bignona"},{"name":"Wanlaweyn"},{"name":"Qoryooley"},{"name":"Qandala"},{"name":"Mogadishu"},{"name":"Marka"},{"name":"Luuq"},{"name":"Kismayo"},{"name":"Jilib"},{"name":"Jawhar"},{"name":"Jamaame"},{"name":"Hargeysa"},{"name":"Garoowe"},{"name":"Gaalkacyo"},{"name":"Eyl"},{"name":"Ceerigaabo"},{"name":"Ceeldheer"},{"name":"Buurhakaba"},{"name":"Buulobarde"},{"name":"Burao"},{"name":"Bosaso"},{"name":"Berbera"},{"name":"Beledweyne"},{"name":"Baidoa"},{"name":"Baardheere"},{"name":"Afgooye"},{"name":"Laascaanood"},{"name":"Baki"},{"name":"Paramaribo"},{"name":"Lelydorp"},{"name":"Yei"},{"name":"Yambio"},{"name":"Wau"},{"name":"Aweil"},{"name":"Torit"},{"name":"Tonj"},{"name":"Rumbek"},{"name":"Malakal"},{"name":"Juba"},{"name":"Gogrial"},{"name":"Pajok"},{"name":"Bor"},{"name":"São Tomé"},{"name":"Zacatecoluca"},{"name":"Usulután"},{"name":"Soyapango"},{"name":"Sonzacate"},{"name":"Sonsonate"},{"name":"Sensuntepeque"},{"name":"San Vicente"},{"name":"Santiago de María"},{"name":"Santa Ana"},{"name":"San Salvador"},{"name":"San Rafael Oriente"},{"name":"San Miguel"},{"name":"San Martín"},{"name":"San Marcos"},{"name":"San Francisco"},{"name":"Quezaltepeque"},{"name":"Puerto El Triunfo"},{"name":"Santa Tecla"},{"name":"Metapán"},{"name":"Mejicanos"},{"name":"La Unión"},{"name":"La Libertad"},{"name":"Izalco"},{"name":"Ilopango"},{"name":"Delgado"},{"name":"Cuscatancingo"},{"name":"Cojutepeque"},{"name":"Chalchuapa"},{"name":"Chalatenango"},{"name":"Ayutuxtepeque"},{"name":"Apopa"},{"name":"Antiguo Cuscatlán"},{"name":"Ahuachapán"},{"name":"Aguilares"},{"name":"Acajutla"},{"name":"Philipsburg"},{"name":"Yabrūd"},{"name":"Ţayyibat al Imām"},{"name":"Tartouss"},{"name":"Tall Rif‘at"},{"name":"Tallkalakh"},{"name":"Tallbīsah"},{"name":"Ţafas"},{"name":"Tadmur"},{"name":"Tādif"},{"name":"Souran"},{"name":"Subaykhān"},{"name":"Ash Shaykh Miskīn"},{"name":"Sarāqib"},{"name":"Salqīn"},{"name":"As Salamīyah"},{"name":"Satita"},{"name":"Qaţanā"},{"name":"Jāsim"},{"name":"Qārah"},{"name":"Nubl"},{"name":"Maşyāf"},{"name":"Manbij"},{"name":"Ma‘arratmişrīn"},{"name":"Khān Shaykhūn"},{"name":"Kafr Zaytā"},{"name":"Kafr Takhārīm"},{"name":"Kafr Nubl"},{"name":"Kafr Lāhā"},{"name":"Jisr ash Shughūr"},{"name":"Jayrūd"},{"name":"Jarābulus"},{"name":"Jablah"},{"name":"‘Irbīn"},{"name":"Inkhil"},{"name":"Idlib"},{"name":"Homs"},{"name":"Ḩarastā"},{"name":"Ḩamāh"},{"name":"Ḩalfāyā"},{"name":"Aleppo"},{"name":"Douma"},{"name":"Damascus"},{"name":"Dayr Ḩāfir"},{"name":"Deir ez-Zor"},{"name":"Ad Darbāsīyah"},{"name":"Dārayyā"},{"name":"Dar‘ā"},{"name":"Binnish"},{"name":"Bāniyās"},{"name":"Az Zabadānī"},{"name":"I‘zāz"},{"name":"‘Ayn al ‘Arab"},{"name":"At Tall"},{"name":"Ath Thawrah"},{"name":"As Suwaydā’"},{"name":"Aş Şanamayn"},{"name":"As Safīrah"},{"name":"Ar Rastan"},{"name":"Ar Raqqah"},{"name":"An Nabk"},{"name":"Al Quţayfah"},{"name":"Al Quşayr"},{"name":"Al Qunayţirah"},{"name":"Al Qaryatayn"},{"name":"Al Mayādīn"},{"name":"Latakia"},{"name":"Al Kiswah"},{"name":"Al Ḩasakah"},{"name":"Al Ḩarāk"},{"name":"Al Bāb"},{"name":"‘Afrīn"},{"name":"Ad Dānā"},{"name":"Ālbū Kamāl"},{"name":"Hajīn"},{"name":"Mbabane"},{"name":"Manzini"},{"name":"Lobamba"},{"name":"Cockburn Town"},{"name":"Fada"},{"name":"Am Timan"},{"name":"Abéché"},{"name":"Sagh"},{"name":"Pala"},{"name":"Oum Hadjer"},{"name":"N'Djamena"},{"name":"Moussoro"},{"name":"Moundou"},{"name":"Mongo"},{"name":"Mboursou Léré"},{"name":"Massakory"},{"name":"Massaguet"},{"name":"Mao"},{"name":"Laï"},{"name":"Kyabé"},{"name":"Koumra"},{"name":"Kelo"},{"name":"Dourbali"},{"name":"Doba"},{"name":"Bongor"},{"name":"Bitkine"},{"name":"Benoy"},{"name":"Ati"},{"name":"Port-aux-Français"},{"name":"Vogan"},{"name":"Tsévié"},{"name":"Tchamba"},{"name":"Sotouboua"},{"name":"Sokodé"},{"name":"Notsé"},{"name":"Niamtougou"},{"name":"Sansanné-Mango"},{"name":"Lomé"},{"name":"Kpalimé"},{"name":"Kara"},{"name":"Dapaong"},{"name":"Bassar"},{"name":"Bafilo"},{"name":"Badou"},{"name":"Atakpamé"},{"name":"Aného"},{"name":"Ban Talat Yai"},{"name":"Ban Talat Nua"},{"name":"Sam Roi Yot"},{"name":"Phetchaburi"},{"name":"Trang"},{"name":"Thung Song"},{"name":"Thoen"},{"name":"Thap Than"},{"name":"Tha Muang"},{"name":"Tha Maka"},{"name":"Tak"},{"name":"Surat Thani"},{"name":"Sukhothai"},{"name":"Si Satchanalai"},{"name":"Sawankhalok"},{"name":"San Pa Tong"},{"name":"San Kamphaeng"},{"name":"Ron Phibun"},{"name":"Ratchaburi"},{"name":"Ranong"},{"name":"Pran Buri"},{"name":"Prachuap Khiri Khan"},{"name":"Phunphin"},{"name":"Phuket"},{"name":"Photharam"},{"name":"Phayao"},{"name":"Pa Sang"},{"name":"Nakhon Si Thammarat"},{"name":"Mae Sot"},{"name":"Mae Sai"},{"name":"Mae Ramat"},{"name":"Mae Chan"},{"name":"Lat Yao"},{"name":"Lang Suan"},{"name":"Lamphun"},{"name":"Lampang"},{"name":"Kui Buri"},{"name":"Krabi"},{"name":"Khao Yoi"},{"name":"Khanu Woralaksaburi"},{"name":"Kathu"},{"name":"Kanchanaburi"},{"name":"Kamphaeng Phet"},{"name":"Huai Yot"},{"name":"Hua Hin"},{"name":"Hang Dong"},{"name":"Dok Kham Tai"},{"name":"Damnoen Saduak"},{"name":"Chumphon"},{"name":"Chom Bueng"},{"name":"Chiang Rai"},{"name":"Chiang Mai"},{"name":"Cha-am"},{"name":"Bo Phloi"},{"name":"Ban Tak"},{"name":"Ko Samui"},{"name":"Ban Pong"},{"name":"Ban Na San"},{"name":"Ban Na"},{"name":"Bang Saphan"},{"name":"Bang Phae"},{"name":"Nong Kung Si"},{"name":"Ban Nong Wua So"},{"name":"Ban Mai"},{"name":"Ban Huai Thalaeng"},{"name":"Ban Khlong Bang Sao Thong"},{"name":"Na Klang"},{"name":"Yasothon"},{"name":"Yaring"},{"name":"Yala"},{"name":"Wiset Chaichan"},{"name":"Wichian Buri"},{"name":"Warin Chamrap"},{"name":"Wang Saphung"},{"name":"Wang Noi"},{"name":"Wang Nam Yen"},{"name":"Uttaradit"},{"name":"Uthai Thani"},{"name":"Udon Thani"},{"name":"Ubon Ratchathani"},{"name":"Trat"},{"name":"Tha Yang"},{"name":"Tha Ruea"},{"name":"Thap Khlo"},{"name":"Tha Mai"},{"name":"Tha Bo"},{"name":"Taphan Hin"},{"name":"Tak Bai"},{"name":"Surin"},{"name":"Suphan Buri"},{"name":"Su-ngai Kolok"},{"name":"Songkhla"},{"name":"Si Sa Ket"},{"name":"Si Racha"},{"name":"Sing Buri"},{"name":"Seka"},{"name":"Sawang Daen Din"},{"name":"Satun"},{"name":"Sattahip"},{"name":"Saraburi"},{"name":"Samut Songkhram"},{"name":"Samut Sakhon"},{"name":"Samut Prakan"},{"name":"Sam Phran"},{"name":"Sakon Nakhon"},{"name":"Sa Kaeo"},{"name":"Sadao"},{"name":"Roi Et"},{"name":"Rayong"},{"name":"Ranot"},{"name":"Ra-ngae"},{"name":"Prakhon Chai"},{"name":"Prachin Buri"},{"name":"Phu Kradueng"},{"name":"Phu Khiao"},{"name":"Phra Pradaeng"},{"name":"Phra Phutthabat"},{"name":"Phra Nakhon Si Ayutthaya"},{"name":"Phrae"},{"name":"Phon Charoen"},{"name":"Phitsanulok"},{"name":"Phichit"},{"name":"Phibun Mangsahan"},{"name":"Phetchabun"},{"name":"Phatthalung"},{"name":"Phan Thong"},{"name":"Phanom Sarakham"},{"name":"Phanat Nikhom"},{"name":"Phak Hai"},{"name":"Pattani"},{"name":"Pathum Thani"},{"name":"Pak Phanang"},{"name":"Pak Kret"},{"name":"Pak Chong"},{"name":"Mueang Nonthaburi"},{"name":"Non Sung"},{"name":"Nong Phai"},{"name":"Nong Khai"},{"name":"Nong Khae"},{"name":"Nong Bua Lamphu"},{"name":"Narathiwat"},{"name":"Nang Rong"},{"name":"Nan"},{"name":"Nam Som"},{"name":"Nakhon Sawan"},{"name":"Nakhon Ratchasima"},{"name":"Nakhon Phanom"},{"name":"Nakhon Pathom"},{"name":"Nakhon Nayok"},{"name":"Nakhon Luang"},{"name":"Mukdahan"},{"name":"Maha Sarakham"},{"name":"Lop Buri"},{"name":"Lom Sak"},{"name":"Loei"},{"name":"Laem Sing"},{"name":"Kut Chap"},{"name":"Kuchinarai"},{"name":"Bangkok"},{"name":"Krathum Baen"},{"name":"Klaeng"},{"name":"Khon Kaen"},{"name":"Khon Buri"},{"name":"Khlong Luang"},{"name":"Khao Wong"},{"name":"Kaset Wisai"},{"name":"Kaset Sombun"},{"name":"Kantharalak"},{"name":"Kamalasai"},{"name":"Kalasin"},{"name":"Kaeng Khoi"},{"name":"Kaeng Khro"},{"name":"Kabin Buri"},{"name":"Hat Yai"},{"name":"Det Udom"},{"name":"Den Chai"},{"name":"Dan Khun Thot"},{"name":"Chum Phae"},{"name":"Chon Daen"},{"name":"Chon Buri"},{"name":"Chok Chai"},{"name":"Chanthaburi"},{"name":"Chaiyaphum"},{"name":"Chai Nat"},{"name":"Chai Badan"},{"name":"Chachoengsao"},{"name":"Buriram"},{"name":"Bua Yai"},{"name":"Betong"},{"name":"Ban Selaphum"},{"name":"Ban Rangsit"},{"name":"Phatthaya"},{"name":"Ban Phan Don"},{"name":"Ban Phai"},{"name":"Ban Phaeo"},{"name":"Ban Mo"},{"name":"Ban Lam Luk Ka"},{"name":"Bang Rakam"},{"name":"Bang Racham"},{"name":"Bang Pakong"},{"name":"Bang Pa-in"},{"name":"Bang Mun Nak"},{"name":"Bang Len"},{"name":"Bang Lamung"},{"name":"Bang Kruai"},{"name":"Bang Krathum"},{"name":"Bang Bua Thong"},{"name":"Bang Ban"},{"name":"Ban Dung"},{"name":"Ban Chang"},{"name":"Ban Bueng"},{"name":"Ban Talat Bueng"},{"name":"Ban Bang Kadi Pathum Thani"},{"name":"Bang Bo District"},{"name":"Aranyaprathet"},{"name":"Amnat Charoen"},{"name":"Amphoe Sikhiu"},{"name":"Wichit"},{"name":"Ban Chalong"},{"name":"Ban Ratsada"},{"name":"Yovon"},{"name":"Vose’"},{"name":"Vakhsh"},{"name":"Istaravshan"},{"name":"Tursunzoda"},{"name":"Qŭrghonteppa"},{"name":"Panjakent"},{"name":"Farkhor"},{"name":"Vahdat"},{"name":"Norak"},{"name":"Kŭlob"},{"name":"Kolkhozobod"},{"name":"Khorugh"},{"name":"Ishqoshim"},{"name":"Hisor"},{"name":"Dushanbe"},{"name":"Danghara"},{"name":"Chubek"},{"name":"Boshkengash"},{"name":"Proletar"},{"name":"Khŭjand"},{"name":"Konibodom"},{"name":"Isfara"},{"name":"Chkalov"},{"name":"Moskovskiy"},{"name":"Suai"},{"name":"Maubara"},{"name":"Maliana"},{"name":"Liquica"},{"name":"Dili"},{"name":"Baucau"},{"name":"Aileu"},{"name":"Same"},{"name":"Lospalos"},{"name":"Venilale"},{"name":"Balkanabat"},{"name":"Kaka"},{"name":"Gumdag"},{"name":"Gazanjyk"},{"name":"Abadan"},{"name":"Baharly"},{"name":"Ashgabat"},{"name":"Annau"},{"name":"Yylanly"},{"name":"Tagta"},{"name":"Türkmenbaşy"},{"name":"Köneürgench"},{"name":"Boldumsaz"},{"name":"Daşoguz"},{"name":"Yolöten"},{"name":"Tejen"},{"name":"Seydi"},{"name":"Saýat"},{"name":"Mary"},{"name":"Atamyrat"},{"name":"Gowurdak"},{"name":"Türkmenabat"},{"name":"Bayramaly"},{"name":"Gazojak"},{"name":"Zaghouan"},{"name":"Oued Lill"},{"name":"Tunis"},{"name":"Tozeur"},{"name":"Tataouine"},{"name":"Thala"},{"name":"Takelsa"},{"name":"Tajerouine"},{"name":"Sousse"},{"name":"Siliana"},{"name":"Sidi Bouzid"},{"name":"Skanes"},{"name":"Sfax"},{"name":"La Sebala du Mornag"},{"name":"Radès"},{"name":"Ksour Essaf"},{"name":"Korba"},{"name":"Kélibia"},{"name":"Kebili"},{"name":"Ksar Hellal"},{"name":"Carthage"},{"name":"El Fahs"},{"name":"Galaat el Andeless"},{"name":"Gafsa"},{"name":"Gabès"},{"name":"Nefta"},{"name":"Nabeul"},{"name":"Midoun"},{"name":"Mateur"},{"name":"Msaken"},{"name":"Menzel Jemil"},{"name":"Mennzel Bou Zelfa"},{"name":"Menzel Bourguiba"},{"name":"Menzel Abderhaman"},{"name":"Manouba"},{"name":"Medjez el Bab"},{"name":"Medenine"},{"name":"Jendouba"},{"name":"Zarzis"},{"name":"Djemmal"},{"name":"Houmt Souk"},{"name":"Hammam Sousse"},{"name":"Hammam-Lif"},{"name":"La Goulette"},{"name":"Douz"},{"name":"Douar Tindja"},{"name":"Dar Chabanne"},{"name":"Ben Arous"},{"name":"Bizerte"},{"name":"Beni Khiar"},{"name":"Béja"},{"name":"Zouila"},{"name":"Chebba"},{"name":"Ariana"},{"name":"Ar Rudayyif"},{"name":"Ouardenine"},{"name":"Kairouan"},{"name":"Kasserine"},{"name":"Gremda"},{"name":"Monastir"},{"name":"La Mohammedia"},{"name":"Metlaoui"},{"name":"Al Marsá"},{"name":"Mahdia"},{"name":"El Kef"},{"name":"El Jem"},{"name":"Hammamet"},{"name":"El Hamma"},{"name":"Bekalta"},{"name":"El Alia"},{"name":"Akouda"},{"name":"Douane"},{"name":"Nuku‘alofa"},{"name":"Yüksekova"},{"name":"Yozgat"},{"name":"Yeşilli"},{"name":"Erzin"},{"name":"Yerköy"},{"name":"Didim"},{"name":"Yatağan"},{"name":"Yalvaç"},{"name":"Yahyalı"},{"name":"Viranşehir"},{"name":"Varto"},{"name":"Van"},{"name":"Cimin"},{"name":"Uşak"},{"name":"Urla"},{"name":"Ürgüp"},{"name":"Şanlıurfa"},{"name":"Turgutlu"},{"name":"Tunceli"},{"name":"Torbalı"},{"name":"Tire"},{"name":"Tekirova"},{"name":"Tavşanlı"},{"name":"Tatvan"},{"name":"Tarsus"},{"name":"Talas"},{"name":"Susurluk"},{"name":"Suruç"},{"name":"Sorgun"},{"name":"Soma"},{"name":"Solhan"},{"name":"Söke"},{"name":"Siverek"},{"name":"Sivas"},{"name":"Şırnak"},{"name":"Simav"},{"name":"Silvan"},{"name":"Silopi"},{"name":"Silifke"},{"name":"Siirt"},{"name":"Seydişehir"},{"name":"Serinyol"},{"name":"Serik"},{"name":"Şereflikoçhisar"},{"name":"Senirkent"},{"name":"Şemdinli"},{"name":"Selçuk"},{"name":"Seferhisar"},{"name":"Şarkışla"},{"name":"Şarkîkaraağaç"},{"name":"Sarayköy"},{"name":"Sandıklı"},{"name":"Salihli"},{"name":"Reyhanlı"},{"name":"Polatlı"},{"name":"Pazarcık"},{"name":"Patnos"},{"name":"Pasinler"},{"name":"Osmaniye"},{"name":"Ortaköy"},{"name":"Ortaca"},{"name":"Ödemiş"},{"name":"Nusaybin"},{"name":"Nizip"},{"name":"Niğde"},{"name":"Nevşehir"},{"name":"Nazilli"},{"name":"Mut"},{"name":"Muş"},{"name":"Muğla"},{"name":"Mucur"},{"name":"Milas"},{"name":"Midyat"},{"name":"Mercin"},{"name":"Menemen"},{"name":"Marmaris"},{"name":"Mardin"},{"name":"Manisa"},{"name":"Manavgat"},{"name":"Malazgirt"},{"name":"Malatya"},{"name":"Mahmutlar"},{"name":"Lice"},{"name":"Kütahya"},{"name":"Kuşadası"},{"name":"Kurtalan"},{"name":"Beykonak"},{"name":"Kulu"},{"name":"Kulp"},{"name":"Kula"},{"name":"Kozluk"},{"name":"Kozan"},{"name":"Kovancılar"},{"name":"Korkuteli"},{"name":"Konya"},{"name":"Kızıltepe"},{"name":"Serinhisar"},{"name":"Kırşehir"},{"name":"Kırkağaç"},{"name":"Kırıkkale"},{"name":"Kırıkhan"},{"name":"Kilis"},{"name":"Keskin"},{"name":"Kemer"},{"name":"Kemalpaşa"},{"name":"Kayseri"},{"name":"Karapınar"},{"name":"Karaman"},{"name":"Ağrı"},{"name":"Karakoçan"},{"name":"Karaçoban"},{"name":"Kaman"},{"name":"Kâhta"},{"name":"Kahramanmaraş"},{"name":"Kadirli"},{"name":"Kadınhanı"},{"name":"İzmir"},{"name":"Isparta"},{"name":"İdil"},{"name":"Hizan"},{"name":"Hınıs"},{"name":"Hilvan"},{"name":"Hadim"},{"name":"Hacılar"},{"name":"Güroymak"},{"name":"Gölbaşı"},{"name":"Göksun"},{"name":"Genç"},{"name":"Gemerek"},{"name":"Gediz"},{"name":"Gazipaşa"},{"name":"Gaziantep"},{"name":"Foça"},{"name":"Fethiye"},{"name":"Ezine"},{"name":"Eskişehir"},{"name":"Erzurum"},{"name":"Erzincan"},{"name":"Ermenek"},{"name":"Ergani"},{"name":"Ereğli"},{"name":"Erdemli"},{"name":"Erciş"},{"name":"Emirdağ"},{"name":"Emet"},{"name":"Elmalı"},{"name":"Elmadağ"},{"name":"Eleşkirt"},{"name":"Elbistan"},{"name":"Elazığ"},{"name":"Eğirdir"},{"name":"Edremit"},{"name":"Dursunbey"},{"name":"Dörtyol"},{"name":"Doğubayazıt"},{"name":"Diyarbakır"},{"name":"Diyadin"},{"name":"Dinar"},{"name":"Develi"},{"name":"Denizli"},{"name":"Demirci"},{"name":"Dargeçit"},{"name":"Darende"},{"name":"Çumra"},{"name":"Menderes"},{"name":"Hakkari"},{"name":"Cizre"},{"name":"Çine"},{"name":"Ceylanpınar"},{"name":"Ceyhan"},{"name":"Çeşme"},{"name":"Çermik"},{"name":"Çay"},{"name":"Çağlayancerit"},{"name":"Burhaniye"},{"name":"Burdur"},{"name":"Bulanık"},{"name":"Bucak"},{"name":"Bozyazı"},{"name":"Bozüyük"},{"name":"Bozova"},{"name":"Bor"},{"name":"Bolvadin"},{"name":"Bodrum"},{"name":"Bitlis"},{"name":"Bismil"},{"name":"Birecik"},{"name":"Bingöl"},{"name":"Bigadiç"},{"name":"Beyşehir"},{"name":"Besni"},{"name":"Bergama"},{"name":"Belen"},{"name":"Belek"},{"name":"Bayındır"},{"name":"Batman"},{"name":"Baskil"},{"name":"Banaz"},{"name":"Balıkesir"},{"name":"Bahçe"},{"name":"Ayvalık"},{"name":"Aydın"},{"name":"Aşkale"},{"name":"Antalya"},{"name":"Antakya"},{"name":"Ankara"},{"name":"Anamur"},{"name":"Aliağa"},{"name":"Alaşehir"},{"name":"Alanya"},{"name":"Akşehir"},{"name":"Aksaray"},{"name":"Akhisar"},{"name":"Akdağmadeni"},{"name":"Akçakale"},{"name":"Ahlat"},{"name":"Afyonkarahisar"},{"name":"Afşin"},{"name":"Adıyaman"},{"name":"Adilcevaz"},{"name":"Adana"},{"name":"Denizciler"},{"name":"Batikent"},{"name":"Dalaman"},{"name":"Zonguldak"},{"name":"Zile"},{"name":"Zeytinburnu"},{"name":"Yomra"},{"name":"Yenişehir"},{"name":"Körfez"},{"name":"Yalova"},{"name":"Yakuplu"},{"name":"Vezirköprü"},{"name":"Vakfıkebir"},{"name":"Uzunköprü"},{"name":"Üsküdar"},{"name":"Ünye"},{"name":"Umraniye"},{"name":"Turhal"},{"name":"Trabzon"},{"name":"Tosya"},{"name":"Tokat"},{"name":"Tirebolu"},{"name":"Terme"},{"name":"Tepecik"},{"name":"Tekkeköy"},{"name":"Tekirdağ"},{"name":"Taşova"},{"name":"Taşköprü"},{"name":"Suşehri"},{"name":"Sürmene"},{"name":"Sungurlu"},{"name":"Suluova"},{"name":"Şişli"},{"name":"Sinop"},{"name":"Silivri"},{"name":"Şebin Karahisar"},{"name":"Sarıkamış"},{"name":"Sapanca"},{"name":"Samsun"},{"name":"Safranbolu"},{"name":"Rize"},{"name":"Osmaneli"},{"name":"Osmancık"},{"name":"Orhangazi"},{"name":"Ordu"},{"name":"Oltu"},{"name":"Of"},{"name":"Niksar"},{"name":"Nallıhan"},{"name":"Mustafakemalpaşa"},{"name":"Mudanya"},{"name":"Mimarsinan"},{"name":"Merzifon"},{"name":"Maltepe"},{"name":"Malkara"},{"name":"Lüleburgaz"},{"name":"Kumru"},{"name":"Korgan"},{"name":"Kocaali"},{"name":"Kızılcahamam"},{"name":"Kırklareli"},{"name":"Kestel"},{"name":"Keşan"},{"name":"Kelkit"},{"name":"Kazan"},{"name":"Kavaklı"},{"name":"Kastamonu"},{"name":"Kars"},{"name":"Karasu"},{"name":"Karamürsel"},{"name":"Karacabey"},{"name":"Karabük"},{"name":"Kağızman"},{"name":"İznik"},{"name":"İzmit"},{"name":"İstanbul"},{"name":"İskilip"},{"name":"İnegol"},{"name":"Horasan"},{"name":"Hopa"},{"name":"Hendek"},{"name":"Hayrabolu"},{"name":"Havza"},{"name":"Gürsu"},{"name":"Gürpınar"},{"name":"Gürgentepe"},{"name":"Gumushkhane"},{"name":"Görele"},{"name":"Gönen"},{"name":"Gölcük"},{"name":"Giresun"},{"name":"Geyve"},{"name":"Gerede"},{"name":"Gemlik"},{"name":"Gelibolu"},{"name":"Gebze"},{"name":"Ferizli"},{"name":"Fatsa"},{"name":"Esenyurt"},{"name":"Esenler"},{"name":"Ereğli"},{"name":"Erdek"},{"name":"Erbaa"},{"name":"Eminönü"},{"name":"Edirne"},{"name":"Düzce"},{"name":"Devrek"},{"name":"Çubuk"},{"name":"Çorum"},{"name":"Çorlu"},{"name":"Çerkezköy"},{"name":"Çerkeş"},{"name":"Çayeli"},{"name":"Çaycuma"},{"name":"Çatalca"},{"name":"Çarşamba"},{"name":"Khanjarah"},{"name":"Çanakkale"},{"name":"Çan"},{"name":"Bursa"},{"name":"Bulancak"},{"name":"Boyabat"},{"name":"Bolu"},{"name":"Bilecik"},{"name":"Biga"},{"name":"Beypazarı"},{"name":"Beşikdüzü"},{"name":"Bayburt"},{"name":"Bartın"},{"name":"Bandırma"},{"name":"Bağcılar"},{"name":"Bafra"},{"name":"Babaeski"},{"name":"Artvin"},{"name":"Arsin"},{"name":"Arhavi"},{"name":"Ardeşen"},{"name":"Ardahan"},{"name":"Araklı"},{"name":"Amasya"},{"name":"Alaplı"},{"name":"Alaca"},{"name":"Akyazı"},{"name":"Akçakoca"},{"name":"Akçaabat"},{"name":"Adapazarı"},{"name":"Espiye"},{"name":"merter keresteciler"},{"name":"güngören merter"},{"name":"Turgutreis"},{"name":"Sarigerme"},{"name":"Ataşehir"},{"name":"Başakşehir"},{"name":"Beylikdüzü"},{"name":"Büyükçekmece"},{"name":"Çankaya"},{"name":"Bahçelievler"},{"name":"Sultangazi"},{"name":"Sultanbeyli"},{"name":"Sancaktepe"},{"name":"Karabağlar"},{"name":"Muratpaşa"},{"name":"Tunapuna"},{"name":"Scarborough"},{"name":"Sangre Grande"},{"name":"San Fernando"},{"name":"Rio Claro"},{"name":"Port of Spain"},{"name":"Point Fortin"},{"name":"Paradise"},{"name":"Mon Repos"},{"name":"Marabella"},{"name":"Laventille"},{"name":"Chaguanas"},{"name":"Arima"},{"name":"Funafuti"},{"name":"Douliu"},{"name":"Yujing"},{"name":"Taipei"},{"name":"Tainan"},{"name":"Taichung"},{"name":"Daxi"},{"name":"Banqiao"},{"name":"Puli"},{"name":"Nantou"},{"name":"Magong"},{"name":"Lugu"},{"name":"Kaohsiung"},{"name":"Yilan"},{"name":"Hualien City"},{"name":"Hsinchu"},{"name":"Hengchun"},{"name":"Jincheng"},{"name":"Keelung"},{"name":"Taoyuan City"},{"name":"Taitung City"},{"name":"Zhongxing New Village"},{"name":"Zanzibar"},{"name":"Wete"},{"name":"Vwawa"},{"name":"Vikindu"},{"name":"Uyovu"},{"name":"Uvinza"},{"name":"Ushirombo"},{"name":"Usevia"},{"name":"Usagara"},{"name":"Usa River"},{"name":"Urambo"},{"name":"Tunduma"},{"name":"Tumbi"},{"name":"Tukuyu"},{"name":"Tinde"},{"name":"Tarime"},{"name":"Tanga"},{"name":"Tabora"},{"name":"Sumbawanga"},{"name":"Songwa"},{"name":"Somanda"},{"name":"Sokoni"},{"name":"Sirari"},{"name":"Singida"},{"name":"Sikonge"},{"name":"Shinyanga"},{"name":"Shelui"},{"name":"Sepuka"},{"name":"Same"},{"name":"Rulenge"},{"name":"Rujewa"},{"name":"Puma"},{"name":"Old Shinyanga"},{"name":"Nzega"},{"name":"Nyamuswa"},{"name":"Nyalikungu"},{"name":"Nyakabindi"},{"name":"Nsunga"},{"name":"Nshamba"},{"name":"Njombe"},{"name":"Nguruka"},{"name":"Ngudu"},{"name":"Ngerengere"},{"name":"Ngara"},{"name":"Nangwa"},{"name":"Namanyere"},{"name":"Mwanza"},{"name":"Mwadui"},{"name":"Mvomero"},{"name":"Musoma"},{"name":"Muriti"},{"name":"Mungaa"},{"name":"Muheza"},{"name":"Mugumu"},{"name":"Mtwango"},{"name":"Mto wa Mbu"},{"name":"Mtinko"},{"name":"Msowero"},{"name":"Mpwapwa"},{"name":"Mpanda"},{"name":"Moshi"},{"name":"Morogoro"},{"name":"Mlowo"},{"name":"Mlimba"},{"name":"Mlangali"},{"name":"Mlandizi"},{"name":"Mlalo"},{"name":"Mkuranga"},{"name":"Mwandiga"},{"name":"Misungwi"},{"name":"Mikumi"},{"name":"Mhango"},{"name":"Mgandu"},{"name":"Mbuguni"},{"name":"Mbeya"},{"name":"Mazinde"},{"name":"Matui"},{"name":"Matai"},{"name":"Maswa"},{"name":"Masumbwe"},{"name":"Maramba"},{"name":"Malinyi"},{"name":"Malampaka"},{"name":"Makuyuni"},{"name":"Makumbako"},{"name":"Mahanje"},{"name":"Kihangara"},{"name":"Magugu"},{"name":"Magomeni"},{"name":"Magole"},{"name":"Mafinga"},{"name":"Mabama"},{"name":"Lushoto"},{"name":"Lugoba"},{"name":"Liwale"},{"name":"Lembeni"},{"name":"Lalago"},{"name":"Laela"},{"name":"Kyela"},{"name":"Kondoa"},{"name":"Kiwira"},{"name":"Kishapu"},{"name":"Kisesa"},{"name":"Kirando"},{"name":"Kiomboi"},{"name":"Kingori"},{"name":"Kilosa"},{"name":"Kigoma"},{"name":"Kidodi"},{"name":"Kidatu"},{"name":"Kibondo"},{"name":"Kibiti"},{"name":"Kibara"},{"name":"Kibakwe"},{"name":"Kibaha"},{"name":"Katumba"},{"name":"Katoro"},{"name":"Katerero"},{"name":"Kasulu"},{"name":"Kasamwa"},{"name":"Kiratu"},{"name":"Kamachumu"},{"name":"Kakonko"},{"name":"Kahama"},{"name":"Kabanga"},{"name":"Izazi"},{"name":"Itigi"},{"name":"Isaka"},{"name":"Iringa"},{"name":"Ipinda"},{"name":"Ilula"},{"name":"Ilongero"},{"name":"Ilembula"},{"name":"Ikungi"},{"name":"Igurusi"},{"name":"Igunga"},{"name":"Igugunu"},{"name":"Ifakara"},{"name":"Hedaru"},{"name":"Geita"},{"name":"Geiro"},{"name":"Galappo"},{"name":"Dongobesh"},{"name":"Dodoma"},{"name":"Dar es Salaam"},{"name":"Dareda"},{"name":"Chimala"},{"name":"Chato"},{"name":"Chanika"},{"name":"Chalinze"},{"name":"Chala"},{"name":"Chake Chake"},{"name":"Butiama"},{"name":"Buseresere"},{"name":"Bungu"},{"name":"Bunda"},{"name":"Bukoba"},{"name":"Bugarama"},{"name":"Biharamulo"},{"name":"Basotu"},{"name":"Bashanet"},{"name":"Bariadi"},{"name":"Bagamoyo"},{"name":"Babati"},{"name":"Arusha"},{"name":"Tingi"},{"name":"Tandahimba"},{"name":"Songea"},{"name":"Nyangao"},{"name":"Newala Kisimani"},{"name":"Nanyamba"},{"name":"Nangomba"},{"name":"Nanganga"},{"name":"Nachingwea"},{"name":"Mtwara"},{"name":"Mbinga"},{"name":"Matiri"},{"name":"Masasi"},{"name":"Maposeni"},{"name":"Lukuledi"},{"name":"Luchingu"},{"name":"Lindi"},{"name":"Kitama"},{"name":"Kigonsera"},{"name":"Merelani"},{"name":"Lebedyn"},{"name":"Druzhkivka"},{"name":"Vasylivka"},{"name":"Zvenyhorodka"},{"name":"Zuhres"},{"name":"Zolotonosha"},{"name":"Zolochiv"},{"name":"Znomenka"},{"name":"Zmiyiv"},{"name":"Zhytomyr"},{"name":"Zhmerynka"},{"name":"Zhovti Vody"},{"name":"Zhashkiv"},{"name":"Zdolbuniv"},{"name":"Zaporizhzhya"},{"name":"Yuzhne"},{"name":"Yevpatoriya"},{"name":"Yenakiyeve"},{"name":"Yasynuvata"},{"name":"Yalta"},{"name":"Yahotyn"},{"name":"Vyshhorod"},{"name":"Vynohradiv"},{"name":"Voznesensk"},{"name":"Volnovakha"},{"name":"Vovchans’k"},{"name":"Volodymyr-Volyns’kyy"},{"name":"Vyshneve"},{"name":"Vinnytsya"},{"name":"Vatutine"},{"name":"Vasylkiv"},{"name":"Uzhhorod"},{"name":"Uman’"},{"name":"Tul’chyn"},{"name":"Tsyurupyns’k"},{"name":"Truskavets"},{"name":"Torez"},{"name":"Tokmak"},{"name":"Ternopil’"},{"name":"Tal’ne"},{"name":"Syevyerodonets’k"},{"name":"Svitlovods’k"},{"name":"Sverdlovs’k"},{"name":"Svatove"},{"name":"Svalyava"},{"name":"Sumy"},{"name":"Stryi"},{"name":"Stebnyk"},{"name":"Starokostyantyniv"},{"name":"Starobil’s’k"},{"name":"Stakhanov"},{"name":"Sokal’"},{"name":"Snizhne"},{"name":"Smila"},{"name":"Sloviansk"},{"name":"Slavuta"},{"name":"Skvyra"},{"name":"Skadovs’k"},{"name":"Synel’nykove"},{"name":"Simferopol"},{"name":"Shpola"},{"name":"Shostka"},{"name":"Shepetivka"},{"name":"Shakhtars’k"},{"name":"Sevastopol"},{"name":"Selydove"},{"name":"Sarny"},{"name":"Sambir"},{"name":"Saky"},{"name":"Rubizhne"},{"name":"Rozdil’na"},{"name":"Roven’ky"},{"name":"Romny"},{"name":"Rivne"},{"name":"Reni"},{"name":"Radomyshl’"},{"name":"Piatykhatky"},{"name":"Putyvl’"},{"name":"Pryluky"},{"name":"Popasna"},{"name":"Poltava"},{"name":"Polonne"},{"name":"Polohy"},{"name":"Pidhorodne"},{"name":"Pyryatyn"},{"name":"Pervomays’k"},{"name":"Pervomays’k"},{"name":"Pereyaslav-Khmel’nyts’kyy"},{"name":"Pereval’s’k"},{"name":"Pavlohrad"},{"name":"Ovruch"},{"name":"Orikhiv"},{"name":"Oleksandriya"},{"name":"Odessa"},{"name":"Ochakiv"},{"name":"Obukhiv"},{"name":"Novyy Buh"},{"name":"Novovolyns’k"},{"name":"Novoukrayinka"},{"name":"Novomoskovs’k"},{"name":"Novohrad-Volyns’kyy"},{"name":"Nova Kakhovka"},{"name":"Nosivka"},{"name":"Nizhyn"},{"name":"Nyzhn’ohirs’kyy"},{"name":"Nikopol’"},{"name":"Netishyn"},{"name":"Nadvirna"},{"name":"Mykolayiv"},{"name":"Mukacheve"},{"name":"Molodohvardiys’k"},{"name":"Mohyliv-Podil’s’kyy"},{"name":"Miskhor"},{"name":"Myrhorod"},{"name":"Merefa"},{"name":"Melitopol’"},{"name":"Mariupol"},{"name":"Marhanets’"},{"name":"Malyn"},{"name":"Makiyivka"},{"name":"Lyubotyn"},{"name":"Lviv"},{"name":"Lutuhyne"},{"name":"Luts’k"},{"name":"Luhansk"},{"name":"Lubny"},{"name":"Lozova"},{"name":"Lysychans’k"},{"name":"Ladyzhyn"},{"name":"Kiev"},{"name":"Kuznetsovs’k"},{"name":"Kurakhovo"},{"name":"Kupjansk"},{"name":"Kryvyi Rih"},{"name":"Krolevets’"},{"name":"Kreminna"},{"name":"Kremenets’"},{"name":"Kremenchuk"},{"name":"Krasnyy Luch"},{"name":"Krasnyy Lyman"},{"name":"Krasnoperekops’k"},{"name":"Krasnohrad"},{"name":"Krasnodon"},{"name":"Krasnoarmiys’k"},{"name":"Krasyliv"},{"name":"Kramators’k"},{"name":"Kivsharivka"},{"name":"Kovel’"},{"name":"Kotovs’k"},{"name":"Kostopil’"},{"name":"Korsun’-Shevchenkivs’kyy"},{"name":"Korostyshiv"},{"name":"Korosten’"},{"name":"Kostyantynivka"},{"name":"Konotop"},{"name":"Komsomol’s’ke"},{"name":"Kolomyya"},{"name":"Kivertsi"},{"name":"Kirovs’k"},{"name":"Kirovohrad"},{"name":"Kiliya"},{"name":"Khust"},{"name":"Khmel’nyts’kyy"},{"name":"Khmil’nyk"},{"name":"Kherson"},{"name":"Khartsyz’k"},{"name":"Kharkiv"},{"name":"Kerch"},{"name":"Kozyatyn"},{"name":"Karlivka"},{"name":"Kaniv"},{"name":"Kamieniec Podolski"},{"name":"Kalush"},{"name":"Kalynivka"},{"name":"Kakhovka"},{"name":"Izyum"},{"name":"Izyaslav"},{"name":"Izmayil"},{"name":"Ivano-Frankivs’k"},{"name":"Irpin"},{"name":"Ilovays’k"},{"name":"Illichivs’k"},{"name":"Horodok"},{"name":"Horlivka"},{"name":"Hlukhiv"},{"name":"Hulyaypole"},{"name":"Horodok"},{"name":"Horodyshche"},{"name":"Hola Prystan’"},{"name":"Heniches’k"},{"name":"Hayvoron"},{"name":"Haysyn"},{"name":"Hadyach"},{"name":"Feodosiya"},{"name":"Fastiv"},{"name":"Energodar"},{"name":"Dzhankoy"},{"name":"Dzerzhyns’k"},{"name":"Dunaivtsi"},{"name":"Dubno"},{"name":"Drohobych"},{"name":"Donetsk"},{"name":"Dolyna"},{"name":"Dolyns'ka"},{"name":"Dokuchayevs’k"},{"name":"Dobropillya"},{"name":"Dnipropetrovsk"},{"name":"Dniprodzerzhyns’k"},{"name":"Dniprorudne"},{"name":"Dymytrov"},{"name":"Derhachi"},{"name":"Debal’tseve"},{"name":"Chuhuyiv"},{"name":"Chortkiv"},{"name":"Chervonopartyzans’k"},{"name":"Chervonohrad"},{"name":"Chernivtsi"},{"name":"Chernihiv"},{"name":"Cherkasy"},{"name":"Bucha"},{"name":"Bryanka"},{"name":"Brovary"},{"name":"Brody"},{"name":"Boyarka"},{"name":"Boryspil’"},{"name":"Boryslav"},{"name":"Bolhrad"},{"name":"Bohuslav"},{"name":"Bohodukhiv"},{"name":"Bilhorod-Dnistrovs’kyy"},{"name":"Bila Tserkva"},{"name":"Бережани"},{"name":"Berehove"},{"name":"Berdychiv"},{"name":"Berdyans’k"},{"name":"Bilopillya"},{"name":"Bilohirs’k"},{"name":"Bar"},{"name":"Balta"},{"name":"Balakliya"},{"name":"Balaklava"},{"name":"Bakhmach"},{"name":"Bakhchysaray"},{"name":"Avdiyivka"},{"name":"Artsyz"},{"name":"Artemivs’k"},{"name":"Armyans’k"},{"name":"Apostolove"},{"name":"Antratsyt"},{"name":"Amvrosiyivka"},{"name":"Alushta"},{"name":"Alchevs’k"},{"name":"Okhtyrka"},{"name":"Komsomolsk"},{"name":"Славутич"},{"name":"Yuzhnoukrains'k"},{"name":"Novoyavorivs'k"},{"name":"Yumbe"},{"name":"Wobulenzi"},{"name":"Wakiso"},{"name":"Tororo"},{"name":"Soroti"},{"name":"Pallisa"},{"name":"Paidha"},{"name":"Nyachera"},{"name":"Ntungamo"},{"name":"Ntungamo"},{"name":"Njeru"},{"name":"Nebbi"},{"name":"Namasuba"},{"name":"Mukono"},{"name":"Mubende"},{"name":"Moyo"},{"name":"Mityana"},{"name":"Mbarara"},{"name":"Mbale"},{"name":"Masindi"},{"name":"Masaka"},{"name":"Luwero"},{"name":"Lugazi"},{"name":"Lira"},{"name":"Kyenjojo"},{"name":"Kotido"},{"name":"Kitgum"},{"name":"Kireka"},{"name":"Kayunga"},{"name":"Kasese"},{"name":"Kamwenge"},{"name":"Kampala"},{"name":"Kabale"},{"name":"Jinja"},{"name":"Iganga"},{"name":"Hoima"},{"name":"Gulu"},{"name":"Fort Portal"},{"name":"Entebbe"},{"name":"Bwizibwera"},{"name":"Buwenge"},{"name":"Busia"},{"name":"Busembatia"},{"name":"Bundibugyo"},{"name":"Bugiri"},{"name":"Arua"},{"name":"Adjumani"},{"name":"Fort Hunt"},{"name":"Bessemer"},{"name":"Paducah"},{"name":"Birmingham"},{"name":"Center Point"},{"name":"Daphne"},{"name":"Decatur"},{"name":"Dothan"},{"name":"East Florence"},{"name":"Enterprise"},{"name":"Fairhope"},{"name":"Florence"},{"name":"Gadsden"},{"name":"Helena"},{"name":"Homewood"},{"name":"Hoover"},{"name":"Hueytown"},{"name":"Huntsville"},{"name":"Madison"},{"name":"Mobile"},{"name":"Montgomery"},{"name":"Mountain Brook"},{"name":"Northport"},{"name":"Opelika"},{"name":"Oxford"},{"name":"Pelham"},{"name":"Phenix City"},{"name":"Prattville"},{"name":"Prichard"},{"name":"Selma"},{"name":"Talladega"},{"name":"Tillmans Corner"},{"name":"Troy"},{"name":"Trussville"},{"name":"Tuscaloosa"},{"name":"Vestavia Hills"},{"name":"Bella Vista"},{"name":"Benton"},{"name":"Bentonville"},{"name":"Blytheville"},{"name":"Bryant"},{"name":"Cabot"},{"name":"Conway"},{"name":"El Dorado"},{"name":"Fayetteville"},{"name":"Forrest City"},{"name":"Fort Smith"},{"name":"Hot Springs"},{"name":"Jacksonville"},{"name":"Jonesboro"},{"name":"Little Rock"},{"name":"Maumelle"},{"name":"North Little Rock"},{"name":"Paragould"},{"name":"Pine Bluff"},{"name":"Rogers"},{"name":"Russellville"},{"name":"Searcy"},{"name":"Siloam Springs"},{"name":"Springdale"},{"name":"Texarkana"},{"name":"Van Buren"},{"name":"West Memphis"},{"name":"Washington, D.C."},{"name":"Bear"},{"name":"Dover"},{"name":"Middletown"},{"name":"Newark"},{"name":"Wilmington"},{"name":"Allapattah"},{"name":"Altamonte Springs"},{"name":"Apopka"},{"name":"Aventura"},{"name":"Bartow"},{"name":"Bayonet Point"},{"name":"Bayshore Gardens"},{"name":"Belle Glade"},{"name":"Bellview"},{"name":"Bloomingdale"},{"name":"Boca Del Mar"},{"name":"Boca Raton"},{"name":"Bonita Springs"},{"name":"Boynton Beach"},{"name":"Bradenton"},{"name":"Brandon"},{"name":"Brent"},{"name":"Brownsville"},{"name":"Buenaventura Lakes"},{"name":"Cantonment"},{"name":"Cape Coral"},{"name":"Carol City"},{"name":"Carrollwood"},{"name":"Carrollwood Village"},{"name":"Casselberry"},{"name":"Citrus Park"},{"name":"Clearwater"},{"name":"Clermont"},{"name":"Cocoa"},{"name":"Coconut Creek"},{"name":"Coconut Grove"},{"name":"Cooper City"},{"name":"Coral Gables"},{"name":"Coral Springs"},{"name":"Coral Terrace"},{"name":"Country Walk"},{"name":"Country Club"},{"name":"Crestview"},{"name":"Cutler"},{"name":"Cutler Ridge"},{"name":"Dania Beach"},{"name":"Davie"},{"name":"Daytona Beach"},{"name":"DeLand"},{"name":"DeBary"},{"name":"Deerfield Beach"},{"name":"Delray Beach"},{"name":"Deltona"},{"name":"Doral"},{"name":"Dunedin"},{"name":"East Lake"},{"name":"East Pensacola Heights"},{"name":"Edgewater"},{"name":"Egypt Lake-Leto"},{"name":"Ensley"},{"name":"Estero"},{"name":"Eustis"},{"name":"Ferry Pass"},{"name":"Flagami"},{"name":"Florida Ridge"},{"name":"Fort Lauderdale"},{"name":"Fort Myers"},{"name":"Fort Pierce"},{"name":"Fort Walton Beach"},{"name":"Fountainebleau"},{"name":"Fruit Cove"},{"name":"Gainesville"},{"name":"Glenvar Heights"},{"name":"Golden Gate"},{"name":"Golden Glades"},{"name":"Greenacres City"},{"name":"Haines City"},{"name":"Hallandale Beach"},{"name":"Hialeah"},{"name":"Hialeah Gardens"},{"name":"Holiday"},{"name":"Hollywood"},{"name":"Homestead"},{"name":"Immokalee"},{"name":"Iona"},{"name":"Ives Estates"},{"name":"Jacksonville"},{"name":"Jacksonville Beach"},{"name":"Jasmine Estates"},{"name":"Jupiter"},{"name":"Kendale Lakes"},{"name":"Kendall"},{"name":"Key West"},{"name":"Keystone"},{"name":"Kissimmee"},{"name":"Lake Butler"},{"name":"Lake Magdalene"},{"name":"Lake Worth"},{"name":"Lake Worth Corridor"},{"name":"Lakeland"},{"name":"Lakeside"},{"name":"Land O' Lakes"},{"name":"Largo"},{"name":"Lauderdale Lakes"},{"name":"Lauderhill"},{"name":"Lealman"},{"name":"Leesburg"},{"name":"Lehigh Acres"},{"name":"Leisure City"},{"name":"Lutz"},{"name":"Lynn Haven"},{"name":"Maitland"},{"name":"Margate"},{"name":"Meadow Woods"},{"name":"Melbourne"},{"name":"Merritt Island"},{"name":"Miami"},{"name":"Miami Beach"},{"name":"Miami Gardens"},{"name":"Miami Lakes"},{"name":"Miramar"},{"name":"Myrtle Grove"},{"name":"Naples"},{"name":"Navarre"},{"name":"New Smyrna Beach"},{"name":"Norland"},{"name":"North Fort Myers"},{"name":"North Lauderdale"},{"name":"North Miami"},{"name":"North Miami Beach"},{"name":"North Port"},{"name":"Oak Ridge"},{"name":"Oakland Park"},{"name":"Ocala"},{"name":"Ocoee"},{"name":"Ojus"},{"name":"Opa-locka"},{"name":"Orlando"},{"name":"Ormond Beach"},{"name":"Oviedo"},{"name":"Pace"},{"name":"Palm Bay"},{"name":"Palm Beach Gardens"},{"name":"Palm City"},{"name":"Palm Coast"},{"name":"Palm Harbor"},{"name":"Palm Springs"},{"name":"Palm Valley"},{"name":"Palmetto Bay"},{"name":"Panama City"},{"name":"Parkland"},{"name":"Pembroke Pines"},{"name":"Pensacola"},{"name":"Pine Hills"},{"name":"Pinecrest"},{"name":"Pinellas Park"},{"name":"Pinewood"},{"name":"Plant City"},{"name":"Plantation"},{"name":"Poinciana"},{"name":"Pompano Beach"},{"name":"Ponte Vedra Beach"},{"name":"Port Charlotte"},{"name":"Port Orange"},{"name":"Port Saint Lucie"},{"name":"Princeton"},{"name":"Punta Gorda"},{"name":"Punta Gorda Isles"},{"name":"Richmond West"},{"name":"Riverview"},{"name":"Riviera Beach"},{"name":"Rockledge"},{"name":"Royal Palm Beach"},{"name":"Ruskin"},{"name":"Safety Harbor"},{"name":"Saint Cloud"},{"name":"Saint Petersburg"},{"name":"San Carlos Park"},{"name":"Sanford"},{"name":"Sarasota"},{"name":"Sebastian"},{"name":"Seminole"},{"name":"South Bradenton"},{"name":"South Miami Heights"},{"name":"Southchase"},{"name":"Spring Hill"},{"name":"Stuart"},{"name":"Sun City Center"},{"name":"Sunny Isles Beach"},{"name":"Sunrise"},{"name":"Sunset"},{"name":"Tallahassee"},{"name":"Tamarac"},{"name":"Tamiami"},{"name":"Tampa"},{"name":"Tarpon Springs"},{"name":"Temple Terrace"},{"name":"The Crossings"},{"name":"The Hammocks"},{"name":"The Villages"},{"name":"Three Lakes"},{"name":"Titusville"},{"name":"Town 'n' Country"},{"name":"University Park"},{"name":"Valrico"},{"name":"Venice"},{"name":"Vero Beach"},{"name":"Wekiwa Springs"},{"name":"Wellington"},{"name":"Wesley Chapel"},{"name":"Westchase"},{"name":"West Little River"},{"name":"West Melbourne"},{"name":"West Palm Beach"},{"name":"West Pensacola"},{"name":"West and East Lealman"},{"name":"Westchester"},{"name":"Weston"},{"name":"Winter Garden"},{"name":"Winter Haven"},{"name":"Winter Park"},{"name":"Winter Springs"},{"name":"Wright"},{"name":"Acworth"},{"name":"Albany"},{"name":"Alpharetta"},{"name":"Americus"},{"name":"Athens"},{"name":"Atlanta"},{"name":"Augusta"},{"name":"Belvedere Park"},{"name":"Brookhaven"},{"name":"Brunswick"},{"name":"Calhoun"},{"name":"Canton"},{"name":"Carrollton"},{"name":"Cartersville"},{"name":"Columbus"},{"name":"Conyers"},{"name":"Dalton"},{"name":"Decatur"},{"name":"Douglasville"},{"name":"Dublin"},{"name":"Duluth"},{"name":"Dunwoody"},{"name":"East Point"},{"name":"Evans"},{"name":"Fayetteville"},{"name":"Forest Park"},{"name":"Gainesville"},{"name":"Griffin"},{"name":"Hinesville"},{"name":"Kennesaw"},{"name":"Kingsland"},{"name":"La Grange"},{"name":"Lawrenceville"},{"name":"Lithia Springs"},{"name":"Mableton"},{"name":"Macon"},{"name":"Marietta"},{"name":"Martinez"},{"name":"McDonough"},{"name":"Milledgeville"},{"name":"Newnan"},{"name":"North Decatur"},{"name":"North Druid Hills"},{"name":"Peachtree City"},{"name":"Pooler"},{"name":"Redan"},{"name":"Riverdale"},{"name":"Rome"},{"name":"Roswell"},{"name":"St. Marys"},{"name":"Sandy Springs"},{"name":"Savannah"},{"name":"Smyrna"},{"name":"Snellville"},{"name":"Statesboro"},{"name":"Stockbridge"},{"name":"Sugar Hill"},{"name":"Suwanee"},{"name":"Thomasville"},{"name":"Tifton"},{"name":"Tucker"},{"name":"Union City"},{"name":"Valdosta"},{"name":"Warner Robins"},{"name":"Wilmington Island"},{"name":"Woodstock"},{"name":"Alton"},{"name":"Belleville"},{"name":"Cahokia"},{"name":"Carbondale"},{"name":"Charleston"},{"name":"Collinsville"},{"name":"Decatur"},{"name":"East Saint Louis"},{"name":"Edwardsville"},{"name":"Fairview Heights"},{"name":"Godfrey"},{"name":"Granite City"},{"name":"Jacksonville"},{"name":"Marion"},{"name":"Mattoon"},{"name":"Mount Vernon"},{"name":"O'Fallon"},{"name":"Quincy"},{"name":"Springfield"},{"name":"Upper Alton"},{"name":"Bloomington"},{"name":"Broad Ripple"},{"name":"Brownsburg"},{"name":"Carmel"},{"name":"Clarksville"},{"name":"Columbus"},{"name":"Evansville"},{"name":"Fishers"},{"name":"Greenfield"},{"name":"Greenwood"},{"name":"Indianapolis"},{"name":"Jasper"},{"name":"Jeffersonville"},{"name":"Lawrence"},{"name":"New Albany"},{"name":"New Castle"},{"name":"Plainfield"},{"name":"Richmond"},{"name":"Seymour"},{"name":"Shelbyville"},{"name":"Terre Haute"},{"name":"Vincennes"},{"name":"Derby"},{"name":"Emporia"},{"name":"Gardner"},{"name":"Great Bend"},{"name":"Hays"},{"name":"Hutchinson"},{"name":"Junction City"},{"name":"Kansas City"},{"name":"Lawrence"},{"name":"Leavenworth"},{"name":"Leawood"},{"name":"Lenexa"},{"name":"Manhattan"},{"name":"Newton"},{"name":"Olathe"},{"name":"Overland Park"},{"name":"Pittsburg"},{"name":"Prairie Village"},{"name":"Salina"},{"name":"Shawnee"},{"name":"Topeka"},{"name":"Wichita"},{"name":"Ashland"},{"name":"Bowling Green"},{"name":"Burlington"},{"name":"Covington"},{"name":"Danville"},{"name":"Elizabethtown"},{"name":"Erlanger"},{"name":"Fern Creek"},{"name":"Florence"},{"name":"Fort Thomas"},{"name":"Frankfort"},{"name":"Georgetown"},{"name":"Henderson"},{"name":"Highview"},{"name":"Hopkinsville"},{"name":"Independence"},{"name":"Ironville"},{"name":"Jeffersontown"},{"name":"Lexington"},{"name":"Lexington-Fayette"},{"name":"Louisville"},{"name":"Madisonville"},{"name":"Meads"},{"name":"Murray"},{"name":"Newburg"},{"name":"Newport"},{"name":"Nicholasville"},{"name":"Okolona"},{"name":"Owensboro"},{"name":"Pleasure Ridge Park"},{"name":"Radcliff"},{"name":"Richmond"},{"name":"Saint Matthews"},{"name":"Shively"},{"name":"Valley Station"},{"name":"Winchester"},{"name":"Alexandria"},{"name":"Baton Rouge"},{"name":"Bayou Cane"},{"name":"Bossier City"},{"name":"Central"},{"name":"Chalmette"},{"name":"Estelle"},{"name":"Gretna"},{"name":"Hammond"},{"name":"Harvey"},{"name":"Houma"},{"name":"Kenner"},{"name":"Lafayette"},{"name":"Lake Charles"},{"name":"Laplace"},{"name":"Marrero"},{"name":"Metairie"},{"name":"Metairie Terrace"},{"name":"Monroe"},{"name":"Natchitoches"},{"name":"New Iberia"},{"name":"New Orleans"},{"name":"Opelousas"},{"name":"Prairieville"},{"name":"Ruston"},{"name":"Shenandoah"},{"name":"Shreveport"},{"name":"Slidell"},{"name":"Sulphur"},{"name":"Terrytown"},{"name":"Adelphi"},{"name":"Annapolis"},{"name":"Arbutus"},{"name":"Arnold"},{"name":"Aspen Hill"},{"name":"Baltimore"},{"name":"Ballenger Creek"},{"name":"Beltsville"},{"name":"Bethesda"},{"name":"Bowie"},{"name":"Calverton"},{"name":"Camp Springs"},{"name":"Carney"},{"name":"Catonsville"},{"name":"Chillum"},{"name":"Cloverly"},{"name":"Clinton"},{"name":"Cockeysville"},{"name":"College Park"},{"name":"Columbia"},{"name":"Crofton"},{"name":"Cumberland"},{"name":"Damascus"},{"name":"Dundalk"},{"name":"East Riverdale"},{"name":"Easton"},{"name":"Edgewood"},{"name":"Eldersburg"},{"name":"Elkton"},{"name":"Elkridge"},{"name":"Ellicott City"},{"name":"Essex"},{"name":"Fairland"},{"name":"Ferndale"},{"name":"Fort Washington"},{"name":"Frederick"},{"name":"Gaithersburg"},{"name":"Germantown"},{"name":"Glassmanor"},{"name":"Glen Burnie"},{"name":"Green Haven"},{"name":"Greenbelt"},{"name":"Hagerstown"},{"name":"Hanover"},{"name":"Hillcrest Heights"},{"name":"Hunt Valley"},{"name":"Hyattsville"},{"name":"Ilchester"},{"name":"Lake Shore"},{"name":"Landover"},{"name":"Langley Park"},{"name":"Laurel"},{"name":"Lochearn"},{"name":"Maryland City"},{"name":"Middle River"},{"name":"Milford Mill"},{"name":"Montgomery Village"},{"name":"North Bel Air"},{"name":"North Bethesda"},{"name":"North Potomac"},{"name":"Odenton"},{"name":"Olney"},{"name":"Owings Mills"},{"name":"Oxon Hill"},{"name":"Parkville"},{"name":"Parole"},{"name":"Pasadena"},{"name":"Perry Hall"},{"name":"Pikesville"},{"name":"Potomac"},{"name":"Randallstown"},{"name":"Redland"},{"name":"Reisterstown"},{"name":"Rockville"},{"name":"Rosedale"},{"name":"Rossville"},{"name":"Saint Charles"},{"name":"Salisbury"},{"name":"Seabrook"},{"name":"Severn"},{"name":"Severna Park"},{"name":"Silver Spring"},{"name":"South Bel Air"},{"name":"South Gate"},{"name":"South Laurel"},{"name":"Suitland"},{"name":"Takoma Park"},{"name":"Towson"},{"name":"Waldorf"},{"name":"West Elkridge"},{"name":"Westminster"},{"name":"Wheaton"},{"name":"White Oak"},{"name":"Woodlawn"},{"name":"Affton"},{"name":"Arnold"},{"name":"Ballwin"},{"name":"Belton"},{"name":"Blue Springs"},{"name":"Cape Girardeau"},{"name":"Chesterfield"},{"name":"Clayton"},{"name":"Columbia"},{"name":"Concord"},{"name":"Creve Coeur"},{"name":"East Independence"},{"name":"Farmington"},{"name":"Ferguson"},{"name":"Florissant"},{"name":"Gladstone"},{"name":"Grandview"},{"name":"Hannibal"},{"name":"Hazelwood"},{"name":"Independence"},{"name":"Jefferson City"},{"name":"Joplin"},{"name":"Kansas City"},{"name":"Kirkwood"},{"name":"Lee's Summit"},{"name":"Lemay"},{"name":"Liberty"},{"name":"Manchester"},{"name":"Maryland Heights"},{"name":"Mehlville"},{"name":"Nixa"},{"name":"O'Fallon"},{"name":"Oakville"},{"name":"Overland"},{"name":"Ozark"},{"name":"Poplar Bluff"},{"name":"Raymore"},{"name":"Raytown"},{"name":"Rolla"},{"name":"Saint Charles"},{"name":"Saint Joseph"},{"name":"St. Louis"},{"name":"Saint Peters"},{"name":"Sedalia"},{"name":"Sikeston"},{"name":"Spanish Lake"},{"name":"Springfield"},{"name":"University City"},{"name":"Warrensburg"},{"name":"Webster Groves"},{"name":"Wentzville"},{"name":"Wildwood"},{"name":"Biloxi"},{"name":"Brandon"},{"name":"Clarksdale"},{"name":"Clinton"},{"name":"Columbus"},{"name":"Gautier"},{"name":"Greenville"},{"name":"Greenwood"},{"name":"Gulfport"},{"name":"Hattiesburg"},{"name":"Horn Lake"},{"name":"Jackson"},{"name":"Laurel"},{"name":"Madison"},{"name":"Meridian"},{"name":"Natchez"},{"name":"Ocean Springs"},{"name":"Olive Branch"},{"name":"Oxford"},{"name":"Pascagoula"},{"name":"Pearl"},{"name":"Ridgeland"},{"name":"Southaven"},{"name":"Starkville"},{"name":"Tupelo"},{"name":"Vicksburg"},{"name":"West Gulfport"},{"name":"Albemarle"},{"name":"Apex"},{"name":"Asheboro"},{"name":"Asheville"},{"name":"Boone"},{"name":"Burlington"},{"name":"Carrboro"},{"name":"Cary"},{"name":"Chapel Hill"},{"name":"Charlotte"},{"name":"Clayton"},{"name":"Clemmons"},{"name":"Concord"},{"name":"Cornelius"},{"name":"Durham"},{"name":"Eden"},{"name":"Elizabeth City"},{"name":"Fayetteville"},{"name":"Fuquay-Varina"},{"name":"Garner"},{"name":"Gastonia"},{"name":"Goldsboro"},{"name":"Greensboro"},{"name":"Greenville"},{"name":"Havelock"},{"name":"Henderson"},{"name":"Hickory"},{"name":"High Point"},{"name":"Holly Springs"},{"name":"Hope Mills"},{"name":"Huntersville"},{"name":"Indian Trail"},{"name":"Jacksonville"},{"name":"Kannapolis"},{"name":"Kernersville"},{"name":"Kinston"},{"name":"Laurinburg"},{"name":"Lenoir"},{"name":"Lexington"},{"name":"Lumberton"},{"name":"Matthews"},{"name":"Mint Hill"},{"name":"Monroe"},{"name":"Mooresville"},{"name":"Morganton"},{"name":"Morrisville"},{"name":"New Bern"},{"name":"Raleigh"},{"name":"Roanoke Rapids"},{"name":"Rocky Mount"},{"name":"Salisbury"},{"name":"Sanford"},{"name":"Shelby"},{"name":"Statesville"},{"name":"Thomasville"},{"name":"Wake Forest"},{"name":"West Raleigh"},{"name":"Wilmington"},{"name":"Wilson"},{"name":"Winston-Salem"},{"name":"Atlantic City"},{"name":"Bridgeton"},{"name":"Camden"},{"name":"Cherry Hill"},{"name":"Glassboro"},{"name":"Jackson"},{"name":"Lindenwold"},{"name":"Maple Shade"},{"name":"Millville"},{"name":"Mount Laurel"},{"name":"Ocean Acres"},{"name":"Pennsauken"},{"name":"Pleasantville"},{"name":"Sicklerville"},{"name":"South Vineland"},{"name":"Toms River"},{"name":"Vineland"},{"name":"Williamstown"},{"name":"Athens"},{"name":"Beavercreek"},{"name":"Centerville"},{"name":"Cincinnati"},{"name":"Columbus"},{"name":"Dayton"},{"name":"Fairborn"},{"name":"Fairfield"},{"name":"Forest Park"},{"name":"Grove City"},{"name":"Hamilton"},{"name":"Huber Heights"},{"name":"Kettering"},{"name":"Lancaster"},{"name":"Lebanon"},{"name":"Mason"},{"name":"Miamisburg"},{"name":"Middletown"},{"name":"Norwood"},{"name":"Oxford"},{"name":"Pickerington"},{"name":"Portsmouth"},{"name":"Reynoldsburg"},{"name":"Riverside"},{"name":"Springboro"},{"name":"Springfield"},{"name":"Trotwood"},{"name":"Upper Arlington"},{"name":"Vandalia"},{"name":"White Oak"},{"name":"Whitehall"},{"name":"Xenia"},{"name":"Zanesville"},{"name":"Ada"},{"name":"Altus"},{"name":"Ardmore"},{"name":"Bartlesville"},{"name":"Bethany"},{"name":"Bixby"},{"name":"Broken Arrow"},{"name":"Chickasha"},{"name":"Claremore"},{"name":"Del City"},{"name":"Duncan"},{"name":"Durant"},{"name":"Edmond"},{"name":"El Reno"},{"name":"Enid"},{"name":"Jenks"},{"name":"Lawton"},{"name":"McAlester"},{"name":"Midwest City"},{"name":"Moore"},{"name":"Muskogee"},{"name":"Mustang"},{"name":"Norman"},{"name":"Oklahoma City"},{"name":"Owasso"},{"name":"Ponca City"},{"name":"Sand Springs"},{"name":"Sapulpa"},{"name":"Shawnee"},{"name":"Stillwater"},{"name":"Tahlequah"},{"name":"Tulsa"},{"name":"Yukon"},{"name":"Chambersburg"},{"name":"Chester"},{"name":"Drexel Hill"},{"name":"Hanover"},{"name":"Philadelphia"},{"name":"Springfield"},{"name":"West Chester"},{"name":"York"},{"name":"Aiken"},{"name":"Anderson"},{"name":"Charleston"},{"name":"Columbia"},{"name":"Conway"},{"name":"Easley"},{"name":"Florence"},{"name":"Goose Creek"},{"name":"Greenville"},{"name":"Greenwood"},{"name":"Greer"},{"name":"Hanahan"},{"name":"Hilton Head Island"},{"name":"Lexington"},{"name":"Mauldin"},{"name":"Mount Pleasant"},{"name":"Myrtle Beach"},{"name":"North Augusta"},{"name":"North Charleston"},{"name":"Rock Hill"},{"name":"Saint Andrews"},{"name":"Seven Oaks"},{"name":"Simpsonville"},{"name":"Socastee"},{"name":"Spartanburg"},{"name":"Summerville"},{"name":"Sumter"},{"name":"Taylors"},{"name":"Wade Hampton"},{"name":"Bartlett"},{"name":"Brentwood"},{"name":"Brentwood Estates"},{"name":"Bristol"},{"name":"Chattanooga"},{"name":"Clarksville"},{"name":"Cleveland"},{"name":"Collierville"},{"name":"Columbia"},{"name":"Cookeville"},{"name":"Dyersburg"},{"name":"East Brainerd"},{"name":"East Chattanooga"},{"name":"East Ridge"},{"name":"Farragut"},{"name":"Franklin"},{"name":"Gallatin"},{"name":"Germantown"},{"name":"Goodlettsville"},{"name":"Greeneville"},{"name":"Hendersonville"},{"name":"Jackson"},{"name":"Johnson City"},{"name":"Kingsport"},{"name":"Knoxville"},{"name":"La Vergne"},{"name":"Lebanon"},{"name":"Maryville"},{"name":"Memphis"},{"name":"Morristown"},{"name":"Mount Juliet"},{"name":"Murfreesboro"},{"name":"Nashville"},{"name":"New South Memphis"},{"name":"Oak Ridge"},{"name":"Shelbyville"},{"name":"Smyrna"},{"name":"Spring Hill"},{"name":"Springfield"},{"name":"Tullahoma"},{"name":"Abilene"},{"name":"Alamo"},{"name":"Aldine"},{"name":"Alice"},{"name":"Allen"},{"name":"Alvin"},{"name":"Angleton"},{"name":"Arlington"},{"name":"Atascocita"},{"name":"Austin"},{"name":"Balch Springs"},{"name":"Baytown"},{"name":"Beaumont"},{"name":"Bedford"},{"name":"Bellaire"},{"name":"Belton"},{"name":"Benbrook"},{"name":"Brenham"},{"name":"Brownsville"},{"name":"Brownwood"},{"name":"Brushy Creek"},{"name":"Bryan"},{"name":"Burleson"},{"name":"Canyon Lake"},{"name":"Carrollton"},{"name":"Cedar Hill"},{"name":"Cedar Park"},{"name":"Channelview"},{"name":"Cibolo"},{"name":"Cinco Ranch"},{"name":"Cleburne"},{"name":"Cloverleaf"},{"name":"College Station"},{"name":"Colleyville"},{"name":"Conroe"},{"name":"Converse"},{"name":"Coppell"},{"name":"Copperas Cove"},{"name":"Corinth"},{"name":"Corpus Christi"},{"name":"Corsicana"},{"name":"Cypress"},{"name":"Dallas"},{"name":"DeSoto"},{"name":"Deer Park"},{"name":"Denison"},{"name":"Denton"},{"name":"Dickinson"},{"name":"Donna"},{"name":"Duncanville"},{"name":"Edinburg"},{"name":"Ennis"},{"name":"Euless"},{"name":"Farmers Branch"},{"name":"Flower Mound"},{"name":"Fort Worth"},{"name":"Fresno"},{"name":"Friendswood"},{"name":"Frisco"},{"name":"Gainesville"},{"name":"Galveston"},{"name":"Garland"},{"name":"Gatesville"},{"name":"Georgetown"},{"name":"Grand Prairie"},{"name":"Grapevine"},{"name":"Greenville"},{"name":"Groves"},{"name":"Haltom City"},{"name":"Harker Heights"},{"name":"Harlingen"},{"name":"Highland Village"},{"name":"Houston"},{"name":"Humble"},{"name":"Huntsville"},{"name":"Hurst"},{"name":"Irving"},{"name":"West Hartford"},{"name":"West Haven"},{"name":"West Torrington"},{"name":"Westport"},{"name":"Wethersfield"},{"name":"Willimantic"},{"name":"Wilton"},{"name":"Windham"},{"name":"Windsor"},{"name":"Wolcott"},{"name":"Ames"},{"name":"Ankeny"},{"name":"Bettendorf"},{"name":"Burlington"},{"name":"Cedar Falls"},{"name":"Cedar Rapids"},{"name":"Clinton"},{"name":"Clive"},{"name":"Coralville"},{"name":"Council Bluffs"},{"name":"Davenport"},{"name":"Des Moines"},{"name":"Dubuque"},{"name":"Fort Dodge"},{"name":"Iowa City"},{"name":"Johnston"},{"name":"Marion"},{"name":"Marshalltown"},{"name":"Mason City"},{"name":"Muscatine"},{"name":"Newton"},{"name":"Ottumwa"},{"name":"Sioux City"},{"name":"Urbandale"},{"name":"Waterloo"},{"name":"West Des Moines"},{"name":"Addison"},{"name":"Algonquin"},{"name":"Alsip"},{"name":"Arlington Heights"},{"name":"Aurora"},{"name":"Bartlett"},{"name":"Batavia"},{"name":"Bellwood"},{"name":"Belvidere"},{"name":"Bensenville"},{"name":"Berwyn"},{"name":"Bloomingdale"},{"name":"Bloomington"},{"name":"Blue Island"},{"name":"Bolingbrook"},{"name":"Bourbonnais"},{"name":"Bradley"},{"name":"Bridgeview"},{"name":"Brookfield"},{"name":"Buffalo Grove"},{"name":"Burbank"},{"name":"Calumet City"},{"name":"Carol Stream"},{"name":"Carpentersville"},{"name":"Cary"},{"name":"Champaign"},{"name":"Chicago"},{"name":"Chicago Heights"},{"name":"Cicero"},{"name":"Country Club Hills"},{"name":"Crest Hill"},{"name":"Crystal Lake"},{"name":"Danville"},{"name":"Darien"},{"name":"DeKalb"},{"name":"Deerfield"},{"name":"Des Plaines"},{"name":"Dixon"},{"name":"Dolton"},{"name":"Downers Grove"},{"name":"East Moline"},{"name":"East Peoria"},{"name":"Elgin"},{"name":"Elk Grove Village"},{"name":"Elmhurst"},{"name":"Elmwood Park"},{"name":"Evanston"},{"name":"Evergreen Park"},{"name":"Frankfort"},{"name":"Franklin Park"},{"name":"Freeport"},{"name":"Galesburg"},{"name":"Geneva"},{"name":"Glen Ellyn"},{"name":"Glenview"},{"name":"Goodings Grove"},{"name":"Grayslake"},{"name":"Gurnee"},{"name":"Hanover Park"},{"name":"Harvey"},{"name":"Highland Park"},{"name":"Hinsdale"},{"name":"Hoffman Estates"},{"name":"Homer Glen"},{"name":"Homewood"},{"name":"Huntley"},{"name":"Joliet"},{"name":"Kankakee"},{"name":"La Grange"},{"name":"Lake Forest"},{"name":"Lake Zurich"},{"name":"Lake in the Hills"},{"name":"Lansing"},{"name":"Lemont"},{"name":"Libertyville"},{"name":"Lisle"},{"name":"Lockport"},{"name":"Lombard"},{"name":"Loves Park"},{"name":"Machesney Park"},{"name":"Macomb"},{"name":"Matteson"},{"name":"Maywood"},{"name":"McHenry"},{"name":"Melrose Park"},{"name":"Mokena"},{"name":"Moline"},{"name":"Montgomery"},{"name":"Morton"},{"name":"Morton Grove"},{"name":"Mount Prospect"},{"name":"Mundelein"},{"name":"Naperville"},{"name":"New Lenox"},{"name":"Niles"},{"name":"Normal"},{"name":"North Aurora"},{"name":"North Chicago"},{"name":"North Peoria"},{"name":"Northbrook"},{"name":"Oak Forest"},{"name":"Oak Lawn"},{"name":"Oak Park"},{"name":"Orland Park"},{"name":"Oswego"},{"name":"Ottawa"},{"name":"Palatine"},{"name":"Palos Hills"},{"name":"Park Forest"},{"name":"Park Ridge"},{"name":"Pekin"},{"name":"Peoria"},{"name":"Plainfield"},{"name":"Prospect Heights"},{"name":"Rock Island"},{"name":"Rockford"},{"name":"Rolling Meadows"},{"name":"Romeoville"},{"name":"Roselle"},{"name":"Round Lake"},{"name":"Round Lake Beach"},{"name":"Saint Charles"},{"name":"Schaumburg"},{"name":"Shorewood"},{"name":"Skokie"},{"name":"South Elgin"},{"name":"South Holland"},{"name":"Sterling"},{"name":"Streamwood"},{"name":"Sycamore"},{"name":"Tinley Park"},{"name":"Urbana"},{"name":"Vernon Hills"},{"name":"Villa Park"},{"name":"Wasco"},{"name":"Washington"},{"name":"Waukegan"},{"name":"West Chicago"},{"name":"Westchester"},{"name":"Westmont"},{"name":"Wheaton"},{"name":"Wheeling"},{"name":"Wilmette"},{"name":"Woodridge"},{"name":"Woodstock"},{"name":"Yorkville"},{"name":"Zion"},{"name":"Anderson"},{"name":"Crawfordsville"},{"name":"Crown Point"},{"name":"Dyer"},{"name":"East Chicago"},{"name":"Elkhart"},{"name":"Fort Wayne"},{"name":"Frankfort"},{"name":"Gary"},{"name":"Goshen"},{"name":"Granger"},{"name":"Griffith"},{"name":"Hammond"},{"name":"Highland"},{"name":"Hobart"},{"name":"Huntington"},{"name":"Kokomo"},{"name":"LaPorte"},{"name":"Lafayette"},{"name":"Lebanon"},{"name":"Logansport"},{"name":"Marion"},{"name":"Merrillville"},{"name":"Michigan City"},{"name":"Mishawaka"},{"name":"Muncie"},{"name":"Munster"},{"name":"Noblesville"},{"name":"Portage"},{"name":"Schererville"},{"name":"South Bend"},{"name":"Valparaiso"},{"name":"West Lafayette"},{"name":"Westfield"},{"name":"Abington"},{"name":"Acton"},{"name":"Agawam"},{"name":"Amesbury"},{"name":"Amherst Center"},{"name":"Arlington"},{"name":"Ashland"},{"name":"Attleboro"},{"name":"Auburn"},{"name":"Barnstable"},{"name":"Belmont"},{"name":"Beverly"},{"name":"Beverly Cove"},{"name":"Billerica"},{"name":"Boston"},{"name":"Braintree"},{"name":"Brockton"},{"name":"Brookline"},{"name":"Burlington"},{"name":"Cambridge"},{"name":"Canton"},{"name":"Chelmsford"},{"name":"Chelsea"},{"name":"Chicopee"},{"name":"Concord"},{"name":"Danvers"},{"name":"Dedham"},{"name":"Dracut"},{"name":"East Longmeadow"},{"name":"Easthampton"},{"name":"Easton"},{"name":"Everett"},{"name":"Fairhaven"},{"name":"Fall River"},{"name":"Fitchburg"},{"name":"Framingham"},{"name":"Framingham Center"},{"name":"Franklin"},{"name":"Gardner"},{"name":"Gloucester"},{"name":"Grafton"},{"name":"Greenfield"},{"name":"Hanover"},{"name":"Haverhill"},{"name":"Holden"},{"name":"Holyoke"},{"name":"Jamaica Plain"},{"name":"Lawrence"},{"name":"Leominster"},{"name":"Lexington"},{"name":"Longmeadow"},{"name":"Lowell"},{"name":"Ludlow"},{"name":"Lynn"},{"name":"Malden"},{"name":"Mansfield"},{"name":"Marblehead"},{"name":"Marlborough"},{"name":"Medford"},{"name":"Melrose"},{"name":"Methuen"},{"name":"Milford"},{"name":"Milton"},{"name":"Natick"},{"name":"Needham"},{"name":"New Bedford"},{"name":"Newburyport"},{"name":"Newton"},{"name":"North Chicopee"},{"name":"Northampton"},{"name":"Norton"},{"name":"Norwood"},{"name":"Palmer"},{"name":"Peabody"},{"name":"Pittsfield"},{"name":"Quincy"},{"name":"Randolph"},{"name":"Reading"},{"name":"Rockland"},{"name":"Salem"},{"name":"Saugus"},{"name":"Shrewsbury"},{"name":"Somerset"},{"name":"Somerville"},{"name":"South Boston"},{"name":"South Hadley"},{"name":"South Peabody"},{"name":"Southbridge"},{"name":"Springfield"},{"name":"Stoneham"},{"name":"Stoughton"},{"name":"Sudbury"},{"name":"Swansea"},{"name":"Taunton"},{"name":"Tewksbury"},{"name":"Wakefield"},{"name":"Waltham"},{"name":"Watertown"},{"name":"Wellesley"},{"name":"West Springfield"},{"name":"Westfield"},{"name":"Westford"},{"name":"Weymouth"},{"name":"Wilmington"},{"name":"Winchester"},{"name":"Winthrop"},{"name":"Woburn"},{"name":"Worcester"},{"name":"Yarmouth"},{"name":"Auburn"},{"name":"Augusta"},{"name":"Bangor"},{"name":"Biddeford"},{"name":"Brunswick"},{"name":"Lewiston"},{"name":"Portland"},{"name":"Saco"},{"name":"South Portland"},{"name":"South Portland Gardens"},{"name":"Waterville"},{"name":"West Scarborough"},{"name":"Westbrook"},{"name":"Adrian"},{"name":"Allen Park"},{"name":"Allendale"},{"name":"Ann Arbor"},{"name":"Auburn Hills"},{"name":"Battle Creek"},{"name":"Bay City"},{"name":"Birmingham"},{"name":"Burton"},{"name":"Canton"},{"name":"Clinton"},{"name":"Dearborn"},{"name":"Dearborn Heights"},{"name":"Detroit"},{"name":"East Lansing"},{"name":"Eastpointe"},{"name":"Farmington Hills"},{"name":"Ferndale"},{"name":"Flint"},{"name":"Forest Hills"},{"name":"Garden City"},{"name":"Grand Rapids"},{"name":"Grandville"},{"name":"Grosse Pointe Woods"},{"name":"Hamtramck"},{"name":"Haslett"},{"name":"Hazel Park"},{"name":"Holland"},{"name":"Holt"},{"name":"Iron River"},{"name":"Jackson"},{"name":"Jenison"},{"name":"Kalamazoo"},{"name":"Kentwood"},{"name":"Lansing"},{"name":"Lincoln Park"},{"name":"Livonia"},{"name":"Madison Heights"},{"name":"Marquette"},{"name":"Midland"},{"name":"Monroe"},{"name":"Mount Clemens"},{"name":"Mount Pleasant"},{"name":"Muskegon"},{"name":"Norton Shores"},{"name":"Novi"},{"name":"Oak Park"},{"name":"Okemos"},{"name":"Owosso"},{"name":"Pontiac"},{"name":"Port Huron"},{"name":"Portage"},{"name":"Redford"},{"name":"Rochester Hills"},{"name":"Romulus"},{"name":"Roseville"},{"name":"Royal Oak"},{"name":"Saginaw"},{"name":"Shelby"},{"name":"Southfield"},{"name":"Southgate"},{"name":"Saint Clair Shores"},{"name":"Sterling Heights"},{"name":"Taylor"},{"name":"Trenton"},{"name":"Troy"},{"name":"Walker"},{"name":"Warren"},{"name":"Waterford"},{"name":"Waverly"},{"name":"Wayne"},{"name":"Westland"},{"name":"Wyandotte"},{"name":"Wyoming"},{"name":"Ypsilanti"},{"name":"Albert Lea"},{"name":"Andover"},{"name":"Anoka"},{"name":"Apple Valley"},{"name":"Austin"},{"name":"Blaine"},{"name":"Bloomington"},{"name":"Brooklyn Center"},{"name":"Brooklyn Park"},{"name":"Buffalo"},{"name":"Burnsville"},{"name":"Champlin"},{"name":"Chanhassen"},{"name":"Chaska"},{"name":"Columbia Heights"},{"name":"Coon Rapids"},{"name":"Cottage Grove"},{"name":"Crystal"},{"name":"Duluth"},{"name":"Eagan"},{"name":"Eden Prairie"},{"name":"Edina"},{"name":"Elk River"},{"name":"Faribault"},{"name":"Farmington"},{"name":"Forest Lake"},{"name":"Fridley"},{"name":"Golden Valley"},{"name":"Ham Lake"},{"name":"Hastings"},{"name":"Hibbing"},{"name":"Hopkins"},{"name":"Inver Grove Heights"},{"name":"Lakeville"},{"name":"Lino Lakes"},{"name":"Mankato"},{"name":"Maple Grove"},{"name":"Maplewood"},{"name":"Minneapolis"},{"name":"Minnetonka"},{"name":"Minnetonka Mills"},{"name":"Moorhead"},{"name":"New Brighton"},{"name":"New Hope"},{"name":"Northfield"},{"name":"Oakdale"},{"name":"Owatonna"},{"name":"Plymouth"},{"name":"Prior Lake"},{"name":"Ramsey"},{"name":"Red Wing"},{"name":"Richfield"},{"name":"Rochester"},{"name":"Rosemount"},{"name":"Roseville"},{"name":"Saint Cloud"},{"name":"Saint Louis Park"},{"name":"Saint Michael"},{"name":"Saint Paul"},{"name":"Sartell"},{"name":"Savage"},{"name":"Shakopee"},{"name":"Shoreview"},{"name":"South Saint Paul"},{"name":"Stillwater"},{"name":"West Coon Rapids"},{"name":"West Saint Paul"},{"name":"White Bear Lake"},{"name":"Willmar"},{"name":"Winona"},{"name":"Woodbury"},{"name":"Kirksville"},{"name":"Fargo"},{"name":"Grand Forks"},{"name":"Jamestown"},{"name":"West Fargo"},{"name":"Bellevue"},{"name":"Columbus"},{"name":"Fremont"},{"name":"Grand Island"},{"name":"Hastings"},{"name":"Kearney"},{"name":"La Vista"},{"name":"Lincoln"},{"name":"Norfolk"},{"name":"Omaha"},{"name":"Papillion"},{"name":"Bedford"},{"name":"Concord"},{"name":"Derry"},{"name":"Derry Village"},{"name":"Dover"},{"name":"East Concord"},{"name":"Keene"},{"name":"Laconia"},{"name":"Manchester"},{"name":"Merrimack"},{"name":"Nashua"},{"name":"Portsmouth"},{"name":"Rochester"},{"name":"Salem"},{"name":"Asbury Park"},{"name":"Avenel"},{"name":"Bayonne"},{"name":"Belleville"},{"name":"Bergenfield"},{"name":"Bloomfield"},{"name":"Carteret"},{"name":"Cliffside Park"},{"name":"Clifton"},{"name":"Colonia"},{"name":"Cranford"},{"name":"Dover"},{"name":"Dumont"},{"name":"East Brunswick"},{"name":"East Orange"},{"name":"Edison"},{"name":"Elizabeth"},{"name":"Elmwood Park"},{"name":"Englewood"},{"name":"Ewing"},{"name":"Fair Lawn"},{"name":"Fords"},{"name":"Fort Lee"},{"name":"Garfield"},{"name":"Hackensack"},{"name":"Hawthorne"},{"name":"Hillside"},{"name":"Hoboken"},{"name":"Hopatcong"},{"name":"Hopatcong Hills"},{"name":"Irvington"},{"name":"Iselin"},{"name":"Jersey City"},{"name":"Kearny"},{"name":"Lakewood"},{"name":"Linden"},{"name":"Livingston"},{"name":"Lodi"},{"name":"Long Branch"},{"name":"Lyndhurst"},{"name":"Madison"},{"name":"Mahwah"},{"name":"Maplewood"},{"name":"Marlboro"},{"name":"Montclair"},{"name":"Morristown"},{"name":"New Brunswick"},{"name":"New Milford"},{"name":"Newark"},{"name":"North Arlington"},{"name":"North Bergen"},{"name":"North Plainfield"},{"name":"Nutley"},{"name":"Old Bridge"},{"name":"Orange"},{"name":"Palisades Park"},{"name":"Paramus"},{"name":"Parsippany"},{"name":"Passaic"},{"name":"Paterson"},{"name":"Perth Amboy"},{"name":"Piscataway"},{"name":"Plainfield"},{"name":"Point Pleasant"},{"name":"Rahway"},{"name":"Ridgewood"},{"name":"Roselle"},{"name":"Rutherford"},{"name":"Sayreville"},{"name":"Sayreville Junction"},{"name":"Scotch Plains"},{"name":"Secaucus"},{"name":"Somerset"},{"name":"South Old Bridge"},{"name":"South Orange"},{"name":"South Plainfield"},{"name":"South River"},{"name":"Summit"},{"name":"Teaneck"},{"name":"Tinton Falls"},{"name":"Trenton"},{"name":"Union"},{"name":"Union City"},{"name":"Wayne"},{"name":"West Milford"},{"name":"West New York"},{"name":"West Orange"},{"name":"Westfield"},{"name":"Willingboro"},{"name":"Woodbridge"},{"name":"Wyckoff"},{"name":"Albany"},{"name":"Amherst"},{"name":"Amsterdam"},{"name":"Auburn"},{"name":"Baldwin"},{"name":"Batavia"},{"name":"Bay Shore"},{"name":"Beacon"},{"name":"Bellmore"},{"name":"Bensonhurst"},{"name":"Bethpage"},{"name":"Binghamton"},{"name":"Brentwood"},{"name":"Brighton"},{"name":"The Bronx"},{"name":"Brooklyn"},{"name":"Buffalo"},{"name":"Centereach"},{"name":"Central Islip"},{"name":"Cheektowaga"},{"name":"Cohoes"},{"name":"Commack"},{"name":"Coney Island"},{"name":"Copiague"},{"name":"Coram"},{"name":"Cortland"},{"name":"Deer Park"},{"name":"Depew"},{"name":"Dix Hills"},{"name":"East Meadow"},{"name":"East Massapequa"},{"name":"East New York"},{"name":"East Northport"},{"name":"East Patchogue"},{"name":"East Setauket"},{"name":"Eastchester"},{"name":"Eggertsville"},{"name":"Elmira"},{"name":"Elmont"},{"name":"Farmingville"},{"name":"Floral Park"},{"name":"Franklin Square"},{"name":"Freeport"},{"name":"Garden City"},{"name":"Glen Cove"},{"name":"Gloversville"},{"name":"Greenburgh"},{"name":"Harrison"},{"name":"Hauppauge"},{"name":"Hempstead"},{"name":"Hicksville"},{"name":"Holbrook"},{"name":"Holtsville"},{"name":"Huntington"},{"name":"Huntington Station"},{"name":"Irondequoit"},{"name":"Islip"},{"name":"Ithaca"},{"name":"Jamaica"},{"name":"Jamestown"},{"name":"Johnson City"},{"name":"Kenmore"},{"name":"Kings Park"},{"name":"Kingston"},{"name":"Kiryas Joel"},{"name":"Lackawanna"},{"name":"Lake Ronkonkoma"},{"name":"Levittown"},{"name":"Lindenhurst"},{"name":"Lockport"},{"name":"Long Beach"},{"name":"Long Island City"},{"name":"Lynbrook"},{"name":"Mamaroneck"},{"name":"Manhattan"},{"name":"Massapequa"},{"name":"Massapequa Park"},{"name":"Mastic"},{"name":"Medford"},{"name":"Melville"},{"name":"Merrick"},{"name":"Middletown"},{"name":"Mineola"},{"name":"Monsey"},{"name":"Mount Vernon"},{"name":"Nanuet"},{"name":"New City"},{"name":"New Rochelle"},{"name":"New York City"},{"name":"Newburgh"},{"name":"Niagara Falls"},{"name":"North Amityville"},{"name":"North Babylon"},{"name":"North Bay Shore"},{"name":"North Bellmore"},{"name":"North Massapequa"},{"name":"North Tonawanda"},{"name":"North Valley Stream"},{"name":"Oceanside"},{"name":"Ossining"},{"name":"Oswego"},{"name":"Pearl River"},{"name":"Peekskill"},{"name":"Plainview"},{"name":"Plattsburgh"},{"name":"Port Chester"},{"name":"Port Washington"},{"name":"Poughkeepsie"},{"name":"Borough of Queens"},{"name":"Rochester"},{"name":"Rockville Centre"},{"name":"Rome"},{"name":"Ronkonkoma"},{"name":"Roosevelt"},{"name":"Rotterdam"},{"name":"Rye"},{"name":"Saratoga Springs"},{"name":"Sayville"},{"name":"Scarsdale"},{"name":"Schenectady"},{"name":"Seaford"},{"name":"Selden"},{"name":"Shirley"},{"name":"Smithtown"},{"name":"Spring Valley"},{"name":"Staten Island"},{"name":"Syosset"},{"name":"Syracuse"},{"name":"Tonawanda"},{"name":"Troy"},{"name":"Uniondale"},{"name":"Utica"},{"name":"Valley Stream"},{"name":"Wantagh"},{"name":"Watertown"},{"name":"West Albany"},{"name":"West Babylon"},{"name":"West Hempstead"},{"name":"West Islip"},{"name":"West Seneca"},{"name":"Westbury"},{"name":"White Plains"},{"name":"Woodmere"},{"name":"Yonkers"},{"name":"Akron"},{"name":"Alliance"},{"name":"Ashland"},{"name":"Ashtabula"},{"name":"Aurora"},{"name":"Austintown"},{"name":"Avon"},{"name":"Avon Center"},{"name":"Avon Lake"},{"name":"Barberton"},{"name":"Bay Village"},{"name":"Berea"},{"name":"Boardman"},{"name":"Bowling Green"},{"name":"Broadview Heights"},{"name":"Brook Park"},{"name":"Brunswick"},{"name":"Canton"},{"name":"Cleveland"},{"name":"Cuyahoga Falls"},{"name":"Defiance"},{"name":"Delaware"},{"name":"Dublin"},{"name":"East Cleveland"},{"name":"Eastlake"},{"name":"Elyria"},{"name":"Euclid"},{"name":"Fairview Park"},{"name":"Findlay"},{"name":"Fremont"},{"name":"Gahanna"},{"name":"Garfield Heights"},{"name":"Green"},{"name":"Hilliard"},{"name":"Hudson"},{"name":"Kent"},{"name":"Lakewood"},{"name":"Lima"},{"name":"Lorain"},{"name":"Mansfield"},{"name":"Maple Heights"},{"name":"Marion"},{"name":"Marysville"},{"name":"Massillon"},{"name":"Mayfield Heights"},{"name":"Medina"},{"name":"Mentor"},{"name":"Middleburg Heights"},{"name":"Mount Vernon"},{"name":"New Philadelphia"},{"name":"Newark"},{"name":"Niles"},{"name":"North Canton"},{"name":"North Olmsted"},{"name":"North Ridgeville"},{"name":"North Royalton"},{"name":"Norwalk"},{"name":"Oregon"},{"name":"Painesville"},{"name":"Parma"},{"name":"Parma Heights"},{"name":"Perrysburg"},{"name":"Piqua"},{"name":"Rocky River"},{"name":"Sandusky"},{"name":"Shaker Heights"},{"name":"Sidney"},{"name":"Solon"},{"name":"South Euclid"},{"name":"Steubenville"},{"name":"Stow"},{"name":"Streetsboro"},{"name":"Strongsville"},{"name":"Sylvania"},{"name":"Tallmadge"},{"name":"Tiffin"},{"name":"Toledo"},{"name":"Troy"},{"name":"Twinsburg"},{"name":"Wadsworth"},{"name":"Warren"},{"name":"Westerville"},{"name":"Westlake"},{"name":"Willoughby"},{"name":"Wooster"},{"name":"Youngstown"},{"name":"Allentown"},{"name":"Allison Park"},{"name":"Altoona"},{"name":"Back Mountain"},{"name":"Baldwin"},{"name":"Bethel Park"},{"name":"Bethlehem"},{"name":"Carlisle"},{"name":"Easton"},{"name":"Erie"},{"name":"Harrisburg"},{"name":"Hazleton"},{"name":"Hermitage"},{"name":"Johnstown"},{"name":"King of Prussia"},{"name":"Lancaster"},{"name":"Lansdale"},{"name":"Lebanon"},{"name":"Levittown"},{"name":"Limerick"},{"name":"McKeesport"},{"name":"Monroeville"},{"name":"Mount Lebanon"},{"name":"Mountain Top"},{"name":"Murrysville"},{"name":"New Castle"},{"name":"Norristown"},{"name":"Penn Hills"},{"name":"Phoenixville"},{"name":"Pittsburgh"},{"name":"Plum"},{"name":"Pottstown"},{"name":"Radnor"},{"name":"Reading"},{"name":"Scranton"},{"name":"State College"},{"name":"Upper Saint Clair"},{"name":"Wayne"},{"name":"West Mifflin"},{"name":"Whitehall Township"},{"name":"Wilkes-Barre"},{"name":"Wilkinsburg"},{"name":"Williamsport"},{"name":"Willow Grove"},{"name":"Barrington"},{"name":"Bristol"},{"name":"Central Falls"},{"name":"Coventry"},{"name":"Cranston"},{"name":"Cumberland"},{"name":"East Providence"},{"name":"Middletown"},{"name":"Newport"},{"name":"North Kingstown"},{"name":"North Providence"},{"name":"Pawtucket"},{"name":"Portsmouth"},{"name":"Providence"},{"name":"Smithfield"},{"name":"Warwick"},{"name":"West Warwick"},{"name":"Westerly"},{"name":"Woonsocket"},{"name":"Aberdeen"},{"name":"Brookings"},{"name":"Mitchell"},{"name":"Sioux Falls"},{"name":"Watertown"},{"name":"Burlington"},{"name":"Colchester"},{"name":"Rutland"},{"name":"South Burlington"},{"name":"Appleton"},{"name":"Ashwaubenon"},{"name":"Beaver Dam"},{"name":"Beloit"},{"name":"Brookfield"},{"name":"Caledonia"},{"name":"Cudahy"},{"name":"De Pere"},{"name":"Eau Claire"},{"name":"Fitchburg"},{"name":"Fond du Lac"},{"name":"Franklin"},{"name":"Germantown"},{"name":"Green Bay"},{"name":"Greenfield"},{"name":"Howard"},{"name":"Janesville"},{"name":"Kaukauna"},{"name":"Kenosha"},{"name":"La Crosse"},{"name":"Madison"},{"name":"Manitowoc"},{"name":"Marshfield"},{"name":"Menasha"},{"name":"Menomonee Falls"},{"name":"Menomonie"},{"name":"Mequon"},{"name":"Middleton"},{"name":"Milwaukee"},{"name":"Muskego"},{"name":"Neenah"},{"name":"New Berlin"},{"name":"North La Crosse"},{"name":"Oak Creek"},{"name":"Oconomowoc"},{"name":"Onalaska"},{"name":"Oshkosh"},{"name":"Pleasant Prairie"},{"name":"Racine"},{"name":"Sheboygan"},{"name":"South Milwaukee"},{"name":"Stevens Point"},{"name":"Sun Prairie"},{"name":"Superior"},{"name":"Watertown"},{"name":"Waukesha"},{"name":"Wausau"},{"name":"Wauwatosa"},{"name":"West Allis"},{"name":"West Bend"},{"name":"Wisconsin Rapids"},{"name":"Weirton"},{"name":"Weirton Heights"},{"name":"Wheeling"},{"name":"Ansonia"},{"name":"Bridgeport"},{"name":"Bristol"},{"name":"Branford"},{"name":"Cheshire"},{"name":"Fillmore"},{"name":"Buckeye"},{"name":"Bullhead City"},{"name":"Casa Grande"},{"name":"Casas Adobes"},{"name":"Catalina Foothills"},{"name":"Chandler"},{"name":"Douglas"},{"name":"Drexel Heights"},{"name":"El Mirage"},{"name":"Eloy"},{"name":"Flagstaff"},{"name":"Florence"},{"name":"Flowing Wells"},{"name":"Fortuna Foothills"},{"name":"Fountain Hills"},{"name":"Gilbert"},{"name":"Glendale"},{"name":"Goodyear"},{"name":"Green Valley"},{"name":"Kingman"},{"name":"Lake Havasu City"},{"name":"Marana"},{"name":"Maricopa"},{"name":"Mesa"},{"name":"Nogales"},{"name":"Oro Valley"},{"name":"Payson"},{"name":"Peoria"},{"name":"Phoenix"},{"name":"Prescott"},{"name":"Prescott Valley"},{"name":"Queen Creek"},{"name":"Rio Rico"},{"name":"Sahuarita"},{"name":"San Luis"},{"name":"Scottsdale"},{"name":"Sierra Vista"},{"name":"Sun City"},{"name":"Sun City West"},{"name":"Surprise"},{"name":"Tanque Verde"},{"name":"Tempe"},{"name":"Tempe Junction"},{"name":"Tucson"},{"name":"Yuma"},{"name":"Adelanto"},{"name":"Agoura"},{"name":"Agoura Hills"},{"name":"Alameda"},{"name":"Albany"},{"name":"Alhambra"},{"name":"Aliso Viejo"},{"name":"Altadena"},{"name":"Alum Rock"},{"name":"American Canyon"},{"name":"Anaheim"},{"name":"Antelope"},{"name":"Antioch"},{"name":"Apple Valley"},{"name":"Arcadia"},{"name":"Arroyo Grande"},{"name":"Artesia"},{"name":"Arvin"},{"name":"Ashland"},{"name":"Atascadero"},{"name":"Atwater"},{"name":"Avenal"},{"name":"Avocado Heights"},{"name":"Azusa"},{"name":"Bakersfield"},{"name":"Baldwin Park"},{"name":"Banning"},{"name":"Barstow"},{"name":"Barstow Heights"},{"name":"Bay Point"},{"name":"Beaumont"},{"name":"Bell"},{"name":"Bell Gardens"},{"name":"Bellflower"},{"name":"Belmont"},{"name":"Benicia"},{"name":"Berkeley"},{"name":"Beverly Hills"},{"name":"Bloomington"},{"name":"Blythe"},{"name":"Bostonia"},{"name":"Boyle Heights"},{"name":"Brawley"},{"name":"Brea"},{"name":"Brentwood"},{"name":"Buena Park"},{"name":"Burbank"},{"name":"Burlingame"},{"name":"Calabasas"},{"name":"Calexico"},{"name":"Camarillo"},{"name":"Cameron Park"},{"name":"Campbell"},{"name":"Canoga Park"},{"name":"Carlsbad"},{"name":"Carmichael"},{"name":"Carson"},{"name":"Castaic"},{"name":"Castro Valley"},{"name":"Cathedral City"},{"name":"Ceres"},{"name":"Cerritos"},{"name":"Chatsworth"},{"name":"Chico"},{"name":"Chino"},{"name":"Chino Hills"},{"name":"Chowchilla"},{"name":"Chula Vista"},{"name":"Citrus Heights"},{"name":"Claremont"},{"name":"Clearlake"},{"name":"Clovis"},{"name":"Coachella"},{"name":"Colton"},{"name":"Compton"},{"name":"Concord"},{"name":"Corcoran"},{"name":"Corona"},{"name":"Coronado"},{"name":"Costa Mesa"},{"name":"Covina"},{"name":"Cudahy"},{"name":"Culver City"},{"name":"Cupertino"},{"name":"Cypress"},{"name":"Daly City"},{"name":"Dana Point"},{"name":"Danville"},{"name":"Davis"},{"name":"Delano"},{"name":"Desert Hot Springs"},{"name":"Diamond Bar"},{"name":"Dinuba"},{"name":"Dixon"},{"name":"Downey"},{"name":"Duarte"},{"name":"Dublin"},{"name":"East Rancho Dominguez"},{"name":"East Hemet"},{"name":"East Los Angeles"},{"name":"East Palo Alto"},{"name":"El Cajon"},{"name":"El Centro"},{"name":"El Cerrito"},{"name":"El Dorado Hills"},{"name":"El Monte"},{"name":"El Segundo"},{"name":"Elk Grove"},{"name":"Encinitas"},{"name":"Escondido"},{"name":"Fair Oaks"},{"name":"Fairfield"},{"name":"Fallbrook"},{"name":"Florin"},{"name":"Folsom"},{"name":"Fontana"},{"name":"Foothill Farms"},{"name":"Foster City"},{"name":"Fountain Valley"},{"name":"Fremont"},{"name":"Fresno"},{"name":"Fullerton"},{"name":"Galt"},{"name":"Garden Grove"},{"name":"Gardena"},{"name":"Gilroy"},{"name":"Glen Avon"},{"name":"Glendale"},{"name":"Glendora"},{"name":"Goleta"},{"name":"Granite Bay"},{"name":"Greenfield"},{"name":"Hacienda Heights"},{"name":"Hanford"},{"name":"Hawthorne"},{"name":"Hayward"},{"name":"Hemet"},{"name":"Hercules"},{"name":"Hermosa Beach"},{"name":"Hesperia"},{"name":"Highland"},{"name":"Hollister"},{"name":"Hollywood"},{"name":"Huntington Beach"},{"name":"Huntington Park"},{"name":"Imperial Beach"},{"name":"Indio"},{"name":"Inglewood"},{"name":"Irvine"},{"name":"Lodi"},{"name":"Loma Linda"},{"name":"Lomita"},{"name":"Lompoc"},{"name":"Long Beach"},{"name":"Los Altos"},{"name":"Los Angeles"},{"name":"Los Banos"},{"name":"Los Gatos"},{"name":"Lynwood"},{"name":"Madera"},{"name":"Manhattan Beach"},{"name":"Manteca"},{"name":"Marina"},{"name":"Martinez"},{"name":"Maywood"},{"name":"Mead Valley"},{"name":"Menifee"},{"name":"Menlo Park"},{"name":"Merced"},{"name":"Millbrae"},{"name":"Milpitas"},{"name":"Mira Loma"},{"name":"Mission Viejo"},{"name":"Modesto"},{"name":"Monrovia"},{"name":"Montclair"},{"name":"Montebello"},{"name":"Monterey"},{"name":"Monterey Park"},{"name":"Moorpark"},{"name":"Moraga"},{"name":"Moreno Valley"},{"name":"Morgan Hill"},{"name":"Mountain View"},{"name":"Murrieta"},{"name":"Napa"},{"name":"National City"},{"name":"Newark"},{"name":"Newport Beach"},{"name":"Nipomo"},{"name":"Norco"},{"name":"North Glendale"},{"name":"North Highlands"},{"name":"North Hollywood"},{"name":"Northridge"},{"name":"Norwalk"},{"name":"Novato"},{"name":"Oakdale"},{"name":"Oakland"},{"name":"Oakley"},{"name":"Oceanside"},{"name":"Oildale"},{"name":"Ontario"},{"name":"Orange"},{"name":"Orangevale"},{"name":"Orcutt"},{"name":"Orinda"},{"name":"Oroville"},{"name":"Oxnard"},{"name":"Oxnard Shores"},{"name":"Pacifica"},{"name":"Pacific Grove"},{"name":"Palm Desert"},{"name":"Palm Springs"},{"name":"Palmdale"},{"name":"Palo Alto"},{"name":"Paradise"},{"name":"Paramount"},{"name":"Pasadena"},{"name":"Paso Robles"},{"name":"Patterson"},{"name":"Perris"},{"name":"Petaluma"},{"name":"Pico Rivera"},{"name":"Pinole"},{"name":"Pittsburg"},{"name":"Placentia"},{"name":"Pleasant Hill"},{"name":"Pleasanton"},{"name":"Pomona"},{"name":"Port Hueneme"},{"name":"Porterville"},{"name":"Poway"},{"name":"Prunedale"},{"name":"Ramona"},{"name":"Rancho Cordova"},{"name":"Rancho Cucamonga"},{"name":"Rancho Mirage"},{"name":"Rancho Palos Verdes"},{"name":"Rancho San Diego"},{"name":"Rancho Santa Margarita"},{"name":"Redlands"},{"name":"Redondo Beach"},{"name":"Redwood City"},{"name":"Reedley"},{"name":"Rialto"},{"name":"Richmond"},{"name":"Ridgecrest"},{"name":"Rio Linda"},{"name":"Riverbank"},{"name":"Riverside"},{"name":"Rocklin"},{"name":"Rohnert Park"},{"name":"Rosamond"},{"name":"Rosemead"},{"name":"Rosemont"},{"name":"Roseville"},{"name":"Rowland Heights"},{"name":"Rubidoux"},{"name":"Sacramento"},{"name":"Salinas"},{"name":"San Bernardino"},{"name":"San Bruno"},{"name":"San Carlos"},{"name":"San Clemente"},{"name":"San Diego"},{"name":"San Dimas"},{"name":"San Fernando"},{"name":"San Francisco"},{"name":"San Gabriel"},{"name":"San Jacinto"},{"name":"San Jose"},{"name":"San Juan Capistrano"},{"name":"San Leandro"},{"name":"San Lorenzo"},{"name":"San Luis Obispo"},{"name":"San Marcos"},{"name":"San Mateo"},{"name":"San Pablo"},{"name":"San Pedro"},{"name":"San Rafael"},{"name":"San Ramon"},{"name":"Sanger"},{"name":"Santa Ana"},{"name":"Santa Barbara"},{"name":"Santa Clara"},{"name":"Santa Clarita"},{"name":"Santa Cruz"},{"name":"Santa Fe Springs"},{"name":"Santa Maria"},{"name":"Santa Monica"},{"name":"Santa Paula"},{"name":"Santa Rosa"},{"name":"Santee"},{"name":"Saratoga"},{"name":"Seal Beach"},{"name":"Seaside"},{"name":"Selma"},{"name":"Shafter"},{"name":"Sherman Oaks"},{"name":"Simi Valley"},{"name":"Soledad"},{"name":"South El Monte"},{"name":"South Gate"},{"name":"South Lake Tahoe"},{"name":"South Pasadena"},{"name":"South San Francisco"},{"name":"South San Jose Hills"},{"name":"South Whittier"},{"name":"South Yuba City"},{"name":"Spring Valley"},{"name":"Stanton"},{"name":"Stockton"},{"name":"Suisun"},{"name":"Sun City"},{"name":"Sunnyvale"},{"name":"Temecula"},{"name":"Temple City"},{"name":"Thousand Oaks"},{"name":"Torrance"},{"name":"Tracy"},{"name":"Truckee"},{"name":"Tulare"},{"name":"Turlock"},{"name":"Tustin"},{"name":"North Tustin"},{"name":"Twentynine Palms"},{"name":"Ukiah"},{"name":"Union City"},{"name":"Universal City"},{"name":"Upland"},{"name":"Walnut Park"},{"name":"Watsonville"},{"name":"West Carson"},{"name":"West Covina"},{"name":"West Hollywood"},{"name":"West Puente Valley"},{"name":"West Sacramento"},{"name":"Westminster"},{"name":"Westmont"},{"name":"Whittier"},{"name":"Wildomar"},{"name":"Willowbrook"},{"name":"Windsor"},{"name":"Winter Gardens"},{"name":"Woodland"},{"name":"Woodland Hills"},{"name":"Yorba Linda"},{"name":"Yuba City"},{"name":"Yucaipa"},{"name":"Yucca Valley"},{"name":"Arvada"},{"name":"Aurora"},{"name":"Brighton"},{"name":"Broomfield"},{"name":"Cañon City"},{"name":"Castle Rock"},{"name":"Castlewood"},{"name":"Centennial"},{"name":"Cimarron Hills"},{"name":"Clifton"},{"name":"Colorado Springs"},{"name":"Columbine"},{"name":"Commerce City"},{"name":"Denver"},{"name":"Durango"},{"name":"Englewood"},{"name":"Fountain"},{"name":"Golden"},{"name":"Grand Junction"},{"name":"Highlands Ranch"},{"name":"Ken Caryl"},{"name":"Lafayette"},{"name":"Lakewood"},{"name":"Littleton"},{"name":"Louisville"},{"name":"Montrose"},{"name":"Northglenn"},{"name":"Parker"},{"name":"Pueblo"},{"name":"Pueblo West"},{"name":"Sherrelwood"},{"name":"Southglenn"},{"name":"Thornton"},{"name":"Westminster"},{"name":"Wheat Ridge"},{"name":"Dodge City"},{"name":"Garden City"},{"name":"Liberal"},{"name":"Alamogordo"},{"name":"Albuquerque"},{"name":"Carlsbad"},{"name":"Clovis"},{"name":"Farmington"},{"name":"Gallup"},{"name":"Hobbs"},{"name":"Las Cruces"},{"name":"Rio Rancho"},{"name":"Roswell"},{"name":"Santa Fe"},{"name":"South Valley"},{"name":"Boulder City"},{"name":"Carson City"},{"name":"Enterprise"},{"name":"Fernley"},{"name":"Henderson"},{"name":"Las Vegas"},{"name":"Mesquite"},{"name":"North Las Vegas"},{"name":"Pahrump"},{"name":"Paradise"},{"name":"Reno"},{"name":"Spanish Springs"},{"name":"Sparks"},{"name":"Spring Valley"},{"name":"Sun Valley"},{"name":"Sunrise Manor"},{"name":"Whitney"},{"name":"Winchester"},{"name":"Amarillo"},{"name":"Big Spring"},{"name":"Del Rio"},{"name":"Eagle Pass"},{"name":"El Paso"},{"name":"Hereford"},{"name":"Horizon City"},{"name":"Lubbock"},{"name":"Midland"},{"name":"Odessa"},{"name":"Pampa"},{"name":"Plainview"},{"name":"San Angelo"},{"name":"Socorro"},{"name":"Socorro Mission Number 1 Colonia"},{"name":"West Odessa"},{"name":"Cedar City"},{"name":"Saint George"},{"name":"Washington"},{"name":"Wasco"},{"name":"Anthem"},{"name":"Apache Junction"},{"name":"Avondale"},{"name":"Juneau"},{"name":"Arcata"},{"name":"Bayside"},{"name":"Eureka"},{"name":"McKinleyville"},{"name":"Redding"},{"name":"Susanville"},{"name":"Boulder"},{"name":"Erie"},{"name":"Evans"},{"name":"Fort Collins"},{"name":"Greeley"},{"name":"Longmont"},{"name":"Loveland"},{"name":"Windsor"},{"name":"Boise"},{"name":"Caldwell"},{"name":"Coeur d'Alene"},{"name":"Eagle"},{"name":"Idaho Falls"},{"name":"Kuna"},{"name":"Lewiston"},{"name":"Lewiston Orchards"},{"name":"Meridian"},{"name":"Moscow"},{"name":"Nampa"},{"name":"Pocatello"},{"name":"Post Falls"},{"name":"Rexburg"},{"name":"Twin Falls"},{"name":"Billings"},{"name":"Bozeman"},{"name":"Butte"},{"name":"Great Falls"},{"name":"Helena"},{"name":"Kalispell"},{"name":"Missoula"},{"name":"Bismarck"},{"name":"Dickinson"},{"name":"Mandan"},{"name":"Minot"},{"name":"North Platte"},{"name":"Scottsbluff"},{"name":"Elko"},{"name":"Albany"},{"name":"Aloha"},{"name":"Altamont"},{"name":"Ashland"},{"name":"Beaverton"},{"name":"Bend"},{"name":"Bethany"},{"name":"Canby"},{"name":"Central Point"},{"name":"Coos Bay"},{"name":"Corvallis"},{"name":"Eugene"},{"name":"Forest Grove"},{"name":"Four Corners"},{"name":"Grants Pass"},{"name":"Gresham"},{"name":"Hayesville"},{"name":"Hermiston"},{"name":"Hillsboro"},{"name":"Keizer"},{"name":"Klamath Falls"},{"name":"Lake Oswego"},{"name":"Lebanon"},{"name":"Lents"},{"name":"McMinnville"},{"name":"Medford"},{"name":"Milwaukie"},{"name":"Newberg"},{"name":"Oak Grove"},{"name":"Oregon City"},{"name":"Pendleton"},{"name":"Portland"},{"name":"Redmond"},{"name":"Roseburg"},{"name":"Salem"},{"name":"Sherwood"},{"name":"Springfield"},{"name":"Tigard"},{"name":"Troutdale"},{"name":"Tualatin"},{"name":"West Linn"},{"name":"Wilsonville"},{"name":"Woodburn"},{"name":"Rapid City"},{"name":"Bountiful"},{"name":"Brigham City"},{"name":"Centerville"},{"name":"Clearfield"},{"name":"Clinton"},{"name":"Cottonwood Heights"},{"name":"Draper"},{"name":"Eagle Mountain"},{"name":"East Millcreek"},{"name":"Farmington"},{"name":"Herriman"},{"name":"Highland"},{"name":"Holladay"},{"name":"Kaysville"},{"name":"Kearns"},{"name":"Layton"},{"name":"Lehi"},{"name":"Logan"},{"name":"Magna"},{"name":"Midvale"},{"name":"Millcreek"},{"name":"Murray"},{"name":"North Ogden"},{"name":"North Salt Lake"},{"name":"Ogden"},{"name":"Orem"},{"name":"Payson"},{"name":"Pleasant Grove"},{"name":"Provo"},{"name":"Riverton"},{"name":"Roy"},{"name":"Salt Lake City"},{"name":"Sandy City"},{"name":"Sandy Hills"},{"name":"Saratoga Springs"},{"name":"South Jordan Heights"},{"name":"South Jordan"},{"name":"South Ogden"},{"name":"South Salt Lake"},{"name":"Spanish Fork"},{"name":"Springville"},{"name":"Syracuse"},{"name":"Taylorsville"},{"name":"Tooele"},{"name":"West Jordan"},{"name":"West Valley City"},{"name":"Aberdeen"},{"name":"Anacortes"},{"name":"Arlington"},{"name":"Auburn"},{"name":"Battle Ground"},{"name":"Bellevue"},{"name":"Bellingham"},{"name":"Bonney Lake"},{"name":"Bothell"},{"name":"Bremerton"},{"name":"Burien"},{"name":"Camas"},{"name":"Centralia"},{"name":"Cottage Lake"},{"name":"Covington"},{"name":"Des Moines"},{"name":"Edmonds"},{"name":"Ellensburg"},{"name":"Everett"},{"name":"Fairwood"},{"name":"Federal Way"},{"name":"Five Corners"},{"name":"Frederickson"},{"name":"Graham"},{"name":"Hazel Dell"},{"name":"Issaquah"},{"name":"Kenmore"},{"name":"Kennewick"},{"name":"Kent"},{"name":"Kirkland"},{"name":"Lacey"},{"name":"Lake Stevens"},{"name":"Lakewood"},{"name":"Longview"},{"name":"Lynnwood"},{"name":"Maple Valley"},{"name":"Martha Lake"},{"name":"Marysville"},{"name":"Mercer Island"},{"name":"Mill Creek"},{"name":"Monroe"},{"name":"Moses Lake"},{"name":"Mount Vernon"},{"name":"Mountlake Terrace"},{"name":"Mukilteo"},{"name":"North Creek"},{"name":"Oak Harbor"},{"name":"Olympia"},{"name":"Opportunity"},{"name":"Orchards"},{"name":"Parkland"},{"name":"Pasco"},{"name":"Port Angeles"},{"name":"Pullman"},{"name":"Puyallup"},{"name":"Redmond"},{"name":"Renton"},{"name":"Richland"},{"name":"Salmon Creek"},{"name":"Sammamish"},{"name":"SeaTac"},{"name":"Seattle"},{"name":"Shoreline"},{"name":"Silverdale"},{"name":"South Hill"},{"name":"Spanaway"},{"name":"Spokane"},{"name":"Spokane Valley"},{"name":"Sunnyside"},{"name":"Tacoma"},{"name":"Tukwila"},{"name":"Tumwater"},{"name":"University Place"},{"name":"Vancouver"},{"name":"Walla Walla"},{"name":"Wenatchee"},{"name":"West Lake Sammamish"},{"name":"West Lake Stevens"},{"name":"Bainbridge Island"},{"name":"Yakima"},{"name":"Casper"},{"name":"Cheyenne"},{"name":"Gillette"},{"name":"Laramie"},{"name":"Rock Springs"},{"name":"Sheridan"},{"name":"American Fork"},{"name":"Kahului"},{"name":"Kailua"},{"name":"Kāne‘ohe"},{"name":"Kīhei"},{"name":"Makakilo City"},{"name":"Mililani Town"},{"name":"Pearl City"},{"name":"Wahiawā"},{"name":"Wailuku"},{"name":"Waipahu"},{"name":"‘Ewa Gentry"},{"name":"Hilo"},{"name":"Honolulu"},{"name":"Eagle River"},{"name":"Fairbanks"},{"name":"Anchorage"},{"name":"Badger"},{"name":"Milton"},{"name":"Johns Creek"},{"name":"Cutler Bay"},{"name":"Alafaya"},{"name":"Fort Bragg"},{"name":"City of Milford (balance)"},{"name":"Butte-Silver Bow (Balance)"},{"name":"City of Sammamish"},{"name":"Silver Firs"},{"name":"Vineyard"},{"name":"Wallingford Center"},{"name":"Bel Air North"},{"name":"Bel Air South"},{"name":"Setauket-East Setauket"},{"name":"Tonawanda"},{"name":"Fort Leonard Wood"},{"name":"West Bloomfield Township"},{"name":"East Lake-Orient Park"},{"name":"Four Corners"},{"name":"Greater Northdale"},{"name":"Candler-McAfee"},{"name":"University"},{"name":"Vero Beach South"},{"name":"Kendall West"},{"name":"Palm River-Clair Mel"},{"name":"Arden-Arcade"},{"name":"Bryn Mawr-Skyway"},{"name":"Casa de Oro-Mount Helix"},{"name":"Florence-Graham"},{"name":"Fort Hood"},{"name":"Inglewood-Finn Hill"},{"name":"La Crescenta-Montrose"},{"name":"East Hill-Meridian"},{"name":"Security-Widefield"},{"name":"Union Hill-Novelty Hill"},{"name":"West Whittier-Los Nietos"},{"name":"Summerlin South"},{"name":"Makakilo"},{"name":"Schofield Barracks"},{"name":"San Tan Valley"},{"name":"Enchanted Hills"},{"name":"West Hills"},{"name":"Oak Hill"},{"name":"Bridgewater"},{"name":"Warren Township"},{"name":"Fairfield Heights"},{"name":"Randolph"},{"name":"Hot Springs National Park"},{"name":"Dixiana"},{"name":"Cranberry Township"},{"name":"Silver Lake"},{"name":"Echo Park"},{"name":"Young"},{"name":"Trinidad"},{"name":"Trinidad"},{"name":"Treinta y Tres"},{"name":"Tacuarembó"},{"name":"Santa Lucía"},{"name":"San José de Mayo"},{"name":"San Carlos"},{"name":"Salto"},{"name":"Rocha"},{"name":"Rivera"},{"name":"Progreso"},{"name":"Paysandú"},{"name":"Paso de Carrasco"},{"name":"Pando"},{"name":"Montevideo"},{"name":"Minas"},{"name":"Mercedes"},{"name":"Melo"},{"name":"Maldonado"},{"name":"Las Piedras"},{"name":"La Paz"},{"name":"Fray Bentos"},{"name":"Florida"},{"name":"Durazno"},{"name":"Dolores"},{"name":"Delta del Tigre"},{"name":"Colonia del Sacramento"},{"name":"Carmelo"},{"name":"Canelones"},{"name":"Artigas"},{"name":"Nukus"},{"name":"Khŭjayli"},{"name":"Oltinko’l"},{"name":"Zomin"},{"name":"Urgut"},{"name":"Tirmiz"},{"name":"Sho’rchi"},{"name":"Shahrisabz"},{"name":"Samarqand"},{"name":"Qarshi"},{"name":"Muborak"},{"name":"Kitob"},{"name":"Kattaqo’rg’on"},{"name":"Koson"},{"name":"Karakul’"},{"name":"Kogon"},{"name":"G’uzor"},{"name":"Galaosiyo"},{"name":"Juma"},{"name":"Denov"},{"name":"Chiroqchi"},{"name":"Chelak"},{"name":"Bulung’ur"},{"name":"Bukhara"},{"name":"Beshkent"},{"name":"Boysun"},{"name":"Oqtosh"},{"name":"Zafar"},{"name":"Yaypan"},{"name":"Yangiyŭl"},{"name":"Yangiyer"},{"name":"Yangirabot"},{"name":"Yangiqo‘rg‘on"},{"name":"Yangiobod"},{"name":"Wobkent"},{"name":"Uychi"},{"name":"Urganch"},{"name":"Dashtobod"},{"name":"Uchqŭrghon Shahri"},{"name":"Tŭytepa"},{"name":"Tŭragŭrghon"},{"name":"Toshloq"},{"name":"Tashkent"},{"name":"Toshbuloq"},{"name":"Sirdaryo"},{"name":"Showot"},{"name":"Shofirkon"},{"name":"Salor"},{"name":"Qŭshkŭpir"},{"name":"Qo‘qon"},{"name":"Piskent"},{"name":"Payshanba"},{"name":"Parkent"},{"name":"Pop"},{"name":"Paxtakor"},{"name":"Olmaliq"},{"name":"Ohangaron"},{"name":"Nurota"},{"name":"Novyy Turtkul’"},{"name":"Navoiy"},{"name":"Namangan"},{"name":"Marg‘ilon"},{"name":"Manghit"},{"name":"Asaka"},{"name":"Quvasoy"},{"name":"Qŭrghontepa"},{"name":"Kirguli"},{"name":"Qibray"},{"name":"Khŭjaobod"},{"name":"Khiwa"},{"name":"Haqqulobod"},{"name":"Kosonsoy"},{"name":"Jizzax"},{"name":"Iskandar"},{"name":"Hazorasp"},{"name":"Gurlan"},{"name":"Guliston"},{"name":"Ghijduwon"},{"name":"G‘azalkent"},{"name":"Gagarin"},{"name":"Fergana"},{"name":"Dŭstlik"},{"name":"Chust Shahri"},{"name":"Chirchiq"},{"name":"Chinoz"},{"name":"Chortoq"},{"name":"Bŭka"},{"name":"Beshariq"},{"name":"Beruniy"},{"name":"Bektemir"},{"name":"Bekobod"},{"name":"Angren"},{"name":"Andijon"},{"name":"Oltiariq"},{"name":"Quva"},{"name":"Navoiy"},{"name":"Vatican City"},{"name":"Kingstown"},{"name":"Kingstown Park"},{"name":"La Asunción"},{"name":"Anaco"},{"name":"Alto Barinas"},{"name":"Zaraza"},{"name":"Yaritagua"},{"name":"Villa de Cura"},{"name":"Villa Bruzual"},{"name":"Valle de La Pascua"},{"name":"Valera"},{"name":"Valencia"},{"name":"Upata"},{"name":"Turmero"},{"name":"Tucupita"},{"name":"Trujillo"},{"name":"Tinaquillo"},{"name":"Táriba"},{"name":"Santa Teresa"},{"name":"Santa Rita"},{"name":"Santa Elena de Uairén"},{"name":"San Mateo"},{"name":"San Juan de los Morros"},{"name":"San Juan de Colón"},{"name":"San José de Guanipa"},{"name":"San Joaquín"},{"name":"San Felipe"},{"name":"San Cristóbal"},{"name":"San Carlos del Zulia"},{"name":"San Carlos"},{"name":"San Antonio del Táchira"},{"name":"San Antonio de Los Altos"},{"name":"Rubio"},{"name":"La Villa del Rosario"},{"name":"Quíbor"},{"name":"Punto Fijo"},{"name":"Punta Cardón"},{"name":"Puerto La Cruz"},{"name":"Puerto Cabello"},{"name":"Puerto Ayacucho"},{"name":"Porlamar"},{"name":"Petare"},{"name":"Palo Negro"},{"name":"Ocumare del Tuy"},{"name":"Nirgua"},{"name":"Mucumpiz"},{"name":"Morón"},{"name":"Mérida"},{"name":"Mariara"},{"name":"Maracay"},{"name":"Maracaibo"},{"name":"Maiquetía"},{"name":"Machiques"},{"name":"Los Teques"},{"name":"Los Rastrojos"},{"name":"Los Dos Caminos"},{"name":"La Victoria"},{"name":"Las Tejerías"},{"name":"Lagunillas"},{"name":"La Guaira"},{"name":"Juan Griego"},{"name":"Güiria"},{"name":"Güigüe"},{"name":"Guatire"},{"name":"Guarenas"},{"name":"Guanare"},{"name":"Guacara"},{"name":"El Vigía"},{"name":"El Tocuyo"},{"name":"El Tigre"},{"name":"El Limón"},{"name":"El Hatillo"},{"name":"Ejido"},{"name":"Cumaná"},{"name":"Cúa"},{"name":"Coro"},{"name":"Ciudad Guayana"},{"name":"Ciudad Bolívar"},{"name":"Chivacoa"},{"name":"Charallave"},{"name":"Chacao"},{"name":"Tacarigua"},{"name":"Caucagüito"},{"name":"Catia La Mar"},{"name":"Carúpano"},{"name":"Carrizal"},{"name":"Carora"},{"name":"Caracas"},{"name":"Caraballeda"},{"name":"Cantaura"},{"name":"Calabozo"},{"name":"Cagua"},{"name":"Cabimas"},{"name":"Baruta"},{"name":"Barquisimeto"},{"name":"Barinitas"},{"name":"Barinas"},{"name":"Barcelona"},{"name":"Araure"},{"name":"Altagracia de Orituco"},{"name":"Acarigua"},{"name":"Maturín"},{"name":"La Fría"},{"name":"El Cafetal"},{"name":"Caucaguita"},{"name":"La Dolorita"},{"name":"Guasdualito"},{"name":"San Fernando de Apure"},{"name":"Road Town"},{"name":"Tortola"},{"name":"Charlotte Amalie"},{"name":"Saint Croix"},{"name":"Yên Vinh"},{"name":"Yên Bái"},{"name":"Vũng Tàu"},{"name":"Vị Thanh"},{"name":"Vĩnh Yên"},{"name":"Vĩnh Long"},{"name":"Vinh"},{"name":"Việt Trì"},{"name":"Thành Phố Uông Bí"},{"name":"Tuy Hòa"},{"name":"Thành Phố Tuyên Quang"},{"name":"Trà Vinh"},{"name":"Thủ Dầu Một"},{"name":"Ho Chi Minh City"},{"name":"Thanh Hóa"},{"name":"Thành Phố Thái Nguyên"},{"name":"Thành Phố Thái Bình"},{"name":"Tây Ninh"},{"name":"Tân An"},{"name":"Tam Kỳ"},{"name":"Sơn Tây"},{"name":"Sơn La"},{"name":"Sông Cầu"},{"name":"Sóc Trăng"},{"name":"Sa Pá"},{"name":"Sadek"},{"name":"Rạch Giá"},{"name":"Qui Nhon"},{"name":"Quảng Ngãi"},{"name":"Pleiku"},{"name":"Thành Phố Phủ Lý"},{"name":"Phú Khương"},{"name":"Phan Thiết"},{"name":"Phan Rang-Tháp Chàm"},{"name":"Thành Phố Ninh Bình"},{"name":"Nha Trang"},{"name":"Thành Phố Nam Định"},{"name":"Mỹ Tho"},{"name":"Móng Cái"},{"name":"Long Xuyên"},{"name":"Lào Cai"},{"name":"Thành Phố Lạng Sơn"},{"name":"La Gi"},{"name":"Kon Tum"},{"name":"Hưng Yên"},{"name":"Huế"},{"name":"Thành Phố Hạ Long"},{"name":"Hội An"},{"name":"Thành Phố Hòa Bình"},{"name":"Hà Tĩnh"},{"name":"Hà Tiên"},{"name":"Hanoi"},{"name":"Haiphong"},{"name":"Thành Phố Hải Dương"},{"name":"Thành Phố Hà Giang"},{"name":"Hà Đông"},{"name":"Don Luan"},{"name":"Kwang Binh"},{"name":"Ðông Hà"},{"name":"Dien Bien Phu"},{"name":"Da Nang"},{"name":"Ðà Lạt"},{"name":"Củ Chi"},{"name":"Cho Dok"},{"name":"Cát Bà"},{"name":"Cao Lãnh"},{"name":"Thành Phố Cao Bằng"},{"name":"Cần Thơ"},{"name":"Cần Giờ"},{"name":"Cần Giuộc"},{"name":"Cam Ranh"},{"name":"Cẩm Phả Mines"},{"name":"Cà Mau"},{"name":"Buôn Ma Thuột"},{"name":"Bỉm Sơn"},{"name":"Biên Hòa"},{"name":"Bến Tre"},{"name":"Bảo Lộc"},{"name":"Bắc Ninh"},{"name":"Thành phố Bạc Liêu"},{"name":"Bắc Giang"},{"name":"Bắc Kạn"},{"name":"Đinh Văn"},{"name":"Port-Vila"},{"name":"Mata-Utu"},{"name":"Apia"},{"name":"Zvečan"},{"name":"Vushtrri"},{"name":"Vitina"},{"name":"Ferizaj"},{"name":"Suva Reka"},{"name":"Shtime"},{"name":"Prizren"},{"name":"Pristina"},{"name":"Podujeva"},{"name":"Pejë"},{"name":"Orahovac"},{"name":"Llazicë"},{"name":"Leposaviq"},{"name":"Mitrovicë"},{"name":"Kosovo Polje"},{"name":"Istok"},{"name":"Gjilan"},{"name":"Glogovac"},{"name":"Dragash"},{"name":"Deçan"},{"name":"Gjakovë"},{"name":"Zinjibār"},{"name":"Zabīd"},{"name":"Yarīm"},{"name":"Ta‘izz"},{"name":"Sayyān"},{"name":"Sanaa"},{"name":"Saḩar"},{"name":"Sa'dah"},{"name":"Ma'rib"},{"name":"Laḩij"},{"name":"Ibb"},{"name":"Ḩajjah"},{"name":"Dhī as Sufāl"},{"name":"Dhamār"},{"name":"Bayt al Faqīh"},{"name":"Bājil"},{"name":"Ataq"},{"name":"‘Amrān"},{"name":"Al Mukallā"},{"name":"Al Ḩudaydah"},{"name":"Al Ḩazm"},{"name":"Al Bayḑā’"},{"name":"Aden"},{"name":"Mamoudzou"},{"name":"Dzaoudzi"},{"name":"Koungou"},{"name":"Roodepoort"},{"name":"Zeerust"},{"name":"Wolmaransstad"},{"name":"White River"},{"name":"Witbank"},{"name":"Westonaria"},{"name":"Wesselsbron"},{"name":"Welkom"},{"name":"Warrenton"},{"name":"Warmbaths"},{"name":"Vryheid"},{"name":"Vryburg"},{"name":"Volksrust"},{"name":"Virginia"},{"name":"Viljoenskroon"},{"name":"Vereeniging"},{"name":"Vanderbijlpark"},{"name":"Upington"},{"name":"Mthatha"},{"name":"Umkomaas"},{"name":"Ulundi"},{"name":"Uitenhage"},{"name":"Tzaneen"},{"name":"Thohoyandou"},{"name":"Theunissen"},{"name":"Thaba Nchu"},{"name":"Tembisa"},{"name":"Stutterheim"},{"name":"Stilfontein"},{"name":"Stanger"},{"name":"Standerton"},{"name":"Springs"},{"name":"Soweto"},{"name":"Somerset East"},{"name":"Siyabuswa"},{"name":"Senekal"},{"name":"Secunda"},{"name":"Scottburgh"},{"name":"Schweizer-Reneke"},{"name":"Sasolburg"},{"name":"Rustenburg"},{"name":"Richmond"},{"name":"Richards Bay"},{"name":"Reitz"},{"name":"Randfontein"},{"name":"Queenstown"},{"name":"Queensdale"},{"name":"Pretoria"},{"name":"Mokopane"},{"name":"Potchefstroom"},{"name":"Port Shepstone"},{"name":"Port Elizabeth"},{"name":"Port Alfred"},{"name":"Plettenberg Bay"},{"name":"Piet Retief"},{"name":"Polokwane"},{"name":"Pietermaritzburg"},{"name":"Phuthaditjhaba"},{"name":"Phalaborwa"},{"name":"Parys"},{"name":"Pampierstad"},{"name":"Oudtshoorn"},{"name":"Orkney"},{"name":"Modimolle"},{"name":"Nkowakowa"},{"name":"Nigel"},{"name":"Newcastle"},{"name":"Nelspruit"},{"name":"Mpumalanga"},{"name":"Mpophomeni"},{"name":"Mossel Bay"},{"name":"Mondlo"},{"name":"Mmabatho"},{"name":"Middelburg"},{"name":"Middelburg"},{"name":"Messina"},{"name":"Margate"},{"name":"Mabopane"},{"name":"Lydenburg"},{"name":"Louis Trichardt"},{"name":"Lichtenburg"},{"name":"Lebowakgomo"},{"name":"Lady Frere"},{"name":"Ladybrand"},{"name":"Kutloanong"},{"name":"Kruisfontein"},{"name":"Krugersdorp"},{"name":"Kroonstad"},{"name":"Kriel"},{"name":"Komatipoort"},{"name":"Kokstad"},{"name":"Knysna"},{"name":"Klerksdorp"},{"name":"Kimberley"},{"name":"Johannesburg"},{"name":"Howick"},{"name":"Hennenman"},{"name":"Hendrina"},{"name":"Heilbron"},{"name":"Heidelberg"},{"name":"Harrismith"},{"name":"Grahamstown"},{"name":"Graaff-Reinet"},{"name":"Giyani"},{"name":"George"},{"name":"Ga-Rankuwa"},{"name":"Fort Beaufort"},{"name":"Fochville"},{"name":"eSikhawini"},{"name":"Ermelo"},{"name":"Empangeni"},{"name":"eMbalenhle"},{"name":"East London"},{"name":"Durban"},{"name":"Dundee"},{"name":"Duiwelskloof"},{"name":"Driefontein"},{"name":"Delmas"},{"name":"De Aar"},{"name":"Cullinan"},{"name":"Cradock"},{"name":"Christiana"},{"name":"Carletonville"},{"name":"Butterworth"},{"name":"Bronkhorstspruit"},{"name":"Brits"},{"name":"Brakpan"},{"name":"Botshabelo"},{"name":"Bothaville"},{"name":"Boksburg"},{"name":"Bloemhof"},{"name":"Bloemfontein"},{"name":"Bhisho"},{"name":"Bethlehem"},{"name":"Bethal"},{"name":"Benoni"},{"name":"Beaufort West"},{"name":"Barberton"},{"name":"Ballitoville"},{"name":"Balfour"},{"name":"Allanridge"},{"name":"Aliwal North"},{"name":"Ekangala"},{"name":"Midrand"},{"name":"Centurion"},{"name":"Worcester"},{"name":"Stellenbosch"},{"name":"Saldanha"},{"name":"Paarl"},{"name":"Malmesbury"},{"name":"Lansdowne"},{"name":"Kraaifontein"},{"name":"Hermanus"},{"name":"Grabouw"},{"name":"Ceres"},{"name":"Cape Town"},{"name":"Atlantis"},{"name":"Rondebosch"},{"name":"Retreat"},{"name":"Diepsloot"},{"name":"Nchelenge"},{"name":"Mbala"},{"name":"Kawambwa"},{"name":"Siavonga"},{"name":"Sesheke"},{"name":"Samfya"},{"name":"Petauke"},{"name":"Ndola"},{"name":"Mumbwa"},{"name":"Mufulira"},{"name":"Mpika"},{"name":"Monze"},{"name":"Mongu"},{"name":"Mazabuka"},{"name":"Mansa"},{"name":"Lusaka"},{"name":"Luanshya"},{"name":"Livingstone"},{"name":"Kitwe"},{"name":"Kasama"},{"name":"Kapiri Mposhi"},{"name":"Kansanshi"},{"name":"Kalulushi"},{"name":"Kafue"},{"name":"Kabwe"},{"name":"Choma"},{"name":"Chipata"},{"name":"Chingola"},{"name":"Chililabombwe"},{"name":"Zvishavane"},{"name":"Victoria Falls"},{"name":"Shurugwi"},{"name":"Rusape"},{"name":"Redcliff"},{"name":"Norton"},{"name":"Mutare"},{"name":"Masvingo"},{"name":"Marondera"},{"name":"Kwekwe"},{"name":"Karoi"},{"name":"Kariba"},{"name":"Kadoma"},{"name":"Hwange"},{"name":"Harare"},{"name":"Gweru"},{"name":"Gokwe"},{"name":"Chiredzi"},{"name":"Chipinge"},{"name":"Chinhoyi"},{"name":"Chegutu"},{"name":"Bulawayo"},{"name":"Bindura"},{"name":"Beitbridge"},{"name":"Epworth"},{"name":"Chitungwiza"}];/* harmony default export */ __webpack_exports__["default"] = (countryCity);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yuriikalashnikov/Desktop/popular-user-in-github/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "@material-ui/core/TablePagination":
/*!****************************************************!*\
  !*** external "@material-ui/core/TablePagination" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/amber":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/amber" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/amber");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "lodash.map":
/*!*****************************!*\
  !*** external "lodash.map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.map");

/***/ }),

/***/ "lodash.partialright":
/*!**************************************!*\
  !*** external "lodash.partialright" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.partialright");

/***/ }),

/***/ "lodash.pick":
/*!******************************!*\
  !*** external "lodash.pick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.pick");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-autosuggest":
/*!************************************!*\
  !*** external "react-autosuggest" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),

/***/ "react-autosuggest/dist/theme":
/*!***********************************************!*\
  !*** external "react-autosuggest/dist/theme" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest/dist/theme");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map