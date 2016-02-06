webpackHotUpdate(0,{

/***/ 161:
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _superagent = __webpack_require__(/*! superagent */ 162);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _ServerActions = __webpack_require__(/*! ./actions/ServerActions */ 165);
	
	var _ServerActions2 = _interopRequireDefault(_ServerActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API = {
	  fetchLinks: function fetchLinks() {
	    _superagent2.default.get('http://localhost:3000/data/links').end(function (err, resp) {
	      _ServerActions2.default.receiveLinks(resp);
	    });
	  }
	};
	
	exports.default = API;

/***/ },

/***/ 165:
/*!**************************************!*\
  !*** ./src/actions/ServerActions.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _AppDispatcher = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../AppDispatcher\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ },

/***/ 166:
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ActionTypes = exports.ActionTypes = {
	  RECEIVE_LINKS: 'RECEIVE_LINKS'
	};

/***/ }

})
//# sourceMappingURL=0.8790c66ad94d4a5101c2.hot-update.js.map