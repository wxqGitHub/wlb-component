'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./css/_input.sass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

        _this.state = {
            _value: _this.props.value || '',
            _type: _this.props.type || 'text',
            _required: _this.props.required || false,
            _active: false
        };
        return _this;
    }

    _createClass(Input, [{
        key: 'componentWillMount',
        // What about required?
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
            this.setState({ _value: value }, function () {
                this.isActive();
            });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state._value;
        }
    }, {
        key: 'clearValue',
        value: function clearValue() {
            this.setValue('');
        }
    }, {
        key: 'isActive',
        value: function isActive() {
            !!this.getValue() ? this.setState({ _active: true }) : this.setState({ _active: false });
        }
    }, {
        key: 'changeValue',
        value: function changeValue(e) {
            this.setValue(e.target.value);
        }
    }, {
        key: 'iconType',
        value: function iconType(type) {
            var iconList = ['phone', 'code', 'token', 'lock'];
            var concatName = (0, _classnames2.default)('general-icon', _defineProperty({}, 'icon-' + type + '-active', this.state.active), _defineProperty({}, 'icon-' + type, !this.state.active));
            return iconList.indexOf(type) === -1 ? _react2.default.createElement(
                'div',
                { className: 'icon-none' },
                type
            ) : _react2.default.createElement('div', { className: concatName });
        }
    }, {
        key: 'switchInputType',
        value: function switchInputType() {
            var type = this.state._type;
            type = type == 'password' ? 'text' : 'password';
            this.setState({ _type: type });
        }
    }, {
        key: 'operationType',
        value: function operationType(type) {
            var _this2 = this;

            switch (type) {
                case 'close':
                    if (!!this.getValue()) {
                        return _react2.default.createElement('div', { className: 'operation-clear general-operation', onClick: function onClick() {
                                return _this2.clearValue();
                            } });
                    }
                    break;
                case 'eye':
                    var concatName = (0, _classnames2.default)('general-operation', { 'operation-hide': this.state._type == 'password' }, { 'operation-show': this.state._type == 'text' });
                    return _react2.default.createElement('div', { className: concatName, onClick: function onClick() {
                            return _this2.switchInputType();
                        } });
                default:
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props;
            var placeholder = _props.placeholder;
            var type = _props.type;
            var name = _props.name;
            var icon = _props.icon;
            var operation = _props.operation;
            var className = _props.className;


            var concatName = (0, _classnames2.default)('general-input', { 'actives': this.state.active }, _defineProperty({}, className, !!className));

            return _react2.default.createElement(
                'div',
                { className: concatName },
                this.iconType(icon),
                _react2.default.createElement('input', {
                    type: this.state._type,
                    name: name,
                    value: this.getValue(),
                    onChange: function onChange(e) {
                        return _this3.changeValue(e);
                    },
                    placeholder: placeholder
                }),
                this.operationType(operation)
            );
        }
    }]);

    return Input;
}(_react2.default.Component);

Input.contextTypes = {
    formsy: _react2.default.PropTypes.object };
exports.default = Input;
;
//# sourceMappingURL=Input.js.map