var isExisty = function (value) {
  return value !== null && value !== undefined;
};

var isEmpty = function (value) {
  return value === '';
};

export let validations = {
  isDefaultRequiredValue: function (value) {
    return value === undefined || value === '';
  },
  isExisty: function (value) {
    return isExisty(value);
  },
  matchRegexp: function (value, regexp) {
    return isExisty(value) && !isEmpty(value) && regexp.test(value);
  },
  isUndefined: function (value) {
    return value === undefined;
  },
  isEmptyString: function (value) {
    return isEmpty(value);
  },
  isEmail: function (value) {
    return validations.matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
  },
  isUrl: function (value) {
    return validations.matchRegexp(value, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
  },
  isTrue: function (value) {
    return value === true;
  },
  isFalse: function (value) {
    return value === false;
  },
  isNumeric: function (value) {
    if (typeof value === 'number') {
      return true;
    }
    return validations.matchRegexp(value, /^[-+]?(?:\d*[.])?\d+$/);
  },
  isAlpha: function (value) {
    return validations.matchRegexp(value, /^[A-Z]+$/i);
  },
  isAlphanumeric: function (value) {
    return validations.matchRegexp(value, /^[0-9A-Z]+$/i);
  },
  isInt: function (value) {
    return validations.matchRegexp(value, /^(?:[-+]?(?:0|[1-9]\d*))$/);
  },
  isFloat: function (value) {
    return validations.matchRegexp(value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/);
  },
  isWords: function (value) {
    return validations.matchRegexp(value, /^[A-Z\s]+$/i);
  },
  isSpecialWords: function ( value) {
    return validations.matchRegexp(value, /^[A-Z\s\u00C0-\u017F]+$/i);
  },
  isLength: function (value, length) {
    return !isExisty(value) || isEmpty(value) || value.length === length;
  },
  equals: function (value, eql) {
    return !isExisty(value) || isEmpty(value) || value == eql;
  },
  maxLength: function (value, length) {
    return !isExisty(value) || value.length <= length;
  },
  minLength: function (value, length) {
    return !isExisty(value) || isEmpty(value) || value.length >= length;
  }
};
