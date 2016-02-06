webpackHotUpdate(0,{

/***/ 171:
/*!*********************************!*\
  !*** ./src/stores/LinkStore.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _AppDispatcher = __webpack_require__(/*! ../AppDispatcher */ 167);
	
	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);
	
	var _Constants = __webpack_require__(/*! ../Constants */ 166);
	
	var _events = __webpack_require__(/*! events */ 172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LinkStore = function (_EventEmitter) {
	  _inherits(LinkStore, _EventEmitter);
	
	  function LinkStore(props) {
	    _classCallCheck(this, LinkStore);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LinkStore).call(this, props));
	
	    _AppDispatcher2.default.register(function (action) {
	      switch (action.actionType) {
	        case _Constants.ActionTypes.RECEIVE_LINKS:
	
	          break;
	        default:
	        // Do Nothing
	      }
	    });
	    return _this;
	  }
	
	  return LinkStore;
	}(_events.EventEmitter);
	
	;
	
	exports.default = new LinkStore(); // Stores are singletons

/***/ }

})
//# sourceMappingURL=0.f9a5c0d0222f0ad8436b.hot-update.js.map