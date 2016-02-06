webpackHotUpdate(0,{

/***/ 160:
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _API = __webpack_require__(/*! ../API */ 161);
	
	var _API2 = _interopRequireDefault(_API);
	
	var _LinkStore = __webpack_require__(/*! ../stores/LinkStore */ 171);
	
	var _LinkStore2 = _interopRequireDefault(_LinkStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _getAppState = function _getAppState() {
	  return { links: linkStore.getAll() };
	};
	
	var Main = function (_Component) {
	  _inherits(Main, _Component);
	
	  function Main(props) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));
	
	    _this.state = _getAppState();
	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _API2.default.fetchLinks();
	      _LinkStore2.default.on('change', this.onChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _LinkStore2.default.removeListener('change', this.onChange);
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      this.setState(_getAppState());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Links'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          _react2.default.createElement(
	            'li',
	            null,
	            'Link ...'
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            'Link ...'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react.Component);

	exports.default = Main;

/***/ }

})
//# sourceMappingURL=0.e1f7a4bd786cd24f3000.hot-update.js.map