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
console.log(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["language"]);var Navbar=(_temp=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Navbar,_React$Component);function Navbar(props){var _this;_this=_React$Component.call(this,props)||this;_this.toggleHamburger=function(){// toggle the active boolean in the state
_this.setState({active:!_this.state.active},// after state has been updated,
function(){// set the class in state for the navbar accordingly
_this.state.active?_this.setState({navBarActiveClass:'is-active'}):_this.setState({navBarActiveClass:''});});};_this.toggleLangMenu=function(){// toggle the active boolean in the state
_this.setState({active:!_this.state.active},// after state has been updated,
function(){// set the class in state for the navbar accordingly
_this.state.active?_this.setState({langActiveClass:'is-active'}):_this.setState({langActiveClass:''});});};_this.state={active:false,navBarActiveClass:'',langActiveClass:''};return _this;}var _proto=Navbar.prototype;_proto.render=function render(){var _this2=this;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main-navigation",__source:{fileName:_jsxFileName,lineNumber:60},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container",__source:{fileName:_jsxFileName,lineNumber:65},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-brand",__source:{fileName:_jsxFileName,lineNumber:66},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/",className:"navbar-item",title:"Logo",__source:{fileName:_jsxFileName,lineNumber:67},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:_img_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"logo",__source:{fileName:_jsxFileName,lineNumber:68},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-burger burger "+this.state.langActiveClass,"data-target":"langMenu",onClick:function onClick(){return _this2.toggleLangMenu();},__source:{fileName:_jsxFileName,lineNumber:72},__self:this},"aaa"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function onClick(){return _this2.toggleHamburger();},__source:{fileName:_jsxFileName,lineNumber:81},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:86},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:87},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:88},__self:this}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass,__source:{fileName:_jsxFileName,lineNumber:91},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-start has-text-centered",__source:{fileName:_jsxFileName,lineNumber:95},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/rooms",__source:{fileName:_jsxFileName,lineNumber:96},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"],{id:"nav01",__source:{fileName:_jsxFileName,lineNumber:97},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/blog",__source:{fileName:_jsxFileName,lineNumber:99},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"],{id:"nav02",__source:{fileName:_jsxFileName,lineNumber:100},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/calender",__source:{fileName:_jsxFileName,lineNumber:102},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"],{id:"nav03",__source:{fileName:_jsxFileName,lineNumber:103},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/contact",__source:{fileName:_jsxFileName,lineNumber:105},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"],{id:"book",__source:{fileName:_jsxFileName,lineNumber:106},__self:this})))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.langActiveClass,__source:{fileName:_jsxFileName,lineNumber:111},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-start has-text-centered",__source:{fileName:_jsxFileName,lineNumber:115},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:"navbar-item",onClick:function onClick(){return Object(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["changeLocale"])(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["language"]);},__source:{fileName:_jsxFileName,lineNumber:116},__self:this},"\u65E5\u672C\u8A9E"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/en",__source:{fileName:_jsxFileName,lineNumber:119},__self:this},"English")))));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Navbar;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component),_temp);var _default=Navbar;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default:undefined;if(!reactHotLoader){return;}reactHotLoader.register(Navbar,"Navbar","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/components/Navbar.js");reactHotLoader.register(_default,"default","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/components/Navbar.js");})();;(function(){var leaveModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.leaveModule:undefined;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.7b5516958d6afb503d6a.hot-update.js.map