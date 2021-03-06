webpackHotUpdate(0,{

/***/ 165:
/*!**************************************!*\
  !*** ./src/actions/ServerActions.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! ../AppDispatcher */ 167);
	
	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);
	
	var _Constants = __webpack_require__(/*! ../Constants */ 166);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ServerActions = {
	  receiveLinks: function receiveLinks(links) {
	    _AppDispatcher2.default.dispatch({
	      actionType: _Constants.ActionTypes.RECEIVE_LINKS,
	      links: links
	    });
	  }
	};
	
	exports.default = ServerActions;

/***/ }

})
//# sourceMappingURL=0.f3558fad0cbda7024aa8.hot-update.js.map