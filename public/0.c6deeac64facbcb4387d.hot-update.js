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
/***/ function(module, exports) {

	"use strict";

/***/ }

})
//# sourceMappingURL=0.c6deeac64facbcb4387d.hot-update.js.map