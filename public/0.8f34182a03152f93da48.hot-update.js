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
	
	var _ServerActions = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./actions/ServerActions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ }

})
//# sourceMappingURL=0.8f34182a03152f93da48.hot-update.js.map