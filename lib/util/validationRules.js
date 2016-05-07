'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isExisty = function _isExisty(value) {
  return value !== null && value !== undefined;
};

var isEmpty = function isEmpty(value) {
  return value === '';
};

var validations = exports.validations = {
  isDefaultRequiredValue: function isDefaultRequiredValue(value) {
    return value === undefined || value === '';
  },
  isExisty: function isExisty(value) {
    return _isExisty(value);
  },
  matchRegexp: function matchRegexp(value, regexp) {
    return _isExisty(value) && !isEmpty(value) && regexp.test(value);
  },
  isUndefined: function isUndefined(value) {
    return value === undefined;
  },
  isEmptyString: function isEmptyString(value) {
    return isEmpty(value);
  },
  isEmail: function isEmail(value) {
    return validations.matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
  },
  isUrl: function isUrl(value) {
    return validations.matchRegexp(value, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
  },
  isTrue: function isTrue(value) {
    return value === true;
  },
  isFalse: function isFalse(value) {
    return value === false;
  },
  isNumeric: function isNumeric(value) {
    if (typeof value === 'number') {
      return true;
    }
    return validations.matchRegexp(value, /^[-+]?(?:\d*[.])?\d+$/);
  },
  isAlpha: function isAlpha(value) {
    return validations.matchRegexp(value, /^[A-Z]+$/i);
  },
  isAlphanumeric: function isAlphanumeric(value) {
    return validations.matchRegexp(value, /^[0-9A-Z]+$/i);
  },
  isInt: function isInt(value) {
    return validations.matchRegexp(value, /^(?:[-+]?(?:0|[1-9]\d*))$/);
  },
  isFloat: function isFloat(value) {
    return validations.matchRegexp(value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/);
  },
  isWords: function isWords(value) {
    return validations.matchRegexp(value, /^[A-Z\s]+$/i);
  },
  isSpecialWords: function isSpecialWords(value) {
    return validations.matchRegexp(value, /^[A-Z\s\u00C0-\u017F]+$/i);
  },
  isLength: function isLength(value, length) {
    return !_isExisty(value) || isEmpty(value) || value.length === length;
  },
  equals: function equals(value, eql) {
    return !_isExisty(value) || isEmpty(value) || value == eql;
  },
  maxLength: function maxLength(value, length) {
    return !_isExisty(value) || value.length <= length;
  },
  minLength: function minLength(value, length) {
    return !_isExisty(value) || isEmpty(value) || value.length >= length;
  }
};
//# sourceMappingURL=validationRules.js.map