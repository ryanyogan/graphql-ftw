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
	  return { links: _LinkStore2.default.getAll() };
	};
	
	var Main = function (_Component) {
	  _inherits(Main, _Component);
	
	  function Main() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Main);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Main)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = _getAppState(), _this.onChange = function () {
	      _this.setState(_getAppState());
	    }, _temp), _possibleConstructorReturn(_this, _ret);
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
	    key: 'render',
	    value: function render() {
	      var offset = this.props.limit;
	      var content = this.state.links.slice(0, offset).map(function (link) {
	        return _react2.default.createElement(
	          'li',
	          { key: link._id },
	          _react2.default.createElement(
	            'a',
	            { href: link.url },
	            link.title
	          )
	        );
	      });
	
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
	          content
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react.Component);
	
	Main.propTypes = {
	  limit: _react2.default.PropTypes.number
	};
	Main.defaultProps = {
	  limit: 4
	};
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=0.be8a2c7166668dbf7ce8.hot-update.js.map