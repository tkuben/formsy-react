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

var validations = {
  isDefaultRequiredValue: function isDefaultRequiredValue(values, value) {
    return value === undefined || value === null || value === '';
  },
  isExisty: function isExisty(values, value) {
    return _isExisty(value);
  },
  matchRegexp: function matchRegexp(values, value, regexp) {
    return !_isExisty(value) || isEmpty(value) || regexp.test(value);
  },
  isUndefined: function isUndefined(values, value) {
    return value === undefined;
  },
  isEmptyString: function isEmptyString(values, value) {
    return isEmpty(value);
  },
  isEmail: function isEmail(values, value) {
    // Regex from http://emailregex.com/
    return validations.matchRegexp(values, value, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
  },
  isUrl: function isUrl(values, value) {
    return validations.matchRegexp(values, value, /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/i);
  },
  isTrue: function isTrue(values, value) {
    return value === true;
  },
  isFalse: function isFalse(values, value) {
    return value === false;
  },
  isNumeric: function isNumeric(values, value) {
    if (typeof value === 'number') {
      return true;
    }
    return validations.matchRegexp(values, value, /^[-+]?(?:\d*[.])?\d+$/);
  },
  isAlpha: function isAlpha(values, value) {
    return validations.matchRegexp(values, value, /^[A-Z]+$/i);
  },
  isAlphanumeric: function isAlphanumeric(values, value) {
    return validations.matchRegexp(values, value, /^[0-9A-Z]+$/i);
  },
  isInt: function isInt(values, value) {
    return validations.matchRegexp(values, value, /^(?:[-+]?(?:0|[1-9]\d*))$/);
  },
  isFloat: function isFloat(values, value) {
    return validations.matchRegexp(values, value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][+-]?(?:\d+))?$/);
  },
  isWords: function isWords(values, value) {
    return validations.matchRegexp(values, value, /^[A-Z\s]+$/i);
  },
  isSpecialWords: function isSpecialWords(values, value) {
    return validations.matchRegexp(values, value, /^[A-Z\s\u00C0-\u017F]+$/i);
  },
  isLength: function isLength(values, value, length) {
    return !_isExisty(value) || isEmpty(value) || value.length === length;
  },
  isGreaterThan: function isGreaterThan(values, value, greaterAmount) {
    return !_isExisty(value) || isEmpty(value) || value > greaterAmount;
  },
  isLessThan: function isLessThan(values, value, lesserAmount) {
    return !_isExisty(value) || isEmpty(value) || value < lesserAmount;
  },
  equals: function equals(values, value, eql) {
    return !_isExisty(value) || isEmpty(value) || value === eql;
  },
  equalsField: function equalsField(values, value, field) {
    return value === values[field];
  },
  maxLength: function maxLength(values, value, length) {
    return !_isExisty(value) || value.length <= length;
  },
  minLength: function minLength(values, value, length) {
    return !_isExisty(value) || isEmpty(value) || value.length >= length;
  },

  isValidPostalCode: function isValidPostalCode(values, value) {
    return validations.matchRegexp(values, value, /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/i);
  },
  isValidPhoneNumber: function isValidPhoneNumber(values, value) {
    return validations.matchRegexp(values, value, /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i);
  },
  isValidDate: function isValidDate(values, value) {
    return validations.matchRegexp(values, value, /^(19|20)\d{2}\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/i);
  },
  isGICReady: function isGICReady(values, value) {
    var tempvalue = value;
    if (tempvalue && tempvalue.length) {
      tempvalue = tempvalue.replace(/\$/g, '');
      tempvalue = tempvalue.replace(/ /g, '');
      tempvalue = tempvalue.replace(/,/g, '');
    } else {
      tempvalue = 0;
    }
    return parseFloat(tempvalue) && parseFloat(tempvalue) > 999.99;
  }
};

exports.default = validations;