webpackHotUpdate("cms",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-intl */ "./node_modules/gatsby-plugin-intl/index.js");
/* harmony import */ var gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_3__);
var _temp,_jsxFileName="/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/components/Navbar.js";(function(){var enterModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.enterModule:undefined;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};//import { Link } from 'gatsby'
//
var Navbar=(_temp=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Navbar,_React$Component);function Navbar(props){var _this;_this=_React$Component.call(this,props)||this;_this.toggleHamburger=function(){// toggle the active boolean in the state
_this.setState({active:!_this.state.active},// after state has been updated,
function(){// set the class in state for the navbar accordingly
_this.state.active?_this.setState({navBarActiveClass:'is-active'}):_this.setState({navBarActiveClass:''});});};_this.state={active:false,navBarActiveClass:''};return _this;}var _proto=Navbar.prototype;_proto.render=function render(){var _this2=this;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main-navigation",__source:{fileName:_jsxFileName,lineNumber:38},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container",__source:{fileName:_jsxFileName,lineNumber:43},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-brand",__source:{fileName:_jsxFileName,lineNumber:44},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/",className:"navbar-item",title:"Logo",__source:{fileName:_jsxFileName,lineNumber:45},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:_img_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"logo",__source:{fileName:_jsxFileName,lineNumber:46},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-menu",__source:{fileName:_jsxFileName,lineNumber:48},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable",__source:{fileName:_jsxFileName,lineNumber:49},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:"navbar-link",__source:{fileName:_jsxFileName,lineNumber:50},__self:this},"More"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-dropdown",__source:{fileName:_jsxFileName,lineNumber:53},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:"navbar-item",__source:{fileName:_jsxFileName,lineNumber:54},__self:this},"About"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:"navbar-item",__source:{fileName:_jsxFileName,lineNumber:57},__self:this},"Jobs"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:"navbar-item",__source:{fileName:_jsxFileName,lineNumber:60},__self:this},"Contact"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",{className:"navbar-divider",__source:{fileName:_jsxFileName,lineNumber:63},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:"navbar-item",__source:{fileName:_jsxFileName,lineNumber:64},__self:this},"Report an issue")))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function onClick(){return _this2.toggleHamburger();},__source:{fileName:_jsxFileName,lineNumber:74},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:79},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:80},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:81},__self:this}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass,__source:{fileName:_jsxFileName,lineNumber:84},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-start has-text-centered",__source:{fileName:_jsxFileName,lineNumber:88},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/rooms",__source:{fileName:_jsxFileName,lineNumber:89},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"],{id:"nav01",__source:{fileName:_jsxFileName,lineNumber:90},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/blog",__source:{fileName:_jsxFileName,lineNumber:92},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"],{id:"nav02",__source:{fileName:_jsxFileName,lineNumber:93},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/calender",__source:{fileName:_jsxFileName,lineNumber:95},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"],{id:"nav03",__source:{fileName:_jsxFileName,lineNumber:96},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/contact",__source:{fileName:_jsxFileName,lineNumber:98},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"],{id:"book",__source:{fileName:_jsxFileName,lineNumber:99},__self:this}))))));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Navbar;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component),_temp);var _default=Navbar;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default:undefined;if(!reactHotLoader){return;}reactHotLoader.register(Navbar,"Navbar","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/components/Navbar.js");reactHotLoader.register(_default,"default","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/components/Navbar.js");})();;(function(){var leaveModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.leaveModule:undefined;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.8d1135b0670a7fc0dcdb.hot-update.js.map