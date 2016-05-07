'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./css/_button.sass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'onclick',
        value: function onclick() {
            if (this.props.onClick) this.props.onClick();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var className = _props.className;
            var type = _props.type;
            var disabled = _props.disabled;


            var concatClassName = (0, _classnames2.default)('general-button', _defineProperty({}, className, !!className));
            return _react2.default.createElement(
                'div',
                { className: concatClassName },
                _react2.default.createElement(
                    'button',
                    {
                        type: type,
                        onClick: function onClick() {
                            return _this2.onclick();
                        },
                        disabled: disabled },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.props.children
                    ),
                    disabled ? _react2.default.createElement(LoadingIndicator, null) : null
                )
            );
        }
    }]);

    return Button;
}(_react.Component);

Button.defaultProps = {
    children: 'default',
    disabled: false,
    type: 'submit'
};
Button.contextTypes = {
    children: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    type: _react.PropTypes.string
};
exports.default = Button;


function LoadingIndicator() {
    return _react2.default.createElement(
        'div',
        { className: 'sk-fading-circle' },
        _react2.default.createElement('div', { className: 'sk-circle1 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle2 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle3 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle4 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle5 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle6 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle7 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle8 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle9 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle10 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle11 sk-circle' }),
        _react2.default.createElement('div', { className: 'sk-circle12 sk-circle' })
    );
}
//# sourceMappingURL=Button.js.map