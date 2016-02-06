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
	    _superagent2.default.post('/graphql').send({
	      query: '{\n          links {\n            _id,\n            title,\n            url\n          }\n        }'
	    }).end(function (err, resp) {
	      console.log(resp);
	      _ServerActions2.default.receiveLinks(resp.body.data.links);
	    });
	  }
	};
	
	exports.default = API;

/***/ }

})
//# sourceMappingURL=0.f6fe289ec725d8047362.hot-update.js.map