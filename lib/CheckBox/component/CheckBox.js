'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_Component) {
    _inherits(CheckBox, _Component);

    function CheckBox(props) {
        _classCallCheck(this, CheckBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckBox).call(this, props));

        _this.state = {
            _checked: _this.props.checked || false,
            _value: _this.props.checked || false,
            _required: _this.props.required || false
        };
        return _this;
    } // What about required?


    _createClass(CheckBox, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.context.formsy.attachToForm(this);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.context.formsy.detachFromForm(this);
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.setState({ _value: value, __required: value });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state._value;
        }
    }, {
        key: 'changeValue',
        value: function changeValue(e) {
            this.setValue(e.target.checked);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var name = _props.name;
            var className = _props.className;

            var concatName = (0, _classnames2.default)('general-checkbox', { 'actives': this.state.active }, _defineProperty({}, className, !!className));

            return _react2.default.createElement(
                'label',
                { className: concatName },
                _react2.default.createElement('input', {
                    type: 'checkbox',
                    name: name,
                    onChange: function onChange(e) {
                        return _this2.changeValue(e);
                    },
                    defaultChecked: this.state._checked
                }),
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return CheckBox;
}(_react.Component);

CheckBox.contextTypes = {
    formsy: _react2.default.PropTypes.object };
CheckBox.defaultProps = {
    validations: 'isTrue'
};
exports.default = CheckBox;
;
//# sourceMappingURL=CheckBox.js.map